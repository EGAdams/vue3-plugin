<!-- /* 
      *  pulls the file from the upload "widget" and sets it to the image 
      */ -->
<script lang="ts" setup>

// we need ref to "turn on the watcher"
// inject is for pulling the img string from the plugin
import { ref, inject } from "vue";

// forget about <props> tag !!  just define a variable with what is returned from defineProps().
const props = defineProps<{ customImg?: string; }>(); // optionally passed in from App.vue
// props come from the parent!

// pull the img string from the plugin
const img = inject( "specialUploadImage" ) as string; // <-- inject ---<< provided by the viewer plugin

// Did the props get dropped in from the parent ?? Was the img "provided" by the plugin?
const imgVal = props.customImg ?? img;   // use the custom image if provided, otherwise 
                                         // just use the img "provided" by the plugin.

// watch imgSRC
const imgSRC = ref(  imgVal  ); // reference to the image src.  <----<< "watch" imgSRC is set here.

// pull the file from the caught event object and 
// pass it to the this.fileProcess() function
function fileUpload(  event: Event  ) {   
  const target = event.target as HTMLInputElement;
  console.log( target.files );

  const file = target.files[ 0 ];
  console.log( "file", file );
  fileProcess( file ); } // just sets the imgSRC value which is "watched".

function fileProcess( file: File ) {
  imgSRC.value = URL.createObjectURL( file ); // set the watched value.  this will change the picture.
  console.log( "got the file", file );
  console.log( imgSRC.value ); }
</script>


<!-- /////////////////////////////// the html ///////////////////////////////////////////////// -->
<template>
  <div class="image-uploader">
    <h1>File Uploader</h1>
    <input @change="fileUpload" type="file" id="file-upload" name="fileUpload" accept="image/*" />
    <div class="your-file">
      <img :src="imgSRC" alt="" srcset="" />
    </div>
    img source:{{ imgSRC }}
  </div>
</template>
<!-- ////////////////////////////////////////////////////////////////////////////////////////// -->


<style>
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 55%;
  background-color: eggshell;
  margin: 0 auto;
  height: 300px;
  box-shadow: rgba( 0, 0, 0, 0.1 ) 0px 4px 12px;
}

.your-file {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

img {
  width: 25%;
}
</style>
