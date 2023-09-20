"use client";

import React from "react";
import { ToDoItem, ToDoList } from "@/types";
import WidgetWrapper from "./widgets/widgetWrapper";
import ToDoWidget from "@/components/homePage/widgets/toDoWidget";

import styles from "./widgetGroupStyles.module.scss";


const addTodoItem = async (url: string, item: ToDoItem) => {
};
const editTodoItem = async (url: string, item: ToDoItem) => {
};

const getFavoriteList = async (url: string) => {
    const response = await fetch(url);
    const rawFavoriteList = await response.json();
    const favoriteList: ToDoList = {
        id: rawFavoriteList.id, name: rawFavoriteList.name, createdBy: rawFavoriteList.createdBy, createdAt: new Date(rawFavoriteList.createdAt), items: rawFavoriteList.items.map((item) => (
            { id: item.id, list_id: item.list_id, text: item.text, done: item.done, createdBy: item.createdBy, createdAt: new Date(item.createdAt) } as ToDoItem)
        )
    };
    return favoriteList;
};


const getWidgets = async () => {
    let widgets: object[] = [];
    const todoUrl: string = "http://localhost:3001/favorite-list/1";
    const favoriteList: ToDoList = await getFavoriteList(todoUrl).then(list => {
        return list;
    });
    const toDoWidget: object = {
        widgetType: ToDoWidget,
        widgetProps: {
            toDoItems: favoriteList.items,
            addFunction: addTodoItem,
            editFunction: editTodoItem
        }
    };
    widgets.push(toDoWidget);
    return widgets;
};

export default async function WidgetGroup() {

    const widgets: object[] = await getWidgets().then(widgets => {
        return widgets;
    });
    const widgetRender = (widget: object, key: number) => {
        const Widget: React.JSX.Element = widget.widgetType;
        const props = widget.widgetProps;
        return (
            <WidgetWrapper key={key}>
                <Widget {...props} />
            </WidgetWrapper>
        );
    };
    if (typeof widgets === 'object' && typeof widgets.then === 'function') {
        return (
            <section className={styles.widgetGroup}>
                <h2>Loading...</h2>
            </section>
        )
    } else {
        return (
            <section className={styles.widgetGroup}>
                {widgets.map((widget, index) => (
                    widgetRender(widget, index)
                )
                )}
            </section>
        );
    }
}