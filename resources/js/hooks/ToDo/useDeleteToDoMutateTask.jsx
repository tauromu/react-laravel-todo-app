import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoMutateTask = () => {
    const queryClient = useQueryClient();
    const deleteToDoMutation = useMutation(
        (toDo) => axios.delete("/api/todos/" + toDo.id),
        // ブラウザキャッシュを先に更新することで、高速なデータ入力でも更新を可能にする
        {
            // DBの更新が成されたらキャッシュを破棄する
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDoMutation };
};

export default useDeleteToDoMutateTask;
