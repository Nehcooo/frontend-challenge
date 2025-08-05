import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { type Control, useController } from "react-hook-form";

import UploadIcon from "@mui/icons-material/Upload";

import * as styles from "./styles";

type Props = {
    control: Control<any>;
}

function FileUploader({ control }: Props) {
    const { field } = useController({
        control,
        name: "logo",
    });

    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            field.onChange(file);
        }
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        setIsDragging(false);

        const file = event.dataTransfer.files[0];

        if (file) {
            field.onChange(file);
        }
    }

    return (
        <Box sx={styles.fileUploader}>
            <Box sx={styles.fileUploaderTitle}>
                <Box sx={styles.fileUploaderBar} />

                <Typography variant="body1" sx={styles.fileUploaderTitleText}>
                    Glissez-déposez votre logo
                </Typography>
            </Box>

            <Box
                sx={styles.fileUploaderContent(isDragging)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                onDragEnter={() => setIsDragging(true)}
                onDragLeave={() => setIsDragging(false)}
            >
                <input
                    type="file"
                    accept="image/*"
                    id="logo-upload"
                    hidden
                    onChange={handleFileSelect}
                />

                <Box sx={styles.fileUploaderIcon}>
                    <UploadIcon sx={{ fontSize: "2rem" }} />
                </Box>

                {field.value && (
                    <Box sx={styles.fileUploaderSelectedFile}>
                        <Typography variant="body1" sx={styles.fileUploaderSelectedFileText}>
                            {field.value.name}
                        </Typography>
                    </Box>
                )}

                <Button variant="contained" sx={styles.selectFileButton} onClick={() => document.getElementById("logo-upload")?.click()}>
                    Sélectionner un fichier
                </Button>
            </Box>
        </Box>

    )
}

export default FileUploader;