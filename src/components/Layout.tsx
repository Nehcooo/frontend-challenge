import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }: { children?: React.ReactNode }) {
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Header />

                <Box sx={{ flexGrow: 1, overflow: "auto", p: 2, minHeight: 0 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;