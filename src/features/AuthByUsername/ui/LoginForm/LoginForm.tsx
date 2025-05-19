import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { UIInput } from "shared/ui/UIInput/UIInput";
import * as cls from "./LoginForm.module.scss";

type LoginFormProps = {};

export const LoginForm = ({}: LoginFormProps) => {
    const { t } = useTranslation("main");
    return (
        <div className={classNames(cls["login-form"], {}, [])}>
            <UIInput
                value="1"
                allowClear
                onChange={() => {}}
                onClear={() => {}}
            />
            <UIInput
                value="2"
                allowClear
                onChange={() => {}}
                onClear={() => {}}
            />
            <UIButton
                onClick={() => {
                    console.log("Sign In");
                }}
            >
                {t("translation:signIn")}
            </UIButton>
        </div>
    );
};
