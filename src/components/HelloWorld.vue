<template>
    <div>
        <h2 class="hello">{{msg1}} {{msg2}} {{msg3}}</h2>
        <input v-bind:value="value" v-on:input="updateInput"/>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg1: String,
    msg2: String,
    msg3: String
  }
}

new Vue({
  data: {
    inputText: ''
  },
  methods: {
    updateInput: function(event) {
      var updatedText = event.target.value;
      this.inputText = updatedText;
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
    color:teal;
}
</style>
