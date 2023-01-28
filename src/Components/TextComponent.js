import React from 'react'
import { Typography, Box, Paper } from '@mui/material'
import rose from './assests/rose.webp'
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const TextComponent = () => {
    return (
        <div className="text-component">
            <div className='bg-img'>
                <Box
                    sx={{
                        display: 'flex',
                        
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: "95%",
                            height: "65vh",
                        },
                    }}
                >
                    <Paper elevation={21}  style={{borderRadius:'25px',boxShadow:'2px 7px 7px 2px aqua'}}>
                        <div className="text-img">
                            <div className='text-home'>
                                
                                    <p style={{fontSize: '2rem'}} >
                                        When you break my  heart,
                                        I can still love them with all the little pieces.

                                    </p> 
                                    <Button variant="contained" endIcon={<SendIcon />} style={{marginTop:'5%',backgroundColor:'#CD5C5C'}}> Our Story</Button>
                            </div>
                            <div>
                                <img src={rose}   className="img-home"/>
                            </div>
                        </div>

                    </Paper>
                </Box>
            </div>
        </div>
    )
}

export default TextComponent;