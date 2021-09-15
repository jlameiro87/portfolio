import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333'
    },
    secondary: {
      main: '#e0e0e0'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Container>
          <Typography component="div" style={{ height: '90vh', paddingTop: '20px' }}>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/welcome">
                <Welcome />
              </Route>
            </Switch>
          </Typography>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
