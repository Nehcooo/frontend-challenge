import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import * as styles from "./styles";

type Props = {
    title: string;
    description: string;
    children?: React.ReactNode;
    canCollapse?: boolean;
};

function SectionHeader({ title, description, children, canCollapse = true }: Props) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Box sx={styles.sectionHeader}>
            <Box sx={styles.sectionHeaderContainer}>
                <Box sx={styles.sectionHeaderBorder}></Box>

                <Box sx={styles.sectionHeaderContent}>
                    <Typography variant="h6" sx={styles.sectionHeaderTitle}>
                        {title}
                    </Typography>

                    <Typography variant="body1" sx={styles.sectionHeaderDescription}>
                        {description}
                    </Typography>
                </Box>

                {canCollapse && (
                    <Box sx={styles.sectionHeaderCollapse}>
                        <IconButton onClick={() => setIsExpanded(!isExpanded)} aria-label={isExpanded ? "Réduire" : "Déplier"}>
                            {isExpanded ? <ExpandLessIcon sx={styles.sectionHeaderCollapseIcon} /> : <ExpandMoreIcon sx={styles.sectionHeaderCollapseIcon} />}
                        </IconButton>
                    </Box>
                )}
            </Box>

            {isExpanded && children}
        </Box>
    );
}

export default SectionHeader;