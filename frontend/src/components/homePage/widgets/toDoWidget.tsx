'use client'

import { useState } from "react";

import { ToDoItem } from "@/types";

import styles from "./widgetStyles.module.scss";


export default function ToDoWidget({ toDoItems, addFunction, editFunction }: { toDoItems: ToDoItem[], addFunction: (item: ToDoItem) => ToDoItem[], editFunction: (item: ToDoItem) => ToDoItem[] }) {

    const [items, setItems] = useState<ToDoItem[]>(toDoItems);

    return (
        <div className={styles.widget}>
            <header>
                <h3>To-Do</h3>
                <h3>+</h3>
            </header>
            <main>
                <ul className={styles.toDoList}>
                    {items.map((item) => {
                        return (
                            <li key={item.id} className={styles.toDoItem}>
                                <input type="checkbox" />
                                <p>{item.text}</p>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    );
}