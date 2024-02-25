import { useState } from "react";
import "./todo.css";
import { FaPen, FaTrash, FaCheck, FaUnlockAlt } from "react-icons/fa";

function Todo() {
    const [value, setValue] = useState([]);
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState();
    let copy = [...value];
    // To add something
    function add() {
        let intElem = document.getElementById("add")
        if (intElem.value.trim() !== "") {
            setValue([...value, { input: intElem.value, done: false }])
            intElem.value = "";
        }
    }
    // Remove all the data
    function remove() {
        let intElem = document.getElementById("add");
        intElem.value = "";
        setValue([]);
        setEdit(false);
    }
    // To check the task is commpleted or not
    function check(i) {
        value[i].done === false ? value[i].done = true : value[i].done = false;
        setValue(copy)
    }
    //To trigger a setter function for update 
    function update(i) {
        setEdit(true)
        setIndex(i)
        let intElem = document.getElementById("add");
        if (intElem.value.trim() === "") {
            intElem.value = copy[i].input;
        }
    }
    // To update the value
    function editvalue(i) {
        let intElem = document.getElementById("add");
        if (intElem.value.trim() !== "") {
            copy[i].input = intElem.value
            setValue(copy);
            intElem.value = "";
        }
        setEdit(false)
    }
    // To delete a specific todo
    function del(i) {
        let intElem = document.getElementById("add");
        intElem.value = ""
        copy.splice(i, 1);
        setValue(copy);
        setEdit(false);
    }
    return <div className="todo">
        <div className="inner">
            <div className="wrap">
                <h1>Todo-list</h1>
                <input id="add" placeholder="Add note" />
                {!edit && <button className="addbtn" onClick={add}>Add</button>}
                {edit && <button className="editbtn" onClick={() => editvalue(index)}>Edit Todo - {index + 1}</button>}
                {!edit && <button className="rmvbtn" onClick={remove}>Remove</button>}
            </div>
            <ol>{
                value.map((e, index) => {
                    return <div key={index} className="ol">
                        <button className={e.done ? "done" : "doned"} onClick={() => check(index)}>
                            <FaUnlockAlt className={e.done ? "none" : "block"} />
                            <FaCheck className={e.done ? "block" : "none"} /></button>
                        <li>{e.input}</li>
                        <button className="uptbtn" onClick={() => update(index)}><FaPen /></button>
                        <button className="delbtn" onClick={() => del(index)}><FaTrash /></button>
                        <div className={e.done ? "overlay":""}></div>
                    </div>
                })
            } </ol>
        </div>
    </div >;
}

export default Todo;