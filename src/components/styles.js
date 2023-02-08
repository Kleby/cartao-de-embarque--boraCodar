import styled, { css } from "styled-components";

const color = {
      primary: '#8056E1',
      secundary: '#6A47BB',
      hours: '#633BBC',
      passBG: '#fff'
}
const alignElements = {
      element: css`
            display: flex;
            justify-content: space-between;
            align-items: center;
      `
}


export const Container = styled.main `
      height: 100vh;
      background: linear-gradient(0deg, ${color.secundary} 43%, ${color.primary} 76%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
`

export const PassWrapper = styled.div`
      max-width: 360px;
      background-color: ${color.passBG};
      width: 100%;
      height: 65vh;
      border-radius: 2em 2em 0 0;
      padding: 1.5rem 2rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
`;

export const PassInfor = styled.div`
      ${alignElements.element};
      flex-direction: column;
      /* height: 40%; */
      /* margin: 1rem ; */
`;

export const CustomerInfor = styled.div`
      ${alignElements.element};
      /* height: 20%; */
`;

export const BoadingInfor = styled.div`
      ${alignElements.element};
      /* height: 40%; */
`;