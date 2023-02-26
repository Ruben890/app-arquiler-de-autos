import { useEffect } from 'react';
import Scrollreveal from 'scrollreveal';



export const ScrollAnimation = (element, position, distance) => {
    const Animation = () => {
        useEffect(() => {
            Scrollreveal().reveal(element, {
                origin: position,
                duration: 2500,
                distance: distance,
                opacity: 0,

            })
        })
    }
    window.screen.width > 1000 ? Animation() : console.log("not implemented")
}




