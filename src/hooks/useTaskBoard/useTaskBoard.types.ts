import { Task } from "@/types/task";

export type TaskBoardState = {
  tasks: Task[];
  setTasks: (tasks: Task) => void;
  selected: Task | undefined;
  setSelected: (tasks?: Task) => void;
  selectTask: (selectedTask: Task) => void;
  finishTask: () => void;
};
