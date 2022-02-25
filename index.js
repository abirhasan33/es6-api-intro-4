// javascript Object Notation 
// JSON 
const user = {id: 11, name: 'gorib', job: 'actor'};
const stringfirld = JSON.stringify(user);
// console.log(user);
// console.log(stringfirld);

const shop = {
    name: 'Aliya store',
    address: 'Ranbir road',
    profit: 1500,
    porducts: ['Laptep', 'mobail', 'pedes'],
    owner:{
        name: 'abir hasan',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringfied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringfied);
const converted = JSON.parse(shopStringfied);
console.log(converted);