import "./CommonTable.css"

const CommonTable = ({columns, data, actions}) => {

    const handleDelete = () => {

    }

    return (
        <table id="customers">
            <thead>
                <tr>
                    {columns.map((column, index) => <th key={index} >{column.name}</th>)}
                    {actions && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {data.map(item =>
                    <tr key={item.id}>
                        {columns.map((column, index) => <td key={index}>{item[column.key]}</td>)}
                        {actions && (
                            <td>
                                {actions.map((action, index) => (<button key={index} onClick={() => action.onClick(item.id)}>{action.name}</button>))}
                            </td>
                        )}
                    </tr>
                )}
                
            </tbody>
        </table>
    );
}

export { CommonTable }