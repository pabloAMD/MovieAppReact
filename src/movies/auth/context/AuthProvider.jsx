import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"



const init = () => {

    const user =  JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user:user,
    }

}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    
    const onLogin = (name = '') => {
        
        const action = {
            type: types.login,
            payload : name
        }

        localStorage.setItem('user', JSON.stringify(name));

        dispatch(action);

    }

    const onLogout = () => {
        localStorage.removeItem('user');
        const action = {type: types.logout};
        dispatch(action)
    };

    return (
        <AuthContext.Provider value={{...authState, login:onLogin, logout:onLogout}}>

            {children}

        </AuthContext.Provider>
    )
}
