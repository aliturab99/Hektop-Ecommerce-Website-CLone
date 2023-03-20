import { Box, Button } from "@mui/material";
import { useState } from "react";
import { themeStyles } from '../../../themeStyles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { BrowserRouter, Link } from "react-router-dom";

function MenuLink({ data }) {

    const [dropdowns, setDropdowns] = useState(data || []);

    const handleClick = (index, event) => {
        const newDropdowns = [...dropdowns];
        newDropdowns[index].anchorEl = event.currentTarget;
        newDropdowns[index].open = true;
        setDropdowns(newDropdowns);
    };


    const handleClose = (index) => {
        const newDropdowns = [...dropdowns];
        newDropdowns[index].anchorEl = null;
        newDropdowns[index].open = false;
        setDropdowns(newDropdowns);
    };


    return (
        <>
            {dropdowns.map((dropdown, index) => (
                dropdown.options ?
                    <Box key={dropdown.id}>
                        <Button
                            id={dropdown.id}
                            aria-controls={dropdown.open ? dropdown.id + '-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={dropdown.open ? 'true' : undefined}
                            onClick={(event) => handleClick(index, event)}
                            sx={{ ...themeStyles.btnMenu }}
                            endIcon={<KeyboardArrowDownIcon style={{ ...themeStyles.btnMenuIcon }} />}
                        >
                            {dropdown.label}
                        </Button>
                        <Menu
                            key={index}
                            id={dropdown.id + '-menu'}
                            MenuListProps={{
                                'aria-labelledby': dropdown.id,
                            }}
                            anchorEl={dropdown.anchorEl}
                            open={dropdown.open}
                            onClose={() => handleClose(index)}
                            TransitionComponent={Fade}
                        >
                            {dropdown.options.map((option, index) => (
                                <MenuItem key={index} onClick={() => handleClose(index)}>
                                    <Link to={option} style={{ ...themeStyles.menuLink }}>{option}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    :
                    <Button
                        sx={{ ...themeStyles.btnMenu }}
                        key={dropdown.id}
                    >
                        <Link style={{ ...themeStyles.btnMenu }}
                            to={dropdown.label}
                        >
                            {dropdown.label}
                        </Link>
                    </Button>

            ))}
        </>
    );
}

export default MenuLink;