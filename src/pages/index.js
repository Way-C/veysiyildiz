import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { SocialIcon } from 'react-social-icons';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import SkillsCloud from '../components/SkillsCloud';
import ColorizeWords from '../components/ColorizeWords';
import data, { getRandomColor } from '../data';


import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    margin: '0',
    background: '#2a2c2e',
    minHeight: '100vh',
  },
  button: {
    background: '#40454a',
    color: 'white',    
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    '&:hover': {
      background: '#6a6f75',
    }
  },
  paper: {
    background: '#303337',
    textAlign: 'center',
  },
  paperTimeline: {
    background: '#303337',
  },

  profileCard: {
    background: '#40454a',
  },
  avatar: {
    width: '205px',
    height: '205px',
    margin: '24px auto 0',
  },
  name: {
    fontSize: '31px',
  },
  socialIcon: {
    marginTop: '12px',
    width: '40px !important',
    height: '33px !important',
    '& svg': {
      borderRadius: '10px !important',
    },
  },
  stepperButton: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { skills } = data;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} style={{maxWidth: '1050px', margin: '0 auto', width: '100%'}}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Card className={classes.profileCard}>
                <CardContent>
                  <Avatar className={classes.avatar}>
                    VY
                  </Avatar>
                </CardContent>
                <CardContent>
                  <Typography component="h1" className={classes.name}>
                    veysi yıldız                  
                  </Typography>
                  <Typography component="p">
                    FrontEndDeveloper
                  </Typography>
                  <SocialIcon url="http://facebook.com/biliyem" color="#ffffff" className={classes.socialIcon} />
                  <SocialIcon url="http://twitter.com/veysiyildiz" color="#ffffff" className={classes.socialIcon} />
                  <SocialIcon url="http://instagram.com/veysiy" color="#ffffff" className={classes.socialIcon} />
                  <SocialIcon url="https://www.linkedin.com/in/veysiyildiz/" color="#ffffff" className={classes.socialIcon} />

                </CardContent>
              </Card>
              <Button variant="extendedFab" aria-label="download cv" className={classes.button}>
                download cv
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={24} >
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Typography component="h1" className={classes.name}>
                    about me
                  </Typography>
                  <Typography component="p">
                    <ColorizeWords text='Experienced Frontend Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Javascript, User Experience, SEO, PHP, E-commerce, and WordPress. Focused on React, Redux, Webpack and Node.' />
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Typography component="h1" className={classes.name}>
                    personal information
                  </Typography>
                  <p><ColorizeWords text='Marital Status: Married and have a child.' /></p>
                  <p><ColorizeWords text='Military Service: Completed in 2006' /></p>
                  <p><ColorizeWords text='Place & Date of Birth: Batman / Turkey – 03.08.1981' /></p>

                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Typography component="h1" className={classes.name}>
                    professional skills
                  </Typography>
                  <VisibilitySensor
                    partialVisibility 
                    offset={{ bottom: 80 }}
                    onChange={this.onVisibilitySensorChange}
                  >
                    <SkillsCloud 
                      className='tag-cloud'
                      rotate={null}
                      style={{
                        fontFamily: 'sans-serif',
                        // fontSize: () => Math.round(Math.random() * 50) + 16,
                        fontSize: 30,
                        color: () => getRandomColor(),
                        padding: 5,
                        width: '100%',
                        height: '600px',
                      }}>
                        {skills.map( (item) => ( 
                          <div 
                            key={item.name} 
                            style={{
                              fontSize: (item.knowledge*5),
                              fontWeight: 'bold',
                              opacity: (item.knowledge/10),
                            }}
                          >
                            {item.name}
                          </div>
                        ))}
                    </SkillsCloud>

                  </VisibilitySensor>

                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paperTimeline}>
                  <Typography component="h2" className={classes.name}>
                    work experience
                  </Typography>
                  <Grid container spacing={24} >
                    <Grid item xs={12}>
                      <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                          date="11/2010 – Present"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#e86971'}}
                        >
                          <h3>Overteam</h3>
                          <h4>Senior Front End Developer</h4>
                          <p>
                          ReactJs Front End Development  
                          Samples  
                          https://meyhanedeyiz.biz ReactJs, Redux, Redux Saga, Webpack, Node, Es6
                          </p>
                          <p>
                          Front end development and implementation on CMS 
                          Sample
                          http://www.arcelikas.com/   .Net Project frontend implementation
                          http://howtoistanbul.com  WordPress and PHP Symfony 1.4 hybrid 
                          </p>
                          <p>
                          Wordpress full stack development 
                          Samples  
                          http://www.yenirakiglobal.com adaptive desktop & mobile
                          </p>
                          
                          <span className={classes.timelineDate}></span>
                        </TimelineItem>
                        <TimelineItem
                          date="04/2009 – 11/2010"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#61b8ff'}}
                        >
                          <h3>Madebycat</h3>
                          <h4>Front End Developer</h4>
                          <p>
                          Project Planning.
                          </p>
                          <p>
                          Deciding Information Architecture for clients, building websites. 
                          </p>
                          <p>
                          Interface coding and CMS integration of new projects.	
                          </p>
                        </TimelineItem>
                        <TimelineItem
                          date="11/2008 – 04/2009"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#f7d286'}}
                        >
                          <h3>Madebycat</h3>
                          <h4>Interface Coder</h4>
                          <p>
                          Maintenance support for live projects
                          </p>
                          <p>
                          Interface coding for live projects
                          </p>
                          <p>
                          Building entire website frontend from scratch, theming, JS, browser bug fixing. 
                          </p>
                        </TimelineItem>
                        <TimelineItem
                          date="08/2008 – 11/2008"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#76bb7f'}}
                        >
                          <h3>Madebycat</h3>
                          <h4>Junior Interface Coder</h4>
                          <p>
                            Content editing, HTML CSS bug fixing.
                          </p>
                        </TimelineItem>
                      </Timeline>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));