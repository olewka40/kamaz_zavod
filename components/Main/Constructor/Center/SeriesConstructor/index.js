import React, { memo, useContext } from "react";
import styled from "styled-components";
import { MenuItem } from "@material-ui/core";
import { StyledSelect } from "../../index";
import { DataContext } from "../../../../../context/DataContext";
export const SeriesConstructor = memo(
  ({
    modelConstructorResult,
    modelConstructorResultArray,
    setSeriesConstructorResult,
    setSeriesConstructorResultArray
  }) => {
    const { setBetweenImage } = useContext(DataContext);

    const modelConstructorResultFiltred = modelConstructorResultArray.filter(
      e => e.enName === modelConstructorResult
    );

    return (
      <Container>
        <StyledSelect
          variant="outlined"
          onChange={n => {
            setSeriesConstructorResult(n.target.value);
            setSeriesConstructorResultArray(
              modelConstructorResultFiltred[0].series.filter(
                e => e.enName === n.target.value
              )
            );
            setBetweenImage(n.target.value);
          }}
        >
          {modelConstructorResultFiltred[0].series.map(ser => (
            <MenuItem key={ser.enName} value={ser.enName}>
              {ser.serName}
            </MenuItem>
          ))}
        </StyledSelect>
      </Container>
    );
  }
);

const Container = styled.div``;
