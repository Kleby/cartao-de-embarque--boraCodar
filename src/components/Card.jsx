import React from 'react'

import {Airplane} from '@styled-icons/ionicons-sharp';

import { AlignPass, AlignText, BoadingWrapper, BoardingContent, ChallengeTitle, Container, CustomerWrapper, LineDashed, PassInfor, PassWrapper, QrCodeWrapper, SmallNumber } from './styles';

import QrCode from '../images/QrCode.svg';

const Card = () => {
  return (
    <Container>
      <ChallengeTitle>
        <span>Cartão de embarque</span>        
      </ChallengeTitle>
      <PassWrapper>
        <PassInfor>
         <AlignText>
            <p>
              Voo <span>RS995</span>
            </p>
            <p>
              Data <span>23/05/2023</span>
            </p>
          </AlignText>
          <AlignPass>
            <div>
              <p>
                São Paulo, Brasil
              </p>
              <h2>
                GRU
              </h2>
              <span>17:00</span>
            </div>
            <i><Airplane /></i>
            <div>
              <p>
                São Francisco, EUA
              </p>
              <h2>
                SFO
              </h2>
              <span style={{position: 'relative', marginRight:'.75rem'}}>04:48<SmallNumber>+1</SmallNumber></span>
            </div>
          </AlignPass>
        </PassInfor>
        <LineDashed >
          <span />
        </LineDashed>
        <AlignText>
          <CustomerWrapper>
            <p>Passageiro <span>João Kleby</span></p>
            <p>Assento <span>28A</span></p>
          </CustomerWrapper>
        </AlignText>
        <LineDashed >
          <span />
        </LineDashed>
        <BoadingWrapper>
          <BoardingContent>
            <div>
              <p>Embarque <span className='hour'>16:15</span></p>
              <p>Terminal <span>2</span></p>
              <p>Portão <span>15</span></p>
            </div>
          </BoardingContent>
            <QrCodeWrapper> <img src={QrCode} alt="codigo qr" />
            <p>
              Grupo de embarque: 3
            </p>
            </QrCodeWrapper>
        </BoadingWrapper>
      </PassWrapper>
    </Container>
  )
}

export default Card; 