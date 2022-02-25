import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Typography from '@material-ui/core/Typography';

const Experience = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Professional Experience</Typography>
      </div>
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
            <Typography>Software Developer at Accelya Group</Typography>
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
            <Typography color="textSecondary">August 2012 – January 2013</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Software Developer at America Techway S.A. Panama. · Freelance</Typography>
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
    </>
  )
}

export default Experience;
