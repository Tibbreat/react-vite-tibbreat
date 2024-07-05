import { Modal } from "antd";
import { deleteUserAPI } from "../../services/api.service";
import { Input, notification } from "antd";


const DeleteUserModal = (props) => {
    const { isModalDeleteOpen, setIsModalDeleteOpen, dataDelete, setDataDelete, loadUser } = props;

    const handleSubmitBtn = async () => {
        console.log(dataDelete)
        const res = await deleteUserAPI(dataDelete);
        if (res.data) {
            notification.success(
                {
                    message: "Xóa người dùng",
                    description: "Xóa thành công"
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
    };
    const resetAndCloseModal = () => {
        setIsModalDeleteOpen(false);
        setDataDelete(null)
    };
    return (
        <Modal
            title="Đồng ý xóa người dùng"
            okText={"Xóa"}
            onCancel={() => resetAndCloseModal()}
            open={isModalDeleteOpen}
            maskClosable={false}
            onOk={() => handleSubmitBtn()}
        >
            <div >
                <Input type="hidden" value={dataDelete} />
            </div>
        </Modal>
    )

}
export default DeleteUserModal;