import { useLocation } from "react-router-dom";
import './User.css'
import { useEffect, useState } from "react";
import { CommonTable } from "../../components/table/CommonTable";
import axios from "axios";
import axiosInstance from "../../axios/axiosConfig";

const User = () => {

    const { state } = useLocation();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosInstance.get('users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));


        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => setUsers(data));
    }, []);

    const handleDelete = (id) => {
        console.log('iddddddsdd ', id);
        
        const usersFilter = users.filter(user => user.id !== id);
        setUsers(usersFilter);
    }

    const columnsUser = [
        { name: "ID", key: 'id'},
        { name: "Name", key: 'name'},
        { name: "Email", key: 'email'},
        { name: "Phone", key: 'phone'},
        { name: "Website", key: 'website'}
    ];

    const actions = [
        {name: 'Delete', onClick: handleDelete}
    ];

    return (
        <div>
            <h1>User List:</h1>
            <CommonTable columns={columnsUser} data={users} actions={actions} />
        </div>
    );
}

export default User;