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
    const { setImage } = useContext(DataContext);
    console.log(
      modelConstructorResult,
      modelConstructorResultArray,
      setSeriesConstructorResult,
      setSeriesConstructorResultArray,
      356183561836518568
    );
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
                e => e.serName === n.target.value
              )
            );
            setImage(n.target.value);
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
