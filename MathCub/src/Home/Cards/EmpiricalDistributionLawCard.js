import Card from "../../common/components/Card"
import StyledCardDescription from "../../common/components/Card/CardDescription"
import { StyledTableCell, StyledAnswerTableCell, StyledTableLineTitle } from "../../common/components/Table/StyledTableCells"
import Table from "../../common/components/Table/StyledTable"

const DistributionFormulaTable = () => {
    return (
        <Table>
            <tr>
                <StyledTableLineTitle>Границы интервалов</StyledTableLineTitle>
                <StyledTableCell>x<sup>0</sup> - x<sup>1</sup></StyledTableCell>
                <StyledTableCell>x<sup>0</sup> - x<sup>1</sup></StyledTableCell>
                <StyledTableCell>x<sup>0</sup> - x<sup>1</sup></StyledTableCell>
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
    return (
        <Table>
            <tr>
                <StyledTableLineTitle>Границы интервалов</StyledTableLineTitle>
                <StyledAnswerTableCell>1123</StyledAnswerTableCell>
                <StyledAnswerTableCell>2342</StyledAnswerTableCell>
                <StyledAnswerTableCell>234</StyledAnswerTableCell>
                <StyledAnswerTableCell>12346</StyledAnswerTableCell>
                <StyledAnswerTableCell>45675646</StyledAnswerTableCell>
            </tr>
            <tr>
                <StyledTableLineTitle>Эмпирические частоты</StyledTableLineTitle>
                <StyledAnswerTableCell>1123</StyledAnswerTableCell>
                <StyledAnswerTableCell>2342</StyledAnswerTableCell>
                <StyledAnswerTableCell>234</StyledAnswerTableCell>
                <StyledAnswerTableCell>12346</StyledAnswerTableCell>
                <StyledAnswerTableCell>45675646</StyledAnswerTableCell>
            </tr>
        </Table>
    )
}

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