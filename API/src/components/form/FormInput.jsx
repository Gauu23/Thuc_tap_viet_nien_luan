import { useState } from "react";
import './FormInput.css'
import * as Yup from "yup";
import TextInput from "./inputs/TextInput";
import NumberInput from "./inputs/NumberInput";
import SelectInput from "./inputs/SelectInput";
import { useNavigate } from "react-router-dom";

const dataFormSchema = Yup.object().shape({
    name: Yup.string().required('Name bat buoc nhap'),
    age: Yup.number('bat buoc la so').required().positive('bat buoc la so').integer('bat buoc la so'),
    address: Yup.string(),
    gender: Yup.string().required()
});

const FormInput = () => {
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        name: '',
        age: '',
        address: '',
        gender: 'nam'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dataFormSchema.validate(dataForm, { abortEarly: false });
            navigate('/', { state: dataForm });
        } catch (errors) {
            // console.log(errors, '==========');
            errors.inner.forEach((error) => {
                console.log(error.message);
            });
        }
    }

    const handleInput = (e) => {
        const value = e.target.value;
        const keyName = e.target.name;
        setDataForm(oldValue => ({ ...oldValue, [keyName]: value }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput label={"Name"} value={dataForm.name} onChange={handleInput} name={"name"} />

                <NumberInput label={"Age"} value={dataForm.age} onChange={handleInput} name={"age"} />

                <TextInput label={"Address"} value={dataForm.address} onChange={handleInput} name={"address"} />

                <SelectInput label={"Gender"}
                    value={dataForm.gender}
                    onChange={handleInput} name={"gender"}
                    options={[
                        { value: 'nam', label: 'Nam' },
                        { value: 'nu', label: 'Nu' },
                        { value: 'khac', label: 'Khac' }
                    ]} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormInput;