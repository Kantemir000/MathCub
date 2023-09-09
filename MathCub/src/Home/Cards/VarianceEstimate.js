import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/CardDescription"
import CardFormulaImage from "../../common/components/Card/CardFormulaImage"
import StyledCardResult from "../../common/components/Card/CardResult"
import { varianceFormula } from "../../common/icons"

const VarianceEstimateCard = () => {
    return (
        <Card title="Оценка дисперсии">
            <StyledCardDescription>Формула:</StyledCardDescription>
            <CardFormulaImage src={varianceFormula} />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <StyledCardResult>5.6464</StyledCardResult>
        </Card>
    )
}

export default VarianceEstimateCard