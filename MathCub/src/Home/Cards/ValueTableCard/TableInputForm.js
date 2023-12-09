import { StyledAddButton, StyledRandomForm, StyledRandomNumbers, StyledRandomNumberInput, StyledRandom } from "./TableInputStyles"

const AddButton = ({ handleAdd }) => {
    return (
        <StyledAddButton onClick={handleAdd} />
    )
}

const NumberInput = ({ id, isLast = false, handleChange }) => {
    return (
        <StyledRandomNumberInput
            onChange={(e) => handleChange(e.target.value, id, isLast)}
            inputMode="numeric"
            pattern="[0-9\.]*"
        />
    )
}

const TableInputs = ({ data, handleChange }) => {
    return (
        <>
            {data.map((_, index) => {
                return (
                    <NumberInput handleChange={handleChange} id={index} key={index} isLast={index === data.length - 1} />
                )
            })}
        </>
    )
}

const TableInputForm = ({ handleAdd, handleChange, data }) => {
    return (
        <StyledRandomForm>
            <StyledRandom>
                <StyledRandomNumbers>
                    <TableInputs data={data} handleChange={handleChange} />
                </StyledRandomNumbers>
                <AddButton handleAdd={handleAdd} />
            </StyledRandom>
        </StyledRandomForm>
    )
}

export default TableInputForm
export { TableInputForm }