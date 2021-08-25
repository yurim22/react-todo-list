import React , { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { FcDownLeft } from "react-icons/fc";

interface InputBoxProps {
  onInsert: (text: string) => void;
}

export const InputBox: React.FC<InputBoxProps> = (props) => {
  const {onInsert} = props;

  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    }, [onInsert, value]
  )

  return (
    <FormContainer onSubmit={onSubmit}>
      <StyledInputBox placeholder="할 일을 입력하세요" onChange={onChange} value={value}> 
      </StyledInputBox>
      <button type="submit">
        <FcDownLeft />
      </button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledInputBox = styled.input`
  height: 2rem;
  border: 2px solid;
  margin: 0.5rem;
  width: 80%;
  font-weight: 500;
  border-radius: 5px;
`;