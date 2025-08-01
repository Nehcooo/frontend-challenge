import { alpha, Box, Button, IconButton, SvgIcon, Typography } from "@mui/material";

import type { SvgIconProps } from "@mui/material";

import QrCodeIcon from "@mui/icons-material/QrCode";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function CloseIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} viewBox="0 -960 960 960">
            <path
                d="M480-390 334-244q-20 20-45 19.5T245-245q-20-20-20-45t20-45l145-145-146-147q-20-20-19.5-45t20.5-45q19-20 44.5-20t45.5 20l145 146 146-146q20-20 45.5-20t44.5 20q20 20 20 45t-20 45L570-480l146 146q20 20 20 44.5T716-245q-19 20-44.5 20T626-245L480-390Z"
            />
        </SvgIcon>
    )
}

function CircleEllipse() {
    return (
        <svg
            style={{
                position: "absolute",
                overflow: "visible",
            }}
            width="300"
            height="100"
            viewBox="0 0 300 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
                cx="150"
                cy="40"
                rx="160"
                ry="30"
                transform="rotate(-5 150 50)"
                stroke="#3F5EFB"
                strokeWidth="2"
            />
        </svg>
    );
}

function Header() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "1rem 3rem",
            backgroundColor: "rgba(224, 224, 224, 0.30)",
            borderBottom: 1,
            borderLeft: 1,
            borderColor: "custom.border",
            width: "100%",
            height: "17.5%",
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}>
                    <CircleEllipse />

                    <Typography variant="h6" sx={{
                        fontSize: "2.75rem",
                        fontWeight: "bold",
                        color: "primary.main",
                    }}>
                        Ma Compagne
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "0.4rem",
                        marginTop: "-0.5rem",
                    }}>
                        <CloseIcon sx={{
                            color: "secondary.main",
                            fontSize: "1.0rem",
                            transform: "rotate(10deg)",
                            marginBottom: "0.0rem",
                        }} />

                        <CloseIcon sx={{
                            color: "secondary.main",
                            fontSize: "1.0rem",
                            transform: "rotate(10deg)",
                            marginBottom: "0.35rem",
                        }} />

                        <CloseIcon sx={{
                            color: "secondary.main",
                            fontSize: "1.0rem",
                            transform: "rotate(10deg)",
                            marginBottom: "0.70rem",
                        }} />
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    position: "relative",
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
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
                            }}
                        >
                            <Box sx={{
                                position: "absolute",
                                left: "0",
                                top: "0",
                                backgroundColor: "#6600CC",
                                height: "100%",
                                width: "0.5rem",
                            }} />

                            Mon Code PIN
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "secondary.main",
                                color: "text.secondary",
                                boxShadow: "none",
                                outline: "none",
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                                textTransform: "none",
                            }}
                            startIcon={<QrCodeIcon />}
                        >
                            QR Code
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "primary.main",
                                color: "text.secondary",
                                boxShadow: "none",
                                outline: "none",
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                            }}
                        >
                            Sauvegarder
                        </Button>

                        <IconButton
                            sx={{
                                borderRadius: 1,
                                padding: "6px 8px",
                                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                color: "primary.main",
                                border: 1,
                                borderColor: "custom.iconButtonBorder",
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "white",
                                }
                            }}
                        >
                            <MoreHorizIcon sx={{
                                fontSize: "1.2rem",
                            }} />
                        </IconButton>
                    </Box>

                    <Box sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        marginBottom: "-3rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",                    }}>
                        <Typography variant="body1" sx={{
                            fontSize: "0.8rem",
                            color: "custom.grey",
                            fontWeight: "500",
                        }}>
                            Disponible jusqu'au 10 déc. 2025
                        </Typography>

                        <Box sx={{
                            width: "8px",
                            height: "15px",
                            backgroundColor: "primary.main",
                        }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;