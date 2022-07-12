<template>
  <div class="sc-message--text" :style="messageColors">
    <slot
      :message="message"
      :message-text="messageText"
      :message-colors="messageColors"
      :me="me"
    >
      <p class="sc-message--text-content">{{ message.data.text }}</p>
      <form>
        <div v-for="(option, i) in message.data.options" :key="i">
          <input
            :id="option.value"
            v-model="optionPicked"
            type="radio"
            name="options"
            :value="option.value"
            :disabled="isConsolidated"
            @click="consolidate"
          />
          <label :for="option.value">{{ option.text }}</label>
        </div>
      </form>
      <p
        v-if="message.data.meta"
        class="sc-message--meta"
        :style="{ color: messageColors.color }"
      >
        {{ message.data.meta }}
      </p>
    </slot>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      message: {
        type: Object,
        required: true
      },
      messageColors: {
        type: Object,
        required: true
      },
      messageStyling: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        optionPicked: null,
        isConsolidated: false
      }
    },
    created: function() {
      if (this.message.data.consolidated) {
        this.isConsolidated = true
      }
      const ret = this.deepSearch.getObjects(this.message, 'checked', true)
      if (ret.length !== 0) {
        this.optionPicked = ret[0].value
      }
    },
    methods: {
      consolidate() {
        if (!this.isConsolidated) {
          this.isConsolidated = true
          this.$emit('option', this.optionPicked)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .sc-message--text {
    padding: 5px 20px;
    border-radius: 6px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.4;
    position: relative;
    -webkit-font-smoothing: subpixel-antialiased;
    .sc-message--text-content {
      white-space: pre-wrap;
    }
    &:hover .sc-message--toolbox {
      left: -20px;
      opacity: 1;
    }
    .sc-message--toolbox {
      transition: left 0.2s ease-out 0s;
      white-space: normal;
      opacity: 0;
      position: absolute;
      left: 0px;
      width: 25px;
      top: 0;
      button {
        background: none;
        border: none;
        padding: 0px;
        margin: 0px;
        outline: none;
        width: 100%;
        text-align: center;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
      & :deep(svg) {
        margin-left: 5px;
      }
    }
    code {
      font-family: 'Courier New', Courier, monospace !important;
    }
  }

  .sc-message--content.sent .sc-message--text {
    color: white;
    background-color: #4e8cff;
    max-width: calc(100% - 120px);
    word-wrap: break-word;
    border-radius: 24px 24px 0px 24px;
  }

  .sc-message--content.received .sc-message--text {
    color: #263238;
    background-color: #f4f7f9;
    margin-right: 40px;
    border-radius: 0px 24px 24px 24px;
  }

  a.chatLink {
    color: inherit !important;
  }

  input {
    box-sizing: border-box;
    /* BA_Azul 3 */
    border: 1px solid #589bf6;
    filter: drop-shadow(0px 0px 5px rgba(42, 107, 246, 0.6));
    margin: 0.5em;
  }
  input:checked {
    background: #589bf6;
  }
</style>
