import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormContainer } from "../../index";
import { Button, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { StyledButton, StyledSelect } from "../../../../../Constructor/index";
import { Controller, useForm } from "react-hook-form";

export const OptionsConctructor = ({ equipmentModelName }) => {
  const [openNextStep, setOpenNextStep] = useState(false);
  const { control, register, handleSubmit } = useForm();

  const [openNext, setOpenNext] = useState(false);
  console.log(equipmentModelName.options, 12312312312751286519265192659);
  const nextStep = (data) => {
    console.log(data);
    setTimeout(() => {
      setOpenNext(!openNext);
    }, 100);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpenNextStep(!openNextStep);
    }, 100);
  }, []);
  return (
    <>
      {openNextStep && (
        <>
          <form onSubmit={handleSubmit(nextStep)}>
            <Container>
              {equipmentModelName.options.map((e) => (
                <OptionsContainer>
                  <input
                    type="checkbox"
                    placeholder="qwe"
                    name={e.id}
                    ref={register}
                  />
                  <div> {e.name}</div>
                  <Cost> - {e.cost}₽</Cost>
                </OptionsContainer>
              ))}
            </Container>
            <Button type="submit">Расчет стоимости</Button>
          </form>
          <StyledButton
            onClick={nextStep}
            variant="contained"
            color="primary"
            type="submit"
          >
            Подтвердить
          </StyledButton>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cost = styled.div`
  font-weight: bold;
`;
