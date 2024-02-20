import { createContext } from "react";
import PropTypes from 'prop-types';
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

const GlobalStorage = ( {children} ) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [token, setToken] = useLocalStorage("token", null);

    const genres = [
        'Action Game',
        'Action RPG',
        'ARPG',
        'Battle Royale',
        'Card Game',
        'Fantasy',
        'Fighting',
        'MMO',
        'MMOARPG',
        'MMORPG',
        'MOBA',
        'Racing',
        'Shooter',
        'Social',
        'Sports',
        'Strategy'
      ];
    
    return (
        <GlobalContext.Provider  value={ {user, setUser, token, setToken, genres} }>
            {children}
        </GlobalContext.Provider>
    );
};

GlobalStorage.propTypes = {
    children: PropTypes.element
}

export default GlobalStorage;