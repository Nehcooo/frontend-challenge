export const sectionHeader = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "0rem",
}

export const sectionHeaderContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
}

export const sectionHeaderBorder = {
    position: "absolute",
    left: 0,
    width: "8.5px",
    height: "100%",
    backgroundColor: "primary.main",
}

export const sectionHeaderContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "0rem",
    marginLeft: "2rem",
}

export const sectionHeaderTitle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
}

export const sectionHeaderDescription = {
    fontSize: "0.7rem",
    fontWeight: "bold",
    width: "100%",
    whiteSpace: "pre-line",
}

export const sectionHeaderCollapse = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: {
        xs: -40,
        md: -20,
    },
}

export const sectionHeaderCollapseIcon = {
    fontSize: "2rem",
    color: "primary.main",
}