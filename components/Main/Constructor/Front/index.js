import React, { useState } from "react";
import styled from "styled-components";
import {
  MenuItem,
  Step,
  StepContent,
  StepLabel,
  Stepper
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { models } from "../../../../constants/config";
import { StyledSelect } from "../index";
import { SeriesConstructor } from "./SeriesConstructor";

export const Front = ({ selectedModel }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [modelConstructorResult, setModelConstructorResult] = useState(0);
  const [
    modelConstructorResultArray,
    setModelConstructorResultArray
  ] = useState(0);
  const [seriesConstructorResult, setSeriesConstructorResult] = useState(0);
  const [
    seriesConstructorResultArray,
    setSeriesConstructorResultArray
  ] = useState(0);

  const currentModel = models.filter(e => e.value === selectedModel);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Выбор серии переднего оборудования</StepLabel>
          <StepContent>
            <StyledSelect
              variant="outlined"
              onChange={e => {
                setModelConstructorResult(e.target.value);
                setModelConstructorResultArray(currentModel[0].frontEquipment);
              }}
            >
              {currentModel[0].frontEquipment.map(e => (
                <MenuItem value={e.enName}> {e.name}</MenuItem>
              ))}
            </StyledSelect>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === [].length - 1 ? "Finish" : "Next"}
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Выбор модель переднего оборудования</StepLabel>
          <StepContent>
            <SeriesConstructor
              modelConstructorResult={modelConstructorResult}
              modelConstructorResultArray={modelConstructorResultArray}
              setSeriesConstructorResult={setSeriesConstructorResult}
              setSeriesConstructorResultArray={setSeriesConstructorResultArray}
            />

            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === [].length - 1 ? "Finish" : "Next"}
            </Button>
          </StepContent>
        </Step>
        <Button onClick={handleReset}>Сбросить конфигурацию</Button>
      </Stepper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
