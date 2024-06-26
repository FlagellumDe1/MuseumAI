var collectionImg = ['images/napoleon.jpg',
'https://cdn.fishki.net/upload/post/201509/19/1667869/2_16.jpg',
'https://ic.pics.livejournal.com/tanjand/44781189/7146490/7146490_original.jpg',
'https://images.spletnik.ru/i/b/bAJrdM3IhB/1011.jpg',
'https://i.pinimg.com/236x/bc/dd/10/bcdd103d1fbc39881b129bc1921f33b2.jpg',
'https://ic.pics.livejournal.com/acqualta/86539886/808880/808880_original.jpg',
'https://cdn.mos.cms.futurecdn.net/5dCZTgCqfFWSjvezuMACmT.jpeg',
'https://cdnb.artstation.com/p/assets/covers/images/052/953/911/large/kizzle-ai-kizzle-ai-kai-kizzle-character-design-of-a-ghost-void-arcanist-f54b1c7b-94ea-4278-acb5-d103d10138e1-edit.jpg?1661089854',
'https://i.pinimg.com/736x/3a/34/6f/3a346f3efaf26c85aa9fcb5544553a3f--nikos-gyftakis-pastel-portraits.jpg',
'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9f241149373269.62e69596dfbc2.png',
'https://sun9-52.userapi.com/impg/3NU1cM6Wh_ccUJgVuVzSAZXeTho0Nm66kDA_5Q/iL3c6_CzX6k.jpg?size=865x1280&quality=95&sign=604a71aa65b556a2e679b14e3e8b600a&type=album',
'https://sun9-54.userapi.com/impg/DDczJAN2EP8v-4iseEYVyWDMvlVuR6rAaOAH6w/JE1rao-L-DQ.jpg?size=852x1280&quality=95&sign=f588b5e61ee9c90150682d82134ad750&type=album',
'https://sun9-62.userapi.com/impg/dXuW24anva8QsCNpbg03gXH3KvdaM4nkeAhBug/Iu-dA8o3ujw.jpg?size=1585x2160&quality=96&sign=8f39c773af746c9047f9cc813f4c4e6a&type=album',
'https://sun9-41.userapi.com/impg/yU7h3gGNVYMSLdCv5ItB_d_94p0BIgK9OP5oDQ/h_HNqsXm1v0.jpg?size=1445x2160&quality=96&sign=bd58ef3c2d29b9dac612ff7e7cd44046&type=album'
];

var img = document.getElementById('img1');

var forward = document.getElementById('presentation__button');
var back = document.getElementById('presentation__buttonback');

function setImg(currentImg) {
  img.src = currentImg;
};
setImg(collectionImg [0]);

let count = 0;

forward.addEventListener('click', changeImg);
function changeImg() {
  if (count==collectionImg.length-1) {
    count = 0;
  }
  else {
      count++;
  }
setImg(collectionImg [count]);
};

back.addEventListener('click', changeImgback);
function changeImgback() {
  if (count== 0) {
    count = collectionImg.length-1;
  }
  else {
      count--;
  }
setImg(collectionImg [count]);
}
