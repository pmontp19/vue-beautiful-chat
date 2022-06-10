<template>
  <div class="sc-message--welcome">
    <img class="sc-message--img" :src="data.imageUrl"/>
    <p>{{ data.text }}</p>
    <p v-if="data.meta" class="sc-message--meta" :data-tooltip="data.meta">
        {{ data.meta }}
    </p>
  </div>
</template>

<script>

export default {
    props: {
      data: {
        type: Object,
        required: true
      },
    },
}
</script>

<style scoped>
.sc-message--welcome {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 8px;
  border: 1px solid #589BF6;
  border-radius: 24px;  white-space: pre-wrap;
  -webkit-font-smoothing: subpixel-antialiased;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin-top: 30px;
}
.sc-message--img {
  align-self: center;
  position: absolute;
  top: -29px;
  max-width: 55px;
  border: 2px solid #589BF6;
  border-radius: 200px;
  background-color: white;
  position: absolute;
}
.sc-message--meta {
  font-size: x-small;
  margin-bottom: 0px;
  margin-top: 5px;
  opacity: 0.5;
  text-align: center;
}
</style>
