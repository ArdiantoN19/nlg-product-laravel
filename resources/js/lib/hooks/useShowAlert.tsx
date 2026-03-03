import { useEffect, useState } from "react";

export function useShowAlert(message: string, timer: number = 3000) {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
        if (message) {
            const showTimer = setTimeout(() => {
                setShowAlert(true);
            }, 0);

            const hideTimer = setTimeout(() => {
                setShowAlert(false);
            }, timer);

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [message, timer]);

    return [showAlert, setShowAlert, message] as const;
}