import React from 'react';
import styled from '@emotion/styled';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
    todos: TodoProps[];
}

interface TodoProps {
    id: number;
    text: string;
    checked: boolean;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos } = props
    console.log(todos)
    return (
        <TodoListContainer>
            {todos.map(todo => 
                <TodoItem todo={todo}></TodoItem>
            )}
        </TodoListContainer>
    )
}

export default TodoList;

const TodoListContainer = styled.div`
    flex: 1;
    padding: 0.5rem;
`