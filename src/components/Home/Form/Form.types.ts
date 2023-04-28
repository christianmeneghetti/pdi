import { Task } from "@/types/tarefa";

export type FormProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
