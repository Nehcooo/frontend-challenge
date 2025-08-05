import React, { useState } from 'react';
import { Box, Typography, Switch } from '@mui/material';

import * as styles from "./styles";

type Props = {
    titleWidth?: string;
    title: string;
    description: string;
    defaultChecked?: boolean;
}

const SwitchButton = ({ title, description, titleWidth, defaultChecked }: Props) => {
    const [enabled, setEnabled] = useState(defaultChecked || false);

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnabled(event.target.checked);
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.leftSection}>
                <Box sx={styles.verticalBar} />
                <Box sx={styles.titleContainer}>
                    <Typography sx={styles.title}>
                        <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold", width: titleWidth }}>{title}</Typography>

                        <Switch
                            checked={enabled}
                            onChange={handleToggle}
                            color="warning"
                            sx={styles.button}
                        />
                    </Typography>

                    <Typography sx={styles.subtitle}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SwitchButton;
