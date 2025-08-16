import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../context/lang";

//function comp
function Main1(props) {
    const [todos, setTodos] = useState([]);
    const [lang, setLang] = useState('vi');

    useEffect(() => {
        console.log("========== run to useEffect");

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [todos]);

    // useEffect(() => {
    //     console.log("useEffect 1111111111111111");
    // });

    useEffect(() => {
        console.log("useEffect 222222222222");

        return () => {
            //un mount 
        }
    }, []);

    return (

        <LangContext.Provider value={lang}>
            <div>
                <p>Danh sach cong viec</p>
                {todos.map(todo => <p key={todo.id}>{todo.title}</p>)}
            </div>
            <h2>{lang}</h2>
            <Main3 />
        </LangContext.Provider>
    );
}

function Main3() {
    const lang = useContext(LangContext);
    return (
        <div>
            <h2>ngon ngu: {lang}</h2>
        </div>
    );
}

// [1, <>2<>, 3] => hiện tại UI
// [1, <>4<>, 3] => 

//function component:
// làm 1 hàm bình thường của js, nhận vào props và trả JSX.
// ko có class, ko có this
// ko có hàm render()
// lifecycle => useState, useEffect, useContext

// quản ly state : useState
// lifecycle: useEffect (didmount, didupdate, willunmount: component class)
// qly context: useContext
// qly ref: useRef
// custom hook => tự viết
// ghi nhớ kết quả => tối ưu hiệu năng => useMemo
// tránh tạo mới nhiều callback fn => useCallback
// useLayoutEffect => sau render, đồng bộ



//function : arrow func component
const Main2 = ({ name }) => <h2>demo {name}</h2>;



//class component
class Main extends React.Component {
    constructor(props) {
        console.log("============ constructor");

        super(props);
        this.state = {
            count: 100
        }
    }

    componentDidMount() {
        console.log("============ componentDidMount");
    }

    componentWillUnmount() {
        console.log("============ componentWillUnmount");
    }

    componentDidUpdate() {
        console.log("============ componentDidUpdate");
    }

    shouldComponentUpdate() {
        console.log("============ shouldComponentUpdate");
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 }); // bat dong bo
        // this.state.count = this.state.count+1;
        console.log(this.state.count, "===========");

    }

    render() {
        return (
            <div>
                <p>Gia tri: {this.state.count}</p>
                <button onClick={this.handleClick}>update</button>
                <h3>xin chao!</h3>
            </div>
        );
    }
}

export { Main, Main1 }
// viết hoa chữa cái đầu
// 1 component thì làm 1 việc
// setState thi mới re-render UI