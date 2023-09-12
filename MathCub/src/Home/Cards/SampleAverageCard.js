import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription"
import CardFormulaImage from "../../common/components/Card/StyledCardContent/StyledCardFormulaImage"
import { sampleAverageFormula } from "../../common/icons"
import StyledCardResult from "../../common/components/Card/StyledCardContent/StyledCardResult"
import sampleAverage from "../formulas/sampleAverage"
import { useSelector } from "react-redux"

const SampleAverageCard = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice);
    const result = sampleAverage(inputs)

    return (
        <Card title="Выборочная средняя">
            <StyledCardDescription>Формула:</StyledCardDescription>
            <CardFormulaImage src={sampleAverageFormula} />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <StyledCardResult>{result}</StyledCardResult>
        </Card>
    )
}

export default SampleAverageCard