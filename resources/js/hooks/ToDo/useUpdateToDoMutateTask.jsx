import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useUpdateToDoMutateTask = () => {
    const queryClient = useQueryClient();
    const updateToDoMutation = useMutation(
        (toDo) => axios.put("/api/todos/" + toDo.id, { title: toDo.title }),
        // ブラウザキャッシュを先に更新することで、高速なデータ入力でも更新を可能にする
        {
            onMutate: async (toDo) => {
                await queryClient.cancelQueries("toDoList");
                const previousToDoList = queryClient.getQueriesData("toDoList");
                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        if (oldToDo.id == toDo.id) {
                            return {
                                ...oldToDo,
                                title: toDo.title,
                            };
                        }
                        return oldToDo;
                    })
                );
                return { previousToDoList };
            },
            // DBの更新が成されたらキャッシュを破棄する
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            }
        }
    );
    return { updateToDoMutation };
};

export default useUpdateToDoMutateTask;
