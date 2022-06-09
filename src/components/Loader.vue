<template>
  <div>
    <div class="loader"></div>
    <p><slot></slot></p>
  </div>
</template>

<style scoped>
.loader {
  border: 16px solid #bed9ff;
  border-radius: 50%;
  border-top: 16px solid #589bf6;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
