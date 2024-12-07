import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
 import "../styles/auth.css"
import { styled } from '@mui/material/styles';
import { Navigate, useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import '../App.css'
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function Authentication() {

  let navigate=useNavigate();

  const[username,setUsername]=React.useState();
  const[password,setPassword]=React.useState();
  const[name,setName]=React.useState();
  const[formstate,setFormstate]=React.useState(0);
  const[error,setError]=React.useState();
  const[message,setMessage]=React.useState();


  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const{handleRegister,handleLogin}=React.useContext(AuthContext);

let handleAuth=async()=>{

  try{
if(formstate==0){

  let result=await handleLogin(username,password)
    navigate("/home")
  
}

if(formstate==1){
  let result= await handleRegister(name,username,password)
  console.log(result)
  setFormstate(0)
  setUsername("")
  setError("")
  setPassword("")
  setMessage(result);
  setOpen(true)
 
}
  }catch(err){
    console.log(err)
let message=(err.response.data.message)
setError(message)
  }
}


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
   <div class='mainpage'>
    <div class="card">
    <Card className='cardo' variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        
      </Box>
      <div>
        <Button className='signin' variant={formstate==0?"contained":""} onClick={()=>{setFormstate(0)}}>Sign in</Button>
        <Button className='signup' variant={formstate==1?"contained":""} onClick={()=>{setFormstate(1)}}>Sign Up</Button>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >

      
        {formstate==1?
         <FormControl>
         <FormLabel htmlFor="email">Full Name</FormLabel>
         <TextField
           error={emailError}
           helperText={emailErrorMessage}
           id="Full name"
           type="Full name"
           name="Full name"
           placeholder="Your Full Name is"
           autoFocus
           required
           fullWidth
           variant="outlined"
           color={emailError ? 'error' : 'primary'}

           onChange={(e)=>setName(e.target.value)}
         />
       </FormControl>:<></>}
        <FormControl>
          <FormLabel htmlFor="email">Username</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="username"
            type="username"
            name="username"
            placeholder="Your username is"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
           
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
      

<p style={{color:"red"}}>{error}</p>

        <Button className='buttons' type="button" fullWidth variant="contained" onClick={()=>{
          handleAuth();
         
        }} >
          {formstate==0 ? "Login":"Register"}
        </Button>
       
      </Box>

      <Snackbar
      open={open}
      autoHideDuration={4000}
      message={message}
      />
      
    
    </Card>
    </div>
   </div>
  );
}