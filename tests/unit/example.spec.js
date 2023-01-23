import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'
import Navbar from '../../src/components/Navbar.vue'
import Register from '../../src/components/Register.vue'
import Footer from '../../src/components/Footer.vue'
import Vue from 'vue'
import App from '../../src/App.vue'
import router from '../../src/router/index.js'
describe('Register.vue', () => {
  it('renders h1 tag', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.find('h1').text()).toHaveLength(12)
  }),
  it('Metinler gözüküyor mu?', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.text()).toContain("HIZLI ÜYE OL Bilgilendirme e-postalarını almak istiyorumBilgilendirme SMS’lerini almak istiyorumÜyelik Sözleşmesi ve Kişisel Verilerin Korunması Hakkında okudum ve kabul ediyorum  ÜYE OL")
 })
}),
describe('App.vue', () => {
  it('Navbar component\'s exist', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(Navbar).exists()).toBe(true)
  }),
  it('Footer component\'s exist', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(Footer).exists()).toBe(true)
  }),
  it('Header component\'s exist', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(Header).exists()).toBe(true)
  })
}),

describe('Header.vue', () => {
    it('Logo', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.vm).toBeTruthy();
    }),
    it('renders p tag', () => {
      const wrapper = shallowMount(Header)
      expect(wrapper.find('p').text()).toHaveLength(9)
    })
    it('should p equals text',()=>{
      const wrapper = shallowMount(Header)
      const p='FAVORİLERGİRİŞ YAP | ÜYE OL SEPETİM ÇIKIŞ YAP'
      expect(wrapper.text()).toMatch(p);
    })
    it('should be instantiaded', () => {
      const container=document.createElement('div');
      const HeaderComponent=shallowMount(Header);
      const vm=new HeaderComponent();
      vm.$shallowMount(container);
  
      expect(vm.query).to.equal('');
      expect(vm.$el.search_input.tagName).to.equal('INPUT');
      expect(vm.$el.search_button.tagName).to.equal('BUTTON');
  
      })
  it('should emit even when button is clicked',()=>{
    const container=document.createElement('div');
    const HeaderComponent=Vue.extend(Header);
    const vm=new HeaderComponent();
    vm.$mount(container);
    const spy=sinon.spy(vm,'$emit');
    vm.$el.search_button.click();

    expect(spy.called).to.be.true;
    console.log(spy.args);//consoleda iki parametreli değer içinde ilki SearchComponent olmalı.
  })
  it('should update query when input value changed',()=>{
    const container=document.createElement('div');
    const HeaderComponent=Vue.extend(Header);
    const vm=new HeaderComponent();
    vm.$mount(container);
    const input=vm.$el.search_input;
    input.value='Hello';
    input.dispatchEvent(new Event('input'));

    expect(spy.called).to.equal('Hello');
  })
}),
describe('expectations', () => {
  test('Math Test', () => {

      // Use .toEqual when comparing complex types
      expect({ type: 'array' }).toEqual({ type: 'array' })
      expect([13.08]).toEqual([13.08])
      expect([...[13.08, 20.03, 24.05]]).toEqual([13.08, 20.03, 24.05])

      // Use .toBe for simple comparisons
      expect('Dreamly').toBe('Dreamly')
      expect(13.08).toBe(13.08)
      expect(13.00 + 0.08).toBe(13.08)

      // Use property Matchers if the final value is unknown
      const result = {
          value: Date.now() // A random Number
      }

      expect(result).toEqual({
          value: expect.any(Number)
      })
  })
})