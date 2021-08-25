import styled from "@emotion/styled";

const Container = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: #EEEEEE;
`;

const DateNtime = styled.div`
    color: white;
`

const Clock: React.FC = () => {
    const today = new Date()
    console.log(today.toISOString());
    return (
        <DateNtime>{today.toISOString()}</DateNtime>
    
    );
};

export default Clock;
