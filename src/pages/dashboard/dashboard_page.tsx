import Menu from "../../components/menu/menu";
import "./styleDashboard.css";

export default function Dashboard() {
    return (
        <div className="container-dashboard">
            <div className="menu-left">
                <div className="name-company">Coca-Cola</div>
                <div className="logo">
                    <img
                        src="https://logosmarcas.net/wp-content/uploads/2020/08/Coca-Cola-Logo.png"
                        alt=""
                    />
                </div>
                <hr />
                <div className="menu">
                    <Menu />
                </div>
            </div>

            <div className="container-conteudo">
                <div className="top-status"></div>
                <div className="barra-info">
                    <div className="o1">1</div>
                    <div className="o2">2</div>
                </div>
                <hr />
                <div className="conteudo"> </div>
            </div>
        </div>
    );
}
