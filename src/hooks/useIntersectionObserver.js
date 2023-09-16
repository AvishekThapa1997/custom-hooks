import { useEffect, useRef } from "react";

function useIntersectionObserver(cb,threshold=1.0) {
    const elementToIntersect = useRef(null);
    const intersectElement = useRef();
    useEffect(() => {
        const rootElement = elementToIntersect.current;
        const elementIntersecting = intersectElement.current;
        const observerOptions = {
            root:rootElement,
            rootMargin:'0px',
            threshold
        }
        const observerCallback = (events) => {
            const isIntersecting = events.every(event => event.isIntersecting)
            if(isIntersecting) {
                cb?.();
            }
        }
        const observer = new IntersectionObserver(observerCallback,observerOptions);
        observer.observe(elementIntersecting);
        return () => {
            observer.disconnect();
        }
    },[cb,threshold])
    return {elementToIntersect,intersectElement};
}

export default useIntersectionObserver;