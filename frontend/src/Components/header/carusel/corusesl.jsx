import supra_interior from '../../../asset/IMG/pexels-esmihel-muhammad-14542673.jpg'
import toyota from '../../../asset/IMG/pexels-адаш-очир-2662194.jpg'
import bmw from "../../../asset/IMG/pexels-mike-b-100650.jpg"


export const Carusel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={supra_interior} className="d-block w-100" alt="..." height='400px' style={{ objectFit: "cover" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={toyota} className="d-block w-100" alt="..." height='400px' style={{ objectFit: "cover" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bmw} className="d-block w-100" alt="..." height='400px' style={{ objectFit: "cover" }} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}