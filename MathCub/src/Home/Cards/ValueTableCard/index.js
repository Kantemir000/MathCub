import TableInputForm from "./TableInputForm";
import Card from "../../../common/components/Card";
import StyledCardDescription from "../../../common/components/Card/StyledCardContent/StyledCardDescription";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, addInput } from "../../../store/slices/randomInputSlice";

const ValueTableCard = () => {
    const dispatch = useDispatch();

    const { inputs: data } = useSelector((state) => state.randomInputSlice);

    const handleAdd = () => {
        dispatch(addInput());
    }

    const handleChange = (targetValue, id, isLast) => {
        if (isLast) {
            dispatch(addInput())
        }
        dispatch(changeInput({ id, value: targetValue }))
    };

    return (
        <Card title="Случайная величина">
            <StyledCardDescription>Задаем значения случайной величины:</StyledCardDescription>
            <TableInputForm handleAdd={handleAdd} data={data} handleChange={handleChange} />
        </Card>
    )
}

export default ValueTableCard