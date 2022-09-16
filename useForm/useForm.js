import { useState } from "react";

export const useForm = ( initFormValue ={} ) => {

    const [formState, setFormState] = useState(initFormValue);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initFormValue);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
