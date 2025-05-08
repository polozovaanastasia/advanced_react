import { createPortal } from "react-dom";

type PortalProps = {
    children: React.ReactNode;
    element?: HTMLElement;
};

export const Portal = ({ children, element = document.body }: PortalProps) => {
    return createPortal(children, element);
};
