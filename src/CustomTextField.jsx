import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={({ field }) => (
                    <TextField {...field} label={label} required />)}
                control={control}
                fullWidth
                name={name}
            />
        </Grid>
    );
}

export default FormInput;
