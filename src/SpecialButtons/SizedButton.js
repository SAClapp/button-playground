import {Button} from "../Button";

export const SizedButton = (props) => {
    const {size, index} = props

    //JS can be done up here

    // const displayNumber = index + 1
    return (
        <Button 
        className={`${size} generic`} 
        onClick={() => console.log(`I am a ${size} button!`)} 
        >
            {`${size} ${index * 3}`}
        </Button>
    )
}

/*
export const Stuff = () => {
    return (
        <div>
            <Button>hello</Button>
            <p>goodbye</p>
        </div>
    )
}
*/