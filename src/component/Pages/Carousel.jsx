import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect } from 'react';

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    // , emblaApi

    // useEffect(() => {
    //     if (emblaApi) {
    //         console.log(emblaApi.slideNodes())
    //         // Access API
    //     }
    // }, [emblaApi])


    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    );
};

export default Carousel;