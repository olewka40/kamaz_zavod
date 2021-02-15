import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

export const OptionsConctructor = ({
  serModConstrRes,
  serModConstrResArray,
  setOptionsArray
}) => {
  console.log(serModConstrRes);
  console.log(serModConstrRes);
  console.log(serModConstrResArray);
  console.log(setOptionsArray);
  const onSubmit = values => {
    setOptionsArray(values);
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Container>
              {serModConstrResArray[0].options.map(e => (
                <Options>
                  <label>
                    {e.name} - {e.cost}
                  </label>
                  <Field name={e.name} component="input" type="checkbox" />
                </Options>
              ))}
            </Container>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
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
