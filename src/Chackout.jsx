import React,{useState} from 'react'
import {Paper ,Stepper, Step, StepLabel, Typography} from '@material-ui/core';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import useStyles from './Style';


const Steps = ['shipping adress','payment details'];
const Chackout = ()=> {
    const [activeStep , setActiveStep] = useState(0);
    const classes =useStyles();
    const Confirmation  =() => (
        <div>
            Confirmation
        </div>
    );

    const Form =()=> activeStep ===0
    ? <AddressForm/>
    : <PaymentForm/>
    return (
        <>
           <div  className={classes.toolbar}/>
           <main className={classes.layout}>
               <Paper className={classes.paper}>
                   <Typography variant='h4' align='center'>Chackout</Typography>
                   <Stepper activeStep={0} className={classes.stepper}>
                      {Steps.map((step)=>(
                          <Step key={step}>
                              <StepLabel>{step}</StepLabel>
                          </Step>
                      ))}
                   </Stepper>
                   {activeStep === Steps.length ? <Confirmation /> :<Form/>}
               </Paper>
               </main> 
        </>
    )
}

export default Chackout;
