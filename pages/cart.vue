<template>
    <div class="wrapper">
        <div v-if="cart.length!=0" class="cart-full">
            <ProductList :products="cart"/>
            <!-- <ul>
                <li v-for="item in cart" :key="item.id" class="list-item">
                    <h4>{{item[0].title}}</h4>
                    <h3> Rs. {{item[0].price}}</h3>
                    <p> {{item[0].description}} </p>
                    <br/>
                    <small class="button-green">{{item[0].category}}</small>
                </li>
            </ul> -->
        </div>
        <div v-else class="cart-empty">
            <h1> Oops! Looks like your cart is empty </h1>
            <button class="button-grey"><NuxtLink to="/products" class="link"><h3>Check out the products</h3></NuxtLink></button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import ProductList from '@/components/ProductList.vue';
    
    export default {
        components: {
            ProductList
        },
        computed: {
            cart() {
                console.log(this.$store.state.cart)
                return this.$store.state.cart; 

            }
        },
    }
</script>

<style>

html, body {
    min-height: 100%;
}

.wrapper {
    min-height: 100vh;
   }

.cart-empty {
    text-align: center;
    margin: auto;
    margin-top: 60px;
}

.button-grey {
    padding: 10px;
    background-color: white;
    border: 2px solid #3b8070;
    border-radius: 10px;
    color: #3b8070;
    margin: 50px;
}

/* .link {
    text-decoration: none;
    color: #3b8070;
}

ul {
    list-style: none;
    margin-top: 30px;
}

.list-item {
    border: 1px solid #616161;
    border-radius: 10px;
    padding: 10px; 
    margin: 20px auto;
    max-width: 50%;

} */

/* .button-green {
    background-color: #3b8070;
    color: white;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
} */ 
</style>