import React from 'react';
import { Link } from 'react-router-dom';
import { penvp } from './../router';
import { BsFillPersonPlusFill, BsBoxArrowInDownRight } from "react-icons/bs";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 20,
    backgroundColor: '#2bcf39' , 
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    marginTop: 10,
    alignSelf: 'flex',
  },
  
  h5: {
    color: 'white',
  },

  ButtonProdMain: {
    marginTop: 60,
  },

  ButtonProd: {
    margin: theme.spacing(1),

  },

  ButtonUser: {
    marginTop: 10,
    marginBottom: theme.spacing(1),
    backgroundColor: '#6f42c1',
    color: 'white',
  }
}));

export default function Header(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return(
    <div className="header">
      <AppBar position="static">
        <div>
          <p style={{ fontSize: 10, textAlign: "center" }}>Ícones feitos por  &nbsp; 
            <a href="https://icon54.com/" title="Pixel perfect" 
              style={{ marginTop: '-20px', color: '#2bcf39' }}
            >
              Pixel perfect
            </a>
            de &nbsp;
            <a href="https://www.flaticon.com/br/" title="Flaticon"
              style={{ marginTop: '-20px', color: '#2bcf39' }}
            >
              www.flaticon.com
            </a>
          </p>
        </div>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-controls="simple-menu1" 
            aria-haspopup="true" 
            onClick={handleClick1}
          >
            <BsBoxArrowInDownRight />
            {/* <MenuIcon /> */}
          </IconButton>
          <Menu
            id="simple-menu1"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
            className={classes.ButtonProdMain}
          >
            <MenuItem variant="outlined" color="primary" component={Link} to={penvp + '/produto/adicionar'}
            className={classes.ButtonProd} onClick={handleClose1}
            >
              ADD Produto
            </MenuItem>
            <MenuItem variant="outlined" color="primary" component={Link} to={penvp + '/produto/lista'}
            className={classes.ButtonProd} onClick={handleClose1}
            >
              LIST Produto
            </MenuItem>
          </Menu>
          <Typography className={classes.title} noWrap>
            <Typography className={classes.h5} component={Link} to={penvp + '/'} variant="h5">
              Flow CRUD
            </Typography>
          </Typography>

          <Button 
            className={classes.ButtonUser} 
            aria-controls="simple-menu"
            aria-haspopup="true" 
            onClick={handleClick}
            variant="outlined" color="secondary"
          >
            <BsFillPersonPlusFill className={classes.menuButton} />
            Usuário
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.ButtonProdMain}
          >
            <MenuItem component={Link} to={penvp + '/usuario/adicionar'} onClick={handleClose}>Adicionar</MenuItem>
            <MenuItem component={Link} to={penvp + '/usuario/lista'} onClick={handleClose}>Listar</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}