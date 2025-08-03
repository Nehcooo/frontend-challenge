import { Box, Modal, Typography } from "@mui/material";

import QrCodeIcon from "@mui/icons-material/QrCode";

import * as styles from "./styles";

type Props = {
    open: boolean;
    onClose: () => void;
};

function QrCodeModal({ open, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles.modal}>
                <Box sx={styles.iconContainer}>
                    <QrCodeIcon sx={styles.icon} />
                </Box>

                <Typography variant="h6" component="h2" sx={styles.title}>
                    Aucun QR Code disponible
                </Typography>
            </Box>
        </Modal>
    );
}

export default QrCodeModal;
