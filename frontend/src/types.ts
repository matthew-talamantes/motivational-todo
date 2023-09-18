export type Quote = {
    id: number | string;
    text: string;
    author: string;
    tags: string[];
};

export type ToDoItem = {
    id: number;
    list_id: number;
    text: string;
    done: boolean;
    createdBy: string;
    createdAt: Date;
    doneAt?: Date;
    doneBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
}

