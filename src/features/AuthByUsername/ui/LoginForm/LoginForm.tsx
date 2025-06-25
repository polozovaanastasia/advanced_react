import { AppDispatch } from "app/providers/storeProvider/config/store";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {
    loginActions,
    loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";
import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader";
import { UIButton } from "shared/ui/UIButton/UIButton";
import { UIInput, UIInputVariant } from "shared/ui/UIInput/UIInput";
import { UILoader, UILoaderSize } from "shared/ui/UILoader/UILoader";
import * as cls from "./LoginForm.module.scss";

export type LoginFormProps = {
    className?: string;
};

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginFormComponent = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        return () => {
            dispatch(loginActions.setUsername(""));
            dispatch(loginActions.setPassword(""));
            dispatch(loginActions.setError(undefined));
        };
    }, []);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, []);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, []);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div
                className={classNames(
                    cls["login-form"],
                    { [cls["login-form_is-loading"]]: true },
                    [className]
                )}
            >
                {error && (
                    <div className={cls["login-form__error"]}>{error}</div>
                )}
                {isLoading && <UILoader size={UILoaderSize.S} />}
                {!isLoading && (
                    <>
                        <UIInput
                            className={cls["login-form__input"]}
                            value={username}
                            placeholder={t(
                                "translation:authUsernamePlaceholder"
                            )}
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
                            placeholder={t(
                                "translation:authPasswordPlaceholder"
                            )}
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
        </DynamicModuleLoader>
    );
};

export default memo(LoginFormComponent);
