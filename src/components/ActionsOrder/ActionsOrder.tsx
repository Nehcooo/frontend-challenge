import { Box } from "@mui/material";

import SectionHeader from "../SectionHeader/SectionHeader";

import * as styles from "./styles";

function ActionsOrder() {
    return (
        <Box sx={styles.actionsOrder}>
            <SectionHeader
                title="Organisez vos actions"
                description={"Définissez l'odre et les actions à réaliser par vos clients pour maximiser\nl'engagement."}
                canCollapse={false}
            >
                <Box sx={styles.actionsOrderContainer}>
                    Je sais pas
                </Box>
            </SectionHeader>
        </Box>
    );
}

export default ActionsOrder;