import TableInputForm from "./TableInputForm";
import Card from "../../../common/components/Card";
import StyledCardDescription from "../../../common/components/Card/CardDescription";

const ValueTableCard = () => {
    return (
        <Card title="Случайная величина">
            <StyledCardDescription>Задаем значения случайной величины:</StyledCardDescription>
            <TableInputForm />
        </Card>
    )
}

export default ValueTableCard