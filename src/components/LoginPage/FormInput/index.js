import {
    FormInputContainer,
    FormInputField,
    FormInputFieldError,
    FormInputLabel,
} from "./styles";

const FormInput = (props) => {
    const { id, name, type, onChange, value, error, disabled } = props;

    return (
        <FormInputContainer>
            <FormInputLabel htmlFor={id}>{name}</FormInputLabel>
            <FormInputField
                className="no-autofill-bkg"
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
            {error && <FormInputFieldError>{error}</FormInputFieldError>}
        </FormInputContainer>
    );
};

export default FormInput;