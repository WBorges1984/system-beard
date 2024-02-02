import { useState } from "react";
import "./stylesNoLogin.css";

interface LoginAccountProps {
    updateAccount: () => void;
}

export default function LoginNoAccount(props: LoginAccountProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            name.trim() === "" ||
            email.trim() === "" ||
            password.trim() === ""
        ) {
            setMessage(true);
        } else {
            setMessage(true);
            props.updateAccount();
            console.log("teste", { name, email, password });
        }
    };

    return (
        <>
            <div className="mensagem">
                <div className="conteudo-mensagem">
                    <h2>Bem-Vindo</h2>
                    <h4>Faça seu cadastro </h4>
                    <article>Se possuir conta</article>
                    <button className="btn-login" onClick={props.updateAccount}>
                        Login
                    </button>
                </div>
            </div>
            <div id="login">
                <div className="title-login">
                    <h1 className="title">Cadastrar Conta</h1>
                </div>
                {message === true ? (
                    <span className="mensagem-erro">
                        Nome, Email e senha devem ser preenchidos!
                    </span>
                ) : (
                    ""
                )}

                <div className="form-login">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <img
                                src="icons/person.svg"
                                alt=""
                                className="icon-name"
                            />
                            <input
                                placeholder="Nome"
                                type="text"
                                name="text"
                                id="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
