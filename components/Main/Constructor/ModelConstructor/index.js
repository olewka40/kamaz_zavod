import React from "react";
import styled from "styled-components";
import { models } from "../../../../constants/config";
import { StyledSelect } from "../index";
import { MenuItem } from "@material-ui/core";

export const ModelConstructor = ({
  selectedModel,
  setModelConstructorResultArray,
  setModelConstructorResult
}) => {
  const currentModel = models.filter(e => e.value === selectedModel);
  return (
    <Container>
      <StyledSelect
        variant="outlined"
        onChange={e => {
          setModelConstructorResult(e.target.value);
          setModelConstructorResultArray(currentModel[0].topEquipment);
        }}
      >
        {currentModel[0].topEquipment.map(e => (
          <MenuItem value={e.enName}> {e.name}</MenuItem>
        ))}
      </StyledSelect>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
// const currentEq = currentModel[0].topEquipment.filter(
//     e => e.enName === data.topEquipment
// );
