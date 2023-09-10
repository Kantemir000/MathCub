import styled from "styled-components"

const StyledCardResult = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 0.2rem solid #2a2c3c;
    min-width: 10rem;
    height: 4rem;
    font-size: 1.6rem;
    line-height: 1em;
    font-weight: 400;
    color: rgb(137, 128, 218);
    border-radius: 0.5em;

    &:hover {
        border-color: rgba(169, 160, 255, 0.317);
        transition: all 0.3s;
    }
`

export default StyledCardResult