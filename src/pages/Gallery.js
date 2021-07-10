import React, { useState , useEffect } from 'react';
import { useFirestore } from '../hooks/useFirestore'
import ImageGrid from '../components/imageGrid/ImageGrid';
import Modal from '../components/Modal';
import {projectStorage} from '../firebase/Config'


const Gallery = () => {
    const ref = projectStorage.ref();

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
            const fetchedImagenes = [];
    
            firebase.storage().ref().child('PR/Gallery').listAll().then(function (result) {
                const promises = result.items.map((itemRef) => itemRef.getDownloadURL());
                Promise.all(promises).then((urls) =>
                    setImagenes(urls)
                });
            })
    
    }, [])

    
}

export default Gallery;

