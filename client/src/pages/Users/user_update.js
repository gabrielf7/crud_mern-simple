import React, { useEffect, useState } from 'react';
import Header from './../../components/Header';
import api from './../../Api';
import { useParams } from 'react-router-dom';

import { 
  Grid, Button, TextField, makeStyles, Container, Paper
} from '@material-ui/core';

//colors
import { 
  blue 
  
} from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  containerMain: {
    marginTop: '25px',
  },
  
  buttonSubmit: {
    marginTop: 10,
    backgroundColor: blue['900'],
    color: 'white',
    boxShadow: '0 0 1em gold',
  },
}));

export default function UserUpdate(){
  const classes = useStyles();
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { idUser } = useParams();

  useEffect(() => {
    async function listarUser() {
      var respp = await api.get('/user/listar_detalhes/' + idUser);
      setNome(respp.data.nome);
      setEmail(respp.data.email);
      setSenha(respp.data.senha);
    }
    listarUser();
  },[]);

  async function handleSubmit(){
    const data = {
      nome: nome,
      email: email,
      senha: senha,
      _id: idUser,
    }
    const resposta = await api.put('/user/atualizar_user', data);
    if(resposta.status === 200){
      alert('Cadastrado atualizado com Sucesso.');
      window.location.href = "/usuario/lista";
    }else{
      if(resposta.status === 500){
        alert('Erroooou, cadastrado não atualizado.');
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