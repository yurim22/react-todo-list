import styled from "@emotion/styled";
import { InputBox } from "../Common/InputBox";
import { TodoHead } from "../TodoHead";

const Container = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: #EEEEEE;
`;

const TodoTemplate: React.FC = () => {
  return (
    <Container>
        <TodoHead />
        <InputBox />    
    </Container>);
};

export default TodoTemplate;
