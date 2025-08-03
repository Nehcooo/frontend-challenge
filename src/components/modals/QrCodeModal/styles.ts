export const modal = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#FFFBEB",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    outline: "none",
};

export const iconContainer = {
    p: 1.5,
    bgcolor: "#FEF3C7",
    borderRadius: "9999px",
    mb: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export const icon = {
    color: "#D97706",
    fontSize: 32,
};

export const title = {
    fontWeight: "bold",
    color: "#92400E",
    mb: 1,
};

export const subtitle = {
    color: "#B45309",
    mb: 2,
};

export const button = {
    mt: 3,
    bgcolor: "#FBBF24",
    color: "white",
    fontWeight: "bold",
    padding: "10px 24px",
    borderRadius: "8px",
    "&:hover": {
        bgcolor: "#F59E0B",
    },
};
