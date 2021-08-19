import React from 'react';
import { BsDot } from 'react-icons/bs';
import styled from 'styled-components';
import Assets from '../../../../Assets';
import Theme1 from '../../../../Configs/Theme';
// import Assets from '../../Assets';
// import Theme1 from '../../Configs/Theme';

let data = [
    {
        thumb : Assets.t1,
        title : 'Mann Bharryaa 2.0 – Official Video | Shershaah | Sidharth – Kiara | B Praak | Jaani',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t2,
        title : 'Arijit Singh: DESH MERE Song | Ajay D, Sanjay D, Ammy V | Arko, Manoj M | Bhuj: The Pride Of India',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t3,
        title : 'Tum hi ho - Arijit sinngh | Shradhha | Aditya',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t4,
        title : 'hum mar jaayenge - Arijit sinngh | Shradhha | Aditya',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t5,
        title : 'Ind vs Eng - Highlights',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t1,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t2,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t4,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        disc : 'Ya toh tirange mein lipta chala aaunga – lekin aaunga zarur.” – Capt. Vikram Batra She sent her heart out with him when he went to the war – what...',
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    }
]
const Container = styled.div`
    background-color: transparent;
    @media only screen and (max-width: 700px) {
        /* background-color: blue; */
        flex-direction: column;
    }
`;

export default function(){
    return(
        <div>
        {
            data.map((item,index)=>{
                return(
                    <Container style = {{
                        color : Theme1.focused_color, 
                        display :'flex',
                        marginBottom : '10px'
                        }}>
                        <div>
                        <a href="https://www.youtube.com/watch?v=1poXN3jF3Bw">
                        <img
                        src = {item.thumb}
                        style = {{width : '100%', height: '150px'}}
                        />
                        </a>
                        </div>

                        <div style = {{marginLeft : '20px'}}>
                        <p style = {{fontWeight : 'normal', fontSize : '18px'}}>
                            {item.title}
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
                            <p style = {{
                            color : Theme1.tertiary_color, 
                            fontSize : 15
                            }}>
                            {item.publisher}
                        </p>
                            <p style = {{marginLeft : '7px'}}>
                                {item.Views}
                            </p>
                            <BsDot
                            color = {Theme1.tertiary_color}
                            size = {20}
                            />
                            <p>
                                {item.time}
                            </p>
                        </div>
                        <p style = {{
                            color : Theme1.tertiary_color, 
                            width : '75%', 
                            marginTop : 0,
                            fontSize : '14px'
                            }}>
                        {item.disc}
                        </p>
                        </div>
                    </Container>
                )
            })
        }
        </div>
    )
}