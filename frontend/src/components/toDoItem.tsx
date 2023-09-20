import { ToDoItem } from "@/types";

export default function ToDoListItem({ item }: { item: ToDoItem }) {
    return (
        <li className="toDoItem">
            <input type="checkbox" />
            <p>{item.text}</p>
        </li>
    );

}