# v-text 与 {{}}
  使用v-text当在加载数据时就不会显示其他的东西，{{}}会显示{{}}在页面上
  - <li class="item" v-for="(item,index) in news" :key="index">{{item.title}}</li>
  - <span>{{msg1}}</span> - <span v-text="msg2"></span> - <span v-html="msg3"></span>
  - <button @click="add">加分</button>
      <button v-on:click="reduce">减分</button>
  - <p>文本内容：{{message}}</p>
      <p>
        <input type="text" v-model="message">
      </p>     双向绑定
  - <div :class="className">
      <img v-bind:src="imgUrl" alt="">
    </div>     修改属性
  - <div v-pre>{{msg1}}</div>  跳过vue编译