

<style>

.loader-wrap{
  width:100%;
  height:100vh;
  position: fixed;
  top:0;
  left:0;
  background:rgba(0, 0, 0,.8);
  z-index:100000000000000000000000000000000000;
}
.semipolar-spinner, .semipolar-spinner * {
      box-sizing: border-box;
    }

    .semipolar-spinner {
      height: 85px;
      width: 85px;
      position: relative;
    }

    .semipolar-spinner .ring {
      border-radius: 50%;
      position: absolute;
      border: calc(85px * 0.05) solid transparent;
      border-top-color: #ff1d5e;
      border-left-color: #ff1d5e;
      animation: semipolar-spinner-animation 2s infinite;
    }

    .semipolar-spinner .ring:nth-child(1) {
      height: calc(85px - 85px * 0.2 * 0);
      width: calc(85px - 85px * 0.2 * 0);
      top: calc(85px * 0.1 * 0);
      left: calc(85px * 0.1 * 0);
      animation-delay: calc(2000ms * 0.1 * 4);
      z-index: 5;
    }

    .semipolar-spinner .ring:nth-child(2) {
      height: calc(85px - 85px * 0.2 * 1);
      width: calc(85px - 85px * 0.2 * 1);
      top: calc(85px * 0.1 * 1);
      left: calc(85px * 0.1 * 1);
      animation-delay: calc(2000ms * 0.1 * 3);
      z-index: 4;
    }

    .semipolar-spinner .ring:nth-child(3) {
      height: calc(85px - 85px * 0.2 * 2);
      width: calc(85px - 85px * 0.2 * 2);
      top: calc(85px * 0.1 * 2);
      left: calc(85px * 0.1 * 2);
      animation-delay: calc(2000ms * 0.1 * 2);
      z-index: 3;
    }

    .semipolar-spinner .ring:nth-child(4) {
      height: calc(85px - 85px * 0.2 * 3);
      width: calc(85px - 85px * 0.2 * 3);
      top: calc(85px * 0.1 * 3);
      left: calc(85px * 0.1 * 3);
      animation-delay: calc(2000ms * 0.1 * 1);
      z-index: 2;
    }

    .semipolar-spinner .ring:nth-child(5) {
      height: calc(85px - 85px * 0.2 * 4);
      width: calc(85px - 85px * 0.2 * 4);
      top: calc(85px * 0.1 * 4);
      left: calc(85px * 0.1 * 4);
      animation-delay: calc(2000ms * 0.1 * 0);
      z-index: 1;
    }

    @keyframes semipolar-spinner-animation {
      50% {
        transform: rotate(360deg) scale(0.7);
      }
    }
</style>


<template>
  <section class="loader-wrap flex flex-center flex-middle">
    <div class="semipolar-spinner" :style="spinnerStyle">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
    </div>
  </section>
</template>