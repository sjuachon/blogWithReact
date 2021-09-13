import { useHistory } from "react-router";

const Protected = (props) => {
    const history = useHistory();

    if(!props.isLoggedIn) {
        history.push('/');  // history is an array
        return null; // we have to return for this function to work.
    } else {
        return(
            <>
                {props.children}
            </>
        )
    }
}

export default Protected;