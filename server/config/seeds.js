const db = require('./connection');
const { User, Item } = require('../models');


db.once('open', async () => {
  //await Order.deleteMany();
  /*
  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);
  */
  //console.log('orders seeded');

  await Item.deleteMany();
  
  const items = await Item.insertMany([
    {
      title: 'Black-White Flower',
      image: 'JamesHall_1-sm.jpg',
      price: 75.00,
      quantity: 2,
      status: 'For Sale'
    },
    {
      title: 'Succulent',
      image: 'JamesHall_2-sm.jpg',
      price: 55.00,
      quantity: 0,
      status: 'For Sale'
    },
    {
      title: 'Skeleton',
      image: 'JamesHall_3-sm.jpg',
      price: 99.00,
      quantity: 4,
      status: 'For Sale'
    },
    {
      title: 'Orange Flower',
      image: 'JamesHall_4-sm.jpg',
      price: 29.00,
      quantity: 1,
      status: 'For Sale'
    },
    {
      title: 'Red Flower',
      image: 'JamesHall_5-sm.jpg',
      price: 29.00,
      quantity: 4,
      status: 'For Sale'
    },
  ]);
  
  console.log('items seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'James',
    lastName: 'Hall',
    username: 'JamesHall',
    email: 'jameshall@testmail.com',
    password: 'frameit',
    items: []
  });

  await User.create({
    firstName: 'Jack',
    lastName: 'Ripper',
    username: 'JackRipper',
    email: 'jackripper@testmail.com',
    password: 'frameit',
    items: []
  });

  console.log('users seeded');

  process.exit();
});
