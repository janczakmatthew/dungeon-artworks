import { useEffect, useState } from "react";

function DelayedLoading(isLoading, delay = 500){
    const [showLoading, setShowLoading] = useState(isLoading);

    useEffect(() => {
        let timeout;
        if (isLoading){
            setShowLoading(true);
        } else {
            timeout = setTimeout(() => setShowLoading(false), delay);
        }
        return () => clearTimeout(timeout);
    }, [isLoading, delay])

    return showLoading;
}

export default DelayedLoading;