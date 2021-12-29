import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import TodosFooter from "./TodosFooter";
import TodosHeader from "./TodosHeader";
import TodoItem from "./TodoItem";

function TodosList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        let newTodo = {
            id: uuidv4(),
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const delTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const markComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="flex flex-col bg-gray-200 rounded shadow-lg">
            <TodosHeader />

            <AddTodo addTodo={addTodo} />

            <div className="mx-4 my-6 h-96 overflow-auto">
                {todos.length > 0 ? (
                    <ul className="mt-4" data-testid="todos-list">
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                markComplete={markComplete}
                                delTodo={delTodo}
                            />
                        ))}
                    </ul>
                ) : (
                    <p
                        className="my-16 text-lg text-center text-gray-500"
                        data-testid="empty-todos-message"
                    >
                        You're all caught up!
                    </p>
                )}
            </div>

            <TodosFooter
                totalTasks={todos.length}
                doneTasks={todos.filter((todo) => todo.completed).length}
            />
        </div>
    );
}

export default TodosList;
