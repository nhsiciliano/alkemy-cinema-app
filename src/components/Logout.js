import { useHistory } from "react-router-dom";


function Logout() {

    const history = useHistory();

    const handlerLogOut = e => {
        e.preventDefault();
        sessionStorage.clear();
        history.push("/");
    }

    return (
        <button className="btn btn-danger my-2 my-sm-0" onClick={handlerLogOut}>LogOut</button>
    )
}

export default Logout