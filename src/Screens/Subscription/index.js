import React from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Assets from '../../Assets';
import Header from '../../Components/Header';
import Theme1 from '../../Configs/Theme';

let data = [
    {
        thumb : Assets.arijit,
        publisher : 'Arijit Singh',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    },
    {
        thumb : Assets.palak,
        publisher : 'Palak Muchhal',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    },
    {
        thumb : Assets.neelesh,
        publisher : 'Neelesh Mishra',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    },
    {
        thumb : Assets.vinay,
        publisher : 'Guidance By Vinay Kumar',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    },
    {
        thumb : Assets.unicef,
        publisher : 'UNICEF',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    },
    {
        thumb : Assets.dhruv,
        publisher : 'DhruvRathee',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    },
    {
        thumb : Assets.karl,
        publisher : 'Karl Rock',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Subscribers : '889k Subscribers',
        videos : '800 Videos'
    }
]
const Container = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 80vw;

    @media only screen and (max-width: 700px) {
        /* background-color: blue; */
        flex-direction: column;
        width : 70vw;
        /* align-items : flex-start; */
    }
`;

export default function(){
    return(
        <div style = {{backgroundColor : Theme1.Primary_color}}>
            <Header/>
            <Link 
            style = {{
                textDecoration : 'none',
                color:  Theme1.focused_color,
                fontSize : '16px'
            }}
            to = "/Details"
            >
            {/* {'Subscriptions'} */}
            
        <div style = {{marginInline : '100px'}}>
        {
            data.map((item,index)=>{
                return(
                    <Container style = {{
                        color : Theme1.focused_color, 
                        // display :'flex',
                        marginBottom : '20px',
                        justifyContent : 'space-between',
                        // alignItems : 'center'
                        }}>
                        <div>
                        <a href="https://www.youtube.com/watch?v=1poXN3jF3Bw">
                        <img
                        src = {item.thumb}
                        style = {{width : '115%', height: '115%', borderRadius : '100%'}}
                        />
                        </a>
                        </div>

                        <div style = {{marginInline : '100px'}}>
                            <p style = {{fontWeight : 'normal', fontSize : '18px'}}>
                                {item.publisher}
                            </p>
                            <div style = {{
                                display :'flex',
                                color : Theme1.tertiary_color, 
                                fontSize : 15,
                                alignItems: 'center',
                                marginTop : -20,
                                marginBottom : -10,
                                fontSize : '14px'
                                }}>
                                <p>
                                    {item.Subscribers}
                                </p>
                                <BsDot
                                color = {Theme1.tertiary_color}
                                size = {20}
                                />
                                <p>
                                    {item.videos}
                                </p>
                            </div>
                            <p style = {{
                                color : Theme1.tertiary_color, 
                                // width : '75%', 
                                marginTop : 0,
                                fontSize : '14px'
                                }}>
                            {item.disc}
                            </p>
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
                )
            })
        }
        </div>
        </Link>
        </div>
    )
}