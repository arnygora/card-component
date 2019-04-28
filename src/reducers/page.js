const initialState = {
    year: 2019,
    photos: []
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'YEAR':
            return {...state, year: action.payload};

        default:
            return state
    }
};
