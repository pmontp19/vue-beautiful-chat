<template>
  <div class="sc-message--process" :style="messageColors">
  <Loader v-if="process.loading"/>
    <slot :message="data">
      {{ data.text }}
    </slot>
  </div>
</template>

<script>
import Loader from '../components/Loader.vue';
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        messageColors: {
            type: Object,
            required: false
        },
        process: {
            type: Object,
            required: true
        }
    },
    components: { Loader }
}
</script>

<style scoped>
.sc-message--process {
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 300;
  font-size: 12px;
  line-height: 1.2;
  white-space: pre-wrap;
  -webkit-font-smoothing: subpixel-antialiased;
  font-style: italic;
  opacity: 0.55;
}
</style>
