import { LoginForm } from "features/AuthByUsername";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { UILoader, UILoaderSize } from "shared/ui/UILoader/UILoader";
import { UIModal } from "shared/ui/UIModal/UIModal";
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
            <UIModal.Body className={cls["login-modal__body"]}>
                <Suspense fallback={<UILoader size={UILoaderSize.S} />}>
                    <LoginForm onSuccess={onClose} />
                </Suspense>
            </UIModal.Body>
        </UIModal>
    );
};
