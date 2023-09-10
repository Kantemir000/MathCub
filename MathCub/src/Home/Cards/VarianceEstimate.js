import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription"
import CardFormulaImage from "../../common/components/Card/StyledCardContent/StyledCardFormulaImage"
import StyledCardResult from "../../common/components/Card/StyledCardContent/StyledCardResult"
import { varianceFormula } from "../../common/icons"
import variance from "../formulas/variance"
import { useSelector } from "react-redux"

const VarianceEstimateCard = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice);
    const result = variance(inputs);

    return (
        <Card title="Оценка дисперсии">
            <StyledCardDescription>Формула:</StyledCardDescription>
            <CardFormulaImage src={varianceFormula} />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <StyledCardResult>{result}</StyledCardResult>
        </Card>
    )
}

export default VarianceEstimateCard