const StyledScrollbar = `
    &:hover {
        scrollbar-width: thin;
        transition: all 0.3s;
    }
    & {
        overflow-y: auto;
        /* overscroll-behavior: contain; */
        /* -webkit-overflow-scrolling: touch; */
        scrollbar-width: none;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }
    /* This class controls what elements have the new fancy scrollbar CSS */
    & {
        scrollbar-color: #2c2e3c rgb(25, 26, 35);
    }
    /* &:hover {
        scrollbar-color: #8285a6 rgb(25, 26, 35);
    } */
    &:hover::-webkit-scrollbar {
        height: .475rem;
        width: .375rem;
    }
    &::-webkit-scrollbar {
        height: 0;
        width: 0;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &:hover::-webkit-scrollbar-track {
        background-color: rgb(25, 26, 35);
    }
    &::-webkit-scrollbar-thumb {
        /* background-color: transparent; */
        border-radius: 3px;
    }
    &:hover::-webkit-scrollbar-thumb {
        background-color: #2c2e3c;
    }
    /* &::-webkit-scrollbar-thumb:hover {
        background-color: #8285a6;
    }
    &::-webkit-scrollbar-thumb: active {
        background-color: #8285a6;
    } */
    &::-webkit-scrollbar-thumb:vertical {
        min-height: 1.5rem;
    }
    &::-webkit-scrollbar-thumb:horizontal {
        min-width: 1.5rem;
    }
`
export default StyledScrollbar