<template>
  <component :is="svg"/>
</template>

<script>
import {library} from "./main";

export default {
  props: {
    svgName: {
      type: String
    },
  },
  computed: {
    svg() {
        // const svg = require('vue-svg-loader');
        // console.log(require(`!vue-svg!${this.src}`));
        // return import('@/assets/icons/railway.svg');
        // return () => import(this.src);
        // return () => library.get(this.svgName);
        return library.get(this.svgName);
      // return () => require(`!file!vue-svg-loader!babel-loader!${this.src}`)
        // return () => import('@/assets/icons/railway.svg');
        // return () => svgToVue(this.src);
      // return () => import(`@/${this.src}.svg`);
    }
  }
}
</script>