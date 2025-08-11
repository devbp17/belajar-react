import yori from "./assets/yori.jpg"

function Card(){
    return(
        <div className="card">
            <img className="gambar" src={yori} alt="Asanagi yori" />
            <h2 className="card-title">ini adalah header card</h2>
            <p className="Card-text">ini adalah paragraf di dalam card</p>
        </div>
    );
}

export default Card