import styled from "styled-components"

const StyledTableWrapper = styled.div`
    max-width: 100%;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`

const StyledTable = styled.table`
    border-collapse: collapse;
    max-width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1em;
    color: #8285a6;
    margin-bottom: 1rem;
`

const Table = ({ children }) => {
    return (
        <StyledTableWrapper>
            <StyledTable>
                <tbody>{children}</tbody>
            </StyledTable>
        </StyledTableWrapper>
    )
}

export default Table