import { DefaultTheme } from "styled-components";

export const themeLight: DefaultTheme = {
    // PALLETE
    pallete: {
        common: {
            black: '#000', white: '#ffffff'
        },
        primary: {
            main: '#FF6A00', light: '#FF9B3F', dark: '#C43800', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        secondary: {
            main: '#551FFF', light: '#9554FF', dark: '#0000CA', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        tertiary: {
            main: '#00B7FE', light: '#6AE9FF', dark: '#0087cb', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        quaternary: {
            main: '#FD2254', light: '#FF6580', dark: '#C2002C', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        grey: {
            A100: '#92959E', A200: '#D0D2DA', A300: '#F5F5F7'
        },
        text: {
            primary: '#82848C', secondary: '#92959E', disabled: 'rgba(255, 255, 255, 0.5)', icon: '15192C'
        }, 
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            paper: '#F5F5F7', default: '#FFFFFF'
        }
    },
    // SHAPE
    shape: {
        borderRadiusPrimary: '4px',
        borderRadiusSecundary: '12px'
    },
    // TYPOGRAPHY
    typography: {
        htmlFontSize: '16px',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '14px',
        fontWeightLight: '300',
        fontWeightRegular: '400',
        fontWeightMedium: '500',
        fontWeightBold: '700',
        h1: { 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: "2.5rem",
            lineHeight: '1.167',
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: "2rem",
            lineHeight: '1.2',
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.75rem",
            lineHeight: '1.167',
            letterSpacing: "0em"
        },
        h4: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.5rem",
            lineHeight: '1.235',
            letterSpacing: "0.00735em"
        },
        h5: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.25rem",
            lineHeight: '1.334',
            letterSpacing: "0em"
        },
        h6: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '500',
            fontSize: "1rem",
            lineHeight: '1.6',
            letterSpacing: "0.0075em"
        },
        subtitle1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: '1.75',
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: '1.57',
            letterSpacing: "0.00714em"
        },
        body1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: '1.50',
            letterSpacing: "0.00938em"
        },
        body2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: '1.43',
            letterSpacing: "0.01071em"
        }
    },
    // BREAKPOINTS
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        value: {
            xs: '0px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px'
        }
        
    },
    // SCREEN
    screen: {
        maxWidth: {
            xs: '100%', sm: '540px', md: '720px', lg: '960px', xl: '1140px', xxl: '1320px'
        }
    }
}