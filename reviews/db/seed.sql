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
('https://pisces.bbystatic.com/image2/BestBuy_US/ugc/photos/thumbnail/d245e28b7e5b6d068324fbe7d34ef417.jpg'),
'price');