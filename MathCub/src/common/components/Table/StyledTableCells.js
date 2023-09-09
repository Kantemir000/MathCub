import styled from "styled-components";

const baseTableCellStyles = `
    white-space: nowrap;
    border: 0.2rem solid #2c2e3c;
    padding: 1rem;
    text-align: center;
`;

const StyledTableCell = styled.td`
    ${baseTableCellStyles}
`;

const StyledTableLineTitle = styled.th`
    ${baseTableCellStyles}
`;

const StyledAnswerTableCell = styled(StyledTableCell)`
    color: rgb(137, 128, 218);
    &:hover {
        background-color: #2a2c3c;
        transition: all 0.3s;
    }
`

export { StyledTableCell, StyledAnswerTableCell, StyledTableLineTitle }