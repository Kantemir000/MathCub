import StyledCardDescription from "./Card/StyledCardContent/StyledCardDescription"
import styled from "styled-components"
import { StyledAddButton } from "../../Home/Cards/ValueTableCard/TableInputStyles"

const FormSection = styled(StyledCardDescription)`
display: flex;
align-items: center;
margin: 20px 0 20px 0;
`

const FormSectionLabel = styled.div`
margin-right: 10px;
`

const SubmitButton = styled(StyledAddButton)`
background: #8285a6;
font-size: 1.6rem;
font-weight: 400;
margin-bottom: 10px;
`

export {FormSection, FormSectionLabel, SubmitButton}