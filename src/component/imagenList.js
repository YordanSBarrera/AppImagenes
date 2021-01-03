import React from 'react'
import './imagenList.css'
import ImagenCard from './imagenCard'

const ImagenList = (props) => {
    console.log(props)

    const imagenes = props.lista.map(
        (im) => {
            return (
                <ImagenCard imag={im} key={im.id}/>
            )
        }
    );
    return (
        <div>
            Se encontralon {props.lista.length} imagenes
            <hr />
            <div className='imagen-list'>
                {imagenes}
            </div>
        </div>
    );
}

export default ImagenList;