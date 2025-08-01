import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

declare module '@mui/material/styles' {
	interface PaletteOptions {
		custom: {
			border: string;
			iconButtonBorder: string;
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
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Box sx={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					height: "100vh",
				}}>
					<Sidebar />
					<Header />
				</Box>
			</ThemeProvider>
		</>
	)
}

export default App;
