import { Component } from "react";
import "./form.css";
import { FaEyeSlash, FaEye, FaUser, FaRegCheckCircle, FaArrowUp } from "react-icons/fa";

class Form extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.relogin = this.relogin.bind(this);
        this.state = {
            email: false,
            password: false,
            confirmpassword: false,
            mobile: false,
            eyeToggle: false,
            alert: false,
            emailvalue: "",
            passValue: "",
            cnfmpass: "",
            mobno: "",
        }
    }
    validatemail(e) {
        this.setState({ emailvalue: e.target.value })
        console.log(this.state.emailvalue)
        let mailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        (mailCheck.test(e.target.value) || e.target.value === "") ? this.setState({ email: false }) : this.setState({ email: true });
    }
    validatePass(e) {
        this.setState({ passValue: e.target.value })
        let passCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        passCheck.test(e.target.value) ? this.setState({ password: false }) : this.setState({ password: true })

    }
    confirmpass(e) {
        this.setState({ cnfmpass: e.target.value })
        this.state.passValue === e.target.value ? this.setState({ confirmpassword: false }) : this.setState({ confirmpassword: true })

    }
    mobilecheck(e) {
        this.setState({ mobno: e.target.value })
        e.target.value.length < 10 ? this.setState({ mobile: true }) : this.setState({ mobile: false })
    }
    validate(e) {
        e.preventDefault()
        if (!this.state.email&&this.state.emailvalue!="") {
            this.setState({ alert: true })
        }
    }
    toggle() {
        this.state.eyeToggle === false ? this.setState({ eyeToggle: true }) : this.setState({ eyeToggle: false })
        let passElem = document.getElementById("pass");
        passElem.type === "password" ? passElem.setAttribute("type", "text") : passElem.setAttribute("type", "password");
    }

    relogin() {
        this.setState({ alert: false });
        this.setState({ eyeToggle: false })
    }

    render() {
        return <div className="body-div">
            {this.state.alert && <div className="alert">
                <FaRegCheckCircle className="circle" />
                <h2>Form sucessfully Submitted !!!</h2>
                <button onClick={this.relogin}><FaUser /></button>
                <FaArrowUp className="arrow" /><span>click here for login page</span></div>}
            <form className="form" onSubmit={(e) => this.validate(e, this)}>
                <div className="user"><FaUser /></div>
                <h2>Log In</h2>
                <div className="input email"><p>Email</p>
                    <input id="email" value={this.state.emailvalue} onChange={(e) => this.validatemail(e, this)} className="border" type="text" placeholder="Your Email" />
                </div>
                {this.state.email && <small>*Enter a valid email*</small>}
                {/* {this.state.email && <div className="error error1">
                    <div className="triangle"></div>
                    <div className="content">Enter a valid Email</div>
                </div>} */}
                <div className="input pass"><p>Password</p>
                    <input id="pass" value={this.state.passValue} onChange={(e) => this.validatePass(e, this)} className="border" type="password" placeholder="Your password" />{this.state.eyeToggle ? <FaEye className="eye" onClick={this.toggle} /> : <FaEyeSlash className="eye" onClick={this.toggle} />}</div>
                {this.state.password && <div className="error error2">
                    <div className="triangle"></div>
                    <div className="content">Enter a valid password</div>
                </div>}
                <div className="input confirm-pass"><p>Confirm Password</p><input id="confirm-pass" value={this.state.cnfmpass} onChange={(e) => this.confirmpass(e, this)} className="border" type="text" placeholder="confirm Password" /></div>
                {this.state.confirmpassword && <div className="error error3">
                    <div className="triangle"></div>
                    <div className="content">passwords does not match</div>
                </div>}
                <div className="input mobile"><p>Mobile no</p><input id="mobile" value={this.state.mobno} onChange={(e) => this.mobilecheck(e, this)} className="border" type="number" placeholder="Your Mobile No" /><div className="patch"></div></div>
                {this.state.mobile && <div className="error error4">
                    <div className="triangle"></div>
                    <div className="content">Atleast 10 number required</div>
                </div>}
                <div className="btn"><button type="submit">Submit</button></div>
            </form>
        </div>
    }
}
export default Form;