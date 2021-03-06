import React from 'react';
import Header from './../../components/Header';

import { Container, Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  containerMain: {
    marginTop: '25px',
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.containerMain} >
        <Grid container spacing={2} justify="center" alignItems="center" style={{ marginTop: 50 }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Paper elevation={3}>
              <h1 style={{ color: '#6f42c1' }}>
                Olá, Bem vindo Visitante.
              </h1>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}