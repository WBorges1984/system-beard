import { useNavigate } from "react-router-dom";
import "./styleMenuItens.css";

interface InterfaceMenuItens {
    text: string;
    link: string;
}

export default function MenuItens(props: InterfaceMenuItens) {
    const navigate = useNavigate();

    function HandleClick(url: string) {
        navigate(`${props.link}`);
    }

    return (
        <button onClick={() => HandleClick(props.link)}>{props.text}</button>
    );
}
