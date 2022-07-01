import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    *::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0 , 0.2);
        border-radius: 12px;
        background-clip: padding-box;
        border: 3px solid transparent;
    }

    *::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 12px;
        box-shadow: none;
    }
`

export default GlobalStyle
