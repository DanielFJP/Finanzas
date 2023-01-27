import React from 'react'
import styled from 'styled-components'
import { TiHome } from "react-icons/ti";
import { BiCar } from 'react-icons/bi'

function Payment() {
  return (
    <Section>
      <div className='titulo'>
        <h4>Próximos Pagos</h4>
        <h6>15 feb 2023</h6>
      </div>
      
      <div className='analitica'>
        <div className='diseño'>
          <div className='logo'>
            <TiHome/>
          </div>
        <div className='contenido'>
          <h5>Arriendo de Casa</h5>
          <h5 className='color'>Pendiente</h5>
        </div>
        </div>
      <div className='money'>
        <h5>$1500</h5>
        </div>
        </div>

      <div className='analitica'>
        <div className='diseño'>
          <div className='logo'>
            <BiCar/>
          </div>
        <div className='contenido'>
          <h5>Seguro del Auto</h5>
          <h5 className='color'>Pendiente</h5>
          </div>
        </div>
      <div className='money'>
        <h5>$150</h5>
        </div>
        </div>
    </Section>
  )
}

export default Payment
const Section = styled.section`
display: grid;
gap: 0.2rem;
.titulo{
  margin-left: 15px;
  h4{
    font-weight: bold;
  }
  h6{
    color: grey;
  }
}
.analitica{
  padding: 0.3rem 0.8rem 0.3rem 1.2rem;
  color: black;
  justify-content: space-between;
  align-items: center;
  gap: 1rem ;
  transition: 0.5rem ease-in-out;
  &:hover{
    background-color: #F5F5FD;
    color: black;
    svg{
      color: black;
    }
  }
  float: both;
  .diseño{
    display: flex;
    align-items: center;
    gap:1rem;
    .logo{
      background-color: white;
      border-radius: 1rem;
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      svg{
        font-size: 1.5rem;
      }
    }
  }
  .color{
    color: #e05f5f;
  }
  .money{
    h5{
      float: right;
      margin-top: -30px;
    }
  }
}

`;