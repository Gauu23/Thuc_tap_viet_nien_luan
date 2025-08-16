import React, { useCallback, useMemo, useRef, useState } from "react";

// use ref
function CheckHook1() {

    const inputRef = useRef(null);
    const demoRef = useRef(10);

    const [check, setCheck] = useState(10);

    demoRef.current++;

    return (
        <div>
            <p>{demoRef.current}</p>
            <p>{check}</p>

            <span onClick={() => inputRef.current.focus()}>username:</span>
            <input ref={inputRef} />
            <button onClick={() => setCheck(check + 1)}>add</button>

        </div>
    );
}


//memo
function cal(check) {
    console.log("cal checkkkk aaaaaaaaaaaaaa");

    for (let index = 0; index < 100000; index++) {
    }

    return 20 * check;
}
function CheckHook2() {
    const [check1, setCheck1] = useState(1);

    const [check2, setCheck2] = useState(1);

    const kqua1 = useMemo(() => cal(check1), [check1]);

    return (
        <div>
            <p>{kqua1}</p>
            <p>{check2}</p>

            <button onClick={() => setCheck1(old => old + 1)} >update check 1</button>

            <button onClick={() => setCheck2(old => old + 1)} >update check 2</button>
        </div>
    );
}


//use callback
function CheckHook3() {
    const [age, setAge] = useState(0);
    const [rd, setRd] = useState(0);

    const handleEvent = useCallback(() => {
        console.log(" hàm callback đc gọi");
    }, []);

    return (
        <div>
            <p>{rd}</p>
            <button onClick={() => setRd(old => old+1)}>render update state</button>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
            <BtnCheck handleOnClick={handleEvent} />
        </div>
    );
}
const BtnCheck = React.memo(({ handleOnClick }) => {
    console.log("btnCheck rerender");
    
    return (
        <button onClick={handleOnClick}>btn check</button>
    );
});


export { CheckHook1, CheckHook2, CheckHook3 }