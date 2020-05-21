//we need to startup Highwayjs
import Highway from '@dogstudio/highway';
import Fade from './transition';

// this is to execute the animation
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});

