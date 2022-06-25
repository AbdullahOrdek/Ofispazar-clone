import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import { realDb, auth } from "../../firebase/config"
import { ref, onValue, set, push, child, remove, update } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
//load Vuex
Vue.use(Vuex);
//to handle state
const state = {
    posts: [],
    products: [],
    cart: [],
    cartGridModel: []
}

//to handle state
const getters = {
    getProductWithID: (state) => (id) => {
        return state.products.find(item => item.id === id)
    },
    getCartCount: (state) => {
        //console.log(state.cart)
        return state.cart ? state.cart.length : 0;
    }
}

//to handle actions
const actions = {
    // Ürünleri Fetch edilmesi
    fetchProducts({ commit }) {
        return new Promise(resolve => {
            const dbRef = ref(realDb, "urunler")
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                commit('SET_PRODUCTS', data)
                resolve(data);
            })
        });
    },
    // Sepetin Fetch edilmesi
    fetchCart({ commit, dispatch }) {
        return new Promise(resolve => { // sepetime eklenen ürünlerin verilerini sepetimde görüntülenmesini sağlıyor.
            onAuthStateChanged(auth, (user) => {
                let arr = []
                if (user) {
                    const cartref = ref(realDb, "users/" + user.uid + "/inCart")
                    onValue(cartref, (snapshot) => {
                        if (snapshot.val() != null) { // dictionary tipinde gelen bir veriyi arraya dönüştürür ve key'de dictionary key'lerinde array'in elemanlarına ekler.
                            arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { id: e[0] }))
                        }
                        console.log(arr)
                        commit('SET_CART', arr)
                        resolve(arr);
                    });
                }
            });
        });
    },
    // Sepetim Sayfası için gerekenleri fetch edilmesi sepettekiler ve ürünleri
    fetchCartGridModel({ commit, dispatch }) {
        return new Promise(resolve => {
            dispatch("fetchProducts").then((products) => {
                products = products;
                dispatch("fetchCart").then((cart) => {
                    var cartGridModel = []
                    cart.forEach((cartItem) => {
                        cartGridModel.push({
                            cart: cartItem,
                            product: products.find((item) => item.id === cartItem.pid),
                        });
                    });
                    resolve(cartGridModel)
                });
            });
        })
    },
    // sepete ürün eklenmesi
    addToCart({ commit, dispatch, state }, payload) { // ürünü sepete ekler
        onAuthStateChanged(auth, (user) => {
            if (user && payload.count > 0) {
                const cartref = ref(realDb, "users/" + user.uid + "/inCart")
                push(cartref, payload)
                dispatch("fetchCart")
            }
        });
    },
    // sepetteki ürünün sayısının değiştirilmesi
    changeCountCart({ dispatch, commit, state }, idCount) { // sepetimdeki ürünün adedini günceller
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const cartref = ref(realDb, "users/" + user.uid + "/inCart")
                update(child(cartref, idCount.id), { count: idCount.count })

                dispatch("fetchCart")
            }
        });
    },
    // sepetteki ürünün kaldırılması
    removeFromCart({ commit, state, dispatch }, id) { // ürünü sepetten çıkarır
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const cartref = ref(realDb, "users/" + user.uid + "/inCart")
                remove(child(cartref, id)) // sahip veriyi bulup siliyoruz
                dispatch("fetchCart")
            }
        });
    },
    // kullanıcı kaydı
    
    register({ commit }, payload) {
        
        createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                alert("Merhaba " + payload.name + " Hesabın başarılı bir şekilde oluşturuldu!")
                const newUser = userCredential.user
                
                const userref = ref(realDb, "users/" + newUser.uid)
                const userData = {
                    id: newUser.uid,
                    name: payload.name,
                    surname: payload.surname,
                    inCart: null,
                }
               
                set(userref, userData);
                location.reload();
            })
            .catch((error) => {
                alert(error.message)
            });
    },
    // kullanıcı hesap çıkış
    logout({ commit }) {
        signOut(auth)
            .then(() => {
                location.reload();
            })
    },
    // kullanıcı girişi
    login({ commit }, payload) {
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then(
                user => {
                    
                    location.reload();
                },
            ).catch((error) => {
                alert(error.message)
            });
    },

}

//to handle mutations
// değişimler burda yapılır burda yapılmasının sebebi,
// mutation fonksiyonları çağrıldığında mutationdaki kullanılan değişkeni kullanan arayüz elemanı kendisini yeniden render eder.
const mutations = {
    SET_PRODUCTS(state, data) {
        state.products = data;
    },
    SET_CART(state, data) {
        state.cart = data;
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})