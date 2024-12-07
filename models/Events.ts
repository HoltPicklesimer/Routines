
export interface ListEvent {
    id: string;
    name: string;
    date: Date;
}

export interface EventDate {
    date: string;
    events: ListEvent[];
}