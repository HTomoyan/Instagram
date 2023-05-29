const ignoreSpace = (store) => (next) => (action) => {
    if(action.type === 'comments/addComment' && !action.payload.trim()){
        return
    }
    next(action)
}


export default function commentMiddlewares(){
    return[
        ignoreSpace
    ]
} 