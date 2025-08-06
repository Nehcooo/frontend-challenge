import React, { useState } from 'react';
import { Box, Typography, Switch } from '@mui/material';

import * as styles from "./styles";

type Props = {
    title: string;
    description: string;
    defaultChecked?: boolean;
    color?: "warning" | "default";
    borderColor?: string;
    spaceBetween?: boolean;
}

const SwitchButton = ({ title, description, defaultChecked, color = "warning", borderColor = "secondary.main", spaceBetween = false }: Props) => {
    const [enabled, setEnabled] = useState(defaultChecked || false);

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnabled(event.target.checked);
    }

    return (
        <Box sx={styles.container}>
            <Box sx={styles.leftSection}>
                <Box sx={{ ...styles.verticalBar, backgroundColor: borderColor }} />
                <Box sx={styles.titleContainer}>
                    <Box sx={{ ...styles.title, justifyContent: spaceBetween ? "space-between" : "flex-start" }}>
                        <Typography sx={{ fontSize: "0.85rem", fontWeight: "bold" }}>{title}</Typography>

                        <Switch
                            checked={enabled}
                            onChange={handleToggle}
                            color={color}
                            sx={styles.button}
                        />
                    </Box>

                    <Typography sx={styles.subtitle}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SwitchButton;
