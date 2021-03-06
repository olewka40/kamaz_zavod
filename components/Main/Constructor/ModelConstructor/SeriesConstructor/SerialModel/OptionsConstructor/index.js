import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

export const OptionsConctructor = ({
  serModConstrRes,
  serModConstrResArray,
  setOptionsArray
}) => {
  const onSubmit = values => {
    setOptionsArray(values);

    console.log(values);
    // const key = Object.keys(values);
    // const statusArray = Object.entries(values).filter(e => e[1] === true);
  };
  console.log(
    serModConstrResArray[0].options.map(e => e),
    12312323
  );
  const testRes = () => {
    console.log(`25tgg`);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Container>
              {serModConstrResArray[0].options.map(e => (
                <Options>
                  <label>
                    {e.name} - {e.cost}
                  </label>
                  <Field
                    name={e.name}
                    initialValue={false}
                    component="input"
                    type="checkbox"
                  />
                </Options>
              ))}
            </Container>
            <div className="buttons">
              <button
                onClick={testRes}
                type="submit"
                disabled={submitting || pristine}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cost = styled.div`
  font-weight: bold;
`;
