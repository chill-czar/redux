import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Learn about Redux Toolkit",
    }],
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => { 
            const todo = { 
                id: nanoid(),
                text: action.payload.text,
            }
        },
        removeTodo: () => { },
    }
}

)