import { ToDoItem } from "@/types";

import styles from "@/components/toDoItemStyles.module.scss";

interface ToDoListItemProps {
    item: ToDoItem;
    textColor?: string;
};

export default function ToDoListItem(Props: ToDoListItemProps) {
    const { item, textColor = "" } = Props;
    return (
        <li className={styles.toDoItem} style={{ color: textColor }}>
            <input type="checkbox" />
            <p>{item.text}</p>
        </li>
    );

}