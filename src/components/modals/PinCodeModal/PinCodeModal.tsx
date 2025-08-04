import { Box, Modal, Typography } from "@mui/material";
import { storage } from "../../../services/storage";

import LockIcon from "@mui/icons-material/Lock";

import * as styles from "./styles";

type Props = {
    open: boolean;
    onClose: () => void;
};

function PinCodeModal({ open, onClose }: Props) {
    const pinCode = storage.get("pinCode");

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles.modal}>
                <Box sx={styles.iconContainer}>
                    <LockIcon sx={styles.icon} />
                </Box>

                <Typography variant="h6" component="h2" sx={styles.title}>
                    {!pinCode ? "Votre Code PIN n'est pas configuré" : "Votre Code PIN est configuré"}
                </Typography>

                <Typography variant="body2" sx={styles.subtitle}>
                    {!pinCode ? "Activez-le pour sécuriser la récupération des cadeaux par vos clients." : pinCode}
                </Typography>
            </Box>
        </Modal>
    );
}

export default PinCodeModal;
