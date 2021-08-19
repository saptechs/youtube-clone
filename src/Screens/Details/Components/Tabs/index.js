import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';
import Theme1 from '../../../../Configs/Theme';
import About from './About';
import Channels from './Channels';
import Community from './Community';
import Home from './Home';
import Playlist from './Playlist';
// import Home from '../../../Home';
import Videos from './Videos';

const Container = styled.div`
 display: flex;
 @media only screen and (max-width : 700px){
     flex-wrap: wrap;
 }
`
export default function(){
    // let Tabs = [
    //     {
    //         label : 'HOME',
    //         component : () => <Home/>
    //     },
    //     {
    //         label : 'VIDEOS',
    //         component : () => <Videos/>
    //     },
    //     {
    //         label : 'PLAYLIST',
    //         component : () => <Playlist/>
    //     },
    //     {
    //         label : 'CHANNEL',
    //         component : ()=><Channels/>
    //     },
    //     {
    //         label : 'COMMUNITY',
    //         component : ()=> <Community/>
    //     },
    //     {
    //         label : 'ABOUT',
    //         component : About
    //     }
    // ]
    let Tabs = [
        {
            label : 'HOME',
            component : Home
        },
        {
            label : 'VIDEOS',
            component : Videos
        },
        {
            label : 'PLAYLIST',
            component : Playlist
        },
        {
            label : 'COMMUNITY',
            component : Community
        },
        {
            label : 'CHANNEL',
            component : Channels
        },
        {
            label : 'ABOUT',
            component : About
        }
    ]
    const [Focused, setFocused] = useState(0);
            
    let MainComponent = Tabs.filter((item,index)=> index==Focused)[0].component;
    return(
        <div>
        <Container style = {{
            // display :"flex", 
            alignItems : 'center',
            marginTop : '20px',
            justifyContent : 'space-between'
            }}>
            <Container style = {{
                // display : 'flex', 
                marginInline : '60px'}}>
            {
                Tabs.map((item,index)=>{
                    return(
                        <div 
                        onClick={()=>{setFocused(index)}}
                        style = {{
                            cursor: 'pointer',
                            padding : '10px 25px',
                            // paddingLeft : '25px',
                            // backgroundColor : "green"
                            borderBottomWidth : Focused==index ? 2 : 0,
                            borderBottomColor : Theme1.focused_color,
                            borderBottomStyle : 'solid',
                            // display: 'flex'
                            }}>
                            {item.label}
                        </div>
                    )
                })
            }
            </Container>
            <AiOutlineRight
            color = {Theme1.tertiary_color}
            size = {20}
            />
        </Container>
        {/* {
            Tabs.filter((item,index)=> index==focused)[0].component()
        } */}
        <MainComponent/>
        </div>
    )
}
