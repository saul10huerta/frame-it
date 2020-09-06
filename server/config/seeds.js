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
  
  // const items = await Item.insertMany([
  //   {
  //     title: 'Black-White Flower',
  //     image: 'JamesHall_1-sm.jpg',
  //     price: 75.00,
  //     quantity: 2,
  //     likes: 0
  //   },
  //   {
  //     title: 'Succulent',
  //     image: 'JamesHall_2-sm.jpg',
  //     price: 55.00,
  //     quantity: 0,
  //     likes: 9
  //   },
  //   {
  //     title: 'Skeleton',
  //     image: 'JamesHall_3-sm.jpg',
  //     price: 99.00,
  //     quantity: 4,
  //     likes: 0
  //   },
  //   {
  //     title: 'Orange Flower',
  //     image: 'JamesHall_4-sm.jpg',
  //     price: 29.00,
  //     quantity: 1,
  //     likes: 0
  //   },
  //   {
  //     title: 'Red Flower',
  //     image: 'JamesHall_5-sm.jpg',
  //     price: 29.00,
  //     quantity: 4,
  //     likes: 0
  //   },
  // ]);
  
  console.log('items seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'James',
    lastName: 'Hall',
    username: 'JamesHall',
    email: 'jameshall@testmail.com',
    password: 'frameit',
    items: [
      {
        title: 'Black-White Flower',
        image: 'JamesHall_1-sm.jpg',
        price: 75.00,
        quantity: 2,
        likes: 0
      },
      {
        title: 'Succulent',
        image: 'JamesHall_2-sm.jpg',
        price: 55.00,
        quantity: 0,
        likes: 9
      },
    ]
  });

  await User.create({
    firstName: 'Jack',
    lastName: 'Ripper',
    username: 'JackRipper',
    email: 'jackripper@testmail.com',
    password: 'frameit',
    items: [
      {
        title: 'Orange Flower',
        image: 'JamesHall_4-sm.jpg',
        price: 29.00,
        quantity: 1,
        likes: 0
      },
      {
        title: 'Red Flower',
        image: 'JamesHall_5-sm.jpg',
        price: 29.00,
        quantity: 4,
        likes: 0
      },
    ]
  });

  console.log('users seeded');

  process.exit();
});
