import { Fragment } from "react";
import { useNavigate } from "react-router";


const LoginPage = () =>{
    const navigate = useNavigate();

    return(
        <Fragment>
            <h1>Login</h1>
                <button onClick={() => {navigate("/Register")}}>
                    LOGIN
                </button>
        </Fragment>

    );
}

export default LoginPage