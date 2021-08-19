import React from 'react';
import { AiFillBulb, AiFillHeart } from 'react-icons/ai';
import { BsDropletFill, BsMusicNote, BsMusicNoteBeamed } from 'react-icons/bs';
import { FcNews, FcSportsMode } from 'react-icons/fc'
import { MdMovie } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import { BiBroadcast } from 'react-icons/bi'
import Theme1 from '../../../../Configs/Theme';
import styled from 'styled-components';

let data = [
    {
        icon : <BsDropletFill 
                color = {'red'}
                size = {35}
                />,
        category : 'Trending'
    },
    {
        icon : <BsMusicNoteBeamed color = {'yellow'}
            size = {35}
            />,
        category : 'Music'
    },
    {
        icon : <AiFillHeart
        color = {'orange'}
        size = {35}
        />
        ,
        category : 'Gaming'
    },
    {
        icon : <FcNews size = {35}/>,
        category : 'News'
    },
    {
        icon : <MdMovie color = {'purple'}
        size = {35}
        />,
        category : 'Movies'
    },
    {
        icon : <GiClothes color = {'violet'}
        size = {35}
        />,
        category : 'Clothing'
    },
    {
        icon : <AiFillBulb color = {'green'}
        size = {35}
        />,
        category : 'Learning'
    },
    {
        icon : <BiBroadcast color = {'green'}
        size = {35}
        />,
        category : 'Live'
    },
    {
        icon : <FcSportsMode size = {35}/>,
        category : 'Sports'
    },
]

const Container = styled.div`
 display: grid;
 grid-template-columns: auto auto auto auto auto;
 grid-row-gap: 10px;
 grid-column-gap: 5px;

 @media only screen and (max-width : 500px){
     grid-template-columns: auto auto;
 }
 @media only screen and (min-width : 500px) and (max-width : 800px){
     grid-template-columns: auto auto auto;
 }
 @media only screen and (min-width : 800px) and (max-width : 950px){
     grid-template-columns: auto auto auto auto;
 }
 @media only screen and (min-width : 950px){
     grid-template-columns: auto auto auto auto auto;
 }
`
export default function(){
    return(
        <Container>
            {
                data.map((item,index)=>{
                    return(
                        <div style = {{
                            backgroundColor : Theme1.secondary_color,
                            padding: '15px',
                            }}>
                            {/* <div style = {{c/olor : item.col}> */}
                            {item.icon}
                            <p style = {{color : Theme1.focused_color, fontWeight : 'bold'}}>
                                {item.category}
                            </p>
                        </div>
                    )
                })
            }
        </Container>
    )
}