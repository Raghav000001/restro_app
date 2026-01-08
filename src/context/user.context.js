import { createContext } from "react";


    const UserContext = createContext({
        loggedInUser:"guest user",
        isLoggedIn:false
    })

    export default UserContext