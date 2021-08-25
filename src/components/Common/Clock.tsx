import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const DateNtime = styled.div`
    color: white;
    text-align: right;
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
