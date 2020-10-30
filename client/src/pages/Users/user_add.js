import React, { useState } from 'react';
import Header from './../../components/Header';
import api from './../../Api';

import { 
  Grid, Button, TextField, makeStyles, Container, Paper
} from '@material-ui/core';

//colors
// import { 
//   blue 
  
// } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  containerMain: {
    marginTop: '25px',
  },
  
  buttonSubmit: {
    marginTop: 20,
    padding: '10px 50px 10px 50px',
    boxShadow: '0 0 1em #2bcf39',
  },
}));

export default function UserAdd(){
  const classes = useStyles();
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(){
    const data = {
      nome: nome,
      email: email,
      senha: senha,
    }
    
    const resposta = await api.post('/user/new_user', data);
    if(resposta.status === 200){
      alert('Cadastrado com Sucesso.');
      window.location.href = "/usuario/lista";
    }else{
      if(resposta.status === 500){
        alert('Não cadastrado');
      }
    }
  }

  return(
    <>
      <Header />
      <Container maxWidth="sm" className={classes.containerMain}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h1 style={{ color: '#6f42c1'}}>
            Cadastro de Usuário
          </h1>
        </Grid>
  
        <form autoComplete="on">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <TextField 
                  fullWidth 
                  id="outlined-basic" 
                  type="text" 
                  variant="outlined" 
                  label="Nome" 
                  value={nome} 
                  onChange={e=>setNome(e.target.value)}
                  required 
                />
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
              <Paper elevation={3}>
                <TextField 
                  fullWidth 
                  id="outlined-basic" 
                  type="email" 
                  label="Email" 
                  variant="outlined" 
                  value={email} 
                  onChange={e=>setEmail(e.target.value)}
                  required 
                />
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
              <Paper elevation={3}>
                <TextField 
                  fullWidth 
                  id="outlined-basic" 
                  type="password" 
                  label="Senha" 
                  variant="outlined" 
                  value={senha} 
                  onChange={e=>setSenha(e.target.value)}
                  required 
                />
              </Paper>
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center">
              <Button
                variant="outlined" 
                type="submit" 
                className={classes.buttonSubmit}
                onClick={handleSubmit}
              >
                Confirmar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}