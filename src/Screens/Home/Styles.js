import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-columns: auto auto auto auto;
 grid-row-gap: 10px;
 grid-column-gap: 10px;

 @media only screen and (max-width : 500px){
     grid-template-columns: auto;
 }
 @media only screen and (min-width : 500px) and (max-width : 800px){
     grid-template-columns: auto auto;
 }
 @media only screen and (min-width : 800px) and (max-width : 950px){
     grid-template-columns: auto auto auto;
 }
 @media only screen and (min-width : 950px){
     grid-template-columns: auto auto auto auto;
 }
`