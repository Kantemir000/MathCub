import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription"
import CardFormulaImage from "../../common/components/Card/StyledCardContent/StyledCardFormulaImage"
import StyledCardResult from "../../common/components/Card/StyledCardResult"
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