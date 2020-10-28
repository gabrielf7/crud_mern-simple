import React, { useState, useEffect } from 'react';
import Header from './../../components/Header';
import api from './../../Api';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { makeStyles, Container, Grid } from '@material-ui/core';
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

export default function UserList(){
  const classes = useStyles();
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    api.get(
      '/user/listar_user'
    ).then(response => {
      setUsers(response.data);
    })
  });

  async function handleDeleteUser(id) {
    if(window.confirm('Deseja excluir esse usuário?')){
      try{
        await api.delete(
          `/user/deletar_user/${id}`
        );
        setUsers(Users.filter(user => user.id !== id ));
      } catch (err) {
        alert('Erro ao deletar o usuário, tende novamente.');
      }

    }else{
      alert('Ação de excluir o usuário foi cancelada.');
    }
  }

  return(
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
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Senha</TableCell>
                    <TableCell align="right">data</TableCell>
                    <TableCell align="right">Ação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Users.map(user => (
                    <TableRow key={user._id}>
                      <TableCell component="th" scope="row">
                        {user.nome}
                      </TableCell>
                      <TableCell align="right">{user.email}</TableCell>
                      <TableCell align="right">{user.senha}</TableCell>
                      <TableCell align="right">data</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleDeleteUser(user._id)} type="button">
                          {/* <FiTrash2 size={20} color="#a8a8b3" /> */}
                          Deletar
                        </Button>
                        <Button component={Link} to={'/usuario-atualizar/' + user._id}>
                          Atualizar
                        </Button>
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