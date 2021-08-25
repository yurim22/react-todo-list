import React from 'react';
import styled from '@emotion/styled';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
    todos: TodoProps[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

interface TodoProps {
    id: number;
    text: string;
    checked: boolean;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos, onDelete, onToggle } = props;
    localStorage.setItem('todoList', JSON.stringify(todos))
    return (
        <TodoListContainer>
            {todos.map(todo => 
                <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle}></TodoItem>
            )}
        </TodoListContainer>
    )
}

export default TodoList;

const TodoListContainer = styled.div`
    flex: 1;
    padding: 0.5rem;
`