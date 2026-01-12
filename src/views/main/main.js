import {AbstractView} from "../../components/view.js";

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle("Поиск книг");
    }

    render() {
        const main = document.createElement("div");
        main.innerHTML = ``;
        main.innerHTML = `Test`;
        this.app.append(main);
    }
}