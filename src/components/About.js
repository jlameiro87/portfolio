import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
  },
  avatar: {
    backgroundColor: red[500],
  },
  divRoot: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const About = () => {
  const classes = useStyles();
  const certifications = [
    {
      id: 1,
      text: 'B.Sc. Software Engineer.'
    },
    {
      id: 2,
      text: 'CS50\'s Introduction to Computer Science.'
    },
    {
      id: 3,
      text: 'CS50\'s Web Programming with Python and JavaScript.'
    },
    {
      id: 4,
      text: 'FreeCodeCamp\'s JavaScript Algorithms and Data Structures.'
    }
  ];

  return (
    <div className={classes.divRoot}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="user" className={classes.avatar}>
              JL
            </Avatar>
          }
          title="Jorge Lameiro"
          subheader="Senior Full Stack Software Developer"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Accomplished FullStack Software Developer specialized in JavaScript language and full software development life cycle,
            including requirement gathering, coding and testing; with proven track record developing business solutions using
            cutting edge technologies. Entrepreneur and engineer with experience including co-founding PiBLOC, a Cuban freelancer company.
            Believes in building small, well-tested, functional pieces making complex problems simple with expressive, maintainable code.
            Started his career as a software engineer and Web Master at the Eastern University in Cuba. Over the course of his career,
            successfully occupied a variety of roles across product and engineering -managing teams of up to 12 people.
            Interested in a challenging technical environment where innovation, teamwork and curiosity is encouraged to create
            great products and services. Perpetual learner.
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography variant="h6">Professional Experience</Typography></div>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">February 2020 – Present Day</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>Software Developer at Farelogix an Accelya Company</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">November 2015 – December 2019</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>Co-founder & FullStack Developer at PiBLOC</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">September 2011 – November 2015</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>Webmaster & FullStack Developer at Universidad de Oriente, Cuba</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Typography variant="h6">Certifications</Typography>
            <List dense={true}>
              {
                certifications.map(item =>
                  <ListItem key={item.id}>
                    <ListItemText
                      primary={item.text}
                    />
                  </ListItem>
                )
              }
            </List>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default About;
