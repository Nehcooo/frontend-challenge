import { useState } from "react";
import { Box, Button, IconButton, SvgIcon, Typography } from "@mui/material";

import type { SvgIconProps } from "@mui/material";

import QrCodeIcon from "@mui/icons-material/QrCode";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PinCodeModal from "../modals/PinCodeModal/PinCodeModal";

import * as styles from "./styles";

function CloseIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} viewBox="0 -960 960 960">
            <path d="M480-390 334-244q-20 20-45 19.5T245-245q-20-20-20-45t20-45l145-145-146-147q-20-20-19.5-45t20.5-45q19-20 44.5-20t45.5 20l145 146 146-146q20-20 45.5-20t44.5 20q20 20 20 45t-20 45L570-480l146 146q20 20 20 44.5T716-245q-19 20-44.5 20T626-245L480-390Z" />
        </SvgIcon>
    );
}

function CircleEllipse() {
    return (
        <svg style={styles.ellipseStyle} width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="40" rx="160" ry="30" transform="rotate(-5 150 50)" stroke="#3F5EFB" strokeWidth="2" />
        </svg>
    );
}

function Header() {
    const [isPinCodeModalOpen, setIsPinCodeModalOpen] = useState(false);

    return (
        <Box sx={styles.header}>
            <Box sx={styles.headerContent}>
                <Box sx={styles.headerContentContainer}>
                    <Box sx={styles.headerTitleContainer}>
                        <CircleEllipse />

                        <Typography variant="h6" sx={styles.headerContentTitle}>
                            Ma Campagne
                        </Typography>

                        <Box sx={styles.headerContentCloseIcon}>
                            <CloseIcon sx={{ ...styles.headerContentCloseIconItem, marginBottom: "0.0rem" }} />
                            <CloseIcon sx={{ ...styles.headerContentCloseIconItem, marginBottom: "0.35rem" }} />
                            <CloseIcon sx={{ ...styles.headerContentCloseIconItem, marginBottom: "0.70rem" }} />
                        </Box>
                    </Box>

                    <Box sx={styles.headerContentRight}>
                        <Box sx={styles.headerButtonsWrapper}>
                            <Button variant="contained" sx={styles.pinCodeButton} onClick={() => setIsPinCodeModalOpen(true)}>
                                <Box sx={styles.pinCodeButtonStripe} />
                                Mon Code PIN
                            </Button>

                            <Button variant="contained" sx={styles.qrButton} startIcon={<QrCodeIcon />}>
                                QR Code
                            </Button>

                            <Button variant="contained" sx={styles.saveButton}>
                                Sauvegarder
                            </Button>

                            <IconButton aria-label="Plus" sx={styles.moreButton}>
                                <MoreHorizIcon sx={styles.moreButtonIcon} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Box sx={styles.footer}>
                    <Typography variant="body1" sx={styles.footerText}>
                        Disponible jusqu'au 10 déc. 2025
                    </Typography>
                    
                    <Box sx={styles.footerBar} />
                </Box>
            </Box>

            <PinCodeModal open={isPinCodeModalOpen} onClose={() => setIsPinCodeModalOpen(false)} />
        </Box>
    );
}

export default Header;
