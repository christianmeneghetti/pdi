import { Task } from "@/types/tarefa";

export type ListProps = {
  tasks: Task[];
  selectTask: (selectedTask: Task) => void;
};
