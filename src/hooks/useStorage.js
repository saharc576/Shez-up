import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed', async () => {
    const url = await storageRef.getDownloadURL();
    setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;