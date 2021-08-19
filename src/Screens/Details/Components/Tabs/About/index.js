import React from 'react';
import styled from 'styled-components';
import Theme1 from '../../../../../Configs/Theme';

const Container = styled.div`
 /* background-color: green; */
 display: flex;
 justify-content: space-between;
 @media only screen and (max-width : 700px){
     flex-direction : column;
     justify-content : center;
 }
`
const Container2 = styled.div`
 width: 25vw;
 display: flex;
 align-items: center;
 justify-content: space-between;
 @media only screen and (max-width : 700px){
     width: 65vw;
 }
`
export default function(){
    return(
        <div style = {{
            backgroundColor : Theme1.background_color,
            width : '97vw',
            paddingTop : '40px'
            }}>
            <div style = {{
                // width : '90vw',
                marginInline : '70px', 
                // display: 'flex',
                // alignItems :'center',
                // justifyContent : 'center'
                }}>
                    <Container>
                        <div style = {{width : '60vw'}}>
                            <p style = {{color :Theme1.focused_color, fontSize : '19px'}}>
                                Description
                            </p>
                            <p style = {{color :Theme1.focused_color}}>
                                Sony Music India SME- Home To The Hits. Subscribe to our channel 
                                to listen to chart-busters in the making, see premieres of blockbuster 
                                videos and get your daily dose of some great music right here.
                            </p>
                            <div style = {{
                                borderStyle : 'solid', 
                                borderWidth : 0.1, 
                                borderColor : Theme1.tertiary_color,
                                marginBottom : '40px',
                                marginTop : '40px'
                            }}/>
                            <p style = {{color :Theme1.focused_color, fontSize : '19px'}}>
                                Details
                            </p>
                            <Container2>
                                <p style = {{color :Theme1.tertiary_color}}>
                                    For Business enquiries :
                                </p>
                                <p style = {{
                                color: Theme1.tertiary_color, 
                                backgroundColor : Theme1.secondary_color,
                                padding: '5px',
                                paddingInline : '10px',
                                marginRight : '15px'
                                }}>
                                View Email Address
                                </p>
                            </Container2>
                            <div style = {{
                                display : 'flex', 
                                alignItems : 'center'
                                }}>
                                <p style = {{color :Theme1.tertiary_color}}>
                                    Location :
                                </p>
                                <p style = {{
                                color: Theme1.tertiary_color,
                                marginLeft :'105px'
                                }}>
                                India
                                </p>
                            </div>
                            <div style = {{
                                borderStyle : 'solid', 
                                borderWidth : 0.1, 
                                borderColor : Theme1.tertiary_color,
                                marginBottom : 10,
                                marginTop : 15
                            }}/>
                            <p style = {{color :Theme1.focused_color, fontSize : '19px'}}>
                                Links
                            </p>
                            <Container2>
                                <p style = {{color : 'rgb(3, 152, 252)'}}>
                                    Faebook
                                </p>
                                <p style = {{color : 'rgb(3, 152, 252)'}}>
                                    Instagram
                                </p>
                            </Container2>
                            <Container2>
                                <p style = {{color : 'rgb(3, 152, 252)'}}>
                                    Twitter
                                </p>
                                <p style = {{color : 'rgb(3, 152, 252)'}}>
                                   Mann bhareya 2.0
                                </p>
                            </Container2>
                        </div>

                        <div style = {{width : '20vw'}}>
                            <p style = {{color :Theme1.focused_color, fontSize : '16px'}}>
                                Stats
                            </p>
                            <div style = {{
                                borderStyle : 'solid', 
                                borderWidth : 0.1, 
                                borderColor : Theme1.tertiary_color,
                                marginBottom : 10,
                                marginTop : 15
                            }}/>
                            <p style = {{color :Theme1.focused_color, fontSize : '16px'}}>
                                Joined 3 sep 2009
                            </p>
                            <div style = {{
                                borderStyle : 'solid', 
                                borderWidth : 0.1, 
                                borderColor : Theme1.tertiary_color,
                                marginBottom : 10,
                                marginTop : 15
                            }}/>
                            <p style = {{color :Theme1.focused_color, fontSize : '16px'}}>
                                20,113,345 Views
                            </p>
                            <div style = {{
                                borderStyle : 'solid', 
                                borderWidth : 0.1, 
                                borderColor : Theme1.tertiary_color,
                                marginBottom : 10,
                                marginTop : 15
                            }}/>
                        </div>
                    </Container>
            </div>
        </div>
    )
}
