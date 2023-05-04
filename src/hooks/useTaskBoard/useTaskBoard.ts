import { create, StoreApi } from "zustand";
import { devtools } from "zustand/middleware";
import { TaskBoardState } from "./useTaskBoard.types";
import { Task } from "@/types/task";
import { produce } from "immer";

function selectTask(
  selectedTask: Task,
  set: StoreApi<TaskBoardState>["setState"]
) {
  set(
    produce((state: TaskBoardState) => {
      state.tasks.map((task) =>
        task.id === selectedTask.id
          ? (task.selected = true)
          : (task.selected = false)
      );
    })
  );
}

function finishTask(set: StoreApi<TaskBoardState>["setState"]) {
  set(
    produce((state: TaskBoardState) => {
      if (state.selected) {
        const fineshedTask = state.tasks.find(
          (task) => task.id === state.selected?.id
        );
        if (fineshedTask) {
          (fineshedTask.completed = true), (fineshedTask.selected = false);
        }

        state.setSelected(undefined);
      }
    })
  );
}

const useTaskBoard = create<TaskBoardState>()(
  devtools(
    (set) => ({
      tasks: [],
      selected: undefined,
      setTasks: (tasks: Task) =>
        set((state) => ({ tasks: [...state.tasks, tasks] })),
      setSelected: (selected: Task | undefined) =>
        set((state) => ({ state, selected })),
      selectTask: (selectedTask: Task) => selectTask(selectedTask, set),
      finishTask: () => finishTask(set),
    }),
    { name: "useTaskBoard" }
  )
);

export { useTaskBoard };
