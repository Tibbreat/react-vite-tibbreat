import { useState } from 'react';
import { Button, Modal } from "antd";

const ViewUserDetail = (props) => {
    const { userDetail, setIsModalDetailOpen, isModalDetailOpen } = props;
    const [fullName] = useState(userDetail.fullName);
    const [phone] = useState(userDetail.phone);
    const [email] = useState(userDetail.email);
    return (
        <Modal
            title={`Thông tin user ${userDetail._id}`}
            open={isModalDetailOpen}
            onOk={() => setIsModalDetailOpen(false)}
            onCancel={() => setIsModalDetailOpen(false)}
        >
            <div>
                <img style={{ width: "200px", height: "200px" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${userDetail.avatar}`} alt="" />
                <Button type='primary'>Upload image</Button>
            </div>
            <div>Tên: {fullName}</div>
            <div>Email: {email}</div>
            <div>Số điện thoại: {phone}</div>
        </Modal>
    )
}

export default ViewUserDetail;