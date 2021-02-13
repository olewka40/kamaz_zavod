import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormContainer } from "../../index";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { StyledButton, StyledSelect } from "../../../index";
import { Controller, useForm } from "react-hook-form";
import { OptionsConctructor } from "./OptionsConstructor";

export const SerialModel = ({ equipmentSeries }) => {
  const [openNextStep, setOpenNextStep] = useState(false);
  const [equipmentModelName, setEquipmentModelName] = useState();
  const [openNext, setOpenNext] = useState(false);

  const { control, handleSubmit } = useForm();
  const nextStep = (data) => {
    const result = equipmentSeries.model.filter(
      (e) => e.modelName === data.serialModel
    );
    setEquipmentModelName(result[0]);
    console.log(result[0], 123123);
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
    <Container>
      {openNextStep && (
        <>
          <form onSubmit={handleSubmit(nextStep)}>
            <FormContainer>
              <FormControl>
                <InputLabel>Выбор модели серии оборудования </InputLabel>
                <Controller
                  variant="outlined"
                  name="serialModel"
                  as={StyledSelect}
                  control={control}
                  defaultValue=""
                >
                  {equipmentSeries.model.map((mod) => (
                    <MenuItem key={mod.modelName} value={mod.modelName}>
                      {mod.modelName}
                    </MenuItem>
                  ))}
                </Controller>
              </FormControl>
              <StyledButton
                onClick={nextStep}
                variant="contained"
                color="primary"
                type="submit"
              >
                Подтвердить
              </StyledButton>
            </FormContainer>
          </form>

          {openNext && (
            <OptionsConctructor equipmentModelName={equipmentModelName} />
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div``;
