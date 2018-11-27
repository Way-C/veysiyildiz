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
import avatar from '../veysi.jpg'

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = (theme) => ({
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
    padding: '40px'
  },
  paperTimeline: {
    background: '#303337',
    padding: '40px 40px 0 40px'
  },
  paperCenter: {
    background: '#303337',
    textAlign: 'center',
  },
  profileCard: {
    background: '#40454a',
  },
  avatar: {
    width: '191px',
    height: '191px',
    margin: '24px auto 0',
  },
  name: {
    fontSize: '31px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },

  },
  title: {
    fontSize: '50px',
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
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
        <Grid container spacing={24} style={{maxWidth: '1150px', margin: '0 auto', width: '100%'}}>
          <Grid item xs={12} sm={12} md={3}>
            <Paper className={classes.paperCenter}>
              <Grid container spacing={24} >
                <Grid item xs={12}>
                  <Card className={classes.profileCard}>
                    <CardContent>
                      <Avatar className={classes.avatar}>
                        <img src={avatar} alt='veysi yıldız' style={{ height: '100%' }} />
                      </Avatar>
                    </CardContent>
                    <CardContent>
                      <Typography component="h3" className={classes.name}>
                        veysi yıldız                  
                      </Typography>
                      <Typography component="p">
                        FrontEndDeveloper
                      </Typography>
                      <SocialIcon url="https://www.linkedin.com/in/veysiyildiz/" color="#ffffff" className={classes.socialIcon} />
                      <SocialIcon url="http://instagram.com/veysiy" color="#ffffff" className={classes.socialIcon} />
                      <SocialIcon url="http://twitter.com/veysiyildiz" color="#ffffff" className={classes.socialIcon} />
                      <SocialIcon url="http://facebook.com/biliyem" color="#ffffff" className={classes.socialIcon} />

                    </CardContent>
                  </Card>
                  <Button variant="extendedFab" aria-label="download cv" className={classes.button}>
                    download cv
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <Grid container spacing={24} >
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Grid container spacing={24} >
                    <Grid item xs={12}>
                      <Typography component="h1" className={classes.title}>
                        about me
                      </Typography>
                      <p style={{marginLeft: '30px'}}>
                        <ColorizeWords text='Experienced Frontend Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Javascript, User Experience, SEO, PHP, E-commerce, and WordPress. Focused on React, Redux, Webpack and Node.'  seperator='.' />
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Grid container spacing={24} >
                    <Grid item xs={12}>
                      <Typography component="h1" className={classes.title}>
                        languages
                      </Typography>
                      <p style={{marginLeft: '30px'}}>
                        <ColorizeWords text='Turkish, Kurdish - Native' />
                      </p>
                      <p style={{marginLeft: '30px'}}>
                        <ColorizeWords text='English - Advanced' />
                      </p>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Grid container spacing={24} >
                    <Grid item xs={12}>
                      <Typography component="h1" className={classes.title}>
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
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paperTimeline}>
                  <Grid container spacing={0} >
                    <Grid item xs={12}>
                      <Typography component="h1" className={classes.title}>
                        work experience
                      </Typography>
                      <Timeline lineColor={'#61b8ff'} >
                        <TimelineItem
                          dateText="11/2010 – Present"
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#e86971'}}
                        >
                          <h3 style={{color: '#e86971'}}>Overteam, Istanbul</h3>
                          <h4 style={{color: '#e86971'}}>Senior Front End Developer</h4>
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
                          dateText="04/2009 – 11/2010"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#61b8ff'}}
                        >
                          <h3 style={{color: '#61b8ff'}}>Madebycat, Istanbul</h3>
                          <h4 style={{color: '#61b8ff'}}>Front End Developer</h4>
                          <p>
                          Project Planning.
                          </p>
                          <p>
                          Deciding Information Architecture for clients, building websites. 
                          </p>
                          <p>
                          Front-end coding and CMS integration of new projects.	
                          </p>
                          <p>
                          More HTML email templates.
                          </p>
                        </TimelineItem>
                        <TimelineItem
                          dateText="11/2008 – 04/2009"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#f7d286', color: '#333'}}
                        >
                          <h3 style={{color: '#f7d286'}}>Madebycat, Istanbul</h3>
                          <h4 style={{color: '#f7d286'}}>Interface Coder</h4>
                          <p>
                            Maintenance support for live projects
                          </p>
                          <p>
                            Created HTML e-mail templates for e-mail marketing.
                          </p>
                          <p>
                            Tested front-end code in multiple browsers to ensure cross-browser compatability.
                          </p>
                          <p>
                            Fixed front-end bugs (<ColorizeWords text='HTML, CSS, jQuery' />)
                          </p>
                        </TimelineItem>
                        <TimelineItem
                          dateText="08/2008 – 11/2008"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#76bb7f'}}
                        >
                          <h3 style={{color: '#76bb7f'}}>Madebycat, Istanbul</h3>
                          <h4 style={{color: '#76bb7f'}}>Junior Interface Coder</h4>
                          <p>
                            Researched industry trends and websites to provide top quality design.
                          </p>
                          <p>
                            Workflow tools included: <ColorizeWords text='HTML, CSS, Javascript' /> and <ColorizeWords text='SVN' />.
                          </p>
                        </TimelineItem>
                      </Timeline>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
                <Grid item xs={12} >
                  <Paper className={classes.paper}>
                    <Grid container spacing={24} >
                      <Grid item xs={12}>
                        <Typography component="h1" className={classes.title}>
                          projects
                        </Typography>
                        <p>
                          <a href="https://meyhanedeyiz.biz" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <ColorizeWords text='https://meyhanedeyiz.biz' /><br />
                            <ColorizeWords text='ReactJs, Redux, Redux Saga, Webpack, Node, Es6' seperator=',' />
                          </a>
                        </p>
                        <p>
                          <a href="http://www.arcelikas.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <ColorizeWords text='http://www.arcelikas.com' /><br />
                            <ColorizeWords text='.Net Project frontend implementation' seperator=',' />
                          </a>
                        </p>
                        <p>
                          <a href="http://howtoistanbul.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <ColorizeWords text='http://howtoistanbul.com' /><br />
                            <ColorizeWords text='WordPress, PHP Symfony 1.4' seperator=',' />
                          </a>
                        </p>
                        <p>
                          <a href="https://www.yenirakiglobal.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <ColorizeWords text='https://www.yenirakiglobal.com' /><br />
                            <ColorizeWords text='WordPress, adaptive' seperator=',' />
                          </a>
                        </p>
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