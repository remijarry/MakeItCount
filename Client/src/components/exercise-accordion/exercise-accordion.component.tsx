import React from 'react'
import { AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import Embed from '../embed/embed.component';
import { Variant } from '@mui/material/styles/createTypography';

interface IExerciseAccordionProps {
    name: string,
    videoId: string | undefined,
    titleVariant: Variant
}

const ExerciseAccordion = ({ name, videoId, titleVariant }: IExerciseAccordionProps) => {
    titleVariant = titleVariant || 'caption';
    return (
        <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant={titleVariant}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Container sx={{
                    paddingLeft: '8px',
                    paddingRight: '8px',
                }} maxWidth='md' className='video-container'>
                    <Embed videoId={videoId} autoPlay={false} />
                </Container>
            </AccordionDetails>
        </Accordion>
    )
}
export default ExerciseAccordion