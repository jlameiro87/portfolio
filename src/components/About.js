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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
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
