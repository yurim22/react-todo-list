import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: #EEEEEE;
`;

const DateNtime = styled.div`
    color: white;
`

const Clock: React.FC = () => {
    const [dateState, setDateState] = useState(new Date());
    
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000)
    }, [])
    
    return (
        <DateNtime>{dateState.toLocaleString()}</DateNtime>
    
    );
};

export default Clock;
