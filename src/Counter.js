import { Button } from "./Button";
import { useState } from "react";

export const Counter = () => {
    // You can use any JS you want before the return
    // if you need to do JS inside of your return, you can do that inside od curly braces {}
    // whatever is inside the return is what you will see in your components

    const [numberOfClicks, setNumberOfClicks] = useState(0)

    // let numberOfClicks = 0

    const addClick = () => {
        // numberOfClicks++ does the same thing
        // numberOfClicks = numberOfClicks + 1
        setNumberOfClicks(numberOfClicks + 1)
    }

    const removeClick = () => {
        setNumberOfClicks(numberOfClicks - 1)
    }



    return (
        <div>
            <h1>{numberOfClicks}</h1>
            <Button onClick={() => addClick()}>Increment</Button>
            <Button onClick={() => removeClick()}>Decrement</Button>
        </div>
    )
}