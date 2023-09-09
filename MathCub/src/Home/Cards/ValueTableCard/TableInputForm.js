import { StyledAddButton, StyledResultButton, StyledRandomForm, StyledRandomNumbers, StyledRandomNumberInput, StyledRandom } from "./TableInputStyles"

const AddButton = () => {
    return (
        <StyledAddButton />
    )
}

const ResultButton = () => {
    return (
        <StyledResultButton onClick={() => console.log("aboba")}>
            Готово
        </StyledResultButton>
    )
}

const TableInputForm = () => {
    return (
        <StyledRandomForm>
            <StyledRandom>
                <StyledRandomNumbers>
                    <StyledRandomNumberInput />
                    <StyledRandomNumberInput />
                    <StyledRandomNumberInput />
                    <StyledRandomNumberInput />
                </StyledRandomNumbers>
                <AddButton />
            </StyledRandom>
            <ResultButton />
        </StyledRandomForm>
    )
}

export default TableInputForm