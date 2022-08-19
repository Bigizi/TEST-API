type User = {
    username: string,
    avatar: string
}
export interface TaskModel{
    name: string;
    description: string;
    icon: string,
    assignedTo: User[]
}