import { AppDispatch } from "app/providers/storeProvider/config/store";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { UIInput, UIInputVariant } from "shared/ui/UIInput/UIInput";
import { UILoader, UILoaderSize } from "shared/ui/UILoader/UILoader";
import * as cls from "./LoginForm.module.scss";

export type LoginFormProps = {
    className?: string;
};

export const LoginFormComponent = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [username, password]);

    useEffect(() => {
        return () => {
            dispatch(loginActions.setUsername(""));
            dispatch(loginActions.setPassword(""));
            dispatch(loginActions.setError(undefined));
        };
    }, []);

    return (
        <div
            className={classNames(
                cls["login-form"],
                { [cls["login-form_is-loading"]]: true },
                [className]
            )}
        >
            {error && <div className={cls["login-form__error"]}>{error}</div>}
            {isLoading && (
                <UILoader
                    size={UILoaderSize.S}
                    className={cls["login-form__loader"]}
                />
            )}
            {!isLoading && (
                <>
                    <UIInput
                        className={cls["login-form__input"]}
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
                        className={cls["login-form__input"]}
                        value={password}
                        placeholder={t("translation:authPasswordPlaceholder")}
                        variant={UIInputVariant.FLOATING}
                        allowClear
                        onChange={onChangePassword}
                    />
                    <UIButton
                        className={cls["login-form__submit-btn"]}
                        onClick={onLoginClick}
                    >
                        {t("translation:signIn")}
                    </UIButton>
                </>
            )}
        </div>
    );
};

export const LoginForm = memo(LoginFormComponent);
