import API from '../backend'

export const addTodo = (todo) => {
    return fetch(`${API}/add`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            todo: todo
        })
    }).then(res => {
        return res;    
    })
    .catch(err => console.log(err))
}

export const getAllTodos = () => {
    return fetch(`${API}/todos`, {
        method: "GET"
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const deleteTodo = (id) => {
    return fetch(`${API}/delete/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const updateTodo = (id, todo) => {
    return fetch(`${API}/update/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            todo: todo
        })
    })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const markComplete = (id) => {
    return fetch(`${API}/mark/${id}`, {
        method: "PUT"
    }).then(res => res.json())
    .catch(err => console.log(err))
} 