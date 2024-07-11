import React, { useEffect, useState } from 'react'

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);

            }, delay);
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, delay, text])
    return (
        <p dangerouslySetInnerHTML={{ __html: currentText }}>

        </p>
    )
}

export default Typewriter