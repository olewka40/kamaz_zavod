import React, { useState, memo, useEffect, useContext } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Button } from "@material-ui/core";
import { StyledButton, StyledSelect } from "../../index";
import { Controller, useForm } from "react-hook-form";
import { FormContainer } from "../index";
import { SerialModel } from "./SerialModel";
import { DataContext } from "../../../../../context/DataContext";
export const SeriesConstructor = memo(({ topEquipmentType }) => {
  const { control, handleSubmit } = useForm();
  const [equipmentSeries, setEquipmentSeries] = useState();
  const [openNextStep, setOpenNextStep] = useState(false);
  const [openNext, setOpenNext] = useState(false);
  const { setImage } = useContext(DataContext);
  const nextStep = data => {
    const curSer = topEquipmentType[0].series.filter(
      e => e.serName === data.equipmentSeries
    );
    setEquipmentSeries(curSer[0]);
    setImage(data.equipmentSeries);
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
        <form onSubmit={handleSubmit(nextStep)}>
          <FormContainer>
            <FormControl>
              <InputLabel>Выбор серии оборудования </InputLabel>
              <Controller
                variant="outlined"
                name="equipmentSeries"
                as={StyledSelect}
                control={control}
                defaultValue=""
              >
                {topEquipmentType[0].series.map(ser => (
                  <MenuItem key={ser.enName} value={ser.enName}>
                    {ser.serName}
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
      )}
      {openNext && <SerialModel equipmentSeries={equipmentSeries} />}
    </Container>
  );
});

const Container = styled.div``;
