

// entry point for the plugin system.
import type { App } from "vue"; // The install() method is expecting its 1st argument to be of type App.

// we are registering the SpecialPlugin component in this file, so we need to pull it from another file 1st.
import { SpecialUploader } from "./components"; // this didn't work when i wrote it.  keep an eye on it..

export default {

    // expose this install method 
    install: ( app: App, options: { img: string } = { img: "" } ) => {
        app.component( "SpecialUploader", SpecialUploader ); // register the component
        app.provide( "specialUploadImage", options.img );    // expose the image to the app.
    },
};

export { SpecialUploader }; // for people that want to import the component in by itself.
