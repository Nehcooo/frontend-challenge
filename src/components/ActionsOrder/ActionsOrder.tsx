import { useState } from "react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Typography } from "@mui/material";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

import SectionHeader from "../SectionHeader/SectionHeader";

import * as styles from "./styles";

type Action = {
    id: string;
    name: string;
    url: string;
    integrated: boolean;
};

const defaultActions: Action[] = [
    { id: "1", name: "Avis Google", url: "https://google.com", integrated: true },
];

export default function ActionsOrder() {
    const [actions, setActions] = useState<Action[]>(defaultActions);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reordered = Array.from(actions);
        const [moved] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, moved);
        setActions(reordered);
    };

    const handleAddAction = () => {
        const newId = crypto.randomUUID();
        setActions((prev) => [
            ...prev,
            { id: newId, name: "Nouvelle Action", url: "", integrated: false },
        ]);
    };

    const handleDelete = (id: string) => {
        setActions((prev) => prev.filter((a) => a.id !== id));
    };

    const getActionOrder = (index: number) => {
        const orders = [
            "Première action",
            "Deuxième action",
            "Troisième action",
            "Quatrième action",
        ];
        return orders[index] || `${index + 1}ᵉ action`;
    };

    return (
        <Box sx={{ marginTop: "3rem" }}>
            <SectionHeader
                title="Organisez vos actions"
                description={"Définissez l'ordre et les actions à réaliser par vos clients pour maximiser\nl'engagement."}
                canCollapse={false}
            >
                <Box mt={2.5} sx={styles.addActionButtonWrapper}>
                    <Button
                        variant="contained"
                        sx={styles.addActionButton}
                        endIcon={<AddIcon />}
                        onClick={handleAddAction}
                    >
                        Ajouter une action
                    </Button>
                </Box>

                <TableContainer sx={styles.tableContainer}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="actions">
                            {(provided) => (
                                <Table ref={provided.innerRef} {...provided.droppableProps}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ ...styles.tableCell, borderLeft: "none", width: "22.5%" }}>Ordre des actions</TableCell>
                                            <TableCell sx={{ ...styles.tableCell, width: "35%" }}>Action</TableCell>
                                            <TableCell sx={styles.tableCell}>Cible</TableCell>
                                            <TableCell align="right" />
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {actions.map((action, index) => (
                                            <Draggable key={action.id} draggableId={action.id} index={index}>
                                                {(provided) => (
                                                    <TableRow
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        sx={{ cursor: "grab" }}
                                                    >
                                                        <TableCell sx={{ ...styles.tableCell, borderLeft: "none", color: "custom.textSmallGrey" }}>{getActionOrder(index)}</TableCell>
                                                        <TableCell sx={styles.tableCell}>{action.name}</TableCell>
                                                        <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", fontWeight: "normal" }}>{action.url}</TableCell>
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
                                            <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", borderLeft: "none" }}>{getActionOrder(actions.length)}</TableCell>
                                            <TableCell sx={{ ...styles.tableCell, color: "primary.main" }}>
                                                Ajouter une {getActionOrder(actions.length)}
                                            </TableCell>
                                            <TableCell />
                                            <TableCell />
                                        </TableRow>

                                        <TableRow sx={{ position: "relative" }}>
                                            <TableCell sx={{ ...styles.tableCell, color: "custom.textSmallGrey", border: "none" }}>Dernière action</TableCell>
                                            <TableCell sx={{ ...styles.tableCell, height: "100%", position: "absolute", color: "primary.main", display: "flex", justifyContent: "space-between", alignItems: "center", width: "77.5%", borderBottom: "none" }}>
                                                <Typography sx={{ color: "black", fontSize: "0.75rem", fontWeight: "bold" }}>Parrainage (Par défaut)</Typography>
                                                <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold", border: "none" }}>Modifier</Typography>

                                                <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                    <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold" }}>En savoir plus</Typography>
                                                    <InfoOutlineIcon sx={{ fontSize: "1.2rem" }} />
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            )}
                        </Droppable>
                    </DragDropContext>
                </TableContainer>
            </SectionHeader>
        </Box>
    );
}
