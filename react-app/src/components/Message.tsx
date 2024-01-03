// PascalCasing
/*
function Message() {
    // JSX: JavaScript XML
    const name = 'Hyunwook'         // If name is falsy i.e. '', Message() returns Hello World
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
};
*/


// let count = 0;
// const Message = () => {
//     return <div>Message {count}</div>;
// }; // Pure component: returns the same result no matter what input is

let count = 0;
const Message = () => {
    console.log('Message called', count);
    count++;
    return <div>Message {count}</div>;
}; // Impure component
export default Message;