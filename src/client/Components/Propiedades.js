import React from 'react';

const Propiedad = (props) => {
    const {valor, descripcion, direccion} = props.propiedad;
    
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              {/*  <img src={imagen} className="card-img-top"/>*/}
                <div className="card-body">
                    <p className="card-text">{valor}</p>
                    <p className="card-text">{direccion}</p>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
        </div>
    )
}
export default Propiedad;