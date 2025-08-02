import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Layout from "./components/Layout";
import PinCodeSetupBanner from "./components/PinCodeSetupBanner";

declare module '@mui/material/styles' {

	interface PaletteOptions {
		alert: {
			main: string;
		};
		custom: {
			border: string;
			iconButtonBorder: string;
			textGrey: string;
			textSmallGrey: string;
		};
	}

	interface Palette {
		alert: {
			main: string;
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
		alert: {
			main: "#FFCC01",
		},
		custom: {
			border: "#E8EAED",
			iconButtonBorder: "#DADCE0",
			textGrey: "#666666",
			textSmallGrey: "#999999",
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Layout>
					<PinCodeSetupBanner />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default App;
