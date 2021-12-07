import { LoginPageContainer, LoginPageTitle } from "./styles";
import LoginPageForm from "./LoginPageForm";
import { useSelector } from "react-redux";

const LoginPage = () => {
    const authToken = useSelector((state) => state.authToken);

    return (
        <LoginPageContainer>
            <LoginPageTitle>{authToken ? "Logged in" : "Log in"}</LoginPageTitle>
            {!authToken && <LoginPageForm />}
        </LoginPageContainer>
    );
};

export default LoginPage;
