import './Room.css'
import { useEffect, useState } from "react";
import { CommonTable } from "../../components/table/CommonTable";
import axiosInstance from "../../axios/axiosConfig";
import axios from 'axios';

const Room = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        //create
        // axiosInstance.post('posts', {
        //     title: 'demo post 1',
        //     body: 'demo body',
        //     userId: 1
        // })
        //     .then(res => console.log('created ===', res.data))
        //     .catch(err => console.log(err, 'errrrr----'));

        // //update
        // axiosInstance.put('posts/1', {
        //     id: 1,
        //     title: 'demo post 2',
        //     body: 'demo body 2',
        //     userId: 1,
        // })
        //     .then(res => console.log('updated ===', res.data))
        //     .catch(err => console.log(err, 'errrrr----'));

        // //delete
        // axiosInstance.delete('posts/1')
        //     .then(res => console.log('deleted ===', res.data))
        //     .catch(err => console.log(err, 'errrrr----'));

        //get
        axiosInstance.get('posts', {
            signal: controller.signal
        })
            .then(res => setPosts(res.data))
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log("cancel request =============");
                } else {
                    console.log("error", err);
                }
            });

        return () => {
            controller.abort();
        }
    }, []);

    const handleDelete = (id) => {
        console.log('iddddddsdd ', id);

        const postsFilter = posts.filter(post => post.id !== id);
        setPosts(postsFilter);
    }

    const columns = [
        { name: "userId", key: 'userId' },
        { name: "id", key: 'id' },
        { name: "title", key: 'title' },
        { name: "body", key: 'body' }
    ];

    const actions = [
        { name: 'Delete', onClick: handleDelete }
    ];

    return (
        <div>
            <h1>Post List:</h1>
            <CommonTable columns={columns} data={posts} actions={actions} />
        </div>
    );
}

export default Room;