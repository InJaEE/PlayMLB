<template>
  <div class="form-wrapper">
      <form @submit.prevent="submitForm">
          <div class="id_area">
              <input type="text" id="username" placeholder="아이디" class="input_row">
          </div>
          <div>
              <input type="text" id="password" placeholder="비밀번호" class="input_row">
          </div>
          <div>
              <button type="submit" class="btn">로그인</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    methods: {
        submitForm(){
            alert("Login");
        }
    }
}
</script>

<style scoped>
.form-wrapper {
  background: white;
  -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  padding: 15px 15px;
  max-width: 500px;
  margin: 40px auto;
}
.id_area {
    position: relative;
}
.input_row {
    position: relative;
    width: 100%;
    height: 29px;
    margin: 0 0 14px;
    border: solid 1px #dadada;
    padding: 10px 0 10px 0;
}
.btn{
    display: block;
    width: 100%;
    height: 61px;
    margin: 30px 0 14px;
    padding-top: 1px;
    border: none;
    border-radius: 0;
    background-color: #041e42;
    cursor: pointer;
    color: white;
    font-size: 20px;
    line-height: 61px;
}
</style>