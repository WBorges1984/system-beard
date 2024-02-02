import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesLogin.css";

interface LoginAccountProps {
    updateAccount: () => void;
}

export default function LoginAccount(props: LoginAccountProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            setMessage(true);
        } else {
            setMessage(false);
            navigate("/dashboard");
            console.log("submit", { email, password });
        }
    };

    return (
        <>
            <div className="mensagem">
                <div className="conteudo-mensagem">
                    <h2>Bem-Vindo</h2>
                    <h4>Faça login ao lado </h4>
                    <article>Se não possuir conta</article>
                    <button
                        className="btn-cadastrar"
                        onClick={props.updateAccount}
                    >
                        Criar conta
                    </button>
                </div>
            </div>
            <div id="login">
                <div className="title-login">
                    <h1 className="title">Logar no sistema</h1>
                </div>
                <div className="form-login">
                    {message === true ? (
                        <span className="mensagem-erro">
                            Há campos em branco!
                        </span>
                    ) : (
                        ""
                    )}
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <img
                                src="icons/email.svg"
                                alt=""
                                className="icon-email"
                            />
                            <input
                                placeholder="email"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <img
                                src="icons/lock.svg"
                                alt=""
                                className="icon-email"
                            />
                            <input
                                placeholder="Senha"
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="actions">
                            <button className="btn-entrar" type="submit">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
