import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/StyledCardContent/StyledCardDescription"
import { StyledTableCell, StyledAnswerTableCell, StyledTableLineTitle } from "../../common/components/Table/StyledTableCells"
import Table from "../../common/components/Table"
import { useSelector } from "react-redux"
import filterInputs from "../formulas/filterInputs"
import distributionIntervals from "../formulas/distributionIntervals"

const DistributionFormulaTable = () => {
    return (
        <Table>
            <tr>
                <StyledTableLineTitle>Границы интервалов</StyledTableLineTitle>
                <StyledTableCell>x<sup>0</sup> - x<sup>1</sup></StyledTableCell>
                <StyledTableCell>x<sup>1</sup> - x<sup>2</sup></StyledTableCell>
                <StyledTableCell>x<sup>2</sup> - x<sup>3</sup></StyledTableCell>
                <StyledTableCell>. . .</StyledTableCell>
                <StyledTableCell>x<sup>m-1</sup> - x<sup>m</sup></StyledTableCell>
            </tr>
            <tr>
                <StyledTableLineTitle>Эмпирические частоты</StyledTableLineTitle>
                <StyledTableCell>n<sub>1</sub>/n</StyledTableCell>
                <StyledTableCell>n<sub>2</sub>/n</StyledTableCell>
                <StyledTableCell>n<sub>3</sub>/n</StyledTableCell>
                <StyledTableCell>. . .</StyledTableCell>
                <StyledTableCell>n<sub>n</sub>/n</StyledTableCell>
            </tr>
        </Table>
    )
}

const AnswerTable = () => {
    const inputs = filterInputs(useSelector((state) => state.randomInputSlice.inputs));
    const intervals = distributionIntervals(inputs);

    return (
        <Table>
            <tr>
                <StyledTableLineTitle>Границы интервалов</StyledTableLineTitle>
                {intervals.map((interval, index) => (
                    <StyledAnswerTableCell key={index}>{interval.start} - {interval.end}</StyledAnswerTableCell>
                ))}
            </tr>
            <tr>
                <StyledTableLineTitle>Эмпирическая частота</StyledTableLineTitle>
                {intervals.map((interval, index) => (
                    <StyledAnswerTableCell key={index}>{interval.percent}</StyledAnswerTableCell>
                ))}
            </tr>
            <tr>
                <StyledTableLineTitle>Теоретическая частота</StyledTableLineTitle>
                {intervals.map((interval, index) => (
                    <StyledAnswerTableCell key={index}>{interval.probability}</StyledAnswerTableCell>
                ))}
            </tr>
        </Table>
    );
};

const EmpiricalDistributionLawCard = () => {
    return (
        <Card title="Эмпирический закон распределения">
            <StyledCardDescription>Формула:</StyledCardDescription>
            <DistributionFormulaTable />
            <StyledCardDescription>Ответ:</StyledCardDescription>
            <AnswerTable />
        </Card>
    )
}

export default EmpiricalDistributionLawCard