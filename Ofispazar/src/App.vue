<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "app",
  data() {
    return {};
  }
   

};
</script>









<style>
body {
  font-style: Roboto, sans-serif;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #292b2c;
  background-color: #fff;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  height: 500px;
  z-index: 10;
}
.btn {
  padding: 5px 10px;
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #fff;
  background: none;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
  font-size: 50px;
  font-weight: 100;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 50%;
  right: 0;
}
.btn-prev {
  top: 50%;
  left: 0;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>