export default function TextInput({ label, value, name, onChange }) {

    return (
        <div>
            <label>{label}</label>
            <input type="text"
                value={value}
                onChange={onChange}
                name={name} />
        </div>
    );
}