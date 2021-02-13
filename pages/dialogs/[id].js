import { DialogContainer } from "../../components/CurrentDialog";
import React, { Component } from "react";
import axios from "axios";
import { MessageContext } from "../../context/messages";
import SocketService from "../../services/SocketService";
import { withRouter } from "next/router";
import withContextPage from "../../components/HOC/Page";
import cookies from "next-cookies";
import { apiMessageToMessage } from "../../utils/converter";

@withRouter
class Id extends Component {
  static async getInitialProps(ctx) {
    const { id } = ctx.query;
    const { userId } = cookies(ctx);
    const { data } = await axios.get(`/api/getMessages/${id}`, {
      headers: { userId }
    });

    return {
      data
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      ...props.data,
      messages: props.data.messages.map(apiMessageToMessage)
    };
  }

  // если у нас поменялась комната то обновим список сообщений, и присоединим к новой комнате юзера
  componentDidUpdate(prevProps, nextProps) {
    const props = this.props;
    if (prevProps.data.dialogId !== props.data.dialogId) {
      // обновляем список сообщений
      this.setState({ ...props.data });

      SocketService.emit("leave-the-room", {
        dialogId: prevProps.data.dialogId
      });
      // подключаем юзера к комнате
      SocketService.emit("connect-to", {
        dialogId: this.props.router.query.id
      });
    }
  }

  onMessage = data => {
    const { messages } = this.state;
    const clonedMessage = { ...messages[messages.length - 1] };

    clonedMessage.text = data.message;
    clonedMessage.time = data.time;
    clonedMessage.senderId = data.senderId;

    messages.push(clonedMessage);

    this.setState({ messages: messages.map(apiMessageToMessage) });
  };

  componentDidMount() {
    SocketService.emit("connect-to", {
      dialogId: this.props.router.query.id
    });

    SocketService.on("messageFromOpenChat", this.onMessage);
  }

  componentWillUnmount() {
    SocketService.emit("leave-from", {
      dialogId: this.props.router.query.id
    });
    SocketService.off("messageFromOpenChat", this.onMessage);
  }

  render() {
    const { messages } = this.state;
    return (
      <MessageContext.Provider value={{ messages }}>
        <DialogContainer />
      </MessageContext.Provider>
    );
  }
}
export default withContextPage(Id);
