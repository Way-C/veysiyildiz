/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import ReactGA from 'react-ga';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { SocialIcon } from 'react-social-icons';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import TagCloud, {renderData} from 'd3-tagcloud-for-react';
import ColorizeWords from '../components/ColorizeWords';
import data, { getRandomColor } from '../data';
import avatar from '../veysi.jpg'
import cvpdf from '../veysiyildiz-resume.pdf'
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
    padding: '40px',
    [theme.breakpoints.down('xs')]: {
      padding: '12px',
    },
  },
  paperTimeline: {
    background: '#303337',
    padding: '40px 40px 0 40px',
    [theme.breakpoints.down('xs')]: {
      padding: '12px 12px 0 12px',
    },
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
  leftMarg: {
    marginLeft: '30px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
    },
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }
  handleClick() {
    ReactGA.event({
      category: 'Cv Download',
      action: 'Clicked Download Button'    
    });
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const { classes } = this.props;
    const { skills, colors } = data;

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
                        Front-End Developer
                      </Typography>
                      <SocialIcon url="https://github.com/veysiyildiz" color="#ffffff" className={classes.socialIcon} />
                      <SocialIcon url="https://www.linkedin.com/in/veysiyildiz/" color="#ffffff" className={classes.socialIcon} />
                      <SocialIcon url="http://instagram.com/veysiy" color="#ffffff" className={classes.socialIcon} />
                      <SocialIcon url="http://facebook.com/biliyem" color="#ffffff" className={classes.socialIcon} />

                    </CardContent>
                  </Card>
                  <Button variant="extendedFab" onClick={()=>{this.handleClick()}} href={cvpdf} aria-label="download cv" component="a" className={classes.button}>
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
                      <p className={classes.leftMarg}>
                        <ColorizeWords text='Experienced Front-End Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Javascript, User Experience, SEO, PHP, E-commerce, and WordPress. Focused on React, Redux, Webpack and Node' seperator='.' />
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
                        <TagCloud 
                          className='tag-cloud'
                          rotate={null}
                          data={skills}
                          colorarray={colors}
                          style={{
                            fontFamily: 'sans-serif',
                            fontSize: 30,
                            padding: 5,
                            width: '100%',
                            height: '600px',
                          }}>
                            {renderData(skills)}
                        </TagCloud>
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
                        work experience & education
                      </Typography>
                      <Timeline lineColor={'#61b8ff'} >
                      <TimelineItem
                          dateText="03/2019 – Present"
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#61b8ff'}}
                        >
                          <h3 style={{color: '#61b8ff'}}>SmartGift, Istanbul</h3>
                          <h4 style={{color: '#61b8ff'}}>Senior Front-End Developer</h4>
                          <p>
                            <span style={{color: getRandomColor()}}>Responsible for all aspects of Front-End architecture and development, including business focussed trade-offs around technology, features, quality and test strategy.</span>
                          </p>
                          <p>
                            <span style={{color: getRandomColor()}}>Worked with all team members (product owners, designers and back-end developers) to collect requirements and assemble the project’s functionality and add new features.</span></p>
                          <p>
                            <span style={{color: getRandomColor()}}>Developed new gifting experience for multiple brands using React, that shows different themes based on domain.</span>
                          </p>
                          <p>
                            <span style={{color: getRandomColor()}}>Created plug-and-play widget using React that can be placed on any website. The widget acts like a shopping basket and allows customers to add their items to gift in it and initialize the SmartGift experience.</span>
                          </p>
                          <p>
                            <span style={{color: getRandomColor()}}>Created the storefront application of an affiliate marketing website from scratch. <a href="https://www.smartgiftit.com" target="_blank">smartgiftit.com</a></span>
                          </p>
                          <p>
                            <span style={{color: getRandomColor()}}>Maintained the existing projects and added new features to them.</span>
                          </p>
                          <span className={classes.timelineDate}></span>
                        </TimelineItem>
                        <TimelineItem
                          dateText="11/2010 – 03/2019"
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#e86971'}}
                        >
                          <h3 style={{color: '#e86971'}}>Overteam, Istanbul</h3>
                          <h4 style={{color: '#e86971'}}>Senior Front-End Developer</h4>
                          <p>
                            <span style={{color: getRandomColor()}}>Mentored and trained 4 junior Front-End Developers in 8 years.</span>
                          </p>
                          <p>
                            <span style={{color: getRandomColor()}}>Developed the UI, layout and Front-End programming for the web applications using HTML, CSS, jQuery and JavaScript that matches requirements.</span></p>
                          <p>
                            <span style={{color: getRandomColor()}}>Responsible for all client side UI Development, custom validations and implementing Business logic based on project requirements using JQuery UI and/or ReactJS.</span>
                          </p>
                          <p>
                            <span style={{color: getRandomColor()}}>Involved in developing responsive web pages for mobile, tablet and desktop using CSS3 Media queries.</span>
                          </p>
                          <span className={classes.timelineDate}></span>
                        </TimelineItem>
                        <TimelineItem
                          dateText="08/2008 – 11/2010"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#8c5fc4'}}
                        >
                          <h3 style={{color: '#8c5fc4'}}>Madebycat, Istanbul</h3>
                          <h4 style={{color: '#8c5fc4'}}>Front-End Developer</h4>
                          <p>
                          <span style={{color: getRandomColor()}}>Deciding Information Architecture for clients, building websites.</span>
                          </p>
                          <p>
                          <span style={{color: getRandomColor()}}>Front-end coding and CMS integration of new projects.</span>
                          </p>
                          <p>
                          <span style={{color: getRandomColor()}}>Maintenance support for existing projects.</span>
                          </p>
                          <p>
                          <span style={{color: getRandomColor()}}>Workflow tools included: HTML, CSS, Javascript and SVN.</span>
                          </p>
                        </TimelineItem>
                        <TimelineItem
                          dateText="1999 - 2004"
                          className=""
                          bodyContainerStyle={{color: '#fff'}}
                          dateInnerStyle={{background: '#e86971'}}
                        >
                          <h3 style={{color: '#e86971'}}>Abant İzzet Baysal University</h3>
                          <h4 style={{color: '#e86971'}}>Physics Bachelor's degree</h4>
                          <p>
                            Took <span style={{color: getRandomColor()}}>Java</span> and <span style={{color: getRandomColor()}}>HTML</span> classes as optional lessons.
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
                          projects & developments
                        </Typography>
                        <p className={classes.leftMarg}>
                          <a href="https://www.smartgiftit.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>https://www.smartgiftit.com</span><br />
                            <ColorizeWords text='ReactJs, Redux, Redux Saga, Webpack, Node, Es6, strapi' seperator=',' />
                          </a>
                        </p>
                        <p className={classes.leftMarg}>
                          <a href="https://www.npmjs.com/package/d3-tagcloud-for-react" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>d3 tagcloud for react</span><br />
                            <span style={{color: getRandomColor()}}>Another tag cloud for react with two variable fontSize and opacity, using the wonderful d3-cloud under the hood.</span>
                          </a>
                        </p>
                        <p className={classes.leftMarg}>
                          <a href="https://www.npmjs.com/package/vertical-timeline-component-for-react" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>Vertical Timeline Component For React</span><br />
                            <span style={{color: getRandomColor()}}>A react component to generate responsive vertical timeline.</span>
                          </a>
                        </p>
                        <p className={classes.leftMarg}>
                          <a href="https://meyhanedeyiz.biz" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>https://meyhanedeyiz.biz</span><br />
                            <ColorizeWords text='ReactJs, Redux, Redux Saga, Webpack, Node, Es6' seperator=',' />
                          </a>
                        </p>
                        <p className={classes.leftMarg}>
                          <a href="http://www.arcelikas.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>http://www.arcelikas.com</span><br />
                            <span style={{color: getRandomColor()}}>.Net Project Front-End implementation</span>
                          </a>
                        </p>
                        <p className={classes.leftMarg}>
                          <a href="http://howtoistanbul.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>http://howtoistanbul.com</span><br />
                            <ColorizeWords text='WordPress, PHP Symfony 1.4' seperator=',' />
                          </a>
                        </p>
                        <p className={classes.leftMarg}>
                          <a href="https://www.yenirakiglobal.com" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                            <span style={{color: getRandomColor()}}>https://www.yenirakiglobal.com</span><br />
                            <ColorizeWords text='Fullstack WordPress' seperator=',' />
                          </a>
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
                      <p className={classes.leftMarg}>
                        <ColorizeWords text='Turkish, Kurdish - Native' />
                      </p>
                      <p className={classes.leftMarg}>
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
                        interests
                      </Typography>
                      <p className={classes.leftMarg}>
                        <ColorizeWords text='music, photography, video, learning' />
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