import { Box } from "@mui/material";

import { useController, type Control } from "react-hook-form";
import type { GameType, Campaign } from "../../types/CampaignType";

import SectionHeader from "../SectionHeader/SectionHeader";

import * as styles from "./styles";

import wheelImg from "../../assets/wheel.jpg";
import slotMachineImg from "../../assets/slot.png";
import mysteryImg from "../../assets/mystery.png";
import cardImg from "../../assets/card.png";

const games: { type: GameType, img: string }[] = [
    {
        type: "WHEEL",
        img: wheelImg,
    },    
    {
        type: "MYSTERY",
        img: mysteryImg,
    },
    {
        type: "SLOT_MACHINE",
        img: slotMachineImg,
    },
    {
        type: "CARD",
        img: cardImg,
    },
]

type Props = {
    control: Control<Campaign>;
}

function GameChoice({ control }: Props) {
    const { field } = useController({
        control,
        name: "configuration.game_type",
        defaultValue: "WHEEL",
    });

    return (
        <Box sx={styles.gameChoice}>
            <SectionHeader
                title="Choix du jeu"
                description="Sélectionnez parmi 4 jeux interactifs pour engager vos utilisateurs et créer une expérience unique."
            >
                <Box sx={styles.gameChoiceContainer}>
                    {games.map((game) => (
                        <Box
                            key={game.type}
                            sx={field.value === game.type ? styles.gameChoiceItemSelected : styles.gameChoiceItem}
                            onClick={() => field.onChange(game.type)}
                        >
                            <img draggable={false} src={game.img} alt={game.type} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                    ))}
                </Box>
            </SectionHeader>
        </Box>
    );
}

export default GameChoice;