export const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "1rem 0rem",
    backgroundColor: "rgba(224, 224, 224, 0.30)",
    borderBottom: 1,
    borderLeft: 1,
    borderColor: "custom.border",
    width: "100%",
}

export const headerContent = {
    margin: "0 2.5rem",
    width: "90%",
}

export const headerContentContainer = {
    display: "flex",
    flexDirection: {
        xs: "column",
        lg: "row",
    },
    justifyContent: "space-between",
    alignItems: {
        xs: "center",
    },
}

export const headerTitleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "relative",
}

export const headerContentTitle = {
    fontSize: {
        xs: "1.5rem",
        sm: "2rem",
        md: "2.75rem",
    },
    fontWeight: "bold",
    color: "primary.main",
}

export const headerContentCloseIcon = {
    display: "flex",
    alignItems: "center",
    marginRight: "0.4rem",
    marginTop: "-0.5rem",
}

export const headerContentCloseIconItem = {
    color: "secondary.main",
    fontSize: "1.0rem",
    transform: "rotate(10deg)",
}

export const headerContentRight = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
    width: {
        xs: "100%",
        md: "auto",
    },
}

export const headerButtonsWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: {
        xs: "column",
        md: "row",
    },
    gap: "0.75rem",
    width: "100%",
}

export const pinCodeButton = {
    position: "relative",
    backgroundColor: "#FFFFFF",
    color: "text.primary",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    textTransform: "none",
    border: 1,
    borderColor: "custom.border",
    overflow: "hidden",
    paddingLeft: "1.25rem",
    width: {
        xs: "100%",
        md: "auto",
    },
}

export const pinCodeButtonStripe = {
    position: "absolute",
    left: "0",
    top: "0",
    backgroundColor: "#6600CC",
    height: "100%",
    width: "0.5rem",
}

export const qrButton = {
    backgroundColor: "secondary.main",
    color: "text.secondary",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    textTransform: "none",
    width: {
        xs: "100%",
        md: "auto",
    },
}

export const saveButton = {
    backgroundColor: "primary.main",
    color: "text.secondary",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    width: {
        xs: "100%",
        md: "auto",
    },
}

export const moreButton = {
    borderRadius: 1,
    padding: "6px 8px",
    border: 1,
    borderColor: "custom.iconButtonBorder",
    width: {
        xs: "100%",
        md: "auto",
    },
    "&:hover": {
        backgroundColor: "primary.main",
        color: "white",
    },
}

export const moreButtonIcon = {
    fontSize: "1.2rem",
}

export const footer = {
    display: "flex",
    alignItems: "center",
    justifyContent: {
        xs: "center",
        lg: "flex-end",
    },
    gap: "0.75rem",
    paddingBottom: "1rem",
    paddingTop: {
        xs: "1rem",
        lg: "0rem",
    },
}

export const footerText = {
    fontSize: "0.8rem",
    color: "custom.grey",
    fontWeight: "500",
}

export const footerBar = {
    width: "8px",
    height: "15px",
    backgroundColor: "primary.main",
}

export const ellipseStyle = {
    position: "absolute" as const,
    overflow: "visible",
}
