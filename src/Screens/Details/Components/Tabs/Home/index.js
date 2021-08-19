import React from 'react';
import { BsDot, BsFillPlayFill } from 'react-icons/bs';
import styled from 'styled-components';
import Assets from '../../../../../Assets';
import Theme1 from '../../../../../Configs/Theme';
import Card from '../../../Card';
import Card2 from '../../../Card2';

const Container = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* width: 70vw; */

    @media only screen and (max-width: 700px) {
        /* background-color: blue; */
        flex-direction: column;
        width : 70vw;
    }
`;
export default function(){
    return(
        <div style={{backgroundColor : Theme1.background_color}}>
            <div style = {{
                // backgroundColor : Theme1.background_color
                }}>
                        <div style = {{
                            marginInline : '70px'
                            }}>
                        <Container style = {{
                        color : Theme1.focused_color, 
                        display :'flex',
                        marginBottom : '10px'
                        }}>
                        <div>
                        <a href="https://www.youtube.com/watch?v=1poXN3jF3Bw">
                        <img
                        src = {Assets.t1}
                        // style = {{width : '100%', height: '100%'}}
                        style = {{width : '400px', height: '220px'}}

                        />
                        </a>
                        </div>

                        <div style = {{marginLeft : '20px', width : '40%'}}>
                        <p style = {{fontWeight : 'bold', fontSize : '15px'}}>
                            Mann bhareya 2.0 - Official video | Shersaah | Sidharth
                        </p>
                        <div style = {{
                            display :'flex',
                            color : Theme1.tertiary_color, 
                            fontSize : 15,
                            alignItems: 'center',
                            marginTop : -10,
                            marginBottom : 0,
                            fontSize : '14px'
                            }}>
                            <p style = {{}}>
                                14M Views
                            </p>
                            <BsDot
                            color = {Theme1.tertiary_color}
                            size = {20}
                            />
                            <p>
                                2 days ago
                            </p>
                        </div>
                        <p style = {{
                            color : Theme1.focused_color, 
                            // width : '75%', 
                            marginTop : 0,
                            fontSize : '14px'
                            }}>
                            Ya toh tiranga lehra ke aaunga, Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” 
                            <br/>– Capt. Vikram Batra<br/>
                            <br/>
                            She sent her heart out with him when he went to the war – what happens when 
                            he returns back home, a winner but a martyr? Mann Bharryaa 2.0 is for all those 
                            who have loved and lost, especially as a family member of an Indian Army Soldier.
                        </p>
                        </div>
                    </Container>
                    <div style = {{
                        borderStyle : 'solid', 
                        borderWidth : 0.1, 
                        borderColor : Theme1.tertiary_color,
                        marginBottom : 10,
                        marginTop : 15
                    }}/>
                        <div style = {{display : 'flex', alignItems : 'center'}}>
                        <p style = {{
                            color : Theme1.focused_color, 
                            fontWeight : 'bold',
                            fontSize : '17px',
                            marginRight : '20px'
                            }}>
                            Shershaah | Sidharth Malhotra, Kiara Advani | Sony Music
                        </p>
                        <BsFillPlayFill
                        color = {Theme1.tertiary_color}
                        size = {20}
                        />
                        <p style = {{color : Theme1.tertiary_color, fontSize : '14px'}}>
                            PLAY ALL
                        </p>
                        </div>
                        <Card/>
                        <div style = {{
                        borderStyle : 'solid', 
                        borderWidth : 0.1, 
                        borderColor : Theme1.tertiary_color,
                        marginBottom : 10,
                        marginTop : 15
                    }}/>
                        <div style = {{display : 'flex', alignItems : 'center'}}>
                        <p style = {{
                            color : Theme1.focused_color, 
                            fontWeight : 'bold',
                            fontSize : '17px',
                            marginRight : '20px'
                            }}>
                            Mimi | Kriti Sanon, Pankaj Tripathi | A. R. Rahman | Amitabh Bhattacharya
                        </p>
                        <BsFillPlayFill
                        color = {Theme1.tertiary_color}
                        size = {20}
                        />
                        <p style = {{color : Theme1.tertiary_color, fontSize : '14px'}}>
                            PLAY ALL
                        </p>
                        </div>
                        <Card2/>
                    </div>
                    {/* <Card/> */}
                    </div>
        </div>
    )
}
