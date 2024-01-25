import { Button, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z  from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

 export const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const handleTogglePassword= ()=>{
        setShowPassword(!showPassword);
    }

    const OnClickRegister = ()=>{
        navigate('/login');
    }

    const schema = z.object({
      firstName: z.string().min(1,{message:'Field is required'}),
      lastName: z.string().min(1,{message:'Field is required'}),
      userId: z.string().min(1,{message:'Field is required'}),
      email: z.string().email().min(1),
      password: z.string().min(1,{message:'Field is required'}),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<any>({
      resolver: zodResolver(schema),
      mode: 'onBlur'
    });

  return (
    <div>
      <div className="LoginContainer">
          <form onSubmit={handleSubmit((d)=>console.log(d))}>
      <Paper elevation={3}sx={{width:"400px", padding:'32px'}}>
        <Stack spacing={2}>
          <Typography variant="h4" sx={{color:'grey.700'}}>Register</Typography> 
          <TextField label="First Name" type="text" {...register('firstName')} helperText={errors.firstName?.message?.toString()}></TextField>
          <TextField label="Last Name" type="text" {...register('lastName')} helperText={errors.lastName?.message?.toString()}></TextField>
          <TextField label="userId" type="text" {...register('userId')} helperText={errors.userId?.message?.toString()}></TextField>
          <TextField label="email" type="text" {...register('email')} helperText={errors.email?.message?.toString()}></TextField>
          <TextField label="Password" type={!showPassword ? 'text' : 'password'} {...register('password')} helperText={errors.password?.message?.toString()}
          InputProps={{ 
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}>

          </TextField>
          <Button variant="contained" type="submit"
           sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
           Register
           </Button>
        </Stack>
      </Paper>
           </form>
    </div>
    </div>
  )
}



