export const importColors = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
}

export const importColorsContent = {
    width: "90%",
    height: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "3rem",
    padding: "2.5rem 0rem",
}

export const importColorsTitle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    width: "100%",
}

export const importColorsTitleText = {
    fontSize: "0.75rem",
    color: "black",
    fontWeight: "500",
}

export const importColorsBar = {
    width: "8px",
    height: "15px",
    backgroundColor: "primary.main",
}

export const colorPreview = (color: string) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    backgroundColor: color + "55",
    padding: "0.35rem",
    borderRadius: "54px",
    width: "55px",
    height: "150px",
    border: 1,
    borderColor: "custom.border",
});

export const colorPreviewIcon = (color: string) => ({
    width: "100%",
    height: "100%",
    backgroundColor: color,
    borderRadius: "27px",
});

export const colorPreviewInput = {
    backgroundColor: "transparent",
    position: "relative",
    top: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: 1.5,
    borderColor: "custom.border",
    borderRadius: "5px",
    fontSize: "0.76rem",
    textAlign: "center",
    textDecoration: "none",
    width: "80px",
    height: "35px",
}