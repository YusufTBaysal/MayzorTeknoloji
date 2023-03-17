import React from "react";
import "./LoginForm.css";

function LoginForm() {
    
    return(
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div class="background"></div>   
            <div className="login"><br />
            <span className="mb-3"><b>SIGN IN</b></span>
            <br /><br /><br /><br /><br />
            <form>
            <div className="form-group was-validated mb-2">
                <label htmlFor="email" className="form-label">E mail Address</label><br />
                <input type="email" className="form-control" required/>
                <div className="invalid-feedback">
                    Please Enter Your Email
                    </div>
            </div>
            <div className="form-group from-check mb-2">
                <input type="checkbox" className="form-check-input"/>
                <label htmlFor="check" className="form-check-label">Remember me</label>
            </div>

            <button id="button" type="submit" className="btn btn-success w-50 mt-2">Log In</button>
            <br /><br />

            <span className="forgotpassword">Forgot your password?</span><br />
            <span className="forgotpassword">Don't have an account? <b>Sign Up</b></span>
            </form>
            </div>
            
        </div>
    )
}





export default LoginForm