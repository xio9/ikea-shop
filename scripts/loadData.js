import {getData} from './getData.js';

const wishList = ['idd005', 'idd007', 'idd100', 'idd033'];

const cartList = [
    {
        id:'idd015',
        count: 3
    },
    {
        id:'idd055',
        count: 1
    },
    {
        id:'idd095',
        count: 2
    }
];   
export const loadData = () => {

    if (location.search){
        const search = decodeURI(location.search);
        console.log(search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if (prop === 's') {
            getData.search(value, (data) => console.dir(data));
        } else if (prop === 'wishList') {
            getData.wishList(wishList, (data) => console.dir({wishList: data}));
        } else {
            getData.category(prop, value, (data) => console.log(data));
        }
    }

    if(location.hash){
        console.log(location.hash.substring(1), (data) => console.log(data));
    }

    if(location.pathname.includes('cart')){
        getData.cart(cartList, (data) => console.log(data));
    }
};