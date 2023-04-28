import { Task } from "@/types/tarefa";

export type ItemProps = {
  selectTask: (taskSelected: Task) => void;
  task: string;
  timer: string;
  selected: boolean;
  completed: boolean;
  id: string;
};

export type ItemStyledProps = {
  selected: boolean;
  completed: boolean;
};
