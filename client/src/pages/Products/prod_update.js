import React, { useState, useEffect } from 'react';
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
    marginTop: 20,
    padding: '10px 100px 10px 100px',
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

  const { idProduct } = useParams();

  useEffect(() => {
    async function listarProduct() {
      var respp = await api.get('/product/listar_detalhes/' + idProduct);
      setNome(respp.data.nome);
      setDescricao(respp.data.descricao);
      setCategoria(respp.data.categoria);
      setPreco(respp.data.preco);
      setQuantidade(respp.data.quantidade);
    }
    listarProduct();
  },[]);

  async function handleSubmit(){
    const data = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      preco: preco,
      quantidade: quantidade,
      _id: idProduct
    }
    const resposta = await api.put('/product/atualizar_prod', data);
    if(resposta.status === 200){
      alert('Produto foi atualizado.');
      window.location.href = "/produto/lista";
    }else{
      if(resposta.status === 500){
        alert('Errrooouuu, Produto não foi atualizado');
      }
    }
  }

  return(
    <>
      <Header />
      <Container maxWidth="lg" className={classes.containerMain} >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h1 style={{ color: '#6f42c1'}}>
            Cadastro de Produto
          </h1>
        </Grid>
        <form autoComplete="on">
          <Grid container spacing={2} justify="center" alignItems="center" style={{ marginTop: 20 }}>
            <Grid item xs={6} style={{ marginTop: 10 }}>
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
            <Grid item xs={6} style={{ marginTop: 10 }}>
              <Paper elevation={3}>
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
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            <Paper elevation={3}>
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
            </Paper>
          </Grid>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={6} style={{ marginTop: 10 }}>
              <Paper elevation={3}>
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
              </Paper>
            </Grid>
            <Grid item xs={6} style={{ marginTop: 10 }}>
              <Paper elevation={3}>
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
              </Paper>
            </Grid>
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
        </form>
      </Container>
    </>
  );
}