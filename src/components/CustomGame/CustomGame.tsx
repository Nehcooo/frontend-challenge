import { Box, Typography } from "@mui/material";
import { type Control } from "react-hook-form";

import SectionHeader from "../SectionHeader/SectionHeader";
import FileUploader from "../FileUploader/FileUploader";
import ImportColors from "../ImportColors/ImportColors";

import * as styles from "./styles";

type Props = {
    control: Control<any>;
}

function CustomGame({ control }: Props) {
    return (
        <Box sx={styles.customGame}>
            <SectionHeader
                title="Personnalisez votre jeu"
                description={"Importez votre logo et sélectionnez vos couleurs pour créer un jeu à l'image de votre\nmarque. Offrez à vos clients une expérience unique entièrement personnalisée."}
            >
                <Box sx={styles.customGameContainer}>
                    <Box sx={styles.customGameFileUploader}>
                        <FileUploader control={control} />
                    </Box>

                    <Box sx={styles.customGameImportColors}>
                        <Box sx={styles.customGameImportColorsContent}>
                            <ImportColors control={control} />
                        </Box>

                        <Typography variant="body1" sx={styles.customGameImportColorsDescription}>
                            {"Personnalisez votre jeu en\najoutant jusqu'à deux couleurs."}
                        </Typography>
                    </Box>
                </Box>
            </SectionHeader>
        </Box>
    );
}

export default CustomGame;