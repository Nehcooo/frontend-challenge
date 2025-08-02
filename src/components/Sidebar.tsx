import { alpha, Box, Button, IconButton, Typography } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import logo from "../assets/logo.png";
import flyers from "../assets/flyers.png";

const navigations = [
    {
        label: "Mon tableau de bord",
        icon: <GridViewIcon />,
        active: false,
    },
    {
        label: "Ma Campagne",
        icon: <FolderOpenIcon />,
        active: true,
    },
    {
        label: "Récapitulatif des utilisateurs",
        icon: <GroupOutlinedIcon />,
        active: false,
    },
    {
        label: "Supports de diffusion",
        icon: <InsertDriveFileOutlinedIcon />,
        active: false,
    },
    {
        label: "Campagnes SMS",
        icon: <TextsmsOutlinedIcon />,
        active: false,
    },
    {
        label: "Gestion des Avis Google",
        icon: <GoogleIcon />,
        active: false,
    },
    {
        label: "Mon Centre d'aide",
        icon: <InfoOutlinedIcon />,
        active: false,
    },
]

function Sidebar() {
    return (
        <Box sx={{
            width: {
                xs: "100px",
                sm: "300px",
            },
            height: "auto",
            backgroundColor: "white",
            borderRight: 1,
            borderBottom: 1,
            borderColor: "custom.border",
            borderBottomRightRadius: "1rem",
            display: {
                xs: "flex",
                sm: "block"
            },
            flexDirection: "column",
            alignItems: "center",
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
                        alignItems: "center",
                        justifyContent: "space-between",
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
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

                <IconButton
                    aria-label="Tous les enseignes"
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        color: "primary.main",
                        borderRadius: "0.5rem",
                        border: 1,
                        borderColor: "custom.border",
                    }}
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                    xs: "center",
                    sm: "flex-start"
                },
                gap: "0.1rem",
                width: "80%",
                margin: "0 auto",
                marginTop: "1rem",
            }}>
                {navigations.map((navigation, index) => (
                    <Box key={index}>
                        <Button
                            variant="text"
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "flex"
                                },
                                alignItems: "center",
                                justifyContent: "flex-start",
                                backgroundColor: navigation.active ? (theme) => alpha(theme.palette.primary.main, 0.1) : "none",
                                color: navigation.active ? "primary.main" : "custom.textGrey",
                                boxShadow: "none",
                                outline: "none",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                                textTransform: "none",
                                overflow: "hidden",
                                width: "100%",
                                padding: "0.5rem 0.8rem",
                            }}
                            startIcon={navigation.icon}
                        >
                            <Box sx={{
                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                            }}>
                                {navigation.label}
                            </Box>
                        </Button>

                        <IconButton
                            aria-label={navigation.label}
                            sx={{
                                display: {
                                    xs: "flex",
                                    sm: "none"
                                },
                                color: navigation.active ? "primary.main" : "custom.textGrey",
                                backgroundColor: navigation.active ? (theme) => alpha(theme.palette.primary.main, 0.1) : "none",
                                borderRadius: "0.5rem",
                            }}
                        >
                            {navigation.icon}
                        </IconButton>
                    </Box>
                ))}
            </Box>

            <Box sx={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "80%",
                margin: "0 auto",
                marginTop: "5rem",
                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                border: 1.5,
                borderColor: "primary.main",
                borderRadius: "0.5rem",
                padding: "1.0rem 0rem",
                display: {
                    xs: "none",
                    sm: "flex"
                },
            }}>
                <Typography variant="body2" fontWeight="bold" fontSize="0.65rem">
                    Commandez Vos Flyers Personnalisés
                </Typography>

                <img src={flyers} alt="flyer" style={{ width: "100%", height: "70px", objectFit: "contain" }} />

                <Typography variant="body2" fontWeight="semibold" textAlign="center" fontSize="0.6rem" padding="0.5rem">
                    Personnalisez et commandez vos PLV pour booster l'engagement client.
                    Créez des supports à votre image pour maximiser vos conversions.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "primary.main",
                        color: "text.secondary",
                        boxShadow: "none",
                        outline: "none",
                        fontWeight: "bold",
                        fontSize: "0.7rem",
                        width: "80%",
                    }}
                >
                    Commandez
                </Button>
            </Box>

            <Box sx={{
                display: {
                    xs: "flex",
                    sm: "none"
                },
                height: "2px",
                width: "100%",
                backgroundColor: "custom.border",
                marginTop: "1rem",
            }}>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                    xs: "center",
                    sm: "flex-start"
                },
                gap: "0.1rem",
                width: "80%",
                margin: "0 auto",
                marginTop: "1rem",
            }}>
                <Button
                    variant="text"
                    sx={{
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        alignItems: "center",
                        justifyContent: "flex-start",
                        backgroundColor: "none",
                        color: "black",
                        boxShadow: "none",
                        outline: "none",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        textTransform: "none",
                        overflow: "hidden",
                        width: "100%",
                        padding: "0.5rem 0.8rem",
                    }}
                    startIcon={<AccountCircleOutlinedIcon />}
                >
                    <Box sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        },
                    }}>
                        Compte
                    </Box>
                </Button>

                <IconButton
                    aria-label="Compte"
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        color: "custom.textGrey",
                        borderRadius: "0.5rem",
                    }}
                >
                    <AccountCircleOutlinedIcon />
                </IconButton>

                <Button
                    variant="text"
                    sx={{
                        display: {
                            xs: "none",
                            sm: "flex"
                        },
                        alignItems: "center",
                        justifyContent: "flex-start",
                        backgroundColor: "none",
                        color: "black",
                        boxShadow: "none",
                        outline: "none",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        textTransform: "none",
                        overflow: "hidden",
                        width: "100%",
                        padding: "0.5rem 0.8rem",
                    }}
                    startIcon={<LogoutOutlinedIcon />}
                >
                    <Box sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        },
                    }}>
                        Déconnexion
                    </Box>
                </Button>

                <IconButton
                    aria-label="Déconnexion"
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none"
                        },
                        color: "custom.textGrey",
                        borderRadius: "0.5rem",
                    }}
                >
                    <LogoutOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Sidebar;