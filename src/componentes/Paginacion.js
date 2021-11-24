import React from "react";

const Paginacion=props=>{
    return(
        <div className="py-3">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info">siguiente &rarr;</button>
        </div>
    )
}
export default Paginacion;