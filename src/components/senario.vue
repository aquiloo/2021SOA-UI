<template>
  <div class="scenario">
  <ul class="slides">

    <input type="radio" id="control1" name="control" checked />
    <input type="radio" id="control2" name="control" />
    <input type="radio" id="control-3" name="control" />

    <li class="slide">1</li>
    <li class="slide">2</li>
    <li class="slide">3</li>

    <div class="controls-visible">
      <label for="control1"></label>
      <label for="control2"></label>
      <label for="control-3"></label>
    </div>
  </ul>
  </div>
</template>

<!--<link rel="stylesheet" href="../assets/css/slide.css" />-->
<style scoped>
.scenario {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

ul.slides {
  position: relative;
  width: 600px;
  height: 280px;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #eee;

  overflow: hidden;   /* * */
}

li.slide {
  margin: 0;
  padding: 0;
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 120px;
  color: white;

  transition: .5s transform ease-in-out;
}

li.slide:nth-of-type(1) {
  background-color: aquamarine;
}

li.slide:nth-of-type(2) {
  background-color: lightcoral;
  left: 100%;
}

li.slide:nth-of-type(3) {
  background-color:lightgoldenrodyellow;
  left: 200%;
}

input[type="radio"] {
  position: relative;
  z-index: 100;
  display: none;
}

.controls-visible {
  position: absolute;
  width: 100%;
  bottom: 12px;
  text-align: center;
}

.controls-visible label {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 3px;
  border: 2px solid #fff;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .controls-visible label:nth-of-type(1) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .controls-visible label:nth-of-type(2) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .controls-visible label:nth-of-type(3) {
  background-color: #333;
}

.slides input[type="radio"]:nth-of-type(1):checked ~ .slide {
  transform: translateX(0%);
}

.slides input[type="radio"]:nth-of-type(2):checked ~ .slide {
  transform: translateX(-100%);
}

.slides input[type="radio"]:nth-of-type(3):checked ~ .slide {
  transform: translateX(-200%);
}

</style>
<script>
export default {
  name: "scenaros"
}
</script>

