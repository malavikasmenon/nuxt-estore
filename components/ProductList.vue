<template>
    <div>
         <div>
            <ul class="flex-container">
                <li class="flex-item" v-for="prod in products" :key="prod.id" >
                        <img :src="prod[0].image" class="prod-image">
                        <h4>{{prod[0].title}}</h4>
                        <h3> Rs. {{prod[0].price}}</h3>
                        <!-- <p> {{prod[0].description}} </p> -->
                        <br/>
                        <small class="prod-category">{{prod[0].category}}</small>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            products: {
                type: Array,
            },
        },
    }
</script>

<style>
    
    flex-container {
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

.prod-image {
    height: 70%;
    width: 70%;
    display: block;
    margin: auto;
}

</style>