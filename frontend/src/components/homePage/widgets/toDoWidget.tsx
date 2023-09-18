'use client'

import { useState } from "react";

import { ToDoItem } from "@/types";

import styles from "./widgetStyles.module.scss";


export default function ToDoWidget({ toDoItems, addFunction }: { toDoItems: ToDoItem[], addFunction: (item: ToDoItem) => ToDoItem[] }) {

    const [items, setItems] = useState<ToDoItem[]>(toDoItems);

    return (
        <div className={styles.widget}>

        </div>
    );
}