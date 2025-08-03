import { Box } from "@mui/material";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const styles = {
    layout: {
        display: "flex",
        minHeight: "100vh",
        height: "auto",
    },
    layoutContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },
    layoutContentWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "3rem 0rem",
        width: "100%",
    },
}

function Layout({ children }: { children?: React.ReactNode }) {
    return (
        <Box sx={styles.layout}>
            <Sidebar />

            <Box sx={styles.layoutContent}>
                <Header />

                <Box sx={styles.layoutContentWrapper}>
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