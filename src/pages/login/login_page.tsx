import { useState } from "react";
import LoginAccount from "./loginAccount";
import LoginNoAccount from "./loginNoAccount";

const LoginPage: React.FC = () => {
    const [account, setAccount] = useState(true);

    const updateAccount = () => {
        setAccount(!account);
    };

    return (
        <div className="container">
            {account ? (
                <LoginAccount updateAccount={updateAccount} />
            ) : (
                <LoginNoAccount updateAccount={updateAccount} />
            )}
        </div>
    );
};

export default LoginPage;
