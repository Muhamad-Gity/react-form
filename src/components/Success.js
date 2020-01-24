import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <MuiThemeProvider>
            <>
                <AppBar title="Success" />
                <h1>Thank you for your submission</h1>
            </>
        </MuiThemeProvider>
    );
    }
}

export default Success;