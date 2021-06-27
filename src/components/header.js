import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Typography} from "@material-ui/core";

const Header = () => {
  const [nome, setNome] = useState(null);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem('nome');
    if (nomeUsuario) {
      setNome(nomeUsuario)
    } else {
      setNome(null)
    }
  }, [])

  return (
    <Container className="header">
      <Typography variant="h4" className="centralizar">
        {nome ? `Administrador: ${nome}` : 'Ola, fique de olho em nossos produtos!'}
      </Typography>
      <div className="centralizar">
      {nome ? (
        <Link to="cadastrar" style={{textDecoration: 'none'}} >
          <Button variant="contained" className="BTcad">
            + Produto
          </Button>
        </Link>
      ) : ''}
      <Link to={nome ? 'sair' : 'login'} style={{textDecoration: 'none'}} >
        <Button variant="contained" className="BTetc ml5">
          {nome ? 'Sair' : 'Logar'}
        </Button>
      </Link>
      </div>
    </Container>
  )
}

export default Header;