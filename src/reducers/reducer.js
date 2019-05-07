const reducerInfo = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        if(state.counter){
            state.counter++
        }

            
        case 'DECREMENT':
            if (state.counter > 0) {
                state.counter--
            }
            return state;
        default:
            return state;
    }
}

export default reducerInfo;