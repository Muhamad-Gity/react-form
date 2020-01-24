import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            <>
            <AppBar title="Enter Personal Details" />
            <TextField
                hintText="Enter Your occupation"
                floatingLabelText="occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
            />
            <TextField
                hintText="Enter your city"
                floatingLabelText="city"
                onChange={handleChange('city')}
                defaultValue={values.city}
            />
            <TextField
                hintText="Enter your bio"
                floatingLabelText="bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />
            <RaisedButton
                label="Continue"
                primary={true}
                Style = {styles.button}
                onClick={this.continue}
                />
                <RaisedButton
                label="Back"
                primary={false}
                Style = {styles.button}
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
export default FormPersonalDetails;