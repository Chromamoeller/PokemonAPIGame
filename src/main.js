import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";

// createApp(App).mount("#app");

const app = createApp(App);

app.use(createPinia()); // Pinia aktivieren
app.mount("#app");
