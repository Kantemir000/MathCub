import Card from "../../../common/components/Card";
import generatePopulation from "../../formulas/FisherSnedecor/generatePopulation";
import Table from "../../../common/components/Table";
import { StyledAnswerTableCell, StyledTableLineTitle } from "../../../common/components/Table/StyledTableCells";
import StyledCardDescription from "../../../common/components/Card/StyledCardContent/StyledCardDescription";
import { useState } from "react";
import { StyledRandomNumberInput } from "../ValueTableCard/TableInputStyles";
import { useDispatch, useSelector } from "react-redux";
import { setFirstPopulation, setSecondPopulation } from "../../../store/slices/generalPopulationSlice";
import { FormSection, FormSectionLabel, SubmitButton } from "../../../common/components/Form";
import { SampleForm } from "./Samples";
import variance from "../../formulas/variance";




const FisherSnedecorCard = () => {
    const populations = useSelector((state) => state.generalPopulationsSlice)
    const { firstPopulation, secondPopulation } = populations


    return (
        <Card title={"Критерий Фишера-Снедекора"}>
            <StyledCardDescription>Чтобы сгенерировать совокупности, введите следующие данные:</StyledCardDescription>
            <GenerateForm />
            {firstPopulation && secondPopulation ? <StyledCardDescription>Генеральные совокупности:</StyledCardDescription> : null}
            <GeneralPopulationTable populations={populations} />
            {firstPopulation && secondPopulation ? <StyledCardDescription>Дисперсия первой генеральной совокупности: {variance(firstPopulation)}</StyledCardDescription> : null}
            {firstPopulation && secondPopulation ? <StyledCardDescription>Дисперсия второй генеральной совокупности: {variance(secondPopulation)}</StyledCardDescription> : null}
            {firstPopulation && secondPopulation ? <StyledCardDescription>Теперь сгенерируйте выборки:</StyledCardDescription> : null}
            {firstPopulation && secondPopulation ? <SampleForm /> : null}
        </Card>
    )
}

const GenerateForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        mean: '',
        sd: '',
        size: ''
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
        const { mean, sd, size } = formData;
        if (mean && sd && size) {
            const firstPopulation = generatePopulation(mean, sd, size)
            const secondPopulation = generatePopulation(mean, sd, size)
            dispatch(setFirstPopulation({ population: firstPopulation }))
            dispatch(setSecondPopulation({ population: secondPopulation }))
        }
    }

    return (
        <form>
            <FormSection>
                <FormSectionLabel>Мат Ожидание:</FormSectionLabel>
                <StyledRandomNumberInput type="number"
                    name={"mean"}
                    value={formData.mean}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9\.]*">
                </StyledRandomNumberInput>
            </FormSection>
            <FormSection>
                <FormSectionLabel>Стандартное отклонение:</FormSectionLabel>
                <StyledRandomNumberInput type="number"
                    name={"sd"}
                    value={formData.sd}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9\.]*">
                </StyledRandomNumberInput>
            </FormSection>
            <FormSection>
                <FormSectionLabel>Размеры выборок:</FormSectionLabel>
                <StyledRandomNumberInput type="number"
                    name={"size"}
                    value={formData.size}
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9\.]*">
                </StyledRandomNumberInput>
            </FormSection>

            <SubmitButton onClick={handleSubmit}>Сгенерировать!</SubmitButton>
        </form>
    )
}

const GeneralPopulationTable = ({ populations }) => {
    const { firstPopulation, secondPopulation } = populations

    if (!firstPopulation || !secondPopulation) {
        return null
    }

    return (
        <Table>
            <tr>
                <StyledTableLineTitle>Первая генеральная совокупность</StyledTableLineTitle>
                {firstPopulation.map((value, index) => (
                    <StyledAnswerTableCell key={index}>{value}</StyledAnswerTableCell>
                ))}
            </tr>
            <tr>
                <StyledTableLineTitle>Вторая генеральная совокупность</StyledTableLineTitle>
                {secondPopulation.map((value, index) => (
                    <StyledAnswerTableCell key={index}>{value}</StyledAnswerTableCell>
                ))}
            </tr>
        </Table>
    )
}

export default FisherSnedecorCard