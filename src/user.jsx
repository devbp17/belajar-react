function User(props){

    const welcome = <h2 className="welcome">welcome {props.username} </h2>
    const wrong = <h2 className="false">boolean false</h2>

        return(props.isLoggedin ? welcome : wrong );
}

export default User