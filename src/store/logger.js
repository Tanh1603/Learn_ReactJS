function logger(reducer) { 
    return (prev, action) => {
        console.group(action.type);
        console.log("Prev state", prev);
        console.log("Action", action);
        const nexState = reducer(prev, action);

        console.log("Next state", nexState);
        console.log("Action", nexState);
        console.groupEnd()

        return nexState;
    }
}
export default logger