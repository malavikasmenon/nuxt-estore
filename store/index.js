export const state = () => ({
    products: [],
    newData: [],
    cart: []
})


export const mutations = {
    updateData: (state, data) => {
        state.products = data
            //console.log('state', state.newData)
    },
    updateCart: (state, data) => {
        state.cart.push(data)
    }
}

export const actions = {
    async getData({ state, commit }) {
        console.log('here')
        try {
            console.log('somethi')
            await fetch('https://fakestoreapi.com/products/')
                .then(res => res.json())
                .then(data => {
                    console.log('Got data', data)
                    commit('updateData', data)
                });
        } catch (error) {
            console.log(error)
        }
    }
}