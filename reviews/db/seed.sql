TRUNCATE reviews RESTART IDENTITY CASCADE;


INSERT INTO reviews (sku, name, title, rating, review_body, recommend, value, quality, easeOfUse, image, cons) 
VALUES (
'6434148',
'Chuckles83',
'Super Fun Build with Great Little Details',
5,
'I mean, it''s Lego. I was a little bummed it didn''t come with digital Mario considering the price, but it was a super fun build and the unnecessary details, like the first warp pipe diorama in level 1-2 under the top right corner of the NES, make it totally worth it.',
'yes'::BOOLEAN,
4,
5,
5,
'https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/d245e28b7e5b6d068324fbe7d34ef417.jpg',
'price'
);

INSERT INTO reviews (sku, name, title, rating, review_body, recommend, value, quality, easeOfUse, image)
VALUES (
'6434148',
'Audrey',
'Heck of a build!',
5,
'My husband and I worked on this bit by bit over the course of a week and WOW it was so fun. It was very technical, highly detailed and it looks SO REAL.',
'yes'::BOOLEAN,
5,
5,
5,
'https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/3e1ac3da89e37ee2b765d098b91bc25a.jpg'
);

INSERT INTO reviews (sku, name, title, rating, review_body, recommend, value, quality, easeOfUse, image)
VALUES (
'6434148',
'ChrisFTW',
'Big hit of nostalgia and so much fun to build',
'5',
'Spent a long weekend putting this together. It was my first Lego set since I was a kid. Great instructions. Lots of fun little Easter eggs along the way really brought me back to my childhood playing Mario bros. Very cool how the moving Mario scene works. Only wish Lego would sell accessory builds like more game cartridges, the Zapper, and a 2nd controller to go along with it',
'yes'::BOOLEAN,
5,
5,
5,
'https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/46ae9826fe8ae8858877493d1025cef1.jpg'
);