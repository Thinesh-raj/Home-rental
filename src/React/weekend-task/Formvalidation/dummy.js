import { Component } from "react";
// import "./login.css"
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: false,
            password: false,
            confirm: false,
            mobile: false
        }
        this.validation = this.validation.bind(this)
    }
    validation() {
        let emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let getEmail = document.getElementById("email")
        let emailvalidate = emailregex.test(getEmail.value)
        if (!emailvalidate) {
            this.setState({
                email: true
            })
        }
        else {
            this.setState({
                email: false
            })
        }
        let passwordregex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let getPassword = document.getElementById("password")
        let passwordValidate = passwordregex.test(getPassword.value)
        if (!passwordValidate) {
            this.setState({
                password: true
            })
        }
        else {
            this.setState({
                password: false
            })
        }
        let confirmValidate = document.getElementById("confirmpass")
        if (confirmValidate.value !== getPassword.value) {
            this.setState({
                confirm: true
            })
        }
        else {
            this.setState({
                confirm: false
            })
        }
        let mobno = document.getElementById("mobile");
        if (mobno.value.length !== 10) {
            this.setState({
                mobile: true
            })
        }
        else {
            this.setState({
                mobile: false
            })
        }
    }
    render() {
        return <div className="page">
            <h1>LOGIN</h1>
            <p>Email</p>
            <input placeholder="Email" id="email" />
            {
                this.state.email && <p>invalid email</p>
            }
            <p>Password</p>
            <input placeholder="Password" id="password" />
            {
                this.state.password && <p>invalid password</p>
            }
            <p>Confirm Password</p>
            <input placeholder="Confirm Password" id="confirmpass" />
            {
                this.state.confirm && <p>confirm password doesn't match with the password</p>
            }
            <p>Mobile</p>
            <input placeholder="Mobile" id="mobile" />
            {
                this.state.mobile && <p>invalid mobilenumber</p>
            }
            <div className="button" onClick={this.validation}><button type="submit">SUBMIT</button></div>
        </div>

    }
}
export default Login