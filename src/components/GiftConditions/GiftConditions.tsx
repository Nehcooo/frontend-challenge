import { 
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    IconButton,
    TextField,
} from "@mui/material";
import { type Control, useController } from "react-hook-form";

import SectionHeader from "../SectionHeader/SectionHeader";
import SwitchButton from "../SwitchButton/SwitchButton";

import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import * as styles from "./styles";

type Props = {
    control: Control<any>;
}

function GiftConditions({ control }: Props) {
    const { field } = useController({
        control,
        name: "configuration.retrievalConditions",
        defaultValue: [
            { id: "1", name: "Frite", condition: "Aucune condition", action: "Ajouter une condition", icon: <AddCircleOutlineOutlinedIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />, can_delete: false },
            { id: "2", name: "Sac Jacquemus", condition: "Achat minimum de 10€", action: "Modifier", icon: <ModeEditOutlineOutlinedIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />, can_delete: true },
        ],
    });

    return (
        <Box sx={styles.giftConfigurator}>
            <SectionHeader
                title="DÉFINISSEZ LES CONDITIONS POUR RÉCUPÉRER LES CADEAUX"
                description={"Paramétrez si vos clients doivent remplir une condition (ex: montant minimum d'achat) pour pouvoir repartir\navec leur cadeau."}
            >
                <Box sx={styles.giftConfiguratorContainer}>
                    <SwitchButton spaceBetween={true} defaultChecked={false} color="default" borderColor="custom.textSmallGrey" title="Pas de condition" description={"Les clients peuvent récupérer leur gain sans aucun achat."} />
                </Box>

                <Box sx={styles.giftConfiguratorContainer}>
                    <SwitchButton spaceBetween={true} defaultChecked={true} title="Sous condition d'achat minimale" description={"Exigez un montant minimum d'achat en boutique pour\npermettre la récupération du gain."} />
                </Box>

                <Box mt={2.5} sx={{ position: "relative" }}>
                    <TextField
                        focused
                        label="Montant à atteindre"
                        id="outlined-size-small"
                        defaultValue=""
                        placeholder="Ex : 10€ d'achat minimum pour récupérer le gain"
                        size="small"
                        sx={{
                            width: {
                                xs: "95%",
                                md: "340px",
                            },
                            marginLeft: "20px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "custom.border",
                                },
                                "&:hover fieldset": {
                                    borderColor: "custom.border",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "custom.border",
                                },
                                "& input": {
                                    fontSize: "0.75rem",
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "custom.textSmallGrey",
                                "&.Mui-focused": {
                                    color: "custom.textSmallGrey",
                                },
                            },
                        }}
                    />

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginLeft: "20px", marginTop: "35px" }}>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Conditions personnalisées par gain</Typography>
                        <Typography sx={{ fontSize: "0.65rem", fontWeight: "bold", color: "custom.textSmallGrey" }}>Vous pouvez définir une condition spécifique sur un ou plusieurs gains.</Typography>
                    </Box>

                    <TableContainer sx={styles.tableContainer}>
                        <Table sx={{ tableLayout: "fixed" }} >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ ...styles.tableCell, borderLeft: "none" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Gain</Typography>
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{ ...styles.tableCell }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Condition</Typography>
                                            <InfoOutlineIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{ ...styles.tableCell }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Action</Typography>
                                            <InfoOutlineIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {field.value.map((gift: any, index: number) => (
                                    <TableRow
                                        key={index}
                                        sx={{ position: "relative" }}
                                    >
                                        <TableCell sx={{ ...styles.tableCell, color: "primary.main", borderLeft: "none" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                                                <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>{gift.name}</Typography>
                                            </Box>

                                        </TableCell>

                                        <TableCell sx={{ ...styles.tableCell, color: "primary.main" }}>
                                            <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>{gift.condition}</Typography>
                                        </TableCell>

                                        <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", fontWeight: "normal" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                                                <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.5rem" }}>
                                                    {gift.icon}
                                                    <Typography sx={{ color: "primary.main", fontSize: "0.75rem", fontWeight: "bold" }}>{gift.action}</Typography>
                                                </Box>

                                                {gift.can_delete && (
                                                    <IconButton sx={{ borderLeft: 1.5, borderColor: "custom.border", borderRadius: "0px", padding: "0.5rem" }}>
                                                        <DeleteOutlineOutlinedIcon sx={{ marginLeft: "0.5rem", fontSize: "1.2rem", color: "custom.textSmallGrey" }} />
                                                    </IconButton>
                                                )}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </SectionHeader>
        </Box>
    );
}

export default GiftConditions;