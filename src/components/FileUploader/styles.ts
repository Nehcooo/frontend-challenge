export const fileUploader = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}

export const fileUploaderContent = (isDragging: boolean) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23E3E3E3FF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='3' stroke-linecap='square'/%3e%3c/svg%3e\")",
    ...(isDragging && {
        backgroundColor: (theme: any) => theme.palette.primary.main + "55",
    }),
})

export const fileUploaderTitle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
}

export const fileUploaderTitleText = {
    fontSize: "0.75rem",
    color: "black",
    fontWeight: "500",
}

export const fileUploaderBar = {
    width: "8px",
    height: "15px",
    backgroundColor: "primary.main",
}

export const fileUploaderIcon = {
    width: "54px",
    height: "54px",
    backgroundColor: (theme: any) => theme.palette.custom.textSmallGrey + "55",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
}

export const selectFileButton = {
    backgroundColor: "primary.main",
    color: "text.secondary",
    boxShadow: "none",
    outline: "none",
    fontWeight: "bold",
    fontSize: "0.7rem",
    width: "auto",
}

export const fileUploaderSelectedFile = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
}

export const fileUploaderSelectedFileText = {
    fontSize: "0.75rem",
    color: "black",
}