import { Button, Input, message, notification } from "antd";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { createUserAPI, updateUserAPI } from "../../services/api.service";


const UpdateUserModal = (props) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])
    //handle button
    const handleSubmitBtn = async () => {

        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success(
                {
                    message: "Cập nhật thông tin người dùng",
                    description: "Cập nhật thành công"
                }
            );
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error(
                {
                    message: "Có lỗi xảy ra",
                    description: JSON.stringify(res.message)
                }
            );
        }
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setPhone("");
        setDataUpdate(null)
    }
    return (
        <Modal
            title="Cập nhật thông tin người dùng"
            open={isModalUpdateOpen}
            maskClosable={false}
            okText={"Save"}
            onOk={() => handleSubmitBtn()} //Xử lý khi click vào OK button
            onCancel={() => resetAndCloseModal()}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div >
                    <Input type="hidden" value={id} />
                </div>
                <div >
                    <span>Tên đầy đủ</span>
                    <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Số điện thoại</span>
                    <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateUserModal;