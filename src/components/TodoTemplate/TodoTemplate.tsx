import styled from "@emotion/styled";
import { useState } from "react";
import { InputBox } from "../Common/InputBox";
import { TodoHead } from "../TodoHead";
import { TodoList } from "../TodoList";


const TodoTemplate: React.FC = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '운동하기', checked: false},
    {id: 2, text: 'Juno concept 회의', checked: false},
    {id: 3, text: 'Juno bug 수정', checked: true},
  ])
  return (
    <Container>
        <TodoHead />
        <InputBox />    
        <TodoList todos={todos}/>
    </Container>);
};

export default TodoTemplate;

const Container = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: #EEEEEE;
`;