import React from 'react'
import { BoadingInfor, Container, CustomerInfor, PassInfor, PassWrapper } from './styles';

const Card = () => {
  return (
    <Container>
      Cartão de embarque
      <PassWrapper>
        <PassInfor>
         <div>
            <p>
              Voo <span>RS995</span>
            </p>
            <p>Data <span>23/05/2023</span></p>
          </div>
          <div>
            <div>
              <p>
                São Paulo, Brasil
              </p>
              <h2>
                GRU
              </h2>
              <span>17:00</span>
            </div>
            <span>icon airplan</span>
            <div>
              <p>
                São Francisco, EUA
              </p>
              <h2>
                SFO
              </h2>
              <span>04:48<i>+1</i></span>
            </div>
          </div>
        </PassInfor>
        <div>
          <CustomerInfor>
            <p>Passageiro <span>João Kleby</span></p>
            <p>Assento <span>28A</span></p>
          </CustomerInfor>
        </div>
        <BoadingInfor>
          <div>
            <div>
              <p>Embarque <span>16:15</span></p>
              <p>Terminal <span>2</span></p>
              <p>Portão <span>15</span></p>
            </div>
          </div>
          <div>
            <span>QRcode</span>
            <p>
              Grupo de embarque: 3
            </p>
          </div>
        </BoadingInfor>
      </PassWrapper>
    </Container>
  )
}

export default Card; 