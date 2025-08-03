export const gameChoice = {
    marginTop: "3.5rem",
    borderTop: 1.5,
    borderColor: "custom.border",
    paddingTop: "3.5rem",
}

export const gameChoiceContainer = {
    display: "flex",
    flexDirection: {
        xs: "column",
        md: "row",
    },
    justifyContent: "flex-start",
    gap: "1rem",
}

export const gameChoiceItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: "2.5rem",
    overflow: "hidden",
    "&:hover": {
        cursor: "pointer",
        opacity: 0.8,
    },
}

export const gameChoiceItemSelected = {
    ...gameChoiceItem,
    border: 5,
    borderColor: "primary.main",
    borderRadius: 5,
}

export const gameChoiceItemImg = {
    width: "100%",
    height: {
        xs: "100px",
        lg: "100%",
    },
    objectFit: "cover",
}