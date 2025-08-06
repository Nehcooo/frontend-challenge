import {
    Box,
    Button,
    IconButton,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Switch,
} from "@mui/material";
import { type Control, useController } from "react-hook-form";

import SectionHeader from "../SectionHeader/SectionHeader";
import SwitchButton from "../SwitchButton/SwitchButton";

import AddIcon from "@mui/icons-material/Add";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import * as styles from "./styles";

type Props = {
    control: Control<any>;
}

const categoryTypesNames: Record<string, string> = {
    "FOOD": "Nourriture",
    "LOTTERY": "Tirage au sort",
}

const giftIcons: Record<string, React.ReactNode> = {
    "FRIES": <SoupKitchenIcon sx={{ fontSize: "1.2rem" }} />,
    "BAG": <WorkOutlineIcon sx={{ fontSize: "1.2rem" }} />,
}

function GiftConfigurator({ control }: Props) {
    const { field } = useController({
        control,
        name: "configuration.gifts",
        defaultValue: [
            { id: "1", category: "FOOD", name: "Frite", icon: giftIcons["FRIES"], initial_limit: 15, limit: 15 },
            { id: "2", category: "LOTTERY", name: "Sac Jacquemus",  icon: giftIcons["BAG"], unlimited: true, initial_limit: 15, limit: 15, limit_date: "Jusqu'au 10 déc 2024", is_default: true },
        ],
    });

    return (
        <Box sx={styles.giftConfigurator}>
            <SectionHeader
                title="Ajoutez et configurez vos gains"
                description={"Indiquez les récompenses que vos clients pourront gagner. Offrez des cadeaux attractifs pour augmenter\nleur engagement et leur fidélité."}
            >
                <Box sx={styles.giftConfiguratorContainer}>
                    <SwitchButton defaultChecked={true} title="Jeu 100% Gagnant" description={"Cochez cette option pour garantir un gain à chaque joueur. Si vous\nla décochez, une case 'Perdu' sera automatiquement ajoutée au jeu."} />
                </Box>

                <Box mt={2.5} sx={{ position: "relative" }}>
                    <Box sx={styles.buttonActionContainer}>
                        <Button
                            variant="contained"
                            sx={{ ...styles.buttonAction, display: { xs: "none", lg: "flex" }, backgroundColor: "secondary.main" }}
                            endIcon={<ConfirmationNumberOutlinedIcon />}
                        >
                            Lancer le tirage au sort
                        </Button>
                        
                        <IconButton
                            sx={{ ...styles.buttonAction, display: { xs: "block", lg: "none", maxWidth: "40px", borderRadius: "10px", marginTop: "2rem", backgroundColor: "#F59000" } }}
                        >
                            <ConfirmationNumberOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                        </IconButton>

                        <Button
                            variant="contained"
                            sx={{ ...styles.buttonAction, display: { xs: "none", lg: "flex" } }}
                            endIcon={<AddIcon />}
                        >
                            Ajouter une gain
                        </Button>

                                                
                        <IconButton
                            sx={{ ...styles.buttonAction, display: { xs: "block", lg: "none", maxWidth: "40px", borderRadius: "10px", marginTop: "2rem" } }}
                        >
                            <AddIcon sx={{ fontSize: "1.2rem" }} />
                        </IconButton>
                    </Box>

                    <TableContainer sx={styles.tableContainer}>
                        <Table sx={{ tableLayout: "fixed" }} >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ ...styles.tableCell, borderLeft: "none" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Nom Du Gain</Typography>
                                            <InfoOutlineIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{ ...styles.tableCell }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Catégorie</Typography>
                                            <InfoOutlineIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{ ...styles.tableCell }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Nombre de stock</Typography>
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
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                    {gift.icon}
                                                    <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>{gift.name}</Typography>
                                                </Box>

                                                {gift.is_default && (
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                        <CardGiftcardIcon sx={{ fontSize: "1.1rem", color: "custom.textSmallGrey" }} />
                                                        <Typography sx={{ color: "custom.textSmallGrey", fontSize: "0.65rem", fontWeight: "bold" }}>Gain par défaut</Typography>
                                                    </Box>
                                                )}
                                            </Box>
                      
                                        </TableCell>

                                        <TableCell sx={{ ...styles.tableCell, color: "primary.main" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                                                <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>{categoryTypesNames[gift.category]}</Typography>

                                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                    {gift.limit_date && (
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                            <CalendarMonthOutlinedIcon sx={{ fontSize: "1.1rem", color: "custom.textSmallGrey" }} />
                                                            <Typography sx={{ color: "custom.textSmallGrey", fontSize: "0.65rem", fontWeight: "bold" }}>
                                                                {gift.limit_date}
                                                            </Typography>
                                                        </Box>
                                                    )}

                                                    <ExpandMoreIcon sx={{ fontSize: "1.2rem", color: "custom.textSmallGrey" }} />
                                                </Box>
                                            </Box>
                                        </TableCell>

                                        <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", fontWeight: "normal" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                                                <Typography sx={{ color: gift.unlimited ? "custom.textSmallGrey" : "black", fontStyle: gift.unlimited ? "italic" : "normal", fontSize: "0.75rem", fontWeight: "bold" }}>{gift.unlimited ? "Ilimité" : gift.limit}</Typography>

                                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.1rem" }}>
                                                    <Typography sx={{ color: !gift.unlimited ? "custom.textSmallGrey" : "black", fontSize: "0.65rem", fontWeight: "bold" }}>{gift.unlimited ? "Ilimité" : "Ilimité"}</Typography>
                                                    <Switch
                                                        checked={gift.unlimited}
                                                        onChange={() => field.onChange(field.value.map((g: any) => g.id === gift.id ? ({ ...g, unlimited: !g.unlimited }) : g))}
                                                    />
                                                </Box>
                                   
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell sx={{ ...styles.tableCell, color: "primary.main", border: "none" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <AddCircleOutlineIcon sx={{ fontSize: "1.2rem", color: "primary.main" }} />
                                            <Typography sx={{ color: "primary.main", fontSize: "0.75rem", fontWeight: "bold" }}>Ajouter un troisième gain</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </SectionHeader>
        </Box>
    );
}

export default GiftConfigurator;