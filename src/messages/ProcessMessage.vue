<template>
  <div class="sc-message--process">
    <Loader v-if="loading" />
    <img
      v-if="!loading"
      src="data:image/png;base64,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"
    />
    <p>{{ message.data.text }}</p>
  </div>
</template>

<script>
  import Loader from '../components/Loader.vue'

  export default {
    components: { Loader },
    props: {
      loading: {
        type: Boolean,
        required: true
      },
      message: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .sc-message--process {
    display: flex;
    align-items: center;
    padding: 8px 20px;
    border-radius: 6px;
    white-space: pre-wrap;
    -webkit-font-smoothing: subpixel-antialiased;
    max-width: 300px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #2a6bf6;
  }
  p {
    margin-left: 10px;
  }
</style>
