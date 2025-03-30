const storeCreation = (defaultReducer) => {
    let state = defaultReducer();

    const getState = () => ({...state});

    const dispatch = (action) => {
        state = defaultReducer(state, action);
    }

    return {
        getState, 
        dispatch
    }
}

// default value
const defValue = {
    name : '',
    surname : '',
    age : 0,
};

// reducer function
const reducer = (state = defValue, action) => {
    if(action.type === 'CHANGE_AGE'){
        return { ...state, age : action.value };
    }

    if(action.type === 'CHANGE_NAME'){
        return { ...state, name : action.value };
    }

    if(action.type === 'CHANGE_SURNAME'){
        return { ...state, surname : action.value };
    }

    if(action.type === 'CHANGE_USER'){//{ name : 'Ivan', surname : 'Kutsenko', age : 30, }
        return { ...action.value };
    }
    
    return state;
}

// store creation
const store = storeCreation(reducer);

// store value getter

const showUser = () => {
    const { getState } = store;
    const { name, surname } = getState();
    return (
        <div>
            <h2>{name} {surname}</h2>
        </div>
    )
}