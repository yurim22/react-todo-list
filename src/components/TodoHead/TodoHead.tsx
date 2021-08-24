import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #393e46;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
`;

const TodoHead: React.FC = () => {
  return <Container>Todo List</Container>;
};

export default TodoHead;
