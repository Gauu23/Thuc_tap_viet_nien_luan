export default function NumberInput({ label, value, name, onChange }) {

    return (
        <div>
            <label>{label}</label>
            <input type="number"
                value={value}
                onChange={onChange}
                name={name} />
        </div>
    );
}