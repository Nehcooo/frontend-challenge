import { Box, TextField, Typography } from "@mui/material";
import { useController, type Control } from "react-hook-form";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import * as styles from "./styles";

type ColorPreviewProps = {
    type: "primary" | "secondary";
    control: Control<any>;
    defaultColor: string;
}

function ColorPreview({ type, control, defaultColor }: ColorPreviewProps) {
    const { field } = useController({
        control,
        name: `configuration.colors.${type}`,
        defaultValue: {
            [type]: defaultColor,
        }
    });

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}>
            <Box sx={styles.colorPreview(field.value[type])}>
                <Box sx={styles.colorPreviewIcon(field.value[type])} />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TextField
                    variant="standard"
                    size="small"
                    value={field.value[type]}
                    onChange={(event) => field.onChange({ ...field.value, [type]: event.target.value })}
                    sx={{
                        ...styles.colorPreviewInput,
                        "& .MuiInput-underline:before": {
                            borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": {
                            borderBottom: "none",
                        },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottom: "none",
                        },
                    }}
                    slotProps={
                        {
                            htmlInput: {
                                sx: {
                                    textAlign: "center",
                                    fontSize: "0.76rem",
                                    width: "80px",
                                    marginTop: "0.2rem",
                                }
                            }
                        }
                    }
                />
            </Box>
        </Box>
    )
}

type Props = {
    control: Control<any>;
}

function ImportColors({ control }: Props) {
    return (
        <Box sx={styles.importColors}>
            <Box sx={styles.importColorsTitle}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Box sx={styles.importColorsBar} />

                    <Typography variant="body1" sx={styles.importColorsTitleText}>
                        Importez vos couleurs
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "primary.main", cursor: "pointer" }}>
                    <Typography variant="body1" sx={{ ...styles.importColorsTitleText, color: "primary.main", fontWeight: "bold", textDecoration: "underline" }}>
                        Voir l'aperçu
                    </Typography>

                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "1rem" }} />
                </Box>
            </Box>

            <Box
                sx={styles.importColorsContent}
            >
                <ColorPreview type="primary" control={control} defaultColor="#3F5EFB" />
                <ColorPreview type="secondary" control={control} defaultColor="#F59000" />
            </Box>
        </Box>

    )
}

export default ImportColors;