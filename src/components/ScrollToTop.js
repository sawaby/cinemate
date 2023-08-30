
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [window.location.pathname]);

  return null;
}
