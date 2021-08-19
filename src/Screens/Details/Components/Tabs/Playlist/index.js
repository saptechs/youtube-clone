import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';
import styled from 'styled-components';
import Assets from '../../../../../Assets';
import Theme1 from '../../../../../Configs/Theme';
import { CgPlayList } from 'react-icons/cg'

let data = [
    {
        thumb : Assets.t4,
        title : 'hum mar jaayenge - Arijit sinngh | Shradhha | Aditya',
        publisher : 'Sony music India',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t5,
        title : 'Ind vs Eng - Highlights',
        publisher : 'Sony music India',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t1,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'Sony music India',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t2,
        title : 'Desh Mere - Arijit singh | Bhuj | Ajay Devgan',
        publisher : 'Sony music India',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t3,
        title : 'Tum hi ho - Arijit sinngh | Shradhha | Aditya',
        publisher : 'Sony music India',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    }
]

const Container = styled.div`
 display: grid;
 grid-template-columns: auto auto auto auto;
 grid-row-gap: 10px;
 grid-column-gap: 5px;

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
        <div style = {{backgroundColor : Theme1.background_color}}>
            <div style = {{marginInline : '70px'}}>
                <div style = {{display :'flex', alignItems :'center', fontSize : '17px'}}>
                    <p style = {{color : Theme1.focused_color, marginRight : '10px'}}>
                        All Playlist
                    </p>
                    <AiOutlineDown
                    color = {Theme1.focused_color}
                    />
                </div>
                    <p style = {{fontSize : '16px', fontWeight : 'bold', color : Theme1.focused_color, }}>
                        Created Playlists
                    </p>
            <Container style = {{
                // display : 'flex', 
                // flexWrap : 'wrap',
                // width : window.innerWidth
                }}>
                {
                    data.map((item,index)=>{
                        return(
                            <div style = {{color : Theme1.focused_color}}>
                                <a href="https://www.youtube.com/watch?v=1poXN3jF3Bw">
                                <div style = {{position :'relative'}}>
                                <div style = {{
                                    backgroundColor : 'rgba(10,10,10,0.7)',
                                    width : '50%',
                                    position: 'absolute',
                                    height: '100%',
                                    right: 0
                                    }}>
                                    <div style = {{
                                        color : Theme1.focused_color,
                                        alignItems : 'center',
                                        justifyContent : 'center',
                                        display: 'flex',
                                        flexDirection :'column'
                                    }}>
                                    <p style = {{fontSize : '18px'}}>
                                        85
                                    </p>
                                    <CgPlayList
                                    // color = {Theme1.focused_color}
                                    size = {24}
                                    />
                                    </div>
                                </div>
                                <img
                                src = {item.thumb}
                                style = {{width : '100%', height: '120px'}}
                                />
                                {/* <div style = {{
                                    backgroundColor : 'rgba(55,55,55,0.2)',
                                    width : '50%',
                                    position: 'absolute',

                                    }}>
                                    <p style = {{color : Theme1.focused_color}}>
                                        85
                                    </p>
                                </div> */}
                                </div>
                                </a>
                                {/* <img
                                src = {item.thumb}
                                style = {{width : '100%', height: '150px'}}
                                /> */}
                                <div style = {{display :'flex'}}>
                                <div style = {{}}>
                                    <p style = {{fontWeight : 'bold', fontSize : '15px'}}>
                                        {item.title}
                                    </p>
                                    <div style = {{display : 'flex', alignItems :'center'}}>
                                        <p style = {{
                                            color : Theme1.tertiary_color, 
                                            fontSize : '14px', 
                                            marginBottom : 0,
                                            marginTop : 0,
                                            marginRight : '5px'
                                            }}>
                                            {item.publisher}
                                        </p>
                                        <BiCheck
                                            color = {Theme1.background_color}
                                            size = {12}
                                            style = {{backgroundColor : Theme1.tertiary_color, borderRadius : 30}}
                                            />
                                    </div>
                                    <div style = {{
                                        display :'flex',
                                        color : Theme1.tertiary_color, 
                                        fontSize : '14px',
                                        alignItems: 'center',
                                        marginTop : -10
                                        }}>
                                        <p>
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
