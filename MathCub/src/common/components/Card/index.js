import { styled } from "styled-components"

const StyledCardContainer = styled.section`
    background: rgb(20 21 29);
    border-radius: 3rem;
    padding: 3rem;
    margin-top: 2rem;
    border: 0.2rem solid #2a2c3c;
    box-shadow: 0px 5px 10px 2px rgba(42, 44, 60, 0.2);
    @media (max-width: 576px) {
        padding: 2rem;
    }
`

const StyledTitle = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: aliceblue;
    margin-bottom: 1.5rem;
    &::after {
        content: '';
        display: block;
        margin-top: 1rem;
        width: 100%;
        height: 0.2rem;
        background-color: rgba(42, 44, 60, 0.518);
    }
    @media (max-width: 576px) {
        font-size: 2.5rem;
    }
`

const Card = ({ title, children }) => {
    return (
        <StyledCardContainer>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledCardContainer>
    )
}

export default Card