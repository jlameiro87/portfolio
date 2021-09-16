import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import image from '../images/laptop-coding-terminal.jpg';

const Welcome = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Box sx={{ width: '80%' }}>
          <Typography variant="h6" gutterBottom component="div">
            Hi there!!!, My name is Jorge Lameiro, I'm a senior software developer based on the US. My specialty is JavaScript Language mainly with React and Node, I also work with Java, PHP and Python.
          </Typography>

          <img src={image} alt='img' />
        </Box>
      </div>
    </div>
  )
}

export default Welcome;
