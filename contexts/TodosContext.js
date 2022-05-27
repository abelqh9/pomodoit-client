import React, { useState, useContext, useEffect } from "react";
import { getDate } from "../helpers/getDate";
import { useDBContext } from "./DBContext";
import { usePomodoroContext } from "./PomodoroContext";

const TodosContext = React.createContext();

export function TodosContextProvider({ children }) {

    const { userData, updateDoc } = useDBContext();
    const { pomodoroState } = usePomodoroContext();

    const [todos, setTodos] = useState([]);

    // FOR BACKUPDATA
    useEffect(() => {
        setTodos(userData ? userData.todos : []);
    }, [userData])

    // FOR THE INCREASE OF THE TIMES OF THE TODOS
    useEffect(() => {
        let timeOut;
        if( pomodoroState === "work" ){
            timeOut = setInterval(() => {
                setTodos(oldTodos=>{
                    if ( oldTodos.find(t => t.isCounting) ){
                        const newTodosArr = oldTodos.map(td => {
                            return ( td.isCounting )
                                ? { ...td, time: td.time + 1000, timeRegister: td.timeRegister + 1000 }
                                : td;
                        });
                        updateDoc({ todos: newTodosArr});
                        return newTodosArr;
                    }else{
                        return oldTodos
                    }
                })
            }, 1000);
        }
        return () => { clearTimeout(timeOut) }
    }, [pomodoroState, updateDoc])

    function addTodo(name, thenFunction) {
        const newTodo = {
            name,
            time: 0,
            timeRegister: 0,
            isCounting: false,
            itIsRecent: true,
            creationDate: getDate(),
            creationDateMili: Date.now(),
            isDone: false
        }
        setTodos(tds => {
            updateDoc({ todos:[...tds, newTodo] }); 
            return [...tds, newTodo];
        })
        thenFunction();
    }

    function removeTodo(name) {
        setTodos(tds => {
            const newTodosArr = tds.filter(todo => todo.name !== name);
            updateDoc({ todos: newTodosArr });
            return newTodosArr;
        })
    }

    function changeTodoProps(todoName, cb) {
        // THIS WAY PRODUCE TWO CALLS TO THE API
        // I DONT KNOW WHY

        // setTodos(tds => {
        //     const newTodosArr = tds.map(td => {
        //         if ( td.name === todoName ) { 
        //             const newProps = cb(td); 
        //             return {...td, ...newProps}; 
        //         }
        //         return td;
        //     })
        //     updateDoc({ todos: newTodosArr });
        //     return newTodosArr;
        // })

        const newTodosArr = todos.map(td => {
            if ( td.name === todoName ) { 
                const newProps = cb(td); 
                return {...td, ...newProps}; 
            }
            return td;
        })
        updateDoc({ todos: newTodosArr });
        setTodos(newTodosArr)
    }
    
    function toggleItIsRecentPropOfATodo(name) {
        changeTodoProps(name, td => {return {isCounting: false, itIsRecent: !td.itIsRecent}})
    }

    function toggleIsDonePropOfATodo(name) {
        changeTodoProps(name, td => {return {isCounting: false, isDone: !td.isDone}})
    }

    function toggleIsCountingPropOfATodo(name) {
        changeTodoProps(name, td => {return {isCounting: !td.isCounting}})
    }

    const value = {
        todos, addTodo, removeTodo, toggleIsCountingPropOfATodo, toggleItIsRecentPropOfATodo, toggleIsDonePropOfATodo
    }
     
    return <TodosContext.Provider value={value}>
        {children}
    </TodosContext.Provider>
}

export function useTodosContext() {
   return useContext(TodosContext)
}