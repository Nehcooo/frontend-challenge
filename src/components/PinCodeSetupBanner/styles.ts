export const container = {
    backgroundColor: (theme: any) => theme.palette.alert.main + "55",
    padding: {
        xs: "2.5rem 1.5rem",
        md: "2.5rem 3rem 2.5rem 1.5rem",
    },
    borderRadius: "0.5rem",
    border: 1.5,
    borderColor: "alert.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    flexDirection: {
        xs: "column",
        lg: "row",
    },
}

export const contentWrapper = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flexDirection: {
        xs: "column",
        md: "row",
    },
}

export const iconContainer = {
    minWidth: "40px",
    minHeight: "40px",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "alert.main",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
}

export const textContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: {
        xs: "center",
        md: "left",
    },
}

export const title = {
    fontWeight: "bold",
    fontSize: "1.2rem",
}

export const subtitle = {
    fontWeight: "bold",
    fontSize: "0.7rem",
}

export const button = {
    backgroundColor: "alert.main",
    color: "black",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    width: {
        xs: "100%",
        md: "auto",
    },
}
