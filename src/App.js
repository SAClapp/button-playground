import "./App.css"
import {ColorfulButton} from "./SpecialButtons/ColorfulButton";
import {SizedButton} from "./SpecialButtons/SizedButton";
import {Button} from "./Button";
import {useState} from "react";
import {Counter} from "./Counter";


function App() {
    const [numberOfClicks, setNumberOfClicks] = useState(0)

    //const [favoriteFruit, setFavoriteFruit] = useState('banana')

    //let numberOfClicks = 0
    const colors = ['blue', 'red', 'green', 'yellow']
    const sizes = ['small', 'medium', 'large']
    const contents = [
        <span>span tag</span>,
        <img src={'http://placekitten.com/150/155'} alt={'cat'}/>,
        <>
            <div>multiple elements</div>
            <img src={'http://placekitten.com/100/175'} alt={'cat'}/>
        </>
    ]

    return (
        <div className="container">
            <div>
                <Counter/>
            </div>
            <div>
                {
                    colors.map((_color) => <ColorfulButton color={_color}/>)
                }
            </div>
            <div>
                {
                    sizes.map((size, index) => (
                        <SizedButton size={size} index={index}/>
                    ))
                }
            </div>
            <div>
                {
                    contents.map((content) => (
                        <Button>
                            {content}
                        </Button>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
