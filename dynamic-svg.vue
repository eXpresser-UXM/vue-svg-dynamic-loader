<template>
  <component :is="svg"/>
</template>

<script>
export default {
  // name: "SVGElement",
  props: {
    src: {
      validator: (value) => {
        console.log(typeof value);
        return true;
      }
    },
  },
  computed: {
    svg() {
        // const svg = require('vue-svg-loader');
        console.log(this.src);
        // return import('@/assets/icons/railway.svg');
        // return import(this.src);
        // return () => require(this.src);
      // return () => import(svg(this.src))
        // return () => import('@/assets/icons/railway.svg');
        // return () => svgToVue(this.src);
      return () => import(`@/${this.src}.svg`);
    }
  }
}
</script>