import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';

import RecordGif from '../../../../assets/gifs/RECORD.gif'
import FAGif from '../../../../assets/gifs/FA.gif'
import HeelingsGif from '../../../../assets/gifs/HEELINGS.gif'
import FlindersGif from '../../../../assets/gifs/FLINDERS-CIRCLE.gif'
import FlindersAlternativeGif from '../../../../assets/gifs/FLINDERS-ALTERNATIVE.gif'
import AthGif from '../../../../assets/gifs/ATH.gif'
import AthAlternativeGif from '../../../../assets/gifs/ATH-ALTERNATIVE.gif'
import BoxesGif from '../../../../assets/gifs/BOXES.gif'
import FilesGif from '../../../../assets/gifs/FILES.gif'

export const HelpModal = ({ showHelp, setShowHelp }) => {
    const gifs = [
        {
            url: RecordGif,
            description:
                'Complete Magnetic Course and Variation fields (even with 0), and Deviation will automatically fill.',
        },
        {
            url: FAGif,
            description: 'Click on the circles to switch magnet states',
        },
        {
            url: HeelingsGif,
            description: 'Click and drag the chain.'
        },
        {
            url: FlindersGif,
            description: 'Click on the circles to switch magnet states.'
        },
        {
            url: FlindersAlternativeGif,
            title: 'Flinders (alternative)',
            description: 'Fill in the fields the amount of magnets for each size.'
        },
        {
            url: AthGif,
            description: 'Click on the circles to switch magnet states.'
        },
        {
            url: AthAlternativeGif,
            title: 'Athwarships (alternative)',
            description: `Click on the circles to switch magnet states. You'll notice that the other side of the magnet is set automatically.`
        },
        {
            url: BoxesGif,
            description: 'Click and drag boxes or spheres. Click on the plates to switch magnet states.'
        },
        {
            url: FilesGif,
            description: `Drag and drop necessary files (read accepted files). You'll see a preview of each file with a button to delete it. At least one file is required.`
        }

    ];

    return (
        <Modal show={showHelp} onHide={() => setShowHelp(false)} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title style={styles.title}>How it works</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p style={styles.subtitle}>If you have any difficulty filling this form, please contact us at adjust@instrumentaldufour.net </p>
                <Carousel style={styles.carousel} controls>
                    {gifs.map((gif, index) => (
                        <Carousel.Item key={index}>
                            {gif?.title && <h4 style={styles.gifTitle}>{gif.title}</h4>}
                            <div style={styles.carouselItem}>
                                <img src={gif.url} alt={`GIF ${index + 1}`} style={styles.img} />
                            </div>
                            <p style={styles.description}>{gif.description}</p>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' style={{ fontSize: 16 }} onClick={() => setShowHelp(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const styles = {
    title: {
        fontSize: 24,
    },
    subtitle:{
        fontSize:20,
        textAlign:'center',
        marginBottom: 5,
        paddingBottom: 5,
        borderBottom: '1px solid #ececec'
    },
    description: {
        fontSize: 16,
        textAlign: 'center'
    },
    gifTitle: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center'
    },
    img: {
        width: '100%',
        height: 'auto',
        maxHeight: 500,
        maxWidth: '100%',
        display: 'block',
        margin: 'auto',
        objectFit: 'contain',
    },
    carousel: {
        maxWidth: '100%',
    },
    carouselItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: '0 auto',
        height: 500
    },
};