import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription"
import CardFormulaImage from "../../common/components/Card/StyledCardContent/StyledCardFormulaImage"
import StyledCardResult from "../../common/components/Card/StyledCardContent/StyledCardResult"
import { useSelector } from "react-redux"
import skewness from "../formulas/skeweness"
import kurtosis from "../formulas/kurtosis"
import styled from "styled-components"
import { skewnessFormula, kurtosisFormula } from "../../common/icons"

const StyledCardResultMargin = styled(StyledCardResult)`
margin-bottom: 2rem;
`

const AssymetryAndExcessCard = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice);
    const skewnessResult = skewness(inputs);
    const kurtosisResult = kurtosis(inputs);

    return (
        <Card title="Коэффицент ассиметрии и эксцесс">
            <StyledCardDescription>Формула коэффицента ассиметрии:</StyledCardDescription>
            <CardFormulaImage src={skewnessFormula} />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <StyledCardResultMargin>{skewnessResult}</StyledCardResultMargin>
            <StyledCardDescription>Формула эксцесса:</StyledCardDescription>
            <CardFormulaImage src={kurtosisFormula} />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <StyledCardResult>{kurtosisResult}</StyledCardResult>
        </Card>
    )
}

export default AssymetryAndExcessCard