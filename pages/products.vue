<template>
    <div class="outer-container">
        <h1 class="heading"> Products </h1>
        <NuxtLink
          to = '/cart'
          rel="noopener noreferrer"
          class="button--grey"
        >
          <h2> Cart ({{cart.length}}) </h2>
        </NuxtLink>
        
        <div>
            <ul class="flex-container">
                <li class="flex-item" v-for="prod in products" :key="prod.id" >
                        <img :src="prod.image" class="prod-image">
                        <h4>{{prod.title}}</h4>
                        <h3> Rs. {{prod.price}}</h3>
                        <!-- <p> {{prod.description}} </p> -->
                        <br/>
                        <small class="prod-category">{{prod.category}}</small>
                        <button class="button-green" :key="prod.id" @click="addToCart(prod.id)">Add to cart</button>
                </li>
            </ul>
        </div>


        <!-- <div>
            <h3> New Products </h3>
            <ul v-for="prod in newData" :key="prod.id">
                <li>
                    <h3>{{prod.title}}</h3>
                    <h4>{{prod.price}}</h4>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ProductList from '@/components/ProductList.vue';
    
    export default {
        components: {
            ProductList
        },
        
        computed: {
            products() {
                // console.log(this.$store.state.products)
                return this.$store.state.products
            },
            newData(){
                console.log(this.$store.state.newData)
                return this.$store.state.newData
            }, 
            cart(){
                return this.$store.state.cart;
            }
        },

        methods: {
            addToCart(prodId) {
                console.log('clicked', prodId)
                let cartItem = this.products.filter(el => el.id===prodId);
                console.log(typeof(cartItem)); 
                console.log(cartItem);
                this.$store.commit("updateCart", cartItem);
                console.log(this.$store.state.cart);

            }
        },
    }
    
</script>

<style>
.outer-container {
  margin: 0 auto;
  min-height: 100vh;
  display: inline;
}
.prod-image {
  height: 70%;
  width: 70%;
  display: block;
  margin: auto;
  margin-bottom: 10px;

}
.heading {
    font-size: 1.5em;
    font-weight: 300;
    text-align: center;
    margin-top: 20px;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    margin: 0;
}
.flex-item {
	flex-basis: 19%;
    padding: 2%;
    margin: 2%;
	flex-grow: 0;
    flex-shrink: 0;
    border: 1px solid gainsboro;
    border-radius: 12px;
    text-align: left;
}
.prod-category {
    background-color: green;
    color: white;
    padding: 5px;
    width: 80px;
    margin-top: 50px;
}

.button--grey{
    display: block;
    margin: auto;
    margin-top: 20px;
    width: 150px;
    text-align: center;
}

.button-green{
    margin-top: 20px;
    text-align: center;
    background-color: rgb(42, 42, 80);
    border: 1px solid rgb(42, 42, 80);
    padding: 5px;
    color: white;
    cursor: pointer;
}



</style>