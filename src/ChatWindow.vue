<template>
  <div
    class="sc-chat-window"
    :class="{ opened: isOpen, closed: !isOpen, noLauncher: !showLauncher }"
  >
    <Header
      v-if="showHeader"
      :title="title"
      :colors="colors"
      @close="$emit('close')"
      @userList="handleUserListToggle"
    >
      <template>
        <slot name="header"> </slot>
      </template>
    </Header>
    <UserList
      v-if="showUserList"
      :colors="colors"
      :participants="participants"
    />
    <MessageList
      v-if="!showUserList"
      :messages="messages"
      :participants="participants"
      :show-typing-indicator="showTypingIndicator"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :message-styling="messageStyling"
      @scrollToTop="$emit('scrollToTop')"
      @remove="$emit('remove', $event)"
      @option="$emit('option', $event)"
    >
      <template #user-avatar="scopedProps">
        <slot
          name="user-avatar"
          :user="scopedProps.user"
          :message="scopedProps.message"
        >
        </slot>
      </template>
      <template #text-message-body="scopedProps">
        <slot
          name="text-message-body"
          :message="scopedProps.message"
          :message-text="scopedProps.messageText"
          :message-colors="scopedProps.messageColors"
          :me="scopedProps.me"
        >
        </slot>
      </template>
      <template #system-message-body="scopedProps">
        <slot name="system-message-body" :message="scopedProps.message"> </slot>
      </template>
      <template #text-message-toolbox="scopedProps">
        <slot
          name="text-message-toolbox"
          :message="scopedProps.message"
          :me="scopedProps.me"
        >
        </slot>
      </template>
    </MessageList>
    <UserInput
      v-if="!showUserList"
      :content-editable="contentEditable"
      :show-emoji="showEmoji"
      :on-submit="onUserInputSubmit"
      :show-file="showFile"
      :placeholder="placeholder"
      :colors="colors"
      @onType="$emit('onType')"
      @edit="$emit('edit', $event)"
    />
  </div>
</template>

<script>
  import Header from './Header.vue'
  import MessageList from './MessageList.vue'
  import UserInput from './UserInput.vue'
  import UserList from './UserList.vue'

  export default {
    components: {
      Header,
      MessageList,
      UserInput,
      UserList
    },
    props: {
      showEmoji: {
        type: Boolean,
        default: false
      },
      showFile: {
        type: Boolean,
        default: false
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      participants: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      onUserInputSubmit: {
        type: Function,
        required: true
      },
      messageList: {
        type: Array,
        default: () => []
      },
      isOpen: {
        type: Boolean,
        default: () => false
      },
      placeholder: {
        type: String,
        required: true
      },
      showTypingIndicator: {
        type: String,
        required: true
      },
      colors: {
        type: Object,
        required: true
      },
      alwaysScrollToBottom: {
        type: Boolean,
        required: true
      },
      messageStyling: {
        type: Boolean,
        required: true
      },
      contentEditable: {
        type: Boolean,
        default: () => true
      },
      showLauncher: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        showUserList: false
      }
    },
    computed: {
      messages() {
        let messages = this.messageList

        return messages
      }
    },
    methods: {
      handleUserListToggle(showUserList) {
        this.showUserList = showUserList
      }
    }
  }
</script>

<style scoped>
  .sc-chat-window {
    width: 370px;
    height: calc(100% - 120px);
    max-height: 590px;
    position: fixed;
    right: 25px;
    bottom: 100px;
    box-sizing: border-box;
    box-shadow: 6px 6px 24px rgba(0, 0, 0, 0.5);
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    animation: fadeIn;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }
  .noLauncher {
    bottom: 0px;
    border-radius: 8px 8px 0px 0px;
  }

  .sc-chat-window.closed {
    opacity: 0;
    display: none;
    bottom: 90px;
  }

  @keyframes fadeIn {
    0% {
      display: none;
      opacity: 0;
    }

    100% {
      display: flex;
      opacity: 1;
    }
  }

  .sc-message--me {
    text-align: right;
  }
  .sc-message--them {
    text-align: left;
  }

  @media (max-width: 450px) {
    .sc-chat-window {
      width: 100%;
      height: 100%;
      max-height: 100%;
      right: 0px;
      bottom: 0px;
      border-radius: 0px;
    }
    .sc-chat-window {
      transition: 0.1s ease-in-out;
    }
    .sc-chat-window.closed {
      bottom: 0px;
    }
  }
</style>
