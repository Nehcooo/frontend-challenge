import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { useForm } from "react-hook-form";
import type { Campaign } from "../doc/CampaignType";

import Layout from "./components/Layout";
import PinCodeSetupBanner from "./components/PinCodeSetupBanner/PinCodeSetupBanner";
import ActionsOrder from "./components/ActionsOrder/ActionsOrder";
import GameChoice from "./components/GameChoice/GameChoice";

declare module "@mui/material/styles" {
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
	const { control, handleSubmit } = useForm<Campaign>();

	const onSave = (data: Campaign) => {
		console.log("save data : ", data);
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<form onSubmit={handleSubmit(onSave)} noValidate>
					<Layout>
						<PinCodeSetupBanner />
						<ActionsOrder />
						<GameChoice control={control} />
					</Layout>
				</form>
			</ThemeProvider>
		</>
	)
}

export default App;
