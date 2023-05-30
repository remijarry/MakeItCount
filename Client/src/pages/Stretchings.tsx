import React from 'react'
import Container from '@mui/material/Container'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ThumbnailGridContainer = styled(Grid)(({ theme }) => ({
    flexGrow: 1,
    marginTop: theme.spacing(2),

}));

const ThumbnailImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});


const Stretchings = () => {
    return (
        <Box id='box' sx={{
            marginLeft: '1.5rem',
            marginRight: '1.5rem'
        }}>
            <ThumbnailGridContainer container spacing={2}>
                {/* Render your thumbnail components here */}
                {/* Example thumbnails */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>Test</Item>
                </Grid>
                {/* Add more thumbnail Grid items as needed */}
            </ThumbnailGridContainer>
        </Box>

    )
}

export default Stretchings