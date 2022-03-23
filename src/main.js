import { createApp, ref } from "vue";
import App from "./components/App.vue";

document.addEventListener("DOMContentLoaded", main);

function main() {
    createApp(App).mount(createAppDiv());
}

function createAppDiv() {
    // create div#app
    const appEl = document.createElement("div");
    appEl.id = "#app";

    document.body.appendChild(appEl);
    return appEl;
}

export { createAppDiv }
