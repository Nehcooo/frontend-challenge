export const container = {
    width: {
        xs: "100px",
        sm: "300px",
    },
    height: "auto",
    backgroundColor: "white",
    borderRight: 1,
    borderBottom: 1,
    borderColor: "custom.border",
    borderBottomRightRadius: "1rem",
    display: {
        xs: "flex",
        sm: "block",
    },
    flexDirection: "column",
    alignItems: "center",
}

export const logoWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "1.5rem 1.5rem 1rem 1.5rem",
    borderBottom: 1,
    borderColor: "custom.border",
}

export const enseignesWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "80%",
    margin: "0 auto",
    marginTop: "1rem",
}

export const enseignesButton = {
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
    alignItems: "center",
    justifyContent: "space-between",
    display: {
        xs: "none",
        sm: "flex",
    },
}

export const enseignesButtonStripe = {
    position: "absolute",
    left: "0",
    top: "0",
    backgroundColor: "primary.main",
    height: "100%",
    width: "0.5rem",
}

export const enseignesIconButton = {
    display: {
        xs: "flex",
        sm: "none",
    },
    color: "primary.main",
    borderRadius: "0.5rem",
    border: 1,
    borderColor: "custom.border",
}

export const navWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: {
        xs: "center",
        sm: "flex-start",
    },
    gap: "0.1rem",
    width: "80%",
    margin: "0 auto",
    marginTop: "1rem",
}

export const navItemBox = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.1rem",
}

export const navItemButton = (active: boolean) => ({
    display: {
        xs: "none",
        sm: "flex",
    },
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: active ? (theme: any) => theme.palette.primary.main + "1A" : "none",
    color: active ? "primary.main" : "custom.textSmallGrey",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.8rem",
    textTransform: "none",
    overflow: "hidden",
    width: "100%",
    padding: "0.5rem 0.8rem",
});

export const navItemIconButton = (active: boolean) => ({
    display: {
        xs: "flex",
        sm: "none",
    },
    color: active ? "primary.main" : "custom.textSmallGrey",
    backgroundColor: active ? (theme: any) => theme.palette.primary.main + "1A" : "none",
    borderRadius: "0.5rem",
});

export const flyerBox = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    width: "80%",
    margin: "0 auto",
    marginTop: "5rem",
    backgroundColor: (theme: any) => theme.palette.primary.main + "1A",
    border: 1.5,
    borderColor: "primary.main",
    borderRadius: "0.5rem",
    padding: "1.0rem 0rem",
    display: {
        xs: "none",
        sm: "flex",
    },
}

export const flyerTitle = {
    fontWeight: "bold",
    fontSize: "0.65rem",
}

export const flyerDescription = {
    fontWeight: 500,
    textAlign: "center",
    fontSize: "0.6rem",
    padding: "0.5rem",
}

export const flyerButton = {
    backgroundColor: "primary.main",
    color: "text.secondary",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    width: "80%",
}

export const mobileDivider = {
    display: {
        xs: "flex",
        sm: "none",
    },
    height: "2px",
    width: "100%",
    backgroundColor: "custom.border",
    marginTop: "1rem",
}

export const bottomSection = {
    display: "flex",
    flexDirection: "column",
    alignItems: {
        xs: "center",
        sm: "flex-start",
    },
    gap: "0.1rem",
    width: "80%",
    margin: "0 auto",
    marginTop: "1rem",
}

export const bottomButton = {
    display: {
        xs: "none",
        sm: "flex",
    },
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "none",
    color: "black",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.8rem",
    textTransform: "none",
    overflow: "hidden",
    width: "100%",
    padding: "0.5rem 0.8rem",
}

export const bottomIconButton = {
    display: {
        xs: "flex",
        sm: "none",
    },
    color: "custom.textSmallGrey",
    borderRadius: "0.5rem",
}