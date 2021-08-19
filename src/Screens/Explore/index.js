import React from 'react';
import Header from '../../Components/Header';
import Theme1 from '../../Configs/Theme';
import Cards from './Components/Cards';
import List from './Components/List';

export default function(){
    return(
        <div style = {{backgroundColor : Theme1.Primary_color}}>
            <Header/>
            <div style = {{marginInline : '20px'}}>
            <Cards/>
            <div style = {{
                borderStyle : 'solid', 
                borderWidth : 0.5, 
                borderColor : Theme1.tertiary_color,
                marginBottom : 10,
                marginTop : 15
            }}/>
            <p style = {{color : Theme1.focused_color, fontWeight :'bold'}}>
                Trending Videos
            </p>
            <List/>
            </div>
        </div>
    )
}