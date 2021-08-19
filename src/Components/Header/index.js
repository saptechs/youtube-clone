import React, { useState } from 'react';
import { Container, Container2, YDrawer } from './styles';
import {Link, Route, Switch} from 'react-router-dom';
import { AiFillClockCircle, AiFillCompass, AiFillFlag, AiFillHome, AiFillSetting, AiFillYoutube, AiOutlineClose, AiOutlineMenu, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai';
import { FaMicrophone, FaYoutube } from 'react-icons/fa';
import { BsCollectionPlayFill, BsFillGrid3X3GapFill, BsThreeDotsVertical } from 'react-icons/bs';
import {MdAccountCircle, MdVideoLibrary} from 'react-icons/md';
import Theme1 from '../../Configs/Theme';

export default function(){
    const [isDrawerOpen, setIsDrawerOpen]  = useState(null);
    const toggleDrawer =()=> setIsDrawerOpen(!isDrawerOpen);
    return(
        <div style = {{position : 'relative'}}>
        <Container>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiOutlineMenu
            color = {Theme1.focused_color}
            size = {22}
            onClick={()=>{
                toggleDrawer()
            }}
            style={{
                cursor: 'pointer'
            }}
            />
            <AiFillYoutube
            color = {'red'}
            size = {30}
            style ={{marginLeft : '20px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 20, fontWeight : 'bold'}}>
                YouTube
            </p>
            </div>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <input
            placeholder = {'search'}
            style = {{
                backgroundColor : Theme1.background_color, 
                // backgroundColor : 'black',
                borderWidth : 0,
                padding: '5px',
                paddingRight : '370px',
                fontSize : '18px'
            }}
            color = {Theme1.tertiary_color}
            />
            <AiOutlineSearch 
            color = {Theme1.tertiary_color}
            style = {{
                backgroundColor : Theme1.secondary_color, 
                padding : '7px', 
                paddingInline : '20px',
                marginRight : '10px'
            }}
            />
            <FaMicrophone
            color = {Theme1.focused_color}
            style = {{
                backgroundColor : Theme1.background_color, 
                padding : '8px', 
                borderRadius : 30,
                marginRight : '10px'
            }}
            size = {18}
            />
            </div>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <BsFillGrid3X3GapFill
            color = {Theme1.focused_color}
            size = {22}
            />
            <BsThreeDotsVertical
            color = {Theme1.focused_color}
            size = {22}
            style =  {{marginInline : '20px'}}
            />
            <a 
            style = {{cursor : 'pointer'}}
            href = "https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3D%252F&hl=en&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <button
            style = {{
                backgroundColor : 'transparent', 
                alignItems : 'center',
                display: 'flex',
                color : Theme1.button_color,
                borderWidth : 1,
                padding : 9,
                borderColor : Theme1.button_color,
                borderStyle : 'solid'
            }}
            
            value = {'SIGN IN'}
            >
                <MdAccountCircle
                size = {20}
                style = {{marginRight : 5}}
                />
                SIGN IN
            </button>
            </a>
            </div>
            
        </Container>

        <Container2>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiOutlineMenu
            color = {Theme1.focused_color}
            size = {22}
            onClick={()=>{
                toggleDrawer()
            }}
            style={{
                cursor: 'pointer'
            }}
            />
            <AiFillYoutube
            color = {'red'}
            size = {30}
            style ={{marginLeft : '20px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 20, fontWeight : 'bold'}}>
                YouTube
            </p>
            </div>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            {/* <AiOutlineSearch 
            color = {Theme1.focused_color}
            size = {'22px'}
            style = {{
                marginRight : '10px'
            }}
            /> */}
            {/* <FaMicrophone
            color = {Theme1.focused_color}
            style = {{backgroundColor : Theme1.background_color, padding : '8px', borderRadius : 30}}
            size = {18}
            /> */}
            </div>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            {/* <BsFillGrid3X3GapFill
            color = {Theme1.focused_color}
            size = {22}
            /> */}
            <BsThreeDotsVertical
            color = {Theme1.focused_color}
            size = {22}
            style =  {{marginInline : '20px'}}
            />
            <AiOutlineSearch 
            color = {Theme1.focused_color}
            size = {'22px'}
            style = {{
                marginRight : '10px'
            }}
            />
            <button
            style = {{
                backgroundColor : 'transparent', 
                // width : 90,
                // marginInline : 30,
                alignItems : 'center',
                display: 'flex',
                color : Theme1.button_color,
                borderWidth : 1,
                padding : 9,
                // paddingInline : 5,
                borderColor : Theme1.button_color,
                borderStyle : 'solid'
            }}
            
            value = {'SIGN IN'}
            >
                <MdAccountCircle
                size = {20}
                style = {{marginRight : 5}}
                />
                SIGN IN
            </button>
            </div>
            
        </Container2>

        <YDrawer 
        isDrawerOpen={isDrawerOpen}
        style = {{
            zIndex : 1,
            // width : '95.6%',
            // position: 'absolute',
            // top : 0,
            // backgroundColor : 'white',
            backgroundColor : Theme1.Primary_color,
            // padding : '10px'
            }}>
                <div style = {{
            display : 'flex', 
            alignItems : 'center'
            }}>
        <AiOutlineMenu
            color = {Theme1.focused_color}
            size = {18}
                onClick={()=>{
                    toggleDrawer()
                }}
                style={{
                    cursor: 'pointer'
                }}
            />
            <AiFillYoutube
            color = {'red'}
            size = {30}
            style ={{marginLeft : '20px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 19}}>
                YouTube
            </p>
        </div>
        <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiFillHome
            color = {Theme1.tertiary_color}
            size = {22}
            style = {{marginRight :'15px'}}
            />
            {/* <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                Home
            </p> */}
            <Link 
            style = {{
                textDecoration : 'none',
                color : Theme1.focused_color, 
                fontSize : '17px'
            }}
            to = '/'
            >
            {'Home'}
            </Link>
        </div>
        <div style = {{display : 'flex', alignItems : 'center', marginTop : '15px'}}>
            <AiFillCompass
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <Link
            style = {{
                textDecoration : 'none', 
                color : Theme1.focused_color, 
                fontSize : '17px'
            }}
            to = "/Explore"
            >
            {'Explore'}
            </Link>
        </div>
        <div style = {{
            display : 'flex', 
            alignItems : 'center', 
            marginTop : '15px',
            marginBottom : '25px'
            }}>
            <BsCollectionPlayFill
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <Link 
            style = {{
                textDecoration : 'none',
                color:  Theme1.focused_color,
                fontSize : '17px'
            }}
            to = "/Subscription"
            >
            {'Subscriptions'}
            </Link>
            {/* <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                Subscriptions
            </p> */}
        </div>
        <hr/>
        <div style = {{display : 'flex', alignItems : 'center'}}>
            <MdVideoLibrary
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                Library
            </p>
        </div>
        <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiFillClockCircle
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                History
            </p>
        </div>
        <hr/>
        <p style = {{color : Theme1.focused_color, fontSize : 16, marginInline : '15px'}}>
                Sign in to like videos, comment and subscribe
        </p>
        <button
            style = {{
                backgroundColor : 'transparent', 
                alignItems : 'center',
                display: 'flex',
                color : Theme1.button_color,
                borderWidth : 1,
                padding : 9,
                borderColor : Theme1.button_color,
                borderStyle : 'solid',
                marginInline : '15px'
            }}
            
            value = {'SIGN IN'}
            >
                <MdAccountCircle
                size = {16}
                style = {{marginRight : 5}}
                />
                SIGN IN
            </button>
            <hr/>
            <p style = {{color : Theme1.tertiary_color, fontSize : 16}}>
                More from youtube
            </p>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiFillYoutube
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                Youtube Premium
            </p>
            </div>
            <hr/>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiFillSetting
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                Settings
            </p>
            </div>
            <div style = {{display : 'flex', alignItems : 'center'}}>
            <AiFillFlag
            color = {Theme1.tertiary_color}
            size = {18}
            style = {{marginRight :'15px'}}
            />
            <p style = {{color : Theme1.focused_color, fontSize : 16}}>
                Report History
            </p>
            </div>
            </YDrawer>
        </div>
    )
}