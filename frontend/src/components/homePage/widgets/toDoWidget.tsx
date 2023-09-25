'use client'

import { useState, useEffect } from "react";

import { ToDoItem, ToDoList } from "@/types";

import styles from "./widgetStyles.module.scss";
import ToDoListItem from "@/components/toDoItem";


const buildListObject = (rawList: object) => {
    const list: ToDoList = {
        id: rawList.id, name: rawList.name, createdBy: rawList.createdBy, createdAt: new Date(rawList.createdAt), items: rawList.items.map((item) => (
            { id: item.id, list_id: item.list_id, text: item.text, done: item.done, createdBy: item.createdBy, createdAt: new Date(item.createdAt) } as ToDoItem)
        )
    };
    return list;
};

const addTodoItem = (url: string, item: ToDoItem) => {
};
const editTodoItem = (url: string, item: ToDoItem) => {
};

export default function ToDoWidget({ todoUrl }: { todoUrl: string }) {

    const [list, setList] = useState<ToDoList>();
    const [items, setItems] = useState<ToDoItem[]>([]);
    useEffect(() => {
        const getFavoriteList = (url: string) => {

            const response = fetch(url);
            response.then((response) => (
                response.json())).then((data) => {
                    const localList: ToDoList = buildListObject(data);
                    setList(localList);
                    setItems(localList.items);
                });

            return list;
        };
        getFavoriteList(todoUrl);
    }, []);

    return (
        <div className={styles.widget}>
            <header className={styles.header}>
                <h3>To-Do</h3>
                <h3>+</h3>
            </header>
            <main className={styles.body}>
                <ul className="to-do-list">
                    {items.length > 0 ? items.map((item) => {
                        return (
                            <ToDoListItem key={item.id} item={item} textColor="white" />
                        );
                    }) : <li>Nothing to do!</li>}
                </ul>
            </main>
        </div >
    );
}