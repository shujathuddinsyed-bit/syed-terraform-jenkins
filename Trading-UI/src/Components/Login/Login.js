import React, { Component } from 'react'
import axios from 'axios'
import { withTranslation } from 'react-i18next';
import './Login.css'
import url from '../../config.json'
import { withRouter } from 'react-router-dom';
import validate from '../../Utils/Validator'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            emailIdError: '',
            password: '',
            passwordError: '',
            isValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            localStorage.setItem("data",this.state.emailId)
        });
        
    }

    handleSubmit(e) {
        e.preventDefault()
        this.validate().then((res) => {
            console.log("res", res)
            if (res) {
                const { emailId, password } = this.state
                const user = {
                    emailId: emailId,
                    password: password
                };
         
                this.getData(user).then((response) => {
                    if (response.status === 200 && response.data.status === "SUCCESS") {
                        this.props.validateUser(true);
                        localStorage.setItem("userId",response.data.userId)
                        window.location.replace('http://localhost:3000/#/home')
                        // this.props.history.push({
                        //     pathname: '/admindashboard',
                        //     search: '?query=dashboard',
                        //     //state:{data: response.data}
                        //     state: { data: response.data.roleId }
                        // })
                    }
                })
            }
        });

    }
    getData(user) {
        // let res={
        //     status: 200,
        //     data: {
        //         status: "SUCCESS",
        //         roleId: 3
        //     }
        // }
        return new Promise((resolve, reject) => {
            axios.post(`${url.url}/login`, user)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        });
        
    }
    validate() {
        console.log("Inside validate")
        let isValid = true;
        const errors = {
            accountNoError: '',
            passwordError: ''
        }

        if (this.state.emailId.indexOf('@') !== -1) {
            if (this.state.password.length > 4) {
                isValid = true;
            } else {
                isValid = false;
                errors.passwordError = 'Password should be more than 4 characters'
            }
        } else {
            isValid = false;
            errors.emailIdError = 'Email Id should be in proper format'
        }
        if(this.state.emailId===''|| this.state.password ===''){
            isValid = false;
            errors.emailIdError="Email is mandatory field"
            errors.passwordError="Password is mandatory field"
        }

        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
        let { t } = this.props;
        return (
            <div>
                <header >
                    <h2>Login </h2>
                </header>
                <form className="loginform">
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.emailIdError}</small></span>
                        <br></br>
                        <label htmlFor="emailId">Email Id  </label>
                        <input
                            type="text"
                            id="emailId"
                            name="emailId"
                            onChange={this.handleChange}
                            value={this.state.emailId}
                            className="form-control"
                            placeholder="Enter the email" />
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger"><small>{this.state.passwordError}</small></span>
                        <br></br>
                        <label htmlFor="password">password </label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            className="form-control"
                            placeholder="Enter the password" />
                    </div>
                    <br></br><br></br>
                    <button id="submit" type="submit" className="but" onClick={this.handleSubmit}>Login</button>

                </form>
            </div>
        )
    }
}

// export default withRouter(withTranslation()(Login));

export default Login