import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';


class LoginForm extends Component{


    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email@gmail.com" autoCapitalize="none" value={this.props.email} onChangeText={this.onEmailChange.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Input label="Password" placeholder="*****" autoCapitalize="none" value={this.props.password} secureTextEntry onChangeText={this.onPasswordChange.bind(this)} />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>

        );

    }
}

const mapStateToProps = state =>{
    return{
        email: state.auth.email,
        password: state.auth.password
    };
};


export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);