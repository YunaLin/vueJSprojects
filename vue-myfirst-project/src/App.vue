<template>
    <div id="app">
        <!-- 指的是h1里面的内容要渲染成title字段 -->
        <!-- 注意v-html和v-text的不同,v-html的话会解释字符串里面的标签，但是v-text则不会 -->
        <h1 v-text="title"></h1>
        <!-- 要记得到data里面对newItem进行赋值,这里input使用title是为了响应webstorm的要求，事实上不要的话也没有什么问题 -->
        <input title="addItem" v-model="newItem" v-on:keyup.enter="addNew">
        <ul>
            <!-- 用v-bind对class进行控制 -->
            <!-- 可以同时渲染两个class，class="[liClass1, liClass2]",这两个class的直可以跟前面的v-text一样在data中
             进行设置　-->
            <!-- 当执行点击事件的时候，v-bind的值更新并且进行绑定显示 -->
            <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="clickEvent(item)">
                {{item.label}}
            </li>
        </ul>
        <!-- 注意不能够直接使用HelloWorld,需要将大写字母转换为中间横线 -->
        <hello-world></hello-world>
    </div>
</template>

<script>
    // 导入组件后要在vue里面注册组件才可以使用
    import HelloWorld from "./components/HelloWorld";
    // 用props(属性的意思)，来实现vuejs组件之间的通信，但是只适用于父组件向子组件中传递属性
    // 从同级目录下import
    // 使用import Store from './store'也可以
    import Store from './store.js';
    console.log(Store);
    export default {
        // 注册组件，如果有多个组件的话直接按照数组的格式进行注册即可
        components: {HelloWorld},
        // 注意不同的数据之间用','分隔，不仅仅是数据之间还有很多需要用逗号的地方
        data: function() {
            return {
                title: "this is a todo list(I have updated it)",
                items: Store.fetch(),
                    // [
                    // {
                    //     label:'coding',
                    //     // 使用v-bind来对isFinished属性进行表示
                    //     isFinished:false
                    // }
                    // ],
                // 注意这里要对newItem进行初始化
                newItem: ''
            }
        },
        // 对items的改变进行监听
        watch: {
            items: {
                handler:function(items) {
                    Store.save(items);
                },
                // 主要这里的deep的设置非常重要
                // 如果deep设置为false的话items的更新浏览器存储中不会进行更新
                deep:true
            }
        },
        // methods是一个大的对象
        methods: {
            // item是一个对象
            clickEvent: function(item) {
                item.isFinished = !item.isFinished;
            },
            addNew: function() {
                // 结尾可以要逗号也可以不要
                this.items.push({
                    label: this.newItem,
                    isFinished: false
                });
                console.log(this.newItem);
                this.newItem = '';
            }
        }
    }
</script>

<style>
    .finished {
        text-decoration: underline;
    }
</style>
