import styled from "styled-components";
import Button from "../../../common/components/Button";
import { plus } from "../../../common/icons";
import StyledScrollbar from "../../../common/components/Card/StyledScrollbar";

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
    width: 100%;
`

const StyledRandomNumbers = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    transition: all 1s;
    max-width: 100%;
    ${StyledScrollbar}
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
    &:invalid{
        transition: all 0.3s;
        border-color: #d1403f;
    }
`
const StyledAddButton = styled(Button)`
    height: 3.2rem;
    min-width: 3.2rem;
    background: url('${plus}') center center/cover no-repeat;
    border: none;
    cursor: pointer;
    &:hover {
        filter: contrast(2.4);
        transition: all 0.3s;
    }
`

export { StyledAddButton, StyledRandom, StyledRandomForm, StyledRandomNumberInput, StyledRandomNumbers }