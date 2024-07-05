import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DeleteUserModal from './delete.user.modal';
import ViewUserDetail from './view.user.detail';


const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [userDetail, setUserDetail] = useState({});
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState("");
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a onClick={() => {
                        setUserDetail(record);
                        setIsModalDetailOpen(true);
                    }} href='#'>{record._id}</a>
                </>
            ),
        },
        {
            title: 'Tên',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true)
                        }} />
                    <DeleteOutlined
                        onClick={() => {
                            setDataDelete(record._id);
                            setIsModalDeleteOpen(true)
                        }}
                    />
                </div>
            ),
        }
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"} />
            <UpdateUserModal
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                isModalUpdateOpen={isModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser} />
            <DeleteUserModal
                setIsModalDeleteOpen={setIsModalDeleteOpen}
                isModalDeleteOpen={isModalDeleteOpen}
                dataDelete={dataDelete}
                setDataDelete={setDataDelete}
                loadUser={loadUser}
            />
            {isModalDetailOpen && (
                <ViewUserDetail
                    userDetail={userDetail}
                    setIsModalDetailOpen={setIsModalDetailOpen}
                    isModalDetailOpen={isModalDetailOpen}
                />
            )}
        </>

    )
}
export default UserTable;
