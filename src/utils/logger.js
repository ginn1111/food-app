const logger = (reducer) => (prevState, action) => {
    console.group(action.type);
    const nextState = reducer(prevState, action);
    console.log(action);
    console.log('prev state: ', prevState);
    console.log('next state: ', nextState);

    console.groupEnd();

    return nextState;
};

export default logger;
