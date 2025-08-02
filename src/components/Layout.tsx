import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: { children?: React.ReactNode }) {
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Header />

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "3rem 0rem",
                    width: "100%",
                }}>
                    <Box sx={{
                        margin: "0 2.5rem",
                        width: "90%",
                    }}>
                        {children}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;