import { useEffect, useState } from "react";

export const useDimension = () => {
    const [dimension, setDimension] = useState({});

    const getDimension = () => {
        setDimension({
            width: window.screen.width,
            height: window.screen.height,
        });
    };

    useEffect(() => {
        getDimension();
        window.addEventListener("resize", getDimension);
    }, []);

    return dimension;
};
