import React, {useState, useEffect, useRef} from 'react';

function Hooks()
{
    const [Emails, setEmails] = useState(0);
    const [User, setUser]= useState("");
    const [LoggedIn, setLoggedIn]= useState(false);
    const userNameInput = useRef();
    useEffect(() => {
        document.title = `Messages: ${Emails}`;
    });
    const setFocusToInputBox = () => {
        userNameInput.current.focus();
        setUser(userNameInput.current.value)
        if(User !== "")
        toggleLoginStatus();
    }
    const toggleLoginStatus = () => {
        setLoggedIn(!LoggedIn)
    }
    const toggleMessage = () => {
        if(User === "")
        {
            return(
                <p>{User} Messages: {Emails}</p>
            )
        }
        else{
            return(
                <p>{User}'s Messages: {Emails}</p>
            )
        }

    }
return(
        <div className="jumbotron">
            <h1>Hooks Examples</h1>
            <input type="text"  ref={userNameInput}></input><button onClick={setFocusToInputBox}>Set Username</button>
            {toggleMessage()}

            <button className="button-grn" onClick={() => setEmails(Emails+1)}>+</button>
            <span>  </span>
            <button className="button-grn" onClick={() => setEmails(Emails-1)}>-</button>
        </div>
    )
}
export default Hooks;