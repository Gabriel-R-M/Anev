import React, { useState } from "react";
import {login} from "../services/database";
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import {Paper, CssBaseline, Grid, Button, Container, TextField, Typography} from "@material-ui/core";
import './estilo.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: 10,
    width: '100%',
  },
  submit: {
    width: '99%',
    marginTop: 10,
    marginRight: 50,
  },
}));

const Login = () => {
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');
  const [logado, setLogado] = useState(false);
  const classes = useStyles();
  const handleOnSubmit = (e) => {
    e.preventDefault();

    login(usuario, senha)
      .then(response => {
          if (!response.data.token) {
            alert('Dados incorretos.')
          } else {
            localStorage.setItem('nome', usuario);
            localStorage.setItem('token', `Bearer ${response.data.token}`)
            setLogado(true);
          }
      })
      .catch(error => {
        alert(error);
      })
  }

  if (logado) {
    return <Redirect to="/" />
  }

  return (
    <Grid container component="main" style={{ height: '100vh' }} >
      <CssBaseline />
      <Grid item xs={8} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Fazer o login
          </Typography>
          <form className={classes.form} className="login" onSubmit={handleOnSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="user"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="BTcad"
                >
                Entrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} md={7} id="foto" className="imagem" />
    </Grid>
  )
}

export default Login;