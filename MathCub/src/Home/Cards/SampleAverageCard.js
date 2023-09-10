import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription"
import CardFormulaImage from "../../common/components/Card/StyledCardContent/StyledCardFormulaImage"
import { sampleAverageFormula } from "../../common/icons"
import StyledCardResult from "../../common/components/Card/StyledCardContent/StyledCardResult"

const SampleAverageCard = () => {
    return (
        <Card title="Выборочная средняя">
            <StyledCardDescription>Формула:</StyledCardDescription>
            <CardFormulaImage src={sampleAverageFormula} />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <StyledCardResult>5.6464</StyledCardResult>
        </Card>
    )
}

export default SampleAverageCard