import MenuItens from "./MenuItens/menuItens";
import "./styleMenu.css";

export default function Menu() {
    return (
        <div className="container-menu">
            <MenuItens text="Dashboard" link="/Dashboard" />
            <MenuItens text="Clientes" link="/Clientes" />
        </div>
    );
}
