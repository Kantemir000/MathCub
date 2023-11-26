import { useState } from "react";
import { FormSection, FormSectionLabel, SubmitButton } from "../../../common/components/Form";
import { StyledRandomNumberInput } from "../ValueTableCard/TableInputStyles";
import Table from "../../../common/components/Table";
import { StyledTableLineTitle, StyledAnswerTableCell } from "../../../common/components/Table/StyledTableCells";
import { useSelector } from "react-redux";
import generateSample from "../../formulas/FisherSnedecor/generateSample";
import StyledCardDescription from "../../../common/components/Card/StyledCardContent/StyledCardDescription";
import variance from "../../formulas/variance";
import calculateVarianceRatio from "../../formulas/FisherSnedecor/varianceRatio";
import fisherSnedecorDistribution from "../../formulas/FisherSnedecor/distribution";

const SampleForm = () => {
    const { firstPopulation, secondPopulation } = useSelector((state) => state.generalPopulationsSlice)
    let varianceRatio;
    let sampleTableValue;

    const [samples, setSamples] = useState({
        firstSample: '',
        secondSample: ''
    })

    if (samples.firstSample && samples.secondSample){
        const firstSampleFD = samples.firstSample.length-1;
        const secondSampleFD = samples.secondSample.length-1;
        varianceRatio = calculateVarianceRatio(samples.firstSample, samples.secondSample)
        sampleTableValue = fisherSnedecorDistribution[firstSampleFD][secondSampleFD]
    }
    

    const [formData, setFormData] = useState({
        firstSampleSize: '',
        secondSampleSize: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstSampleSize, secondSampleSize } = formData;
        if (firstSampleSize && secondSampleSize) {
            const firstSample = generateSample(firstPopulation, firstSampleSize)
            const secondSample = generateSample(secondPopulation, secondSampleSize)
            setSamples({ firstSample, secondSample })
        }

    }

    return (
        <>
            <form>
                <FormSection>
                    <FormSectionLabel>Размер первой выборки:</FormSectionLabel>
                    <StyledRandomNumberInput type="number"
                        name={"firstSampleSize"}
                        value={formData.firstSampleSize}
                        onChange={handleChange}
                        inputMode="numeric"
                        pattern="[0-9\.]*">
                    </StyledRandomNumberInput>
                </FormSection>
                <FormSection>
                    <FormSectionLabel>Размер второй выборки:</FormSectionLabel>
                    <StyledRandomNumberInput type="number"
                        name={"secondSampleSize"}
                        value={formData.secondSampleSize}
                        onChange={handleChange}
                        inputMode="numeric"
                        pattern="[0-9\.]*">
                    </StyledRandomNumberInput>
                </FormSection>

                <SubmitButton onClick={handleSubmit}>Сформировать выборки!</SubmitButton>
            </form>
            <SampleTable samples={samples} />

            {samples.firstSample && samples.secondSample ? <StyledCardDescription>Дисперсия первой выборки: {variance(samples.firstSample)}</StyledCardDescription> : null}
            {samples.firstSample && samples.secondSample ? <StyledCardDescription>Дисперсия второй выборки: {variance(samples.secondSample)}</StyledCardDescription> : null}
            {samples.firstSample && samples.secondSample ? <StyledCardDescription>Отношение выборочных дисперсий: {varianceRatio}</StyledCardDescription> : null}
            {samples.firstSample && samples.secondSample ? <StyledCardDescription>Табличное значение для выборок: {sampleTableValue}</StyledCardDescription> : null}
            {samples.firstSample && samples.secondSample && sampleTableValue >= varianceRatio ? <StyledCardDescription>Табличное значение превышает отношение дисперсий, значит гипотеза о равенстве дисперсий подтверждена</StyledCardDescription> : 
            <StyledCardDescription>Табличное значение НЕ превышает отношение дисперсий, а значит гипотеза о равенстве дисперсий НЕ подтверждена</StyledCardDescription>}

        </>
    )
}

const SampleTable = ({ samples }) => {
    const { firstSample, secondSample } = samples
    if (!firstSample || !secondSample) return null
    return (
        <Table>
            <tr>
                <StyledTableLineTitle>Первая выборка</StyledTableLineTitle>
                {firstSample.map((value, index) => (
                    <StyledAnswerTableCell key={index}>{value}</StyledAnswerTableCell>
                ))}
            </tr>
            <tr>
                <StyledTableLineTitle>Вторая выборка</StyledTableLineTitle>
                {secondSample.map((value, index) => (
                    <StyledAnswerTableCell key={index}>{value}</StyledAnswerTableCell>
                ))}
            </tr>
        </Table>
    )
}

export { SampleForm, SampleTable }