import { logo } from "../common/icons"
import rotate from "../common/keyframes/rotate"
import { styled } from "styled-components"

const StyledLogoImage = styled.img`
    &:hover {
        animation: 1s linear 0s normal none infinite running ${rotate};
    }
`

const Logo = () => {
    return (
        <a href="/">
            <StyledLogoImage src={logo}/>
        </a>
    )
}

export default Logo