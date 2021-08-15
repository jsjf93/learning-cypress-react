import { useState } from "react";
import styled from "styled-components";
import { CalculatorButton } from "../../atoms/Calculator/Button";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 30px 30px 30px;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export function CalculatorContainer() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState<number>();

  const clearEquation = () => {
    setEquation("");
    setResult(undefined);
  };

  const getResult = () => {
    setResult(eval(equation));
  };

  const append = (value: string) => {
    const lastValue = equation[equation.length - 1];

    if (isNaN(parseInt(value)) && isNaN(parseInt(lastValue))) {
      setEquation(equation.slice(0, equation.length - 1) + value);
    } else {
      setEquation(equation + value);
    }
  };

  return (
    <>
      {equation} {result !== undefined && "="} {result}
      <br />
      <Wrapper>
        <div />
        <div />
        <div />
        <CalculatorButton onClick={() => append("/")}>/</CalculatorButton>
        <CalculatorButton onClick={() => append("7")}>7</CalculatorButton>
        <CalculatorButton onClick={() => append("8")}>8</CalculatorButton>
        <CalculatorButton onClick={() => append("9")}>9</CalculatorButton>
        <CalculatorButton onClick={() => append("*")}>*</CalculatorButton>
        <CalculatorButton onClick={() => append("4")}>4</CalculatorButton>
        <CalculatorButton onClick={() => append("5")}>5</CalculatorButton>
        <CalculatorButton onClick={() => append("6")}>6</CalculatorButton>
        <CalculatorButton onClick={() => append("-")}>-</CalculatorButton>
        <CalculatorButton onClick={() => append("1")}>1</CalculatorButton>
        <CalculatorButton onClick={() => append("2")}>2</CalculatorButton>
        <CalculatorButton onClick={() => append("3")}>3</CalculatorButton>
        <CalculatorButton onClick={() => append("+")}>+</CalculatorButton>
        <CalculatorButton onClick={() => append("0")}>0</CalculatorButton>
        <CalculatorButton onClick={() => append(".")}>.</CalculatorButton>
        <CalculatorButton onClick={clearEquation}>C</CalculatorButton>
        <CalculatorButton onClick={getResult}>=</CalculatorButton>
      </Wrapper>
    </>
  );
}
