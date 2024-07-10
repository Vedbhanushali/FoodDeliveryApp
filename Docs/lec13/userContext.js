import { createContext } from "react";

const UserContext = createContext({ //default value of context
    user: {
        name: "dummy name",
        email: "dummy email"
    }
})

UserContext.displayName = "UserContext"; //this name is helpful when there are multiple context in application and to find in react dev tools extension this name will come

export default UserContext