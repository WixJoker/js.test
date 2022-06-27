// const restaurants = [
//   {
//     order: [],
//     brand: 'KFC',
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: 'McDonalds',
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: 'Burger King',
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// const services = {
//   showMenu() {
//     const keys = Object.keys(restaurants);
//     console.log(keys);
//     for (const key of this.menu) {
//       console.log(`${key} price ${this.menu[key]}`);
//     }
//   },
//   getMenu() {
//     return restaurants.find(el => el.brand === this.chosenRestaurant).menu;
//   },
//   addOrder() {
//     this.order.push(order);
//   },
//   confirmOrder() {
//     const deliveryTime = restaurants.find(el => el.brand === this.chosenRestaurant).deliveryTime;

//     alert(`You booked ${this.order.join("")}. Wait for your delivery ${deliveryTime} in minutes.`)
//   },
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: '',
//   getAvailableRestaurants() {
//     return restaurants.map(el => el.brand = );
//   },
//   chooseRestaurant() {
//     const availableRestaurants = this.getAvailableRestaurants();
//     const restaurant = prompt(Hi there! Here are available restaurants: ${ availableRestaurant.join(" , ") });

//     if (availableRestaurants.includes(restaurant)) {
//       this.chosenRestaurant === restaurant;

//       const restaurantEntity = restaurants.find(el => el.brand === restaurant);

//       services.showMenu.call(restaurantEntity);

//       this.chooseDishes();
//     } else {
//       alert(there is no such a restaurant);
//     }
//   }
//   chooseDishes() {
//     const dish = prompt(Choose a dish!);
//     services.getMenu.call(this);

//     if (menu.hasOwnProperty(dish)) {
//       services.addOrder.call(this, dish);
//       services.confirmOrder.call(this)
//     } else {
//       alert(there is no such a dish!);
//     }
//   },
// };
// torpedaDelivery.chooseRestaurant();
