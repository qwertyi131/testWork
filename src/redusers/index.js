const initialSatate = {
    list: [],
    search: ''
};

const todos = (state = initialSatate, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }]};
        case 'SEARCH':
            return {
                ...state,
                search: action.payload
            }
        case 'DELL_ALL':
            return {
                ...state,
                list: []
            }
        case 'DELL_REC':
            return {
                ...state,
                list: state.list.filter(( item, i) => item.id !== action.id )
            }
        default:
            return state
    }
}

export default todos;