import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
const Goback = () => {
    const navigate = useNavigate();
    return (
        <>
            <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon />
            </IconButton>
            <Typography>Goback</Typography>
        </>
    );
};
export default Goback;