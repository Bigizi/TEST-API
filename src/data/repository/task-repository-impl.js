// import { TaskModel } from "../models/task-model";
export default class TaskRepositoryImpl{
    static GET_COMPLETED_TASK_ENDPOINT = "/data/completed-task.json";
    /**
     * @return {Promise<TaskModel[]>}
     */
    async getCompletedTasks(){

       
        const response = await fetch(TaskRepositoryImpl.GET_COMPLETED_TASK_ENDPOINT);
       
       try {
         /**
         * @type {TaskModel[]}
         */
        const tasks = (await response.json()).task;
        return tasks;

       } catch (error) {
        console.warn("failed to fetch data");
        return [];
        
       }
    }
}