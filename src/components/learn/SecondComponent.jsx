const SecondComponent = () => {
    return (
        <div>
            second component
        </div>
    );
}

const ThirdComponent = () => {
    return (
        <div>
            third component
        </div>
    );
}

//default: 1 file mặc định chỉ export ra component được export default
// Nếu muốn export nhiều component trong 1 file thì cần dùng export {component 1, component 2....}
export { SecondComponent, ThirdComponent }