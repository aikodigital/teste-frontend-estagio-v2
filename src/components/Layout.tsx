import { ThemeProvider } from 'styled-components'
// STYLES
import GlobalStyle from "@styles/globalStyle"
import { themeLight } from '@theme/themeDefault';
// TYPES
import { iLayout } from "src/@types/components"

const Layout = ({children}: iLayout): JSX.Element => {
    return(
    <ThemeProvider theme={themeLight}>
        <GlobalStyle/>
        {children}
    </ThemeProvider>
    )
}

export default Layout