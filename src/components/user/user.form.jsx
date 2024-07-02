import { Button, Input, message, notification } from "antd";
import { useState } from "react";
import { Modal } from "antd";
import { createUserAPI } from "../../services/api.service";


const UserForm = (props) => {
    const { loadUser } = props;
    //handle input
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState();

    //handle button
    const handleSubmitBtn = async () => {

        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success(
                {
                    message: "Thêm người dùng",
                    description: "Thêm người dùng thành công"
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
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Danh sách người dùng</h3>
                    <Button type="primary" onClick={() => setIsModalOpen(true)}>Thêm người dùng </Button>
                </div>
            </div>
            <Modal
                title="Thêm người dùng"
                open={isModalOpen}
                maskClosable={false}
                okText={"Thêm"}
                onOk={() => handleSubmitBtn()} //Xử lý khi click vào OK button
                onCancel={() => resetAndCloseModal()}>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div >
                        <span>Tên đầy đủ</span>
                        <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div>
                        <span>Mật khẩu</span>
                        <Input.Password value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <div>
                        <span>Số điện thoại</span>
                        <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default UserForm;