import { ToDoItem } from "@/types";

import Image from "next/image";

import styles from "@/components/toDoItemStyles.module.scss";

interface ToDoListItemProps {
    item: ToDoItem;
    textColor?: string;
};

export default function ToDoListItem(Props: ToDoListItemProps) {
    const { item, textColor = "" } = Props;

    const getIconFIleName = () => {
        if (textColor === "white") {
            return item.done ? "checkbox-light-checked.svg" : "checkbox-light-unchecked.svg";
        } else {
            return item.done ? "checkbox-dark-checked.svg" : "checkbox-dark-unchecked.svg";
        }
    };

    return (
        <>
            <li className={styles.toDoItem} style={{ color: textColor }}>
                <Image src={`/icons/${getIconFIleName()}`} width={20} height={20} alt="checkbox" />
                <p>{item.text}</p>
            </li>
        </>
    );

}