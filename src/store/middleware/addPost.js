
export const addPost = (store) => (next) => (action) => {
    if(action.type === 'addPost'){
        const post = {
            id: new Date().getTime().toString(),
            img: action.payload.url,
            name: store.getState().users.currentUser.username,
            postText: action.payload.desc,
            likesCount: Math.round(Math.random() * 250) + 700,
            timeAgo: Math.round(Math.random() * 7) + 2 + ' Minutes Ago',
            comments: []
        }
        store.dispatch({type:'posts/addPost', payload: {...post}})
        store.dispatch({type:'users/addPost', payload: {...post}})
        return
    }
    next(action)
}
export const deletePost = (store) => (next) => (action) =>{
    if(action.type === 'deletePost'){
        store.dispatch({type:'posts/deletePost',payload:action.payload})
        store.dispatch({type:'users/deletePost',payload:action.payload})
        return
    }
    next(action)
}