import Vue from 'vue'
import deepSearch from "./deepSearch";

export default {
    install: () => {
        Vue.prototype.deepSearch = deepSearch
        Vue.deepSearch = deepSearch
    }
}