import styled, {
   css
} from "styled-components";

const color = {
   primary: '#8056E1',
   secundary: '#6A47BB',
   hours: '#633BBC',
   passBG: '#fff',
   textColor: '#8d8d8d'
}
const alignElements = {
   element: css `
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
      `
}


export const ChallengeTitle = styled.div `
      margin-bottom: 1.5rem;
      span{
            color: ${color.passBG};
            font-weight: 500 ;
            font-size: 23px;

      }
`;

export const Container = styled.main `
      height: 100vh;
      background: ${color.secundary};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      
`

export const PassWrapper = styled.div `
      max-width: 390px;
      background-color: ${color.passBG};
      width: 100%;
      border-radius: 2em 2em 0 0;
      padding: 1.5rem 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      `;

export const PassInfor = styled.div `
      ${alignElements.element};
      flex-direction: column;
      padding: 0 2rem;

`;

export const LineDashed = styled.div `
display: flex;
position: relative;
margin: 1.5rem 0;
span{
            width: 100%;
            content: '';
            border-bottom: 2px dashed #adadad;     
            position: relative;
            &::after, &::before{
                  content: '';
                  display: block;
                  position: absolute;
                  width: 2rem;
                  height: 2rem;
                  border-radius: 50%;
            }
            &::after{
                  top: -15px;
                  left: -16px;
                  background: rgb(106,71,187);
                  background: linear-gradient(270deg, rgba(106,71,187,1) 50%, rgba(0,212,255,0) 50%);
                  
            }
            &:before{
                  top: -15px;
                  right: -16px;
                  background: rgb(106,71,187);
                  background: linear-gradient(90deg, rgba(106,71,187,1) 50%, rgba(0,212,255,0) 50%);
            }
      }
`;

export const AlignText = styled.div `
      ${alignElements.element};

      p{
            display:flex;
            flex-direction: column;
            width: 100%;
            color: ${color.textColor};
            span{
                  font-weight: bold; 
                  color: #000;
            }
      }
      p:last-child{
            text-align: right;
      }
`;

export const AlignPass = styled.div `
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: right;
      
      i{
            width: 1.5rem;
      }
      h2{
            font-size: 2.25rem;
      }
      span{
            color: #000;
            font-weight: 400;
            
      }

`;

export const SmallNumber = styled.span `
      width: 1rem;
      position: absolute;
      top: 0;
      right: -10px;
      font-size: 0.6em;
      

`;

export const CustomerWrapper = styled.div `
      ${alignElements.element};
      /* height: 20%; */
      padding: 0 2rem;
`;

export const BoadingWrapper = styled.div `
      display: grid;
      grid-template-columns: 1fr 2fr;
      padding: 0 2rem;
`;

export const BoardingContent = styled.div `
      ${alignElements.element}
      p{
            display:flex;
            margin: 1em 0;
            flex-direction: column;
            width: 100%;
            color: ${color.textColor};
            span{
                  font-weight: bold; 
                  color: #000;
            }
            .hour{
                  background-color: ${color.hours};
                  padding: 5px ;
                  text-align: center;
                  color: ${color.passBG};
                  border-radius: 10px;   
                  font-weight: 500;
                  font-size: 1.2rem;
            }
      }
`;

export const QrCodeWrapper = styled.div`
   ${alignElements.element}
   flex-direction: column;
   width: 100%;
   img{
      width: 100%;
   }
   p{
      color: ${color.textColor};
      font-weight: 500;
   }

`;