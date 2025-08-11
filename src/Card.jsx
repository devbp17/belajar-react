import yoruka from "./assets/yoruka.jpg"

function Card(){
    return(
        <div className="card">
            <img className="gambar" src={yoruka} alt="Asanagi yori" />
            <h2 className="card-title">Asanagi Yori</h2>
            <p className="Card-text">ini adalah paragraf di dalam card</p>
        </div>
    );
}

export default Card