import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  divRoot: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Portfolio = () => {
  const classes = useStyles();
  const websites = [
    {
      id: 1,
      text: 'My Weather',
      url: 'https://jlameiro-myweather.netlify.app/'
    },
    {
      id: 2,
      text: 'My Calculator',
      url: 'https://jlameiro-calculator.netlify.app/'
    },
    {
      id: 3,
      text: 'My Todos',
      url: 'https://jlameiro-todo.netlify.app/'
    },
    {
      id: 4,
      text: 'Rock - Pappers - Scissors Game',
      url: 'https://pedantic-neumann-171bbe.netlify.app/'
    },
    {
      id: 5,
      text: 'Task Tracker',
      url: 'https://focused-johnson-53f5f6.netlify.app/'
    },
    {
      id: 6,
      text: 'Dogs',
      url: 'https://jlameiro-dogs.netlify.app/'
    }
  ]

  return (
    <div className={classes.divRoot}>
      <Card className={classes.root}>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h6">Projects</Typography>
            <List dense={true}>
              {
                websites.map(item =>
                  <ListItem key={item.id}>
                    <Link href={item.url} target="_blank">{item.text}</Link>
                  </ListItem>
                )
              }
            </List>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Portfolio;
