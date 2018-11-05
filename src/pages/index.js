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
import IconButton from '@material-ui/core/IconButton';
import { SocialIcon } from 'react-social-icons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
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
});
function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

class Index extends React.Component {
  state = {
    open: false,
    activeStep: 0,
  };
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };


  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} style={{maxWidth: '1050px', margin: '0 auto',}}>
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
                  <SocialIcon url="http://facebook.com/jaketrent" color="#ffffff" className={classes.socialIcon} />
                  <SocialIcon url="http://twitter.com/jaketrent" color="#ffffff" className={classes.socialIcon} />
                  <SocialIcon url="http://instagram.com/jaketrent" color="#ffffff" className={classes.socialIcon} />
                  <SocialIcon url="http://linkedin.com/jaketrent" color="#ffffff" className={classes.socialIcon} />

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
                </Paper>
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper}>
                  <Typography component="h1" className={classes.name}>
                    work experiences
                  </Typography>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      {steps.map((label, index) => {
                        return (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                              <Typography>{getStepContent(index)}</Typography>
                              <div className={classes.actionsContainer}>
                                <div>
                                  <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.button}
                                  >
                                    Back
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                  >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                  </Button>
                                </div>
                              </div>
                            </StepContent>
                          </Step>
                        );
                      })}
                    </Stepper>
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