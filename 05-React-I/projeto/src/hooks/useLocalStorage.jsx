import { useEffect, useState } from 'react';

const useLocalStorage = (key, initial) => {
    const [state, setState] = useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? JSON.parse(local) : initial;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return  [state, setState];
}

export default useLocalStorage;