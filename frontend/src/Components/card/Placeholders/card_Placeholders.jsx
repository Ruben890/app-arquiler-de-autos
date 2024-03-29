export const CardPlaceholders = ({ number_card }) => {
    const cardPlaceholders = []
    for (let i = 0; i < number_card; i++) {
        cardPlaceholders.push(
            <div key={i} className="card_cars mt-5 mb-5 me-3 ms-3 rounded" aria-hidden="true" style={{ width: "18rem", cursor: "pointer" }}>

                <svg className="bd-placeholder-img cars-img w-100 " width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>


                <div className="p-3">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <hr />
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                    </p>
                </div>
            </div>
        )
    }

    return <>{cardPlaceholders}</>


}
