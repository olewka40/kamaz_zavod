import React from "react";
import styled from "styled-components";
import { MenuItem } from "@material-ui/core";
import { StyledSelect } from "../index";

export const Models = ({ result, selectedModel, setSelectedModel }) => {
  return (
    <Container>
      <StyledSelect
        variant="outlined"
        value={selectedModel}
        onChange={(e) => {
          setSelectedModel(e.target.value);
        }}
      >
        {result.map((model) => (
          <MenuItem key={model} value={model.value}>
            {model.modelName}
          </MenuItem>
        ))}
      </StyledSelect>
    </Container>
  );
};

const Container = styled.div``;
