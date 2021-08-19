import React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import Assets from '../../../../../Assets';
import Theme1 from '../../../../../Configs/Theme';
import{ IoIosShareAlt } from 'react-icons/io'
import { BiCommentDetail } from 'react-icons/bi';

export default function(){
    return(
        <div style = {{
            backgroundColor : Theme1.background_color, 
            width : '93vw',
            paddingTop : '40px'
            }}>
           <div style = {{
               display: 'flex',
               borderWidth : 0.5, 
               borderColor : Theme1.tertiary_color,
               borderStyle : 'solid',
               padding: '15px',
               marginInline : '70px',
               width: '70vw'
           }}>
               <img
               src={Assets.sony}
               style = {{
                   width : '50px', 
                   height : '50px', 
                   borderRadius : '100%',
                   marginTop : '10px',
                   marginRight : '20px'
                }}
               />
               <div>
                   <div style = {{
                       display : 'flex', 
                       alignItems : 'center'
                       }}>
                       <p style = {{
                           color : Theme1.focused_color, 
                           fontSize : '16px',
                           marginRight : '15px'
                           }}>
                           Sony Music India
                       </p>
                       <p style = {{color : Theme1.tertiary_color}}>
                           4h ago
                       </p>
                   </div>
                   <p style = {{
                       color : 'rgb(25, 156, 227)',
                       marginTop : -10,
                       fontSize : '17px'
                       }}>
                   https://youtu.be/gvyUuxdRdR4
                   </p>
                   <p style = {{color : Theme1.focused_color, fontSize : '18px'}}>
                   hits the right chord every single time. Thank you for making it reach 100 Million + views.
                   </p>
                   <img
                   src = {Assets.community}
                   style = {{width : '80%', height : '500px'}}
                   />
                   <div style = {{
                       display :'flex', 
                       alignItems : 'center', 
                       color : Theme1.tertiary_color
                       }}>
                       <AiFillLike
                       size={22}
                       style = {{marginRight : '10px'}}
                       />
                       <p style = {{marginRight : '13px'}}>
                           2.6k
                       </p>
                       <AiFillDislike
                       size={22}
                       style = {{marginRight : '20px'}}
                       />
                       <IoIosShareAlt
                       size={22}
                       style = {{marginRight : '25px'}}
                       />
                       <BiCommentDetail
                       size={22}
                       />
                       <p>
                           160
                       </p>
                   </div>
               </div>

           </div>
        </div>
    )
}
