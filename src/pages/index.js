import React from 'react';
import PropTypes from 'prop-types';
import './global-styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { SocialIcon } from 'react-social-icons';
import VerticalTimelineElement from '../components/VerticalTimelineElement';
import VerticalTimeline from '../components/VerticalTimeline';

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 8,
    margin: '0',
    background: '#2a2c2e',
    minHeight: '100vh',
    fontFamily: 'turkish_another_typewriterRg',
  },
  button: {
    background: '#40454a',
    color: 'white',    
    fontFamily: 'turkish_another_typewriterRg',

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
    fontSize: '45px',
    fontFamily: 'turkish_another_typewriterRg',

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
  state = {
  };

  render() {
    const { classes } = this.props;

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
              <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
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
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Typography component="h1" className={classes.name}>
                    personal information
                  </Typography>
                  <p>Marital Status: Married and have a child.</p>
                  <p>Military Service: Completed in 2006</p>
                  <p>Place & Date of Birth: Batman / Turkey – 03.08.1981</p>

                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paperTimeline}>
                  <Typography component="h2" className={classes.name}>
                    work experience
                  </Typography>
                  <Grid container spacing={24} >
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <VerticalTimeline layout={ '1-column' }>
                        <VerticalTimelineElement
                          date="Nov 2010 – Present"
                          className="vertical-timeline-element--work"
                          dateStyle={{color: '#ffffff'}}
                          dateInnerStyle={{background: '#e86971'}}
                        >
                          <h3 className="vertical-timeline-element-title">Overteam</h3>
                          <h4 className="vertical-timeline-element-subtitle">Senior Front End Developer</h4>
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
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          date="Apr 2009 – Nov 2010"
                          className="vertical-timeline-element--work"
                          dateStyle={{color: '#ffffff'}}
                          dateInnerStyle={{background: '#61b8ff'}}
                        >
                          <h3 className="vertical-timeline-element-title">Madebycat</h3>
                          <h4 className="vertical-timeline-element-subtitle">Front End Developer</h4>
                          <p>
                          Project Planning.
                          </p>
                          <p>
                          Deciding Information Architecture for clients, building websites. 
                          </p>
                          <p>
                          Interface coding and CMS integration of new projects.	
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          date="Nov 2008 – Apr 2009"
                          className="vertical-timeline-element--work"
                          dateStyle={{color: '#000000'}}
                          dateInnerStyle={{background: '#f7d286'}}
                        >
                          <h3 className="vertical-timeline-element-title">Madebycat</h3>
                          <h4 className="vertical-timeline-element-subtitle">Interface Coder</h4>
                          <p>
                          Maintenance support for live projects
                          </p>
                          <p>
                          Interface coding for live projects
                          </p>
                          <p>
                          Building entire website frontend from scratch, theming, JS, browser bug fixing. 
                          </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                          date="Aug 2008 – Nov 2008"
                          className="vertical-timeline-element--work"
                          dateStyle={{color: '#b7b7b7'}}
                          dateInnerStyle={{background: '#76bb7f'}}
                        >
                          <h3 className="vertical-timeline-element-title">Madebycat</h3>
                          <h4 className="vertical-timeline-element-subtitle">Junior Interface Coder</h4>
                          <p>
                            Content editing, HTML CSS bug fixing.
                          </p>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
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