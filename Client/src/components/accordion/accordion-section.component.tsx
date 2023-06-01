import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography'

interface IAccordionSectionProps {
    title: string;
    titleVariant: Variant;
    content: any;
    children: ReactNode;
}

const AccordionSection = ({ title, titleVariant = 'h6', content, children }: IAccordionSectionProps) => {
    return (
        <Accordion defaultExpanded={false} disableGutters={false} TransitionProps={{ unmountOnExit: true }} sx={{
            margin: '20px 0;',
        }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ textTransform: 'capitalize' }} variant={titleVariant}>{title.toLowerCase()}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='subtitle2'>
                    {content}
                </Typography>
            </AccordionDetails>
            {children}
        </Accordion>
    )
}

export default AccordionSection