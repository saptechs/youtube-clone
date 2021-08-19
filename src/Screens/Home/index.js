import React from 'react';
import { BsDot } from 'react-icons/bs';
import Assets from '../../Assets';
// import Drawer from '../../Components/Drawer';
import Header from '../../Components/Header';
import Theme1 from '../../Configs/Theme';
import Tabs from './Components/Tabs';
import { Container } from './Styles';

let data = [
    {
        thumb : Assets.t1,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t2,
        title : 'Desh Mere - Arijit singh | Bhuj | Ajay Devgan',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t3,
        title : 'Tum hi ho - Arijit sinngh | Shradhha | Aditya',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t4,
        title : 'hum mar jaayenge - Arijit sinngh | Shradhha | Aditya',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t5,
        title : 'Ind vs Eng - Highlights',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t1,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t2,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    },
    {
        thumb : Assets.t4,
        title : 'Mann Bhareya 2.0 - B praak | Sidharth | Kiara',
        publisher : 'T-Series',
        pubIcon : Assets.pubicon,
        Views : '30M views',
        duration : '4:50',
        time : '5 years ago'
    }
]
export default function(){
    return(
        <div style = {{backgroundColor : Theme1.Primary_color}}>
            <Header/>
            <div style = {{
                borderStyle : 'solid', 
                borderWidth : 0.5, 
                borderColor : Theme1.tertiary_color,
                marginBottom : 10
            }}/>
            <Tabs/>
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
                                <img
                                src = {item.thumb}
                                style = {{width : '100%', height: '150px'}}
                                />
                                </a>
                                {/* <img
                                src = {item.thumb}
                                style = {{width : '100%', height: '150px'}}
                                /> */}
                                <div style = {{display :'flex'}}>
                                    <div>
                                        <img
                                        src = {item.pubIcon}
                                        style = {{
                                            width : '30px', 
                                            height: '30px',
                                            borderRadius : 30,
                                            marginTop : '20px',
                                            marginRight : '5px'
                                        }}
                                        />
                                    </div>
                                    <div style = {{}}>
                                    <p style = {{fontWeight : 'normal'}}>
                                        {item.title}
                                    </p>
                                    <p style = {{
                                        color : Theme1.tertiary_color, 
                                        fontSize : 15, 
                                        marginBottom : 0,
                                        marginTop : -10
                                        }}>
                                        {item.publisher}
                                    </p>
                                    <div style = {{
                                        display :'flex',
                                        color : Theme1.tertiary_color, 
                                        fontSize : 15,
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
    )
}