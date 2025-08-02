import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Layout from "./components/Layout";

declare module '@mui/material/styles' {
	interface PaletteOptions {
		custom: {
			border: string;
			iconButtonBorder: string;
			textGrey: string;
		};
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#3F5EFB",
		},
		secondary: {
			main: "#F59000",
		},
		text: {
			primary: "#000000",
			secondary: "#FFFFFF",
		},
		custom: {
			border: "#E8EAED",
			iconButtonBorder: "#DADCE0",
			textGrey: "#666666",
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Layout>
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default App;
