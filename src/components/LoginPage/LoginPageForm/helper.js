export const validate = (values) => {
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regExpPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,30}$/i;

    const errors = {};

    if (!values.email) {
        errors.email = "can't be blank";
    } else if (!regExpEmail.test(values.email.trim())) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "can't be blank";
    } else if (!regExpPassword.test(values.password.trim())) {
        errors.password =
            "Password must contain at least 8 characters and include: 1 uppercase, 1 lowercase, 1 digit and 1 special character.";
    }

    return errors;
};
