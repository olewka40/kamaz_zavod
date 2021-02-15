import React, { useState, memo } from "react";
import styled from "styled-components";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { Models } from "./Model";
import { contructorStages, models } from "../../../constants/config";
import Button from "@material-ui/core/Button";
import { FormContainer, ModelConstructor } from "./ModelConstructor";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import { SeriesConstructor } from "./ModelConstructor/SeriesConstructor";
import { SerialModel } from "./ModelConstructor/SeriesConstructor/SerialModel";
import { OptionsConctructor } from "./ModelConstructor/SeriesConstructor/SerialModel/OptionsConstructor";

export const Constructor = memo(() => {
  const { control, handleSubmit } = useForm();
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [openSelModel, setOpenSelModel] = useState(false);
  const [modelConstructorResult, setModelConstructorResult] = useState("");
  const [
    modelConstructorResultArray,
    setModelConstructorResultArray
  ] = useState("");
  const [seriesConstructorResult, setSeriesConstructorResult] = useState("");
  const [
    seriesConstructorResultArray,
    setSeriesConstructorResultArray
  ] = useState("");
  const [serModConstrRes, setSerModConstrRes] = useState("");
  const [serModConstrResArray, setSerModConstrResArray] = useState("");
  const [optionsArray, setOptionsArray] = useState("");
  const onSubmit = data => {
    const results = models.filter(
      e =>
        e.whileBase === data.whileBase &&
        e.powerFilter === data.powerFilter &&
        data.typeCore === e.typeCore
    );
    setResult(results);
    setStatus(true);
  };
  console.log(modelConstructorResult);
  const continueToConf = () => {
    setOpenSelModel(true);
  };
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  console.log(serModConstrRes, 123123123);
  console.log(serModConstrResArray, 123123123);
  console.log(optionsArray, 136136136136);
  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Выбор основ</StepLabel>
          <StepContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              {contructorStages.map(params => (
                <Params key={params.id}>
                  <FormControl key={params.nameParam}>
                    <StepLabel>{params.nameParam}</StepLabel>
                    <Controller
                      variant="outlined"
                      name={params.enNameParam}
                      as={StyledSelect}
                      control={control}
                      defaultValue=""
                    >
                      {params.variants.map(variant => (
                        <MenuItem key={variant.value} value={variant.value}>
                          {variant.label}
                        </MenuItem>
                      ))}
                    </Controller>
                  </FormControl>
                </Params>
              ))}
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
            </form>
          </StepContent>
        </Step>

        <Step>
          <StepLabel> Выбор модели кузова</StepLabel>

          <StepContent>
            <Models
              result={result}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              openSelModel={openSelModel}
              setOpenSelModel={setOpenSelModel}
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

        <Step>
          <StepLabel> Конструктор Типа оборудования</StepLabel>
          <StepContent>
            <ModelConstructor
              selectedModel={selectedModel}
              setModelConstructorResult={setModelConstructorResult}
              setModelConstructorResultArray={setModelConstructorResultArray}
              modelConstructorResult={modelConstructorResult}
            />
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              onClick={handleNext}
              variant="contained"
              color="primary"
              type="submit"
            >
              Next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel> Конструктор серии </StepLabel>
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
              next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel> Конструктор модели серии </StepLabel>
          <StepContent>
            <SerialModel
              seriesConstructorResult={seriesConstructorResult}
              seriesConstructorResultArray={seriesConstructorResultArray}
              setSerModConstrRes={setSerModConstrRes}
              setSerModConstrResArray={setSerModConstrResArray}
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
              next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel> Конструктор опций </StepLabel>
          <StepContent>
            <OptionsConctructor
              serModConstrRes={serModConstrRes}
              serModConstrResArray={serModConstrResArray}
              setOptionsArray={setOptionsArray}
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
              next
            </Button>
          </StepContent>
        </Step>
        <Step>
          <StepLabel> Финал </StepLabel>
          <StepContent>
            123123123123123123123
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              next
            </Button>
          </StepContent>
        </Step>
      </Stepper>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  background-color: cyan;
`;
export const StyledSelect = styled(Select)`
  width: 200px;
`;
export const StyledButton = styled(Button)`
  margin: 10px !important;
`;

export const Params = styled.div`
  padding: 5px 10px;
`;
