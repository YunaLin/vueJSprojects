// 两个功能，分别是fetch和save
// 实现将数据存储在浏览器中的功能，使得在下次打开的时候能够获取到上次该页面的数据
// 可以通过Application->local storage->http://localhost:8080进行查看
const STORAGE_KEY = "todos-vuejs"
export default {
    fetch:function() {
        // 如果取不到的话直接输出一个空的数组
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY || '[]'))
    },
    save:function(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
}
