import React, { Component }  from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { userForms } from '../api/userForms';

class Form extends Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit(event) {
        event.preventDefault();
        let valuesToSave = {};
        const formData = new FormData(event.target);

        for (let key of formData.keys()) {
            const currVal = formData.get(key);
            if (!currVal) {
                this.setState({ open: true });
                return;
            }
            const subData = key.split('.');

            if (subData.length > 1) {
                if (!valuesToSave[subData[0]]) {
                    valuesToSave[subData[0]] = {};
                }
                valuesToSave[subData[0]][subData[1]] = currVal;
            } else {
                valuesToSave[key] = currVal;
            }
        }

        userForms.insert(valuesToSave);
    }

    renderDialog() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                All filelds are required!
            </Dialog>
        );
    }

    render() {
        return <div className='formWrapper'>
            {this.renderDialog()}
            <form className='newData' action='' method='post'  onSubmit={this.handleSubmit.bind(this)} >
                <TextField
                    hintText='First name'
                    fullWidth={true}
                    name='firstName'
                /><br />
                <br />
                <TextField
                    hintText='Name'
                    fullWidth={true}
                    name='name'
                /><br />
                <TextField
                    hintText='Email'
                    floatingLabelText='Email'
                    type='email'
                    fullWidth={true}
                    name='email'
                /><br />
                <TextField
                    hintText='Phone'
                    floatingLabelText='Phone'
                    name='phone'
                /><br />
                <TextField
                    hintText='Address'
                    floatingLabelText='Address'
                    fullWidth={true}
                    name='Address.Detail'
                /><br />
                <TextField
                    hintText='City'
                    name='Address.City'
                /><br />
                <TextField
                    hintText='Province'
                    name='Address.Province'
                /><br />
                <TextField
                    hintText='Postal Code'
                    name='Address.postalCode'
                /><br />
                <TextField
                    hintText='Country'
                    name='Address.Country'
                /><br />
                <br />
                <TextField
                    hintText='Comments'
                    floatingLabelText='Comments'
                    multiLine={true}
                    rows={2}
                    rowsMax={6}
                    fullWidth={true}
                    name='Comments'
                /><br />
                <br />
                <RaisedButton label='Send' primary={true} fullWidth type='submit' />
            </form>
        </div>;
    }
}

export default Form;
