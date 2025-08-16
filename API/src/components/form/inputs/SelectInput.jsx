export default function SelectInput({ label, value, name, onChange, options = [] }) {

    return (
        <div>
            <label>{label}</label>
            <select name={name} onChange={onChange} value={value}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}