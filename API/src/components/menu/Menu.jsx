const Menu = () => {

    const menuList = [
        { name: "Home", path: "/", subMenu: [
            {},
        ] },
        { name: "News", path: "/news" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
        { name: "Sale", path: "/sale" },
        { name: "Users", path: "/users" },
        { name: "Room", path: "/room" },
    ];

    return (
        <ul>
            {menuList.map((item, index) => <li key={index}><a href={item.path}>{item.name}</a></li>)}
        </ul>
    );
}

export { Menu }