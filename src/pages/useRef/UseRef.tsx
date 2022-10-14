import { useRef } from "react";
import { Link } from "react-router-dom";


export default function UseRef() {
    const counterRef = useRef(0);

    function increaseCounter() {
        counterRef.current += 1;
    }

    function showCounter(){
        alert(`O botão foi clicado ${counterRef.current} vezes.`)
    }

    return (
        <>
            <h1>useRef</h1>
            <button onClick={increaseCounter}>Clicar</button>
            &nbsp;
            <button onClick={showCounter}>Quantas vezes o botão foi clicado</button>
            &nbsp;
            <Link to="/">Voltar</Link>
        </>
    )
}