import React from 'react'
import styled from 'styled-components'
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { AiOutlineWifi } from 'react-icons/ai';

function Activity() {
  return (
    <Section>
      <div className='titulo'>
        <h4>Actividad Reciente</h4>
        <h6>24 ene 2023</h6>
      </div>
      <div className='analytic'>
        <div className='diseño'>
          <div className='logo'>
            <GiPayMoney/>
          </div>
          <div className='contenido'>
            <h5>Salario Recibido</h5>
            <h5 className='color'>Recibió</h5>
          </div>
        </div>
        <div className='money'>
          <h5>$4500</h5>
        </div>
      </div>

      <div className='analytic'>
        <div className='diseño'>
          <div className='logo'>
            <MdOutlineWaterDrop/>
          </div>
          <div className='contenido'>
            <h5>Factura de Agua</h5>
            <h5 className='color'>Pago</h5>
          </div>
        </div>
        <div className='money'>
          <h5>$120</h5>
        </div>
      </div>

      <div className='analytic'>
        <div className='diseño'>
          <div className='logo'>
            <AiOutlineThunderbolt/>
          </div>
          <div className='contenido'>
            <h5>Factura de Luz</h5>
            <h5 className='color'>Pago</h5>
          </div>
        </div>
        <div className='money'>
          <h5>$150</h5>
        </div>
      </div>

      <div className='analytic'>
        <div className='diseño'>
          <div className='logo'>
            <AiOutlineWifi/>
          </div>
          <div className='contenido'>
            <h5>Factura de Wiffi</h5>
            <h5 className='color'>Pago</h5>
          </div>
        </div>
        <div className='money'>
          <h5>$60</h5>
        </div>
      </div>



      
    </Section>
  )
}

export default Activity
const Section = styled.section`

gap: 0.2rem;
.titulo{
  margin-left: 20px;
  h4{
    font-weight: bold;
  }
  h6{
    color: grey;
  }
}
.analytic{
  padding: 0.3rem 0.8rem 0.3rem 1.2rem;
  color: black;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition: 0.5rem ease-in-out;
  &:hover{
    background-color: #F5F5FD;
    color:black ;
    svg{
      color: black;
    }
  }
  float: both;
  .diseño{
    display: flex;
    align-items: center;
    gap: 1rem;
    .logo{
      background-color: white;
      border-radius: 1rem;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem ;
      svg{
        font-size: 1.5rem;
      }
    }
    .color{
      color: gray;
    }
  }
  .money{
    h5{
      float: right;
      margin-top: -30px;
      
    }
  }
}
`;