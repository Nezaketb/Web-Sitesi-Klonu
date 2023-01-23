<template>
<div class="reg">
     <div class="col-sm-4 col-sm-push-2">
        <div class="auth__form auth__form--orders">
          <form>
  <input type="hidden">
  <h1 class="auth__form__title">
    HIZLI ÜYE OL
  </h1>
  <div class="auth__form__input-box auth__form__input-box--register cf">
    <div class="auth__form__input--name">
      <input type="text" name="user.name" class="auth__form__input" v-model="user.name" placeholder="Adınız">
      <div class="error auth__form__error js-error-register-first_name" style="display: none;"></div>
    </div>
    <div class="auth__form__input--name">
      <input type="text" name="user.surname" v-model="user.surname" class="auth__form__input" placeholder="Soyadınız">
      <div class="error auth__form__error" style="display: none;"></div>
    </div>
  </div>
  <div class="auth__form__input-box auth__form__input-box--register">
    <input type="text" name="user.email" v-model="user.email" class="auth__form__input" placeholder="E-Posta Adresiniz">
    <div class="error auth__form__error" style="display: none;"></div>
  </div>
  <div class="auth__form__input-box auth__form__input-box--register">
    <input type="text" name="phone" v-model="user.phone" class="auth__form__input" placeholder="Telefon Numarası">
    <div class="error auth__form__error" style="display: none;"></div>
  </div>
  <div class="auth__form__input-box auth__form__input-box--register">
    <input type="password" v-model="user.password" name="user.password" class="auth__form__input js-register-password" placeholder="Şifreniz">
    <div class="error auth__form__error js-error-register-password" style="display: none;"></div>
  </div>
  <div class="auth__form__checklist">
    <label class="auth__form__check">
      <input type="checkbox" name="email_allowed" >
      
      <a href="#">Bilgilendirme e-postalarını almak istiyorum</a>
      
    </label>
    <label class="auth__form__check">
      <input type="checkbox"  >
      <a  href="#">Bilgilendirme SMS’lerini almak istiyorum</a>
    </label>
    <label class="auth__form__check">
      <input type="checkbox" name="confirm" >
        <a class="js-modal-link-mg"  href="#">Üyelik Sözleşmesi</a> ve
        <a class="js-modal-link-mg"  href="#">Kişisel Verilerin Korunması Hakkında</a> okudum ve kabul ediyorum
    </label>
  </div>
  <button type="submit" @click="signup" class="auth__form__submit">
    ÜYE OL
  </button>
</form>
</div>
    <div>
    </div>
</div>
</div>
</template>

<script >
import {getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  name:"Register",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
methods: {
    signup() {
      const aut= getAuth()
    createUserWithEmailAndPassword(aut,this.user.email, this.user.password)
      .then((userCredential) => {
        // Signed in 
       const user = userCredential.user;
       console.log('giriş yaptı',userCredential)
      })
      .catch((error) => {
        console.log(error)
      });
    }
}
}

</script>

<style>

.col-sm-push-2 {
    left: 30%;
    position: absolute;
    top: 300px;
}
.col-sm-4{
 width:20%;
float: left;
position: relative;
min-height: 1px;
padding-left: 15px;
padding-right: 15px;
color:#31363a;
         }
 .auth__form--orders {
 min-height: 460px;
 margin-bottom: 15px;
}
.auth__form {
    background: #fff;
    padding: 25px 30px 0;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);
}        
.auth__form__forget {
    display: block;
    margin: 8px 0 16px;
    font-size: 12px;
    text-align: right;
    color: #31363a;
}
form{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
input{
color: inherit;
font: inherit;
margin: 0;
border-radius: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
}
.auth__form__checklist {
    margin: 17px 0;
}
.auth__form__check {
    display: block;
    font-size: 12px;
    margin: 4px 0;
}
.auth__form__check a {
    text-decoration: underline;
}
a{
    cursor: pointer;
}
input[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
}
.auth__form__title {
    text-align: start;
    font-size: 22px;
    padding-bottom: 5px;
    font-family: Arial, Helvetica, sans-serif;
}
h1{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: #333;
}
.auth__form__input-box--register {
    margin-top: 15px;
    display: flex;
}
.auth__form__input-box {
    position: relative;
}

.auth__form__icon-email, .auth__form__icon-lock, .auth__form__icon-order {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    margin: auto;
}
.auth__form__input--name {
    width: 43%;
    float: left;
}
.auth__form__input--register {
    padding-left: 47px;
}
.auth__form__input {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    font-weight: 200;
    border: 1px solid #8a8a8a;
}
.auth__form__error {
    margin-top: 5px;
}
.error {
    display: none;
    color: #c54752;
    font-size: 12px;
}
.auth__form__input--name:first-child {
    margin-right: 4%;
    display: flex;
}
.auth__form__input--register {
    padding-left: 47px;
}

.auth__form__forget {
    display: block;
    margin: 8px 0 16px;
    font-size: 12px;
    text-align: right;
}
a{
    cursor: pointer;
    outline: none;
    color: inherit;

}
button{
    border: 0;
    
}
.auth__form__submit {
    width: 220px;
    height: 50px;
    margin-bottom: 18px;
    font-size: 16px;
    font-weight: 200;
    color: #fff;
    background: #ad1111;
}
.auth__form--orders--login .auth__form__facebook {
    margin-bottom: 10px;
}
.auth__form__facebook {
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    width: 220px;
    height: 50px;
    background-color: #42539d;
    text-align: center;
    line-height: 55px;
}
.auth__form__facebook i {
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-right: 15px;
    vertical-align: middle;
}
</style>