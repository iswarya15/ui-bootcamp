import KanbanAPI from "../api/kanbanAPI";
import DropZone from "./DropZone.js";

export default class Item {
    constructor(id, content) {
        const bottomDropZone = DropZone.createDropZone();
        // building an artificial dom tree
        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector('.kanban__item-input');

        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;

        this.content = content;
        this.elements.root.appendChild(bottomDropZone);

        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();

            if (newContent == this.content) {
                return;
            }

            this.content = newContent;
            KanbanAPI.updateItem(id, {
                content: this.content
            })

        }

        this.elements.input.addEventListener("blur", onBlur);
        this.elements.root.addEventListener("dblclick", () => {
            console.log(this.elements);
            console.log(this.elements.root);
            const check = confirm('Are you sure you want to delete this item?');
            if (check) {
                KanbanAPI.deleteItem(id);
                this.elements.root.parentElement.removeChild(this.elements.root)
            }
        })

        this.elements.root.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", id);

        });
        this.elements.input.addEventListener("drop", e => {
            e.preventDefault(); //prevent text from appearing inside input field(while dropping the item)
        })
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div contenteditable class="kanban__item-input"></div>
            </div>
        `).children[0];
    }
}