<template>
    <div class="wrapper">
        <slot name="header"></slot>
        <div>
            <form @submit.prevent="submitForm">
                <div class="id_area" :class="{focus: this.isIdFocus}">
                    <input type="text" id="username" placeholder="아이디" class="input_row" @focus="focusIdInputBox" @blur="focusIdInputBox">
                </div>
                <div class="password_area" :class="{focus: this.isPwdFocus}">
                    <input type="password" id="password" placeholder="비밀번호" class="input_row" @focus="focusPwdInputBox" @blur="focusPwdInputBox">
                </div>
                <slot name="btn">
                </slot>
            </form>
        </div>
        
    </div>
</template>

<script>
export default {
      data(){
        return{
            isIdFocus: false,
            isPwdFocus: false,
        }
    },
    methods: {
        focusIdInputBox(){
            this.isIdFocus = !this.isIdFocus;
        },
        focusPwdInputBox(){
            this.isPwdFocus = !this.isPwdFocus;
        },
        submitForm(){
            alert("Login");
        },
    }
}
</script>

<style scoped>
.wrapper {
  background: white;
  border-radius: 3px;
  padding: 15px 15px;
  max-width: 500px;
  margin: 40px auto;
}
.id_area {
    border: solid 1px #dadada;
    padding: 15px 15px 15px 15px;
    margin-bottom: 20px;
}
.password_area {
    border: solid 1px #dadada;
    padding: 15px 15px 15px 15px;
}
.input_row {
    position: relative;
    width: 100%;
    height: 15px;
    border: none;
}
input:focus {
    outline: none;
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
.focus {
    border: solid 1px #041e42;
}
.kakaoBtn {
    width: 100%;
    background-color: #FFE500;
    height: 50px;
    margin: 0 0 14px;
    font-size: 20px;
    border: none;
    
}
</style>