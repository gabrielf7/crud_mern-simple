import React, { useState } from 'react';
// import React, { useState } from 'react';
import Header from './../../components/Header';
import api from './../../Api';

import { 
  Grid, Button, TextField, makeStyles, Container
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

export default function ProdAdd(){
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  async function handleSubmit(){
    const data = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      preco: preco,
      quantidade: quantidade
    }
    const resposta = await api.post('/product/new_prod', data);
    if(resposta.status === 200){
      alert('Cadastrado com Sucesso.');
      // window.location.href = "/";
    }else{
      if(resposta.status === 500){
        alert('Não cadastrado');
      }
    }
  }

  return(
    <div>
      <Header />
      <Container maxWidth="lg" className={classes.containerMain}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h1>Cadastro de Produto</h1>
          </Grid>
    
          <form autoComplete="on">
            <Grid item xs={12} style={{ marginTop: 10 }}>
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
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                type="text" 
                label="Descrição" 
                variant="outlined" 
                value={descricao} 
                onChange={e=>setDescricao(e.target.value)}
                required 
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                type="text" 
                label="Categoria" 
                variant="outlined" 
                value={categoria} 
                onChange={e=>setCategoria(e.target.value)}
                required 
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                type="number" 
                label="Preço" 
                variant="outlined" 
                value={preco} 
                onChange={e=>setPreco(e.target.value)}
                required 
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                type="number" 
                label="Quantidade" 
                variant="outlined" 
                value={quantidade} 
                onChange={e=>setQuantidade(e.target.value)}
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                fullWidth 
                variant="outlined" 
                type="submit" 
                className={classes.buttonSubmit}
                onClick={handleSubmit}
              >
                Confirmar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  );
}