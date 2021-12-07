import React from 'react';
import FormInput from "../FormInput";
import { LoginForm, LoginFormButton } from "./styles";
import { useFormik } from "formik";
import { validate } from "./helper";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOG_IN_USER_MUTATION } from "../../../mutations/logIn";
import { loginUser } from "../../../redux/actions";


const LoginPageForm = () => {

    const [logInMutation] = useMutation(LOG_IN_USER_MUTATION);
    const isUserLoginLoading = useSelector(state => state.isUserLoginLoading);
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch( loginUser(logInMutation, {
                User: {
                    username: values.email,
                    password: values.password
                }
            })
        );
    };

    const initialValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    });

    return (
        <LoginForm onSubmit={formik.handleSubmit}>
            {Object.keys(formik.values)?.length >= 1  && Object.keys(formik.values).map((value) => {
                return <FormInput id={value}
                                  key={value}
                                  name={value}
                                  type={value}
                                  onChange={formik.handleChange}
                                  value={formik.values[`${value}`]}
                                  error={formik.errors[`${value}`]}
                                  disabled={isUserLoginLoading}
                />
            })}

            <LoginFormButton
                type="submit"
                disabled={isUserLoginLoading}
            >
                {isUserLoginLoading ? 'Submitting...' : 'Submit'}
            </LoginFormButton>

        </LoginForm>
    );
};

export default LoginPageForm;