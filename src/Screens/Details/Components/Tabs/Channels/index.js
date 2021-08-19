import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';
import styled from 'styled-components';
import Assets from '../../../../../Assets';
import Theme1 from '../../../../../Configs/Theme';

let data = [
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music West',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    },
    {
        thumb : Assets.sony,
        title : 'Sony Music South',
        subscribers : '30M Subscribers'
    }
]

const Container = styled.div`
 display: grid;
 grid-template-columns: auto auto auto auto;
 grid-row-gap: 10px;
 grid-column-gap: 105px;
 align-items: center;
 justify-content: center;
 padding-top: 25px;

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
     grid-template-columns: auto auto auto auto auto ;
     /* width : 55vw */
 }
`
export default function(){
    return(
        <div style = {{backgroundColor : Theme1.background_color, width : '97vw'}}>
            <div style = {{
                marginInline : '70px', 
                paddingTop : '20px'
                }}>
                <div style = {{display :'flex', alignItems :'center', fontSize : '17px'}}>
                    <p style = {{color : Theme1.focused_color, marginRight : '10px'}}>
                        All Channels
                    </p>
                    <AiOutlineDown
                    color = {Theme1.focused_color}
                    />
                </div>
                    <p style = {{fontSize : '16px', fontWeight : 'bold', color : Theme1.focused_color, }}>
                        For Music & Entertainment from Sony Music Check Out!!!
                    </p>
            <Container style = {{
                // display : 'flex', 
                // flexWrap : 'wrap',
                // width : window.innerWidth
                }}>
                {
                    data.map((item,index)=>{
                        return(
                            <div style = {{
                                color : Theme1.focused_color,
                                // textAlign : 'center'
                                }}>
                                <a href="https://www.youtube.com/watch?v=1poXN3jF3Bw">
                                <img
                                src = {item.thumb}
                                style = {{
                                    width : '98%', 
                                    height: '120px', 
                                    borderRadius : 100
                                }}
                                />
                                </a>
                                <div style = {{display :'flex', alignItems : 'center', justifyContent : 'center'}}>
                                <div style = {{}}>
                                    <p style = {{fontWeight : 'bold', fontSize : '13px'}}>
                                        {item.title}
                                    </p>
                                        <p style = {{
                                            color : Theme1.tertiary_color, 
                                            fontSize : '14px', 
                                            marginBottom : 0,
                                            marginTop : 0,
                                            marginRight : '5px'
                                            }}>
                                            {item.publisher}
                                        </p>
                                        <p style = {{color : Theme1.tertiary_color}}>
                                            {item.subscribers}
                                        </p>
                                    <p style = {{
                                    color: Theme1.tertiary_color, 
                                    backgroundColor : Theme1.secondary_color,
                                    padding: '5px',
                                    paddingInline : '10px',
                                    // marginRight : '15px',
                                    textAlign : 'center'
                                    }}>
                                    Subscribed
                                    </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Container>
        </div>
        </div>
    )
}