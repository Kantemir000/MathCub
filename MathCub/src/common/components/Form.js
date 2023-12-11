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
line-height: 1em;
font-weight: 400;
margin-bottom: 10px;
border-radius: 100vmax;
display: inline-flex;
justify-content: center;
align-items: center;
padding: 1rem;
`

export { FormSection, FormSectionLabel, SubmitButton }