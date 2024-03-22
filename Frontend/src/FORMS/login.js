import React from "react";
import Footer from "../FOOTER/footer";

function Login() {
	return (
		<div>
			<div className="main_wrapper">
				<form className="login_wrapper">
					<h1>Login</h1>
					<div>
						<p className="login_erromessage">
							To log in, please enter your email address and password.
						</p>
					</div>
					<div>
						<div className="login_details_form">
							<label>Email Address</label>
							<input type="email" />
							<label>Password</label>
							<div className="login_pass_link">
								<input type="password" />
								<a href="http//.google.com">Forget Your Password?</a>
							</div>
                            <button className="login_btn_submit">Login</button>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default Login;
