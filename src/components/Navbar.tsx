import { AppBar, Button, ButtonGroup, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import PrintIcon from '@mui/icons-material/Print';
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate();

    const OnClickLogin = ()=>{
        navigate('/login')
    }

    const OnClickRegister = ()=>{
        navigate('/register')
    }

    return (
        <div>
            <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="label">
                        <PrintIcon></PrintIcon>
                    </IconButton>
                    <Typography variant="h6" component={'div'} sx={{ flexGrow: 1, textAlign: 'start' }}>
                        Printer Store
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" >Home</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contact</Button>
                        <ButtonGroup variant="outlined" color="inherit">
                            <Button onClick={OnClickLogin}>Login</Button>
                            <Button onClick={OnClickRegister}>Register</Button>
                        </ButtonGroup>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

