import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (threshold = 0.2) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }},{threshold});
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => observer.disconnect();
    }, [threshold]);
    return [isVisible, elementRef];
};

export default useIntersectionObserver;
