export const validate = (values) => {

    const errors = {};

    if (!values.email) {
        errors.email = "can't be blank";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = "can't be blank";
    } else if (!/^(?=.*[0-9])(?=.*[!\@\#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!\@\#$%^&*]{8,70}$/i.test(values.password.trim())) {
        errors.password = 'Password must contain at least 8 characters and include: 1 uppercase, 1 lowercase, 1 digit and 1 special character.';
    }

    return errors;
};