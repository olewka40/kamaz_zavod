import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormContainer } from "../../index";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { StyledButton, StyledSelect } from "../../../index";
import { Controller, useForm } from "react-hook-form";
import { OptionsConctructor } from "./OptionsConstructor";

export const SerialModel = ({
  seriesConstructorResult,
  seriesConstructorResultArray,
  setSerModConstrRes,
  setSerModConstrResArray
}) => {
  console.log(seriesConstructorResult, seriesConstructorResultArray);
  console.log(seriesConstructorResultArray, 1231231);

  return (
    <Container>
      <StyledSelect
        variant="outlined"
        onChange={n => {
          setSerModConstrRes(n.target.value);
          setSerModConstrResArray(
            seriesConstructorResultArray[0].model.filter(
              e => e.modelName === n.target.value
            )
          );
        }}
      >
        {seriesConstructorResultArray[0].model.map(mod => (
          <MenuItem key={mod.modelName} value={mod.modelName}>
            {mod.modelName}
          </MenuItem>
        ))}
      </StyledSelect>

    </Container>
  );
};

const Container = styled.div``;
// const result = equipmentSeries.model.filter(
// e => e.modelName === data.serialModel
// );
