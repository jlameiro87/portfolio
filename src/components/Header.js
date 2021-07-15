import { Link } from "react-router-dom";
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { purple, blueGrey } from '@material-ui/core/colors';

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
}));

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: blueGrey[500]
    }
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Portfolio
            </Typography>

            <Link to="/"><Button className={classes.menuButton} variant="contained" color="secondary">Welcome</Button></Link>
            <Link to="/about"><Button className={classes.menuButton} variant="contained" color="secondary">About</Button></Link>
            <Link to="/portfolio"><Button className={classes.menuButton} variant="contained" color="secondary">Portfolio</Button></Link>
            <Link to="/contact"><Button className={classes.menuButton} variant="contained" color="secondary">Contact</Button></Link>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}

export default Header;
