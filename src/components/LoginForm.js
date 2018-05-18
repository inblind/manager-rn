import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';


class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderErrorMessage(){
        if(this.props.error != ''){
            return(
                <CardSection>
                    <Text style = {styles.errorStyles}>{this.props.error}</Text>
                </CardSection>
            );
        }
    }

    renderLoading(){
        if(this.props.loading){
            return(
                <CardSection>
                    <Spinner/>
                </CardSection>
            );
        }
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
                {this.renderErrorMessage()}
                {this.renderLoading()}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardSection>

            </Card>

        );

    }
}

const mapStateToProps = state =>{
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const styles = {

    errorStyles: {
        color: 'red',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 14
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);