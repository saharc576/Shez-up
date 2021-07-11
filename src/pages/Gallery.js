import React, { useState , useEffect } from 'react';
import '.././index.css'
import Gallery from 'react-grid-gallery';

// source: https://www.npmjs.com/package/react-grid-gallery

const GalleryPage = () => {
    const imgsURL = ['https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/image1.png?alt=media&token=3db724ae-4eb6-4355-8d06-ce2764ed0542',
                    'https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/image2.png?alt=media&token=57cd9d54-303f-4ab1-b7fa-611e75d1ecbd',
                    'https://firebasestorage.googleapis.com/v0/b/shez-up.appspot.com/o/image3.png?alt=media&token=a346cb16-3d66-47be-b135-d42523caa1ea'];

    
 
                    const IMAGES =
                    [{
                            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 174,
                            caption: "After Rain (Jeshu John - designerspics.com)"
                    },
                    {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            caption: "Boats (Jeshu John - designerspics.com)"
                    },
                     
                    {
                            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212
                    }]

    return (
        <Gallery images={IMAGES} backdropClosesModal={true} />
    );
    
}

export default GalleryPage;

