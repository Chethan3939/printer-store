import { Box, Button, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword = ()=>{
    setShowPassword(!showPassword);
  }

  const navigate = useNavigate();

  const schema = z.object({
    userId: z.string().min(1,{message:'Field is required*'}),
    password: z.string().min(1,{message:'Field is required*'}),
  });

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver:zodResolver(schema),
    mode:'onBlur'
  })

  return (
    <div className="LoginContainer">
      <form onSubmit={handleSubmit((d)=>{console.log(d)})}>
      <Paper elevation={3}sx={{width:"400px", padding:'32px'}}>
        <Stack spacing={2}>
          <Typography variant="h4" sx={{color:'grey.700'}} >Login</Typography>
          <TextField label="UserId" type="text" {...register('userId')} helperText={errors.userId?.message?.toString()} ></TextField>
          <TextField label="Password" type={!showPassword ? 'text' : 'password'} {...register('password')} helperText={errors.password?.message?.toString()}
          InputProps={{
            endAdornment:(
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                </IconButton>
              </InputAdornment>
            )
          }}>

          </TextField>
          <Button variant="contained" type="submit" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>Login</Button>
          <Typography variant="body2">Don't have an account? <Box component={'a'} sx={{color:"warning.main", cursor:"pointer"}} onClick={()=>{navigate('/register')}}>Register</Box> </Typography>
        </Stack>
      </Paper>
      </form>
    </div>
  )
}

