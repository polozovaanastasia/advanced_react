import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { UIInput, UIInputVariant } from "shared/ui/UIInput/UIInput";
import * as cls from "./LoginForm.module.scss";

// type LoginFormProps = {};

export const LoginForm = () => {
    const { t } = useTranslation("main");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={classNames(cls["login-form"], {}, [])}>
            <UIInput
                value={username}
                placeholder="username"
                variant={UIInputVariant.FLOATING}
                allowClear
                onChange={(username) => {
                    setUsername(username);
                }}
                onClear={() => {
                    setUsername("");
                }}
            />
            <UIInput
                value={password}
                placeholder="password"
                allowClear
                onChange={(password) => {
                    setPassword(password);
                }}
                onClear={() => {
                    setPassword("");
                }}
            />
            <UIButton
                className={cls["login-form__submit-btn"]}
                onClick={() => {
                    console.log("Sign In");
                }}
            >
                {t("translation:signIn")}
            </UIButton>
        </div>
    );
};
