import styled from "@emotion/styled";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiDeleteBin5Fill } from "react-icons/ri";

interface TodoItemProps {
    todo: TodoProps;
    onDelete: (id: number) => void;
}

interface TodoProps {
    id: number;
    text: string;
    checked: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    const {todo, onDelete} = props;
    return(
        <TodoItemContainer>
            <CheckboxIcon>
                {todo.checked? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
            </CheckboxIcon>
            <TextBox>{todo.text}</TextBox>
            <DeleteIcon><RiDeleteBin5Fill onClick={() => {onDelete(todo.id); console.log('delete button', todo.id) }}/></DeleteIcon>
        </TodoItemContainer>
    )
}

export default TodoItem;

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #3A4750;
`

const CheckboxIcon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
        font-size: 1.5rem;
    }
    margin-right: 0.5rem;
`

const DeleteIcon = styled.div`
    float: right;
    cursor: pointer;
    svg {
        font-size: 1.5rem;
        color: #3A4750;
    }
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    margin-right: 0.5rem; 
`

const TextBox = styled.div`
    font-weight: 700;
`