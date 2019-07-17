<template>
  <div class="box">
    <form action>
      <div class="flex">
        <a-input
          type="text"
          placeholder="请输入用户名"
          v-validate="'required'"
          name="name"
          data-vv-as="用户名"
          v-model="form.name"
          :class="{error:errors.has('name')}"
        >
          <a-icon slot="prefix" type="user" class="icon"/>
        </a-input>
        <span class="error-tip">{{ errors.first('name') }}</span>
      </div>
      <div class="flex">
        <a-input
          type="password"
          placeholder="请输入密码"
          v-validate="'required'"
          name="password"
          data-vv-as="密码"
          v-model="form.password"
          :class="{error:errors.has('password')}"
        >
          <a-icon slot="prefix" type="lock" class="icon"/>
        </a-input>
        <span class="error-tip">{{ errors.first('password') }}</span>
      </div>
      <div class="flex">
        <a-button type="primary" class="btn" @click="formclick">提交</a-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppContent",
  data(){
    return{
      form:{
        name: '',
        password: '',
      }
    }
  },
  methods:{
    formclick(){
        this.$validator.validateAll().then(result=>{
          if(result){
            console.log(this.form)
            this.$store.dispatch('User/login', this.form)
          }
        })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
form {
  width: 400px;
}
.box {
  display: flex;
  justify-content: center;
}
.flex {
  margin: 20px;
}
.btn {
  width: 100%;
}
.icon {
  color: rgba(0, 0, 0, 0.25);
}
.error-tip{
  color: red;
  font-size: 12px;
}
.error{
  border: 1px solid red;
  border-radius: 5px;
}
</style>
