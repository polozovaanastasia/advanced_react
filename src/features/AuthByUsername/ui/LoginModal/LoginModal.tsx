import { useTranslation } from "react-i18next";
import { UIModal } from "shared/ui/UIModal/UIModal";
import { LoginForm } from "../LoginForm/LoginForm";
import * as cls from "./LoginModal.module.scss";

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const { t } = useTranslation("main");

    return (
        <UIModal
            className={cls["login-modal"]}
            isOpen={isOpen}
            withCloseButton={false}
            onClose={onClose}
        >
            <UIModal.Header className={cls["login-modal__header"]}>
                {t("translation:authModalTitle")}
            </UIModal.Header>
            <UIModal.Body>
                <LoginForm />
            </UIModal.Body>
        </UIModal>
    );
};
