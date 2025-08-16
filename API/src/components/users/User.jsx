
function UserList(props) {
    const users = props.users;
    return (
        <ul>
            {users.map(user => <UserItem key={user.id} name={user.name} active={user.active} id={user.id} />)}
        </ul>
    );
}

function UserItem({ name, active, id }) {
    return (
        <li style={{ color: active ? 'green' : 'gray' }}>
           {id}. {name} - {active ? 'hoạt động' : 'nghỉ việc'}
        </li>
    );
}

export { UserList }