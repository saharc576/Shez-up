import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc.url)}
        >
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;