import React, { useState, useEffect } from 'react';
import Header from './../../components/Header';
import api from './../../Api';
import { penvp } from './../../router';
import { Link } from 'react-router-dom';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import { makeStyles, Container, Grid, Button, ButtonGroup } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  containerMain: {
    marginTop: '25px',
  },
  
  table: {
    minWidth: 650,
  },
});

export default function ProdList() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(
      '/product/listar_prod'
    ).then(response => {
      setProduct(response.data);
    })
  });

  async function handleDeleteProduct(id) {
    if(window.confirm('Deseja excluir esse produto?')){
      try{
        await api.delete(
          `/product/deletar_prod/${id}`
        );
        setProduct(product.filter(prod => prod.id !== id ));
      } catch (err) {
        alert('Erro ao deletar o usuário, tende novamente.');
      }

    }else{
      alert('Ação de excluir o produto foi cancelada.');
    }
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.containerMain}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Categoria</TableCell>
                    <TableCell align="right">Quantidade</TableCell>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Ação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {product.map(prod => (
                    <TableRow key={prod._id}>
                      <TableCell component="th" scope="row">
                        {prod.nome}
                      </TableCell>
                      <TableCell align="right">{prod.descricao}</TableCell>
                      <TableCell align="right">{prod.categoria}</TableCell>
                      <TableCell align="right">{prod.quantidade}</TableCell>
                      <TableCell align="right">
                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prod.preco)}
                      </TableCell>
                      <TableCell align="right">
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                          <Button component={Link} to={penvp + '/produto-atualizar/' + prod._id} 
                            style={{ color: "#2bcf39", fontSize: 30 }}
                          >
                            <AiOutlineEdit />
                          </Button>
                          <Button onClick={() => handleDeleteProduct(prod._id)} type="button" 
                            style={{ color: "#710000", fontSize: 30 }}
                          >
                            <AiOutlineDelete />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}