
import { createApp } from "vue";
import App from "./App.vue";
import ViewerPlugin from "./ViewerPlugin";
const randomImg = "https://picsum.photos/200/300";

// createApp(App).mount("#app");
const app = createApp( App );
app.use( ViewerPlugin, { img: randomImg } );
app.use( ViewerPlugin );
app.mount( "#app" );
