import { useState } from 'react';
import RecommendStyle from './Recommend.module.css'


const Recommend = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const numOfSlides = 3;
    
    const slideIndexHandler = (nextSlideOffset, currentSlide) => {
    console.log('slideIndex inside ', slideIndex)

        if (currentSlide) {
            setSlideIndex(currentSlide);
        }
        else {
            if (slideIndex === 0 && nextSlideOffset === -1) {
                setSlideIndex(2);
            }
            else {
                setSlideIndex((slideIndex + nextSlideOffset) % numOfSlides);
            }
        }
    }


    const active0 = (slideIndex === 0) ? {backgroundColor: '#717171'} : {}; 
    const active1 = (slideIndex === 1) ? {backgroundColor: '#717171'} : {};
    const active2 = (slideIndex === 2) ? {backgroundColor: '#717171'} : {};

    return (
        <div>
        <div className={
            RecommendStyle.slideshowContainer
        }>

            <div className={
                RecommendStyle.mySlides
            }>
                {(slideIndex === 0) && <q>כל הזמן היו צוחקים עליי שאני שמנמן. שיזף עשה ממני מכונה.</q>}
                {(slideIndex === 0) && <p className={RecommendStyle.author}>שורטי -</p>}

                {(slideIndex === 1) && <q>לא ידעתי לעשות מתח אחד לפני שהגעתי אליו. היום אני עושה 100 עליות כח ברצף.</q>}
                {(slideIndex === 1) && <p className={
                    RecommendStyle.author
                }>אורי סגמן -</p>}

                {(slideIndex === 2) && <q>אני גבוה</q>}
                {(slideIndex === 2) && <p className={
                    RecommendStyle.author
                }>איתי בוסי -</p>}
            </div>

            <a className={
                    RecommendStyle.prev
                }
                onClick={() => slideIndexHandler(-1, undefined)}>&#10094;</a>
            <a className={
                    RecommendStyle.next
                }
                onClick={() => slideIndexHandler(1, undefined)}>&#10095;</a>
        </div>

        <div className={RecommendStyle.dotContainer}>
            <span className={RecommendStyle.dot} style={active0} onClick={() => slideIndexHandler(0, 0)}></span>
            <span className={RecommendStyle.dot} style={active1} onClick={() => slideIndexHandler(0, 1)}></span>
            <span className={RecommendStyle.dot} style={active2} onClick={() => slideIndexHandler(0, 2)}></span>
        </div>
        </div>
    );
}

export default Recommend;
