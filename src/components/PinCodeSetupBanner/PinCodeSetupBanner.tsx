import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { storage } from "../../services/storage";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import * as styles from "./styles";

function PinCodeSetupBanner() {
    const [isPinCodeSetup, setIsPinCodeSetup] = useState(false);

    useEffect(() => {
        const pinCode = storage.get("pinCode");
        
        setIsPinCodeSetup(pinCode !== null);
    }, []);

    if (isPinCodeSetup) return null;

    const handleSetupPinCode = () => {
        if (isPinCodeSetup) {
            storage.remove("pinCode");

            setIsPinCodeSetup(false);
        } else {
            storage.set("pinCode", "1234");
            
            setIsPinCodeSetup(true);
        }
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.contentWrapper}>
                <Box sx={styles.iconContainer}>
                    <LockOutlinedIcon fontSize="small" />
                </Box>

                <Box sx={styles.textContainer}>
                    <Typography sx={styles.title}>
                        Votre Code PIN n'est pas configuré
                    </Typography>
                    <Typography sx={styles.subtitle}>
                        Activez-le pour sécuriser la récupération des cadeaux par vos clients.
                    </Typography>
                </Box>
            </Box>

            <Button variant="contained" sx={styles.button} onClick={handleSetupPinCode}>
                Configurer mon code
            </Button>
        </Box>
    );
}

export default PinCodeSetupBanner;
