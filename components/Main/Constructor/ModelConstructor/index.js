import React, { memo, useState } from "react";
import styled from "styled-components";
import { models } from "../../../../constants/config";
import { Button, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { Params, StyledButton, StyledSelect } from "../index";
import { Controller, useForm } from "react-hook-form";
import { SeriesConstructor } from "./SeriesConstructor";

export const ModelConstructor = memo(({ selectedModel }) => {
  const currentModel = models.filter((e) => e.value === selectedModel);
  const { control, handleSubmit } = useForm();
  const [topEquipmentType, setTopEquipmentType] = useState("");
  const [openSerConstruct, setOpenSerConstruct] = useState(false);
  const nextStep = (data) => {

    const currentEq = currentModel[0].topEquipment.filter(
      (e) => e.enName === data.topEquipment
    );
    setTopEquipmentType(currentEq);
    setOpenSerConstruct(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(nextStep)}>
        <FormContainer>
          <FormControl>
            <InputLabel>Выбор типа оборудования </InputLabel>
            <Controller
              variant="outlined"
              name="topEquipment"
              as={StyledSelect}
              control={control}
              defaultValue=""
            >
              {currentModel[0].topEquipment.map((type) => (
                <MenuItem key={type.enName} value={type.enName}>
                  {type.name}
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

      {openSerConstruct && (
        <SeriesConstructor topEquipmentType={topEquipmentType} />
      )}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
