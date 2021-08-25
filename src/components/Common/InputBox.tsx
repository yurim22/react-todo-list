import React from "react";
import styled from "@emotion/styled";
import { FcDownLeft } from "react-icons/fc";

interface ButtonProps {}

export const InputBox: React.FC<ButtonProps> = (props) => {
  //   const { color, onClick, children, ...restProps } = props;

  return (
    <Container>
      <StyledInputBox placeholder="할 일을 입력하세요">
      </StyledInputBox>
      <FcDownLeft />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledInputBox = styled.input<ButtonProps>`
  height: 2rem;
  border: 2px solid;
  margin: 0.5rem;
  width: 80%;
  font-weight: 500;
`;