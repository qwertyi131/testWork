let nextTodoId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};
export const search = text => {
    return {
        type: 'SEARCH',
        payload: text
    }
}

export const dellAll = () => {
    return {
        type: 'DELL_ALL'
    }
}
export const dellRec = (id) => {
    return {
        type: 'DELL_REC',
        id
    }
}

