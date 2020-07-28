import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export const store = new Vuex.Store({
  state:{
    products:[
    { name: 'Banana skin',price:20},
    { name: 'shiny star', price:30},
    { name: 'Red shells', price:35},
    { name: 'Green shells', price:38}
    ]
  },
  getters:{
    saleProducts:state =>{
      var saleProducts= state.products.map(product =>{
      return{
       name:'**'+product.name+'**',
       price:product.price/2
       }
      });
      return saleProducts;
    }
  },
  // Do not put asynchronous code in mutation,instead of mutations use ACTION
  mutations:{
    reducePrice:(state,payload) =>{
    state.products.forEach(product =>{
        product.price -=payload
    })
  }
},
  actions:{
    reducePrice:(context,payload) =>{
      setTimeout(function(){    // asynchronous task
        context.commit('reducePrice',payload)  //calling mutation after commiting task
      },2000)
    }
  }
})
