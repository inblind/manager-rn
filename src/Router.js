import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

const RouterComponent = () => {

    return(
        <Router>
            <Scene key='root' hideNavBar> 
                <Scene key="auth" >
                    <Scene key='loginForm' component={LoginForm} title='Please login' initial/>
                </Scene>
                <Scene key="main">
                    <Scene onRight={()=> {Actions.addEmployee()}} rightTitle='Add +' key='employeeList' component={EmployeeList} title='Employees' initial/>   
                    <Scene key='addEmployee' component={AddEmployee} title='Add Employee' />   
                     
                </Scene>
            </Scene>    
        </Router> 
    );
};


export default RouterComponent;