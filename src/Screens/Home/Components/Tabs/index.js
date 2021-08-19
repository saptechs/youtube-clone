import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';
import Theme1 from '../../../../Configs/Theme';

const Container = styled.div`
 display: flex;
 @media only screen and (max-width : 700px){
     flex-wrap: wrap;
     row-gap: 10px;
 }
`
let data = [
    {
        category : 'All'
    },
    {
        category : 'Arijit Singh'
    },
    {
        category : 'Javascript'
    },
    {
        category : 'Sidharth Malhotra'
    },
    {
        category : 'Bolywood Music'
    },
    {
        category : 'A R Rahman'
    },
    {
        category : 'Cricket'
    },
    {
        category : 'Music'
    },
    {
        category : 'Palak Mucchal'
    },
    {
        category : 'Javascript'
    },
    {
        category : 'Sidharth Malhotra'
    },
    {
        category : 'Bolywood Music'
    },
    // {
    //     category : 'A R Rahman'
    // },
    // {
    //     category : 'Javascript'
    // },
    // {
    //     category : 'Sidharth Malhotra'
    // },
    // {
    //     category : 'Bolywood Music'
    // },
    // {
    //     category : 'A R Rahman'
    // },
]

export default function(){
    return(
        <Container style = {{
            // display : 'flex', 
            alignItems : 'center', 
            marginBottom : '10px',
            marginLeft : '20px'
            }}>
            {
                data.map((item,index)=>{
                    return(
                        <div style = {{
                            backgroundColor : Theme1.secondary_color, 
                            // padding : 0,
                            paddingInline : '10px',
                            borderRadius : 15,
                            marginRight : '10px',
                            // paddingTop : 0,
                            // paddingBottom : 0
                            }}>
                            <p style = {{color : 'white', fontSize : '12px', fontWeight : 'bold'}}>
                                {item.category}
                            </p>
                        </div>
                    )
                })
            }
            <AiOutlineRight
            color = {Theme1.focused_color}
            size = {12}
            style = {{marginLeft: '30px'}}
            />
        </Container>
    )
}