import KanbanAPI from '../api/kanbanAPI';

export default class Column {
    constructor(id, title) { //column represents single col in UI
        this.elements = {};
        this.elements.root = Column.createRoot();


        this.elements.title = this.elements.root.querySelector(".kanban__column-title");
        this.elements.items = this.elements.root.querySelector(".kanban__column-items");
        this.elements.addItem = this.elements.root.querySelector(".kanban__add-item");

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;

        this.elements.addItem.addEventListener("click", () => {
            //TODO: add item
        });

        KanbanAPI.getItems(id).forEach(item => {
            console.log(item);
            this.renderItems(item);
        })
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        // below html is simply appended to document's body 

        return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title"></div>
                <div class="kanban__column-items"></div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `).children[0];
    }

    renderItems(data) {
        // TODO: create Item Instance
    }
}