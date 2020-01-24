import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from "material-ui";

export class Confirm extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm user data" />
                    <List>
                        <ListItem
                            primaryText="first name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="last name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="city"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="bio"
                            secondaryText={bio}
                        />
                    </List>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        Style = {styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        Style = {styles.button}
                        onClick={this.back}
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
export default Confirm;