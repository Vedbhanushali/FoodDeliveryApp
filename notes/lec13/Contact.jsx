import { useContext } from "react";
import UserContext from "../../utils/userContext";

const Contact = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <h1>Contact page</h1>
            {/* Modifying value of Context data */}
            <input value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })} />
            <input value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })} />
        </>
    );
};

export default Contact;