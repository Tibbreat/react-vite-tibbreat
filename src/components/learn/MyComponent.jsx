
//Tên component phải viết hoa chữ cái đầu.
//component = html + css + js
//component phải return về html

import './style.css'
const MyComponent = () => {

    //Primitive datatype
    const demoString = "Tibbreat_1"; //In ra trong div
    const demoNumber = 25; // In ra trong div
    const demoBoolean = true; // Không in ra trong div
    const demoUndefined = undefined; // Không ỉn ra trong div
    const demoNull = null; // Không in ra trong div


    //Kiểu dữ liệu tham chiếu
    // Nếu in hiển thị thông thường thì chỉ hiển thị các elements trong array Ex. 123
    // -> Dùng JSON.stringify()
    const demoArray = [1, 2, 3];

    //Objects are not valid as a React child.
    // Nếu muốn in ra thông tin của object
    // -> trỏ đến attribute của object
    // Dùng JSON.stringify(object name) 
    const demoObject = {
        name: "tibbreat",
        age: 25
    };
    return (
        //JSX expressions must have one parent element.ts(2657)
        // -> JSX chỉ có 1 cha duy nhất -> Sử dụng Fragment. <> </>

        //trong className tương tự class trong html. Keyword class trùng với keyword của react
        <div className="child"
            style={ // dấu {} đầu tiên tượng trưng cho việc sử dụng Js trong html
                { color: "blue" } // {} thứ 2 tượng trưng cho object.
            }> {demoObject.age} </div>
    );
}
export default MyComponent 