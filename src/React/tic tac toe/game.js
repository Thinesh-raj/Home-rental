import { useState } from "react"
import "./game.css"

function TTT() {
    const [user, setUser] = useState(false);
    const [check, setCheck] = useState(Array(9).fill(null));
    const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    console.log(check);
    function game(index) {
        let copy = [...check];
        if (copy[index] === null) {
            (user ? (copy[index] = "X") : (copy[index] = "O"));
            setCheck(copy);
            setUser(!user);
        }
    }
    function winningX() {
        for (let i = 0; i < win.length; i++) {
            const [x, y, z] = win[i];
            if (check[x] === "X" && check[x] === check[y] && check[y] === check[z]) {
                return true
            }
        }
    }
    function winningO() {
        for (let i = 0; i < win.length; i++) {
            const [x, y, z] = win[i];
            if (check[x] === "O" && check[x] === check[y] && check[y] === check[z]) {
                return true
            }
        }
    }
    return <div className="div">
        {winningX() && <p className="win">X is win</p>}{winningO() && <p className="win">O is win</p>}
        {!user && <p className="p1">Player1 - O</p>}
        <div className="center">
            {
                check.map((e, i) => <button key={i} onClick={() => game(i)}>{e}</button>)
            }
        </div>
        {user && <p className="p2">Player2 - X</p>}
    </div>
}
export default TTT;