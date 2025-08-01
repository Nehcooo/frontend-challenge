import { Box, Button } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import logo from "../assets/logo.png";

function Sidebar() {
    return (
        <Box sx={{
            width: "300px",
            height: "80%",
            backgroundColor: "white",
            borderRight: 1,
            borderBottom: 1,
            borderColor: "custom.border",
            borderBottomRightRadius: "1rem",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "1.5rem 1.5rem 1rem 1.5rem",
                borderBottom: 1,
                borderColor: "custom.border",
            }}>
                <img src={logo} alt="logo" style={{ width: "auto", height: "30px" }} />
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "80%",
                margin: "0 auto",
                marginTop: "1rem",
            }}>
                <Button
                    variant="contained"
                    sx={{
                        position: "relative",
                        backgroundColor: "#FFFFFF",
                        color: "text.primary",
                        boxShadow: "none",
                        outline: "none",
                        fontWeight: "bold",
                        fontSize: "0.7rem",
                        textTransform: "none",
                        border: 1,
                        borderColor: "custom.border",
                        overflow: "hidden",
                        paddingLeft: "1.25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{
                        position: "absolute",
                        left: "0",
                        top: "0",
                        backgroundColor: "primary.main",
                        height: "100%",
                        width: "0.5rem",
                    }} />

                    Tous les enseignes

                    <KeyboardArrowDownIcon sx={{
                        position: "absolute",
                        right: "0.25rem",
                        fontSize: "1.2rem",
                        color: "custom.iconButtonBorder",
                    }} />
                </Button>
            </Box>
        </Box>
    )
}

export default Sidebar;