import React, { ErrorInfo, Suspense } from "react";
import { PageError } from "widgets/PageError";

type ErrorBoundaryProps = {
    children: React.ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // Этот метод вызывается, если произошла ошибка
    static getDerivedStateFromError(error: Error) {
        console.log(error);
        return { hasError: true };
    }

    // Этот метод можно использовать для логирования ошибок
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Ошибка поймана:", error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Показываем запасной UI
            return (
                <Suspense fallback={""}>
                    <PageError />
                </Suspense>
            );
        }

        return children; // Всё ок — рендерим как обычно
    }
}

export default ErrorBoundary;
