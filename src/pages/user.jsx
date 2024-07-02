import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { getAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';
const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await getAllUserAPI()
        setDataUsers(res.data)
    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUsers={dataUsers} />
        </div>
    )
}
export default UserPage