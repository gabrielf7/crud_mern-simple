import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 60,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: 10,
    alignSelf: 'flex',
  },

  margin: {
    margin: theme.spacing(1),
    border: '1px solid white',
    color: 'white',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className="header">
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            component={Link} to="/"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>
          <Button size="medium" component={Link} to="/produto/adicionar" className={classes.margin}>
            ADD Produto
          </Button>
          <Button size="medium" component={Link} to="/produto/lista" className={classes.margin}>
            Listar Produto
          </Button>
          {/* <Button size="medium" className={classes.margin}>
            ADD Usuário
          </Button>
          <Button size="medium" className={classes.margin}>
            Listar Usuário
          </Button> */}
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
            className={classes.margin}
          >
            Usuário
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/usuario/adicionar">
                <ListItemText primary="Adicionar" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/usuario/lista">
                <ListItemText primary="Listar" />
              </Link>
            </StyledMenuItem>
          </StyledMenu>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}