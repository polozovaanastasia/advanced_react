import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { UIInput, UIInputVariant } from "shared/ui/UIInput/UIInput";
import * as cls from "./LoginForm.module.scss";

type LoginFormProps = {
    className?: string;
};

export const LoginFormComponent = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    return (
        <div className={classNames(cls["login-form"], {}, [className])}>
            <UIInput
                value={username}
                placeholder={t("translation:authUsernamePlaceholder")}
                variant={UIInputVariant.FLOATING}
                allowClear
                onChange={onChangeUsername}
                onClear={() => {
                    console.log("Cleaning from parent");
                }}
            />
            <UIInput
                value={password}
                placeholder={t("translation:authPasswordPlaceholder")}
                allowClear
                onChange={onChangePassword}
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

export const LoginForm = memo(LoginFormComponent);
