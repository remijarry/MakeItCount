import React from 'react'
import './embed.styles.css'
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

interface IEmbedProps {
    videoId: string | undefined;
    autoPlay: boolean;
}

const Embed = ({ videoId, autoPlay = false }: IEmbedProps) => {
    const fullScreen = false;
    const rel = false;
    const modestbranding = true;
    const controls = true;
    const mute = true;

    const options = [
        `autoplay=${autoPlay ? 1 : 0}`,
        `fs=${fullScreen ? 1 : 0}`,
        `rel=${rel ? 1 : 0}`,
        `modestbranding=${modestbranding ? 1 : 0}`,
        `controls=${controls ? 1 : 0}`,
        `mute=${mute ? 1 : 0}`,
    ];

    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?${options.join('&')}`;
    console.log(youtubeUrl)
    return (
        <Paper>
            <Container maxWidth='md' className='video-container'>
                <iframe
                    className='video-frame'
                    src={youtubeUrl}
                    title={videoId}
                    allow="accelerometer; 
                    autoplay; clipboard-write; 
                    encrypted-media; gyroscope; 
                    picture-in-picture"
                    allowFullScreen
                />
            </Container>
        </Paper>
    )
}

export default Embed