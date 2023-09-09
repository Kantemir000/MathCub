import { styled } from "styled-components"
import StyledContainer from "../common/components/StyledContainer"
import Logo from "./logo"

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    background: rgb(20 21 29);
    padding: 0.7rem 0;
    border-bottom: 0.2rem solid rgba(42, 44, 60, 0.518);
    z-index: 1000;
    box-shadow: 0px 5px 10px 2px rgba(42, 44, 60, 0.2);
`


const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <Logo/>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header