
function Student(props){
    return(
        <div className="student">
            <p>props: {props.name}</p>
            <p>props angka: {props.angka}</p>
            <p>props boolean: {props.boolean ? "true" : "false"}</p>
        </div>
    );
}

export default Student