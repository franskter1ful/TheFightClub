import React from 'react'
import './Reasons.css'
import image1 from '../../assets.bak/image1.png'
import image2 from '../../assets.bak/image2.png'
import image3 from '../../assets.bak/image3.png'
import image4 from '../../assets.bak/image4.png'
import nb from '../../assets.bak/nb.png'
import adidas from '../../assets.bak/adidas.png'
import nike from '../../assets.bak/nike.png'
import tick from '../../assets.bak/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>algunas de las razones</span>
            <div>
                <span className='stroke-text'>¿Por qué </span>
                <span> elegirnos?</span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt=""></img>
                    <span>MAS DE 10 COACHES EXPERTOS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>LAS MAS NOVEDOZAS TECNICAS DE ENTRENAMIENTO</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>PRIMER DIA DE PRUEBA GRATIS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>COMPAñEROS Y COACHES CONFIABLES</span>
                </div>
            </div>
            <span 
              style={{
                color: 'var(--gray)', 
                fontWeight: 'normal',
            }}>
                OUR PARTNERS
            </span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons
