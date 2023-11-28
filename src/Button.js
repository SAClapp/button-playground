export const Button = (props) => {
    const {
        buttonType = 'button', 
        className, 
        onClick, 
        content, 
        children, 
        ...rest} = props


    console.log(rest)
    // do any JS thing here

    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

// function printThis(string) { console.log(string) }
// const printThis = (string) => { console.log(string) }

/*
This is the same as above but written with the function keyword.

export const Button = (props) => {
    const {buttonType = 'button', className, onClick, content} = props
    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}
*/

/*
`button ${className}`

this is called string templating
Whole string is wrapped in backticks ``
any variables is wrapped in ${} within the backticks
*/