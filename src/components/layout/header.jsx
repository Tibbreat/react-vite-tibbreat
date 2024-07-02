import { Link, NavLink } from 'react-router-dom';
import { Menu } from "antd";
import { UserOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import { useState } from 'react';
import UserPage from '../../pages/user';

const Header = () => {
    const [current, setCurrent] = useState('');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',
            icon: <UserOutlined />
        },
        {
            label: <Link to={"/book"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />
        },
    ];
    return <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items} />;
}

export default Header;