import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    textDecoration: 'none'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Portfolio
          </Typography>

          <Link className={classes.menuItem} to="/"><Button className={classes.menuButton} variant="contained" color="secondary">Welcome</Button></Link>
          <Link className={classes.menuItem} to="/about"><Button className={classes.menuButton} variant="contained" color="secondary">About</Button></Link>
          <Link className={classes.menuItem} to="/portfolio"><Button className={classes.menuButton} variant="contained" color="secondary">Portfolio</Button></Link>
          <Link className={classes.menuItem} to="/contact"><Button className={classes.menuButton} variant="contained" color="secondary">Contact</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
