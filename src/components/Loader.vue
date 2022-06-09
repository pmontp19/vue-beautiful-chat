<template>
  <div>
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  border: 6px solid #bed9ff;
  border-radius: 50%;
  border-top: 6px solid #2A6BF6;
  width: 48px;
  height: 48px;
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
