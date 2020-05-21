import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

//create a class Fade that inherits all the transition functionalities form Highway
class Fade extends Highway.Transition{
    // function in() is responsible for the page that is coming in
    in({from, to, done}){
        // from is responsible for the page currently being viewed
        // to is responsible for the page we are going to 
        // done is the function that is going to be called when animation is finished

        const tl = new TimelineLite();

        // this is the animations

        //to is the object that is gonna be animated
        //0.5secs is the duration of the animation
        /*properties of fromTo {left: '-100%', top: '50%'}
            It is going to start from the right
            left is -100% so that it is from out of the screen.
            top is 50% so that it starts from the middle.
            The other left is gonna tell it where to go

            the second fromTo 
            it is gonna start from an height of 2vh and then expand to an height of 90vh because the navbar is 10vh
            the top is 10% so that it also expands up and it doesn't go down all the way
        */
        tl.fromTo(to, 0.5, {left: '-100%', top: '50%'}, {left: '0%'})
        .fromTo(to,
             0.5,
              {height: '1vh'},
                {height: '90vh', top: '10%', onComplete: function(){

                    //this removes the previous container
                    from.remove();
                    done();
        }
    }
    )
    .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1});
    }

    // function out() is responsible for the page that is going out
    out({from, done}){
        // done() is called because we are not gonna animate the page going out
        // if the page going out is gonna be animated we can also do the animation here
        done();
    }

}

// this is to export the class Fade
export default Fade