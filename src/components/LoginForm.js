import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection, Input, Button} from './common';


class LoginForm extends Component{

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email@gmail.com"/>
                </CardSection>

                <CardSection>
                    <Input label="Password" placeholder="*****" secureTextEntry />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>

        );

    }
}


export default LoginForm;