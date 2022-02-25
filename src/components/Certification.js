import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Certification = () => {
  const certifications = [
    {
      id: 1,
      text: 'B.Sc. Software Engineer.',
      url: null
    },
    {
      id: 2,
      text: 'CS50\'s Introduction to Computer Science.',
      url: 'https://certificates.cs50.io/1918fa46-f205-4600-973c-0f35d12c9521.png?size=letter'
    },
    {
      id: 3,
      text: 'CS50\'s Web Programming with Python and JavaScript.',
      url: 'https://certificates.cs50.io/343b8991-fcbe-4ebb-83e5-220d1640668c.png?size=letter'
    },
    {
      id: 4,
      text: 'FreeCodeCamp\'s JavaScript Algorithms and Data Structures.',
      url: 'https://www.freecodecamp.org/certification/jlameiro/javascript-algorithms-and-data-structures'
    },
    {
      id: 5,
      text: 'FreeCodeCamp\'s Front End Development Libraries.',
      url: 'https://www.freecodecamp.org/certification/jlameiro/front-end-development-libraries'
    }
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h6">Certifications</Typography>
      <List dense={true}>
        {
          certifications.map(item =>
            <ListItem key={item.id}>
              {item.url && <Link href={item.url} target="_blank">{item.text}</Link>}
              {!item.url && <ListItemText primary={item.text} />}
            </ListItem>
          )
        }
      </List>
    </div>
  )
}

export default Certification;
