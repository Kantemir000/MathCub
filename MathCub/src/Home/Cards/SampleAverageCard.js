import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/CardDescription"
import CardFormulaImage from "../../common/components/Card/CardFormulaImage"
import { sampleAverageFormula } from "../../common/icons"
import StyledCardResult from "../../common/components/Card/CardResult"

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