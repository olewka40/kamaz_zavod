import React, { useState, memo } from "react";
import styled from "styled-components";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { Models } from "./Model";
import { contructorStages, models } from "../../../constants/config";
import Button from "@material-ui/core/Button";
import { ModelConstructor } from "./ModelConstructor";

export const Constructor = memo(() => {
  const { control, handleSubmit } = useForm();
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [openSelModel, setOpenSelModel] = useState(false);
  const onSubmit = (data) => {
    const results = models.filter(
      (e) =>
        e.whileBase === data.whileBase &&
        e.powerFilter === data.powerFilter &&
        data.typeCore === e.typeCore
    );
    setResult(results);
    setStatus(true);
  };

  const continueToConf = () => {
    setOpenSelModel(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {contructorStages.map((params) => (
          <Params key={params.id}>
            <FormControl key={params.nameParam}>
              <InputLabel>{params.nameParam}</InputLabel>
              <Controller
                variant="outlined"
                name={params.enNameParam}
                as={StyledSelect}
                control={control}
                defaultValue=""
              >
                {params.variants.map((variant) => (
                  <MenuItem key={variant.value} value={variant.value}>
                    {variant.label}
                  </MenuItem>
                ))}
              </Controller>
            </FormControl>
          </Params>
        ))}
        <StyledButton type="submit" variant="contained" color="primary">
          Сформировать список моделей
        </StyledButton>
      </form>
      {status && (
        <Models
          result={result}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          openSelModel={openSelModel}
          setOpenSelModel={setOpenSelModel}
        />
      )}

      <Button onClick={continueToConf}> Продолжить сборку </Button>
      {openSelModel && <ModelConstructor selectedModel={selectedModel} />}
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
