import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CategoryDrop from './CategoryDrop';
import Privacy from './Privacy';
import LocationCheck from './LocationCheck';
import Tags from './Tag';
import {
  NavLink
} from 'react-router-dom';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#6c0000',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#6c0000',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#6c0000',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#6c0000',
  },
  completed: {
    color: '#6c0000',
    zIndex: 1,
    fontSize: 18,
  },
});


function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },

  container: {
    width: '50%'
  },

  backButton: {
    marginRight: theme.spacing(1),
    color:"white",
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

}));

function getSteps() {
  return ['Pick your group name', 'Give your group a description', 'Provide extra details', 'Read our policy'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return( 
          <div>
          <Typography gutterBottom variant="h3" align="center" style={{fontWeight: "900"}}>What will your group's name be?</Typography>
          <Typography align="center">Choose a name that will give people a clear idea of what the group is about. Feel free to get creative! You can edit this later if you change your mind.</Typography>
          <div className="width50">
          <form noValidate autoComplete="off">
          <TextField variant="outlined" fullWidth required id="groupname" label="Required" defaultValue="" helperText="Maximum 60 characters" inputProps={{ maxLength: 60 }}/>
          </form>
          </div>
          <div className="pushFooter"></div>
          </div>
      );
    case 1:
      return(
        <div>
        <Typography gutterBottom variant="h3" align="center" style={{fontWeight: "900"}}>Now describe what your group will be about</Typography>
        <Typography align="center">People will see this to gauge an understanding your group, but you’ll be able to add to it later, too.</Typography>
        <div className="width20">
        <ol>
          <li>What's the purpose of the group?</li>
          <li>Who should join?</li>
          <li>What will you do at your events?</li>
        </ol>
        </div>
        <div className="width50">
        <form noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-static"
          label="Required"
          helperText="Maximum 60 characters"
          fullWidth
          multiline
          rows={7}
          variant="outlined"
        />
        </form>
        </div>
        <div className="width502">
          <Typography variant="h6" style={{fontWeight: "900"}}> For example: </Typography>
          <Typography>“Welcome tech lovers far and wide! We’re an online and in-person tech-enthusiast group hosting live speaking events on a range of tech topics. You can join us in person if possible or on one of our live streams. Look out for our virtual happy hours and other networking events.”</Typography>
        </div>
        </div>
    );
    case 2:
      return(
        <div>
          <Typography gutterBottom variant="h3" align="center" style={{fontWeight: "900"}}>Some miscellaneous details about your group</Typography>
          <Typography>Pick your group location within or outside McMaster</Typography>
          <div className="m10">
          <LocationCheck />
          </div>
          <div className="width50">
          <form noValidate autoComplete="off">
          <TextField variant="outlined" fullWidth required id="location"  label="Group Location" helperText="Please provide your group location" defaultValue="" />
          </form>
          </div>
          <div className="form_container m20">
          <div className="m20">
          <Typography gutterBottom>Pick your group category</Typography>
          <CategoryDrop />
          </div>
          <div className="m20">
          <Typography gutterBottom>Select your group privacy settings</Typography>
          <Privacy />
          </div>
          </div>
          <Typography>Pick up to 3 tags to associate with your group</Typography>
          <Tags/>
          <div className="pushNext">
        </div>
        </div>
      )

    case 3:
      return(
        <div>
          <Typography gutterBottom variant="h3" align="center" style={{fontWeight: "900"}}>Almost done! Just take a minute to review our guidelines</Typography>
          <div className="width70">
          MacMeets all about helping McMaster students enrich their university experience with the help of strong communities. This means that all prospective groups and clubs MUST demonstrate:
          </div>
          <div className="width502">
          <ul>
            <li>Uniqueness and distinctiveness from previously established clubs and non-club student organizations.</li>
            <li>Maintain significant student interest and encourage real human interactions in person or online.</li>
            <li>Be transparent about the group’s intentions.</li>
            <li>Produce positive impacts on the McMaster community and personal growth opportunities for members not otherwise satisfied by an existing club or non-club student organization.</li>
          </ul>
          </div>
          <Typography gutterBottom variant="h6" style={{fontWeight: "900", marginBottom: 30}}> Please read about all information and club policies in our community guidelines.</Typography>
        </div>
      )
    default:
      return 'Unknown stepIndex';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <NavLink to="/Art Page">
            <Button style={{marginBottom: 330}}color="primary" variant="contained"className={classes.button}>
              Go to Group
            </Button>
            </NavLink>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="pushFooter"></div>
    </div>
  );
}