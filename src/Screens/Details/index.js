import React from 'react';
import { AiOutlineBell, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { BsDot, BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Assets from '../../Assets';
import Header from '../../Components/Header';
import Theme1 from '../../Configs/Theme';
import Card from './Card';
import Card2 from './Card2';
import Tabs from './Components/Tabs';

const Container = styled.div`
    background-color: transparent;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    /* width: 70vw; */

    @media only screen and (max-width: 700px) {
        /* background-color: blue; */
        flex-direction: column;
        width : 70vw;
    }
`;

const Container2 = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    /* justify-content: center; */
    /* width: 70vw; */

    @media only screen and (max-width: 700px) {
        /* background-color: blue; */
        /* flex-direction: column; */
        flex-wrap: wrap;
        width : 70vw;
    }
`;
export default function(){
    return(
        <div style = {{backgroundColor : Theme1.Primary_color}}>
            <Header/>
            <div style = {{marginLeft : '20px'}}>
                <img
                src = {Assets.cover}
                style = {{width : '100%', height : '100%'}}
                />
                <Container style = {{
                        color : Theme1.focused_color, 
                        // marginBottom : '20px',
                        marginInline : '60px',
                        justifyContent : 'space-between',
                        paddingTop : '15px'
                        }}>
                        <div style = {{display : 'flex', alignItems : 'center'}}>
                        <div style = {{}}>
                        <a href="https://www.youtube.com/watch?v=1poXN3jF3Bw">
                        <img
                        src = {Assets.sony}
                        style = {{
                            width : '50%', 
                            height: '50%', 
                            borderRadius : 100, 
                            marginRight : 0
                        }}
                        />
                        </a>
                        </div>
                        <div style = {{marginLeft : -60}}>
                            <div style = {{
                                display :'flex',
                                alignItems: 'center',
                                // marginTop : -20,
                                marginBottom : -20,
                                fontSize : '23px'
                                }}>
                                <p style = {{marginRight : '10px'}}>
                                    Sony Music India
                                </p>
                                <BiCheck
                                color = {Theme1.background_color}
                                size = {14}
                                style = {{backgroundColor : Theme1.tertiary_color, borderRadius : 30}}
                                />
                            </div>
                            <p style = {{
                                color : Theme1.tertiary_color, 
                                // width : '75%', 
                                marginTop : 0,
                                fontSize : '14px'
                                }}>
                            45M Subscribers
                            </p>
                        </div>
                        </div>

                        <div style = {{display : 'flex', alignItems : 'center'}}>
                            <p style = {{
                                color: Theme1.tertiary_color, 
                                backgroundColor : Theme1.secondary_color,
                                padding: '5px',
                                paddingInline : '10px',
                                marginRight : '15px'
                                }}>
                                Subscribed
                            </p>
                            <AiOutlineBell
                            color = {Theme1.tertiary_color}
                            size = {22}
                            />
                        </div>
                    </Container>
                    <div style = {{}}>
                        <div style = {{
                            display : 'flex', 
                            justifyContent : 'space-between', 
                            alignItems : 'center',
                            color : Theme1.tertiary_color,
                            }}>
                                {/* <Tabs/> */}
                            <Container2 style = {{
                                // display :'flex', 
                                // color : Theme1.tertiary_color,
                                alignItems : 'center',
                                fontSize : '14px',
                                // fontWeight :'bold'
                                }}>
                                    <Tabs/>
                            </Container2>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}