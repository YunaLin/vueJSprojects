// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    // 调用的是App模板
    // App模板又调用了Hello模板
    // 这里的template可以在App.vue中看到也有一个template标签，实际上就是我们平常使用的html,只不过这里的名称是template而已
    template: '<App/>'
})
