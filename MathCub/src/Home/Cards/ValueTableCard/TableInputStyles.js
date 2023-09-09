import styled from "styled-components";
import Button from "../../../common/components/Button";
import { plus } from "../../../common/icons";

const StyledRandomForm = styled.form`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    @media (max-width: 576px) {
        flex-wrap: wrap;
    }
`

const StyledRandom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border: .2rem solid #2a2c3c;
    padding: 0.5rem;
    border-radius: 100vmax;
    width: 92.45%;
    @media (max-width: 1200px) {
        width: 90.7%;
    }

    @media (max-width: 992px) {
        width: 87.3%;
    }

    @media (max-width: 768px) {
        width: 82.4%;
    }

    @media (max-width: 576px) {
        max-width: 100%;
        width: 100%;
    }
    
`

const StyledRandomNumbers = styled.div`
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    transition: all 1s;
    max-width: 100%;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`

const StyledRandomNumberInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: rgba(30, 31, 42, 0.4);
    border: .2rem solid #2a2c3c;
    border-radius: 100vmax;
    width: 6rem;
    font-size: 1.6rem;
    line-height: 1em;
    font-weight: 400;
    color: rgb(137, 128, 218);

    &:hover {
        background-color: #2a2c3c;
        transition: all 0.3s;
    }

    &:focus {
        outline: 0;
    }
`
const StyledAddButton = styled(Button)`
    height: 3.2rem;
    min-width: 3.2rem;
    background: url('${plus}') center center/cover no-repeat;
    border: none;
    cursor: pointer;
`

const StyledResultButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.2rem;
    border-radius: 100vmax;
    background-color: #8285a6;
    font-size: 1.6rem;
    line-height: 1em;
    font-weight: 400;
    color: rgb(25, 26, 35);
    border: 0;

    &:hover{
        filter: contrast(2.4);
        transition: all 0.3s;
    }
`

export { StyledAddButton, StyledRandom, StyledRandomForm, StyledRandomNumberInput, StyledRandomNumbers, StyledResultButton }