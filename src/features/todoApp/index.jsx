import React, { useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import List from './component/List';
import './style.css'

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("todos")) || []
    })
    const [filter, setFilter] = useState('all')
    const submit = (value) => {
        const newList = [
            ...todos]
        const newItem = {

            title: value,
            completed: false,
        }
        newList.push(newItem)
        setTodos(newList)
        localStorage.setItem("todos", JSON.stringify(newList))

    }
    const toggleAll = (isCompleted) => {
        const newList = [
            ...todos
        ]
        newList.forEach(todo => todo.completed = isCompleted)
        setTodos(newList)
        localStorage.setItem("todos", JSON.stringify(newList))

    }
    const toggle = (isCompleted, index) => {
        const newList = [...todos]
        newList[index].completed = !isCompleted

        setTodos(newList)
        localStorage.setItem("todos", JSON.stringify(newList))


    }
    const remove = (index) => {
        let newList = [...todos]
        newList.splice(index, 1)
        setTodos(newList)
        localStorage.setItem("todos", JSON.stringify(newList))
    }
    const removeComplete = () => {
        const newList = [...todos]
        const render = newList.filter(todo => todo.completed === false)
        setTodos(render)
        localStorage.setItem("todos", JSON.stringify(render))

    }

    const all = () => {
        setFilter('all')
    }

    const active = () => {
        setFilter(false)
    }

    const completed = () => {
        setFilter(true)
    }
    const rendering = todos.filter(todo => {
        return filter === 'all' || todo.completed === filter
    })
    const update = (value, index) => {
        const newList = [
            ...todos
        ]
        newList[index].title = value
        localStorage.setItem("todos", JSON.stringify(newList))
        setTodos(newList)

    }
    return (
        <section className="todoapp">
            <Header handleSubmit={submit} />
            {todos.length > 0 && <List todos={rendering}
                toggleAll={toggleAll}
                toggleItem={toggle}
                removeItem={remove}
                updateTodo={update}
            />
            }
            {todos.length > 0 &&
                < Footer
                    todos={rendering}
                    removeCheck={removeComplete}
                    handleAll={all}
                    handleActive={active}
                    handleCompleted={completed}
                />}
        </section>
    );
}

export default TodoFeature;