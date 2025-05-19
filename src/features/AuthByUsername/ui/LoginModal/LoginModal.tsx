import { UIModal } from "shared/ui/UIModal/UIModal";
import { LoginForm } from "../LoginForm/LoginForm";

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    return (
        <UIModal isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </UIModal>
    );
};
