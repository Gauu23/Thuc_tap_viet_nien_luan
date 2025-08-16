import React, { useState } from "react";
import './header.css';

const appInfo = {
    name: "My Shop",
    img: "",
    des: "my shop is the best!"
}

const list = [
    {id: 1, name: "abc"},
    {id: 1, name: "abc"},
    {id: 1, name: "abc"},
    {id: 1, name: "abc"},
    {id: 1, name: "abc"},
]

const itemStyle = {
    color: "green"
}

function Header(props) {
    return (
        <>
        {list.map((item, index) => <p className="itemStyle">{item.name + index}</p>)}
        </>
    );
}

function Main8() {
    const  [name, setName] = useState('');

    const handleOnChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <Header />
            <h2>Đây là khu vực main, {name}</h2>
            <input type="text" value={name} onChange={handleOnChange} />
        </>
    );
}

export  {Header, Main8};