import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Backdrop, Modal } from '@mui/material';

const ThumbnailGridContainer = styled(Grid)(({ theme }) => ({
    flexGrow: 1,
    marginTop: theme.spacing(2),

}));

const ThumbnailImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '1024px',
    //bgcolor: 'background.paper',
    p: 4,
    outline: 'none',
    padding: '0px'
};


const Stretchings = () => {
    const [videoId, setVideoId] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = (videoTitle: string) => {
        setVideoTitle(videoTitle);
        setOpen(true);
    }

    const handleClose = () => {
        setVideoId('');
        setVideoTitle('');
        setOpen(false);
    }

    return (
        <Box id='box' sx={{
            marginLeft: '1.5rem',
            marginRight: '1.5rem'
        }}>
            <ThumbnailGridContainer container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{
                        position: 'relative',
                        display: 'inline-block',
                    }}>
                        <ThumbnailImage
                            src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        />
                        <Box sx={{
                            position: 'absolute',
                            top: '-5px',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                            onClick={() => handleOpen('Thoracic Spine')}
                        >
                            Thoracic Spine
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThumbnailImage
                        sx={{
                            cursor: 'pointer'
                        }}
                        src={`https://img.youtube.com/vi/o1XBfaDz9Mw/sddefault.jpg`}
                        onClick={() => handleOpen('Thoracic Spine')}

                    />
                </Grid>
                {/* Add more thumbnail Grid items as needed */}
            </ThumbnailGridContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    sx: { backdropFilter: 'blur(8px)' }, // Adjust the blur intensity as needed
                }}
            >
                <Box sx={style}>
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/lcQQiivrGMg`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>

                </Box>
            </Modal>
        </Box>

    )
}

export default Stretchings