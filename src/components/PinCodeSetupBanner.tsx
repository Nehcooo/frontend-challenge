import { alpha, Box, Button, Typography } from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function PinCodeSetupBanner() {
    return (
        <Box sx={{
            backgroundColor: (theme) => alpha(theme.palette.alert.main, 0.35),
            padding: {
                xs: "2.5rem 1.5rem 2.5rem 1.5rem",
                md: "2.5rem 3rem 2.5rem 1.5rem"
            },
            borderRadius: "0.5rem",
            border: 1.5,
            borderColor: "alert.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexDirection: {
                xs: "column",
                lg: "row"
            },
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
            }}>
                <Box sx={{
                    minWidth: "40px",
                    minHeight: "40px",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "alert.main",
                    backgroundColor: "white",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                }}>
                    <LockOutlinedIcon fontSize="small" />
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    textAlign: {
                        xs: "center",
                        md: "left"
                    },
                }}>
                    <Typography fontWeight="bold" fontSize="1.2rem">Votre Code PIN n'est pas configuré</Typography>
                    <Typography fontWeight="bold" fontSize="0.7rem">Activez-le pour sécuriser la récupération des cadeaux par vos clients.</Typography>
                </Box>
            </Box>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: "alert.main",
                    color: "black",
                    boxShadow: "none",
                    outline: "none",
                    fontWeight: "bold",
                    fontSize: "0.7rem",
                    width: {
                        xs: "100%",
                        md: "auto"
                    },
                }}
            >
                Configurer mon code
            </Button>
        </Box>
    )
}

export default PinCodeSetupBanner;