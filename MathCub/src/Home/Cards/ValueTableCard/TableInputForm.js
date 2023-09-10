import { StyledAddButton, StyledResultButton, StyledRandomForm, StyledRandomNumbers, StyledRandomNumberInput, StyledRandom } from "./TableInputStyles"
import { useSelector, useDispatch } from "react-redux"
import { changeInput, addInput } from "../../../store/slices/randomInputSlice"

const AddButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {    
        dispatch(addInput());
    }

    return (
        <StyledAddButton onClick={handleClick} />
    )
}

const ResultButton = () => {
    return (
        <StyledResultButton onClick={() => console.log("aboba")}>
            Готово
        </StyledResultButton>
    )
}

const NumberInput = ({ id, isLast = false }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value } = e.target
        if (isLast) {
            dispatch(addInput())
        }
        dispatch(changeInput({ id, value }))
    };

    return (
        <StyledRandomNumberInput onChange={handleChange} />
    )
}

const TableInputs = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice);
    console.log(inputs);
    return (
        <>
            {inputs.map((_, index) => {
                return (
                    <NumberInput id={index} key={index} isLast={index === inputs.length - 1}/>
                )
            })}
        </>
    )
}

const TableInputForm = () => {

    return (
        <StyledRandomForm>
            <StyledRandom>
                <StyledRandomNumbers>
                    <TableInputs />
                </StyledRandomNumbers>
                <AddButton />
            </StyledRandom>
            <ResultButton />
        </StyledRandomForm>
    )
}

export default TableInputForm