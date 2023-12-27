// PascalCasing
function Message() {
    // JSX: JavaScript XML
    const name = 'Hyunwook'         // If name is falsy i.e. '', Message() returns Hello World
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;