import store from '../store'

function loadProductsData() {
    fetch('http://localhost:3000/products', {
        headers: {'Content-type': 'application/json'},
    }).then(res => res.json()).then((response) => {
        console.log(response)
        store.commit('setProducts', response)
    }).catch((error) => {
        console.log('Looks like there was a problem: \n', error);
        store.commit('setProducts', [])
    });
}

export {loadProductsData}