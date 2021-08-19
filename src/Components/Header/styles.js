// import React from 'react';
import styled, { keyframes } from 'styled-components';
export const Container = styled.div`
 display: flex;
 padding: 5px;
 align-items: center;
 justify-content: space-between;
 margin-inline-start : 20px;
 margin-inline-end: 20px;
 /* background-color: transparent; */
 @media only screen and (min-width:950px){
   display: flex;
 }
 @media only screen and (max-width : 950px){
   display: none;
 }
`;

// export default Container2 = styled.div`
// padding-right: '370px';
// @media only screen and (max-width: 500px){
//     padding-right : '0px'
// }
// `

export const Container2 = styled.div`
 background-color: transparent;
 display: flex;
 padding: 5px;
 align-items: center;
 justify-content: space-between;
 margin-inline-start : 20px;
 margin-inline-end: 20px;
 /* display: none; */
 @media only screen and (max-width:950px){
   display: flex;
 }
 @media only screen and (min-width : 950px){
   display: none;
 }
`
const animationIn = keyframes`
  from {
    left : -500px;
  }
  to{
    left : 0px;
  }
`;
const animationOut = keyframes`
  from {
    left : 0px;
  }
  to{
    left : -500px;
  }
`;
const noanimation = keyframes`
  from {
    left : -500px;
  }
  to{
    left : -500px;
  }
`;
export const YDrawer = styled.div`
  width : 20%;
  position: absolute;
  top : 0;
  left : 0;
  padding : 10px;
  animation-name : ${(props)=> props.isDrawerOpen==null ? noanimation : props.isDrawerOpen ?  animationIn : animationOut};
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  @media only screen and (max-width : 700px){
    width : 40%
  }
`;