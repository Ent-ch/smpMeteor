import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Form = props => {
    return <div className='formWrapper'>
        <TextField
            hintText='First name'
            fullWidth={true}
        /><br />
        <br />
        <TextField
            hintText='Name'
            fullWidth={true}
        /><br />
        <TextField
            hintText='Email'
            floatingLabelText='Email'
            type='email'
            fullWidth={true}
        /><br />
        <TextField
            hintText='Phone'
            floatingLabelText='Phone'
        /><br />
        <TextField
            hintText='Address'
            floatingLabelText='Address'
            fullWidth={true}
        /><br />
        <TextField
            hintText='City'
        /><br />
        <TextField
            hintText='Province'
        /><br />
        <TextField
            hintText='Postal Code'
        /><br />
        <TextField
            hintText='Country'
        /><br />
        <br />
        <TextField
            hintText='Comments'
            floatingLabelText='Comments'
            multiLine={true}
            rows={2}
            rowsMax={6}
            fullWidth={true}
        /><br />
        <br />
        <RaisedButton label="Send" primary={true} fullWidth />
    </div>
};

export default Form;
