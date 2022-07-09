'use strict';

document.querySelector('.ads').remove();

const items = document.querySelector('.items');
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');


items.prepend(itemOne);
itemOne.after(itemTwo);
itemTwo.after(itemThree);

itemTwo.querySelector('.item__title').after(itemFive.querySelector('h2'));
itemSix.querySelector('.item__title').after(itemTwo.querySelector('.item__title'));
itemFive.querySelector('.item__image').after(itemSix.querySelector('.item__title'));
itemFour.querySelector('.props__item:nth-child(3)').after(itemTwo.querySelector('.props__item:nth-child(4)'));

const temp = itemThree.querySelector('.props__list');

itemThree.querySelector('.item__title').after(itemFive.querySelector('.props__list'));
itemFive.querySelector('.item__title').after(temp);
// itemTwo.querySelector('.props__list').append(itemSix.querySelectorAll('.props__item_two'));


itemSix.querySelectorAll('.props__item_two').forEach(item => {
  itemTwo.querySelector('.props__list').append(item);
});

itemThree.querySelector('.item__title').textContent = 'This и прототипы объектов'