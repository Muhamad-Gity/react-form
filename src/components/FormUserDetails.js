import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter Users Details" />
                    <TextField
                        hintText="Enter Your first name"
                        floatingLabelText="first name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <TextField
                        hintText="Enter your last name"
                        floatingLabelText="last name"
                        onchange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <TextField
                        hintText="Enter your email"
                        floatingLabelText="email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        style = {styles.button}
                        onClick={this.continue}
                    />
                </>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};
export default FormUserDetails;