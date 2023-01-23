<template>
<div class="login">
     <div class="col-sm-push-2 col-sm-4">
            <div class="auth__form auth__form--orders auth__form--orders--login">
              <form>
      <input type="hidden" name="csrfmiddlewaretoken">
      <h1 class="auth__form__title">
        GİRİŞ YAP
      </h1>
      <div class="auth__form__input-box auth__form__input-box--register">
        <span class="auth__form__icon-email"></span>
        <input type="text" name="user.email" class="auth__form__input auth__form__input--register" v-model="user.email" placeholder="E-Posta Adresiniz">
      </div>
      <div class="error auth__form__error js-error-email"></div>
      <div class="auth__form__input-box auth__form__input-box--register">
        <span class="auth__form__icon-lock"></span>
        <input type="password" name="user.password" v-model="user.password" class="auth__form__input auth__form__input--register" placeholder="Şifreniz">
      </div>
      <div class="error auth__form__error"></div>
      <div class="error auth__form__error"></div>
      <input type="hidden" name="next" value="/baskets/basket/">
      <a href="#" class="auth__form__forget">
        Şifremi unuttum
      </a>
      <button @click="login" type="submit" class="auth__form__submit">
        GİRİŞ YAP
      </button>
    </form>
              <a href="#">
                <button type="button" class="auth__form__facebook">
                  <i></i>FACEBOOK İLE BAĞLAN
                </button>
              </a>
            </div>
          </div>
          </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from '@/router'

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {

      const auth = getAuth();
  signInWithEmailAndPassword(auth, this.user.email, this.user.password)
  .then((userCredential) => {
       const user = userCredential.user;
       this.$store.commit('setuserInfo', userCredential.user)
       router.push('/App')
    // ...
  })
  .catch((error) => {
    console.log(error)
  });

      // if (res != null)
     
    }
  },
  created() {
  }
}
</script>
<style scoped>

.col-sm-push-2 {
    left: 28%;
    position: absolute;
    top: 300px;
}
.col-sm-4{
 width:300px;
float: left;
position: relative;
min-height: 1px;
padding-left: 15px;
padding-right: 15px;
         }
 .auth__form--orders {
 min-height: 380px;
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
    text-align:center;
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
}
.auth__form__input-box {
    position: relative;
}
.auth__form__icon-email {
    background-image: url(https://www.iconsdb.com/icons/preview/black/mail-xxl.png);
    background-position: -156px -140px;
    width: 19px;
    height: 14px;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    margin: auto;
}
.auth__form__icon-email, .auth__form__icon-lock, .auth__form__icon-order {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    margin: auto;
}
.auth__form__input--register {
    padding-left: 47px;
}
.auth__form__input {
    height: 35px;
    width: 150px;
    padding: 0 20px;
    font-weight: 200;
    border: 1px solid #8a8a8a;
    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
}
.auth__form__error {
    margin-top: 5px;
}
.error {
    display: none;
    color: #c54752;
    font-size: 12px;
}
.auth__form__input-box--register {
    margin-top: 15px;
}
.auth__form__input-box {
    position: relative;
}
.auth__form__icon-lock {
    background-position: -205px -38px;
    width: 15px;
    height: 17px;
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