"use client";

import React from "react";
import { ToDoItem, ToDoList } from "@/types";
import WidgetWrapper from "./widgets/widgetWrapper";
import ToDoWidget from "@/components/homePage/widgets/toDoWidget";

import styles from "./widgetGroupStyles.module.scss";

const getWidgets = (todoUrl: string) => {
    let widgets: object[] = [];
    const toDoWidget: object = {
        widgetType: ToDoWidget,
        widgetProps: {
            todoUrl: todoUrl
        }
    };
    widgets.push(toDoWidget);
    return widgets;
};

export default function WidgetGroup({ todoUrl }: { todoUrl: string }) {

    const widgets = getWidgets(todoUrl);

    const widgetRender = (widget: object, key: number) => {
        const Widget: React.JSX.Element = widget.widgetType;
        const props = widget.widgetProps;
        return (
            <WidgetWrapper key={key}>
                <Widget {...props} />
            </WidgetWrapper>
        );
    };

    return (
        <section className={styles.widgetGroup}>
            {widgets.map((widget, index) => (
                widgetRender(widget, index)
            )
            )}
        </section>
    );
}