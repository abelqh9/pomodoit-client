export function resetTodosTime(todosArr){
    return todosArr.map(td => {return {...td, time: 0} })
}