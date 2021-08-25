import styled from "@emotion/styled";
import { useCallback } from "react";
import { useRef, useState } from "react";
import { InputBox } from "../Common/InputBox";
import { TodoHead } from "../TodoHead";
import { TodoList } from "../TodoList";


const TodoTemplate: React.FC = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '운동하기', checked: false},
    {id: 2, text: 'React 공부하기', checked: false},
    {id: 3, text: '3시 치과예약', checked: true},
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  )

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
    }, [todos]
  )

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
    }, [todos]
  )
  return (
    <Container>
        <TodoHead />
        <InputBox onInsert={onInsert}/>    
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </Container>);
};

export default TodoTemplate;

const Container = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: #EEEEEE;
`;