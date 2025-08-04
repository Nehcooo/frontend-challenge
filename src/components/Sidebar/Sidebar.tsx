import { Box, Button, IconButton, Typography } from "@mui/material";

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

import logo from "../../assets/logo.png";
import flyers from "../../assets/flyers.png";

import * as styles from "./styles";

const navigations = [
    { label: "Mon tableau de bord", icon: <GridViewIcon />, active: false },
    { label: "Ma Campagne", icon: <FolderOpenIcon />, active: true },
    { label: "Récapitulatif des utilisateurs", icon: <GroupOutlinedIcon />, active: false },
    { label: "Supports de diffusion", icon: <InsertDriveFileOutlinedIcon />, active: false },
    { label: "Campagnes SMS", icon: <TextsmsOutlinedIcon />, active: false },
    { label: "Gestion des Avis Google", icon: <GoogleIcon />, active: false },
    { label: "Mon Centre d'aide", icon: <InfoOutlinedIcon />, active: false },
];

function Sidebar() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.logoWrapper}>
                <img src={logo} alt="logo" style={{ width: "auto", height: "30px" }} />
            </Box>

            <Box sx={styles.enseignesWrapper}>
                <Button variant="contained" sx={styles.enseignesButton}>
                    <Box sx={styles.enseignesButtonStripe} />
                    Tous les enseignes
                    <KeyboardArrowDownIcon sx={{ position: "absolute", right: "0.50rem", fontSize: "1rem", color: "custom.textSmallGrey" }} />
                </Button>

                <IconButton aria-label="Tous les enseignes" sx={styles.enseignesIconButton}>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>

            <Box sx={styles.navWrapper}>
                {navigations.map((navigation, index) => (
                    <Box key={index} sx={styles.navItemBox}>
                        <Button
                            variant="text"
                            sx={styles.navItemButton(navigation.active)}
                            startIcon={navigation.icon}
                        >
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>{navigation.label}</Box>
                        </Button>

                        <IconButton aria-label={navigation.label} sx={styles.navItemIconButton(navigation.active)}>
                            {navigation.icon}
                        </IconButton>
                    </Box>
                ))}
            </Box>

            <Box sx={styles.flyerBox}>
                <Typography variant="body2" sx={styles.flyerTitle}>
                    Commandez Vos Flyers Personnalisés
                </Typography>

                <img src={flyers} alt="flyer" style={{ width: "100%", height: "70px", objectFit: "contain" }} />

                <Typography variant="body2" sx={styles.flyerDescription}>
                    Personnalisez et commandez vos PLV pour booster l'engagement client.
                    Créez des supports à votre image pour maximiser vos conversions.
                </Typography>

                <Button variant="contained" sx={styles.flyerButton}>Commandez</Button>
            </Box>

            <Box sx={styles.mobileDivider} />

            <Box sx={styles.bottomSection}>
                <Button variant="text" sx={styles.bottomButton} startIcon={<AccountCircleOutlinedIcon />}>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>Compte</Box>
                </Button>

                <IconButton aria-label="Compte" sx={styles.bottomIconButton}>
                    <AccountCircleOutlinedIcon />
                </IconButton>

                <Button variant="text" sx={styles.bottomButton} startIcon={<LogoutOutlinedIcon />}>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>Déconnexion</Box>
                </Button>

                <IconButton aria-label="Déconnexion" sx={styles.bottomIconButton}>
                    <LogoutOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Sidebar;
