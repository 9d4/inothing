import { createApp, ref } from "vue";
import App from "./components/App.vue";
import router from "./router";

document.addEventListener("DOMContentLoaded", main);

function main() {
    const app = createApp(App);

    router.isReady().then(() => {
        app.use(router);
        app.mount(createAppDiv());
    });
}

function createAppDiv() {
    // create div#app
    const appEl = document.createElement("div");
    appEl.id = "app";

    document.body.appendChild(appEl);
    return appEl;
}
