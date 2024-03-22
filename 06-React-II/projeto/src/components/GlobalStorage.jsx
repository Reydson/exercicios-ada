import { createContext } from "react";
import PropTypes from 'prop-types';
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

const GlobalStorage = ( {children} ) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [token, setToken] = useLocalStorage("token", null);
    const [cart, setCart] = useLocalStorage("cart", []);
    
    return (
        <GlobalContext.Provider  value={ {user, setUser, token, setToken, cart, setCart} }>
            {children}
        </GlobalContext.Provider>
    );
};

GlobalStorage.propTypes = {
    children: PropTypes.element
}

export default GlobalStorage;