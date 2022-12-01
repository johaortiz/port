import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/slices/themeSlice';

function ButtonTheme() {

    const themeContext = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        e.preventDefault();
        themeContext === "dark"
            ? dispatch(setTheme(["theme", "light"]))
            : dispatch(setTheme(["theme", "dark"]));
    };

    return (
        <Box
            position="absolute"
            top={0}
            right={0}
            p={2}
        >
            {themeContext} mode
            <IconButton sx={{ ml: 1 }} onClick={handleChange} color="inherit">
                {themeContext === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}
export default ButtonTheme