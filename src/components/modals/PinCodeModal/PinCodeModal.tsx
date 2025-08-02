import { Box, Modal, Typography, Button } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";

import * as styles from "./styles";

type Props = {
    open: boolean;
    onClose: () => void;
};

function PinCodeModal({ open, onClose }: Props) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles.modal}>
                <Box sx={styles.iconContainer}>
                    <LockIcon sx={styles.icon} />
                </Box>

                <Typography variant="h6" component="h2" sx={styles.title}>
                    Votre Code PIN n'est pas configuré
                </Typography>

                <Typography variant="body2" sx={styles.subtitle}>
                    Activez-le pour sécuriser la récupération des cadeaux par vos clients.
                </Typography>

                <Button sx={styles.button} onClick={onClose}>
                    CONFIGURER MON CODE
                </Button>
            </Box>
        </Modal>
    );
}

export default PinCodeModal;
