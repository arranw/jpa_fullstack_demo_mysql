const initialState = {
    todos: [],
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    payload
                ]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case "GET_TODOS":
            return {
                ...state,
                todos: payload
            }
        default:
            return state;
    }
}
