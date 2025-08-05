import { useState } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    type DropResult
} from "@hello-pangea/dnd";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Button,
    Typography,
    Menu,
    MenuItem,
    Alert
} from "@mui/material";

import { useController, type Control } from "react-hook-form";

import type { Campaign } from "../../types/CampaignType";
import type { ActionType } from "../../types/CampaignType";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import SectionHeader from "../SectionHeader/SectionHeader";

import GoogleIcon from "../../assets/icons/google.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import TikTokIcon from "../../assets/icons/tiktok.png";
import FacebookIcon from "../../assets/icons/facebook.png";

import * as styles from "./styles";

const actionsConfig: Record<string, { icon: string, name: string, target: string }> = {
    "GOOGLE_REVIEW": {
        icon: GoogleIcon,
        name: "Avis Google",
        target: "https://google.com",
    },
    "INSTAGRAM": {
        icon: InstagramIcon,
        name: "Instagram",
        target: "https://instagram.com",
    },
    "TIKTOK": {
        icon: TikTokIcon,
        name: "TikTok",
        target: "https://tiktok.com",
    },
    "FACEBOOK": {
        icon: FacebookIcon,
        name: "Facebook",
        target: "https://facebook.com",
    },
};

type Props = {
    control: Control<Campaign>;
}

function ActionsOrder({ control }: Props) {
    const { field } = useController({
        control,
        name: "configuration.actions",
        defaultValue: [
            { id: "1", type: "GOOGLE_REVIEW", priority: 1, target: "https://google.com" },
        ],
    });

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [hasDuplicate, setHasDuplicate] = useState(false);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reordered = Array.from(field.value);
        const [moved] = reordered.splice(result.source.index, 1);

        reordered.splice(result.destination.index, 0, moved);

        field.onChange(reordered);
    }

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleAddAction = (type: ActionType) => {
        const newId = crypto.randomUUID();

        if (field.value.some((action) => action.type === type)) {
            setHasDuplicate(true);

            setTimeout(() => {
                setHasDuplicate(false);
            }, 3000);

            handleMenuClose();

            return;
        }

        handleMenuClose();

        field.onChange([...field.value, { id: newId, type }]);
    }

    const handleDelete = (id: string) => {
        field.onChange(field.value.filter((a) => a.id !== id));
    }

    const getActionOrder = (index: number) => {
        const orders = [
            "Première action",
            "Deuxième action",
            "Troisième action",
            "Quatrième action",
        ];

        return orders[index] || `${index + 1}ᵉ action`;
    }

    return (
        <Box sx={{ marginTop: "3rem" }}>
            <SectionHeader
                title="Organisez vos actions"
                description={"Définissez l'ordre et les actions à réaliser par vos clients pour maximiser\nl'engagement."}
                canCollapse={false}
            >
                {hasDuplicate && (
                    <Alert severity="error" sx={{ marginBottom: "1rem", marginTop: "1rem" }}>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                            Vous ne pouvez pas ajouter plusieurs actions du même type.
                        </Typography>
                    </Alert>
                )}

                <Box mt={2.5} sx={styles.addActionButtonWrapper}>
                    <Button
                        variant="contained"
                        sx={{ ...styles.addActionButton, display: { xs: "none", md: "flex" } }}
                        endIcon={<AddIcon />}
                        onClick={handleMenuOpen}
                    >
                        Ajouter une action
                    </Button>

                    <IconButton sx={{ ...styles.addActionButton, display: { xs: "block", md: "none", maxWidth: "40px", borderRadius: "10px", marginTop: "0.5rem" } }} onClick={handleMenuOpen}>
                        <AddIcon sx={{ fontSize: "1.2rem" }} />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {Object.entries(actionsConfig).map(([type, { icon, name }]) => (
                            <MenuItem key={type} onClick={() => handleAddAction(type as ActionType)}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <img src={icon} alt={name} width={20} height={20} />
                                    <Typography variant="body2">{name}</Typography>
                                </Box>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <TableContainer sx={styles.tableContainer}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="actions">
                            {(provided) => (
                                <Table sx={{ tableLayout: "fixed" }}  ref={provided.innerRef} {...provided.droppableProps}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ ...styles.tableCell, borderLeft: "none", width: "22.5%" }}>Ordre des actions</TableCell>
                                            <TableCell sx={{ ...styles.tableCell, width: "35%" }}>Action</TableCell>
                                            <TableCell sx={{ ...styles.tableCell, width: "37.2%" }}>Cible</TableCell>
                                            <TableCell align="right" />
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {field.value.map((action, index) => (
                                            <Draggable key={action.id} draggableId={action.id} index={index}>
                                                {(provided) => (
                                                    <TableRow
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        sx={{ cursor: "grab" }}
                                                    >
                                                        <TableCell sx={{ ...styles.tableCell, borderLeft: "none", color: "custom.textSmallGrey" }}>{getActionOrder(index)}</TableCell>

                                                        <TableCell sx={{ ...styles.tableCell, color: "primary.main" }}>
                                                            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                                <Box sx={styles.actionIconWrapper}>
                                                                    <img style={{ width: "60%", height: "60%" }} src={actionsConfig[action.type].icon} alt={actionsConfig[action.type].name} />
                                                                </Box>

                                                                <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>{actionsConfig[action.type].name}</Typography>
                                                            </Box>
                                                        </TableCell>

                                                        <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", fontWeight: "normal" }}>
                                                            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                                <Typography sx={{ color: "custom.textSmallGrey", fontSize: "0.75rem", fontWeight: "bold" }}>{actionsConfig[action.type].target}</Typography>

                                                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: (theme) => theme.palette.custom.success + "20", color: "green", borderRadius: "5px", padding: "0.25rem" }}>
                                                                    <CheckCircleOutlineIcon sx={{ fontSize: "0.9rem" }} />
                                                                    <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>Intégré</Typography>
                                                                </Box>
                                                            </Box>
                                                        </TableCell>

                                                        <TableCell sx={{ ...styles.tableCell, width: "5%", textAlign: "center" }}>
                                                            <IconButton sx={styles.deleteButton} onClick={() => handleDelete(action.id)}>
                                                                <DeleteOutlineRoundedIcon sx={{ fontSize: "1.2rem" }} />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                )}
                                            </Draggable>
                                        ))}

                                        {provided.placeholder}

                                        <TableRow>
                                            <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", borderLeft: "none" }}>{getActionOrder(field.value.length)}</TableCell>
                                            <TableCell sx={{ ...styles.tableCell, color: "primary.main" }}>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                                                    <Box sx={{ ...styles.actionIconWrapper, boxShadow: "none" }}>
                                                        <AddCircleOutlineIcon sx={{ fontSize: "1.1rem" }} />
                                                    </Box>

                                                    <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>Ajouter une {getActionOrder(field.value.length)}</Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell />
                                            <TableCell />
                                        </TableRow>

                                        <TableRow>
                                            <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", border: "none" }}>
                                                Dernière action
                                            </TableCell>
                                            <TableCell colSpan={3} sx={{ ...styles.tableCell, borderBottom: "none" }}>
                                                <Box sx={{ color: "primary.main", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                        <Box sx={styles.actionIconWrapper}>
                                                            <GroupOutlinedIcon sx={{ fontSize: "1.1rem" }} />
                                                        </Box>
                                                        <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>
                                                            Parrainage (Par défaut)
                                                        </Typography>
                                                    </Box>

                                                    <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold", cursor: "pointer" }}>
                                                        Modifier
                                                    </Typography>

                                                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                                                        <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                                                            En savoir plus
                                                        </Typography>
                                                        <InfoOutlineIcon sx={{ fontSize: "1.2rem" }} />
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            )}
                        </Droppable>
                    </DragDropContext>
                </TableContainer>

                <Box mt={2.5} sx={styles.actionAlert}>
                    <Box sx={styles.actionAlertBar} />

                    <Box sx={{ ...styles.actionAlertContent, backgroundColor: (theme) => theme.palette.alert.main + "55" }}>
                        <Typography sx={{ fontSize: "0.7rem", fontWeight: "", color: "secondary.main", fontStyle: "italic" }}>
                            {"⚠️ Une seule action = une seule participation\nVos clients ne joueront qu'une seule fois si vous ne proposez qu'une seule action."}
                        </Typography>
                    </Box>
                </Box>
            </SectionHeader>
        </Box>
    );
}

export default ActionsOrder;