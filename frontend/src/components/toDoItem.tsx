import { ToDoItem } from "@/types";

import styles from "@/components/toDoItemStyles.module.scss";

export default function ToDoListItem({ item }: { item: ToDoItem }) {
    return (
        <li className={styles.toDoItem}>
            <input type="checkbox" />
            <p>{item.text}</p>
        </li>
    );

}