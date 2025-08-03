import { Menu, MenuItem } from "@mui/material";

import * as styles from "./styles";

interface MoreOptionsMenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: () => void;
}

function MoreOptionsMenu({ anchorEl, open, onClose }: MoreOptionsMenuProps) {
    return (
        <Menu anchorEl={anchorEl} open={open} onClose={onClose} sx={styles.menu}>
            <MenuItem sx={styles.menuItem}>Test 1</MenuItem>
            <MenuItem sx={styles.menuItem}>Test 2</MenuItem>
            <MenuItem sx={styles.menuItem}>Test 3</MenuItem>
        </Menu>
    );
}

export default MoreOptionsMenu;