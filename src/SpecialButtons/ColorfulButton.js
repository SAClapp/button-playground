import {Button} from "../Button";

export const ColorfulButton = (props) => {
    const {color} = props


    // can also build a string like this
    // const string = "I am a " + color + " button"


    // passing a prop called content and that content
    // prop is what we used to populate the text of the button
    return (
        <Button 
        className={color} 
        onClick={() => console.log(`I am a ${color} button!`)}
        >
            {color}
        </Button>
    )
}

/*
This example uses children to pass the color as the Button text
export const ColorfulButton = (props) => {
    const {color} = props

    // can also build a string like this
    // const string ="I am a " + color + " button"
}
*/