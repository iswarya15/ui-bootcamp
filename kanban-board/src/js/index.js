import "../css/style.css";
import KanbanAPI from "./api/kanbanAPI";

// console.log(KanbanAPI.getItems(1));
// console.log('kanbanAPI: InsertItem ', KanbanAPI.insertItem(2, "I am new"));

KanbanAPI.updateItem(39632, { columnId: 3, position: 0, content: "im updated" });

KanbanAPI.deleteItem(63813);

