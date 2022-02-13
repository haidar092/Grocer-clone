import React from 'react'
import { Grid, Button, Typography} from '@material-ui/core'
import { useForm,FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField'
import { Link } from 'react-router-dom';
const AddressForm = () => {
    const methods = useForm();
    return (
        <>
           <Typography variant='h6' gutterBottom>Shipping Address</Typography>
           <FormProvider {...methods}>
           <form onSubmit=''>
            <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            </Grid>
            <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="contained"color="primary"to="/">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary" >Place Order</Button>
          </div>
           </form>
           </FormProvider>
        </>
    );
}

export default AddressForm;
