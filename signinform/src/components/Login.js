import React from "react"
import Grid from "@mui/material/Grid"
import { Paper } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import LockIcon from '@mui/icons-material/Lock';
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
const Login=()=> {
    const btnstyle={
        margin: "8px 0"
    }
    const textfield={
  
    }
    const avatarStyle={
        backgroundColor: "green"
    }
    const paperStyle={
        padding: "20px",
        height: "80vh",
        width: 280,
        margin: "20px auto",
    }
    return(
        <Paper elevation={10} style={paperStyle}>
            ,<Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <TextField label="Username" placeholder="Enter Username" margin="dense" fullWidth required></TextField>
            <TextField label="Password" placeholder="Enter Password" type="password" margin="dense" fullWidth required></TextField>
            <FormControlLabel
                control={
                    <Checkbox
                        name="Checked"
                        color="primary"
                    />}
                    label="Remember me"
                />   

                <Button type="submit" color="primary" variant="contained" fullWidth style={btnstyle}> Sign In</Button>
                <Typography
                    style={textfield}>
                    <Link href="#">
                        Forgot password?
                    </Link>
                </Typography>
                <Typography>
                    <Link href="#">
                        Don't have an account? Sign up
                    </Link>
                </Typography>
        </Paper>
    )
}


export default Login;
