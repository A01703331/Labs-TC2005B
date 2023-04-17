CREATE TABLE characters (
    charID int(2) NOT NULL,
    name varchar(30) COLLATE utf8_general_ci NOT NULL,
    speed float(5) NOT NULL,
    acceleration float(5) NOT NULL,
    weight float(5) NOT NULL,
    handling float(5) NOT NULL,
    traction float(5) NOT NULL,
    miniturbo float(5) NOT NULL,
    image varchar(255) COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO characters (charID, name, speed, acceleration, weight, handling, traction, miniturbo, image) VALUES
(01, 'Mario', 4, 3.5, 3.5, 3.5, 3.5, 3.5, 'https://mario.wiki.gallery/images/d/d9/MK8_Mario_Icon.png'),
(02, 'Luigi', 4, 3.5, 3.5, 3.75, 3.25, 3.5, 'https://mario.wiki.gallery/images/5/51/MK8_Luigi_Icon.png'),
(03, 'Peach', 3.75, 3.75, 3, 3.75, 3.75, 3.75, 'https://mario.wiki.gallery/images/c/c2/MK8_Peach_Icon.png'),
(04, 'Daisy', 3.75, 3.75, 3, 3.75, 3.75, 3.75, 'https://mario.wiki.gallery/images/3/32/MK8_Daisy_Icon.png'),
(05, 'Rosalina', 4.25, 3.25, 3.75, 3.25, 3.75, 3.25, 'https://mario.wiki.gallery/images/8/89/MK8_Rosalina_Icon.png'),
(06, 'Tanooki Mario', 3.75, 3.75, 3.25, 3.75, 3.25, 3.5, 'https://mario.wiki.gallery/images/a/a2/MK8_Tanooki_Mario_Icon.png'),
(07, 'Cat Peach', 3.5, 4, 2.75, 4, 3.75, 3.5, 'https://mario.wiki.gallery/images/a/ad/MK8_Cat_Peach_Icon.png'),
(08, 'Yoshi', 3.75, 3.75, 3, 3.75, 3.75, 3.75, 'https://mario.wiki.gallery/images/9/91/MK8_Yoshi_Icon.png'),
(09, 'Toad', 3.25, 4, 2.75, 4.25, 4, 3.75, 'https://mario.wiki.gallery/images/4/45/MK8_Toad_Icon.png'),
(10, 'Koopa', 3, 4, 2.5, 4.5, 4.25, 3.75, 'https://mario.wiki.gallery/images/b/bc/MK8_Koopa_Icon.png'),
(11, 'Shy Guy', 3.25, 4, 2.75, 4.25, 4, 3.75, 'https://mario.wiki.gallery/images/7/7f/MK8_ShyGuy_Icon.png'),
(12, 'Lakitu', 3, 4, 2.5, 4.5, 4.25, 3.75, 'https://mario.wiki.gallery/images/7/7d/MK8_Lakitu_Icon.png'),
(13, 'Toadette', 3, 4.25, 2.5, 4.25, 3.5, 3.75, 'https://mario.wiki.gallery/images/8/8e/MK8_Toadette_Icon.png'),
(14, 'King Boo', 4.25, 3.25, 3.75, 3.25, 3.75, 3.25, 'https://mario.wiki.gallery/images/1/1d/MK8DX_King_Boo_Icon.png'),
(15, 'Baby Mario', 2.75, 4.25, 2.25, 4.5, 4, 4, 'https://mario.wiki.gallery/images/d/d2/MK8_BabyMario_Icon.png'),
(16, 'Baby Luigi', 2.75, 4.25, 2.25, 4.5, 4, 4, 'https://mario.wiki.gallery/images/a/aa/MK8_BabyLuigi_Icon.png'),
(17, 'Baby Peach', 2.5, 4, 2, 5, 4.25, 4, 'https://mario.wiki.gallery/images/3/3d/MK8_BabyPeach_Icon.png'),
(18, 'Baby Daisy', 2.5, 4, 2, 5, 4.25, 4, 'https://mario.wiki.gallery/images/4/43/MK8_BabyDaisy_Icon.png'),
(19, 'Baby Rosalina', 2.5, 4.25, 2, 4.75, 3.75, 4, 'https://mario.wiki.gallery/images/0/09/MK8_BabyRosalina_Icon.png'),
(20, 'Metal Mario', 4.25, 3.25, 4.5, 3.25, 3.25, 3, 'https://mario.wiki.gallery/images/e/e3/MK8_MMario_Icon.png'),
(21, 'Pink Gold Peach', 4.25, 3.25, 4.5, 3.25, 3.25, 3, 'https://mario.wiki.gallery/images/0/0d/MK8_PGPeach_Icon.png'),
(22, 'Wario', 4.75, 3, 4.25, 2.75, 3.25, 2.75, 'https://mario.wiki.gallery/images/c/c2/MK8_Wario_Icon.png'),
(23, 'Waluigi', 4.5, 3.25, 4, 3, 3, 3, 'https://mario.wiki.gallery/images/7/78/MK8_Waluigi_Icon.png'),
(24, 'Donkey Kong', 4.5, 3.25, 4, 3, 3, 3, 'https://mario.wiki.gallery/images/0/08/MK8_DKong_Icon.png'),
(25, 'Bowser', 4.75, 3, 4.5, 2.5, 3, 2.75, 'https://mario.wiki.gallery/images/4/47/MK8_Bowser_Icon.png'),
(26, 'Dry Bones', 2.75, 4.25, 2.25, 4.5, 4, 4, 'https://mario.wiki.gallery/images/3/3f/MK8DX_Dry_Bones_Icon.png'),
(27, 'Bowser Jr.', 3, 4, 2.5, 4.5, 4.25, 3.75, 'https://mario.wiki.gallery/images/2/26/MK8_Bowser_Jr_Icon.png'),
(28, 'Dry Bowser', 4.75, 3, 4.25, 2.75, 3.25, 2.75, 'https://mario.wiki.gallery/images/2/29/MK8_Dry_Bowser_Icon.png'),
(29, 'Lemmy', 2.5, 4.25, 2, 4.75, 3.75, 4, 'https://mario.wiki.gallery/images/f/fc/MK8_Lemmy_Icon.png'),
(30, 'Larry', 3.25, 4, 2.75, 4.25, 4, 3.75, 'https://mario.wiki.gallery/images/c/c2/MK8_Larry_Icon.png'),
(31, 'Wendy', 3, 4.25, 2.5, 4.25, 3.5, 3.75, 'https://mario.wiki.gallery/images/d/d9/MK8_Wendy_Icon.png'),
(32, 'Ludwig', 4, 3.5, 3.5, 3.5, 3.5, 3.5, 'https://mario.wiki.gallery/images/a/a8/MK8_Ludwig_Icon.png'),
(33, 'Iggy', 4, 3.5, 3.5, 3.75, 3.25, 3.5, 'https://mario.wiki.gallery/images/d/dd/MK8_Iggy_Icon.png'),
(34, 'Roy', 4.5, 3.25, 4, 3, 3, 3, 'https://mario.wiki.gallery/images/3/3e/MK8_Roy_Icon.png'),
(35, 'Morton', 4.75, 3, 4.5, 2.5, 3, 2.75, 'https://mario.wiki.gallery/images/7/72/MK8_Morton_Icon.png'),
(36, 'Inkling Girl', 3.5, 4, 2.75, 4, 3.75, 3.5, 'https://mario.wiki.gallery/images/b/b9/MK8DX_Female_Inkling_Icon.png'),
(37, 'Inkling Boy', 3.75, 3.75, 3.25, 3.75, 3.25, 3.5, 'https://mario.wiki.gallery/images/3/3c/MK8DX_Male_Inkling_Icon.png'),
(38, 'Link', 4.25, 3.25, 3.75, 3.25, 3.75, 3.25, 'https://mario.wiki.gallery/images/e/e8/MK8_Link_Icon.png'),
(39, 'Villager (M)', 3.75, 3.75, 3.25, 3.75, 3.25, 3.5, 'https://mario.wiki.gallery/images/1/16/VillagerMale-Icon-MK8.png'),
(40, 'Villager (F)', 3.5, 4, 2.75, 4, 3.75, 3.5, 'https://mario.wiki.gallery/images/c/c3/VillagerFemale-Icon-MK8.png'),
(41, 'Isabelle', 3, 4.25, 2.5, 4.25, 3.5, 3.75, 'https://mario.wiki.gallery/images/2/20/MK8_Isabelle_Icon.png'),
(42, 'Mii', 4, 3.5, 3.5, 3.5, 3.5, 3.5, 'https://mario.wiki.gallery/images/a/ab/Mii_amiibo_MK8.png'),
(43, 'Birdo', 3.75, 3.75, 3, 3.75, 3.75, 3.75, 'https://mario.wiki.gallery/images/f/f6/MK8D_Birdo_Icon.png');

CREATE TABLE karts (
    kartID int(2) NOT NULL,
    kartType varchar(30) COLLATE utf8_general_ci NOT NULL,
    name varchar(30) COLLATE utf8_general_ci NOT NULL,
    speed float(5) NOT NULL,
    acceleration float(5) NOT NULL,
    weight float(5) NOT NULL,
    handling float(5) NOT NULL,
    traction float(5) NOT NULL,
    miniturbo float(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO karts (kartID, kartType, name, speed, acceleration, weight, handling, traction, miniturbo) VALUES
(01, 'Kart', 'Standard Kart', 4, 3.5, 3.5, 3.5, 3.5, 3.5),
(02, 'Kart', 'Pipe Frame', 4, 3.5, 3.5, 3.75, 3.25, 3.5),
(03, 'Kart', 'Mach 8', 3.75, 3.75, 3, 3.75, 3.75, 3.75),
(04, 'Kart', 'Steel Driver', 3.75, 3.75, 3, 3.75, 3.75, 3.75),
(05, 'Kart', 'Cat Cruiser', 4.25, 3.25, 3.75, 3.25, 3.75, 3.25),
(06, 'Kart', 'Circuit Special', 3.75, 3.75, 3.25, 3.75, 3.25, 3.5),
(07, 'Kart', 'Tri-Speeder', 3.5, 4, 2.75, 4, 3.75, 3.5),
(08, 'Kart', 'Badwagon', 3.75, 3.75, 3, 3.75, 3.75, 3.75),
(09, 'Kart', 'Prancer', 3.25, 4, 2.75, 4.25, 4, 3.75),
(10, 'Kart', 'Biddybuggy', 3, 4, 2.5, 4.5, 4.25, 3.75),
(11, 'Kart', 'Landship', 3.25, 4, 2.75, 4.25, 4, 3.75),
(12, 'Kart', 'Sneeker', 3, 4, 2.5, 4.5, 4.25, 3.75),
(13, 'Kart', 'Sports Coupe', 3, 4.25, 2.5, 4.25, 3.5, 3.75),
(14, 'Kart', 'Gold Standard', 4.25, 3.25, 3.75, 3.25, 3.75, 3.25),
(15, 'Kart', 'GLA', 2.75, 4.25, 2.25, 4.5, 4, 4),
(16, 'Kart', 'W 25 Silver Arrow', 2.75, 4.25, 2.25, 4.5, 4, 4),
(17, 'Kart', '300 SL Roadster', 2.5, 4, 2, 5, 4.25, 4),
(18, 'Kart', 'Blue Falcon', 2.5, 4, 2, 5, 4.25, 4),
(19, 'Kart', 'Tanooki Kart', 2.5, 4.25, 2, 4.75, 3.75, 4),
(20, 'Kart', 'B Dasher', 4.25, 3.25, 4.5, 3.25, 3.25, 3),
(21, 'Kart', 'Streetle', 4.25, 3.25, 4.5, 3.25, 3.25, 3),
(22, 'Kart', 'P-Wing', 4.75, 3, 4.25, 2.75, 3.25, 2.75),
(23, 'Kart', 'Koopa Clown', 4.5, 3.25, 4, 3, 3, 3),
(24, 'Standard Bike', 'Standard Bike', 4.5, 3.25, 4, 3, 3, 3),
(25, 'Sports Bike', 'Comet', 4.75, 3, 4.5, 2.5, 3, 2.75),
(26, 'Sports Bike','Sport Bike', 2.75, 4.25, 2.25, 4.5, 4, 4),
(27, 'Standard Bike', 'The Duke', 3, 4, 2.5, 4.5, 4.25, 3.75),
(28, 'Standard Bike', 'Flame Rider', 4.75, 3, 4.25, 2.75, 3.25, 2.75),
(29, 'Standard Bike', 'Varmint', 2.5, 4.25, 2, 4.75, 3.75, 4),
(30, 'Standard Bike', 'Mr. Scooty', 3.25, 4, 2.75, 4.25, 4, 3.75),
(31, 'Sports Bike', 'Jet Bike', 3, 4.25, 2.5, 4.25, 3.5, 3.75),
(32, 'Sports Bike', 'Yoshi Bike', 4, 3.5, 3.5, 3.5, 3.5, 3.5),
(33, 'Sports Bike', 'Master Cycle', 4, 3.5, 3.5, 3.75, 3.25, 3.5),
(34, 'Standard Bike', 'City Tripper', 4.5, 3.25, 4, 3, 3, 3),
(35, 'ATV', 'Standard ATV', 4.75, 3, 4.5, 2.5, 3, 2.75),
(36, 'ATV', 'Wild Wiggler', 3.5, 4, 2.75, 4, 3.75, 3.5),
(37, 'ATV', 'Teddy Buggy', 3.75, 3.75, 3.25, 3.75, 3.25, 3.5),
(38, 'ATV', 'Bone Rattler', 4.25, 3.25, 3.75, 3.25, 3.75, 3.25),
(39, 'ATV', 'Inkstriker', 3.75, 3.75, 3.25, 3.75, 3.25, 3.5),
(40, 'ATV', 'Splat Buggy', 3.5, 4, 2.75, 4, 3.75, 3.5),
(41, 'Standard Bike', 'Master Cycle Zero', 3, 4.25, 2.5, 4.25, 3.5, 3.75);

CREATE TABLE cups (
    cupID int(2) NOT NULL,
    name varchar(30) COLLATE utf8_general_ci NOT NULL,
    icon varchar(255) COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO cups (cupID, name, icon) VALUES 
(00, 'Battle Mode', ''),
(01, 'Mushroom Cup', 'https://mario.wiki.gallery/images/1/15/MK8_MushroomCup.png'),
(02, 'Flower Cup', 'https://mario.wiki.gallery/images/a/a8/MK8_FlowerCup.png'),
(03, 'Star Cup', 'https://mario.wiki.gallery/images/7/78/MK8_Star_Cup_Emblem.png'),
(04, 'Special Cup', 'https://mario.wiki.gallery/images/6/65/MK8_Special_Cup_Emblem.png'),
(05, 'Shell Cup', 'https://mario.wiki.gallery/images/c/cc/MK8_Shell_Cup_Emblem.png'),
(06, 'Banana Cup', 'https://mario.wiki.gallery/images/7/76/MK8_Banana_Cup_Emblem.png'),
(07, 'Leaf Cup', 'https://mario.wiki.gallery/images/2/28/MK8_Leaf_Cup_Emblem.png'),
(08, 'Lightning Cup', 'https://mario.wiki.gallery/images/1/19/MK8_Lightning_Cup_Emblem.png'),
(09, 'Egg Cup', 'https://mario.wiki.gallery/images/e/ea/MK8_Egg_Cup_Emblem.png'),
(10, 'Triforce Cup', 'https://mario.wiki.gallery/images/6/6b/MK8_Triforce_Cup_Emblem.png'),
(11, 'Crossing Cup', 'https://mario.wiki.gallery/images/9/92/MK8_Crossing_Cup_Emblem.png'),
(12, 'Bell Cup', 'https://mario.wiki.gallery/images/8/82/MK8_Bell_Cup_Emblem.png'),
(13, 'Golden Dash Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/golden-dash-cup.png'),
(14, 'Lucky Cat Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/lucky-cat-cup.png'),
(15, 'Turnip Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/turnip-cup.png'),
(16, 'Propeller Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/propeller-cup.png'),
(17, 'Rock Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/rock-cup.png'),
(18, 'Moon Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/moon-cup.png'),
(19, 'Fruit Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/fruit-cup.png'),
(20, 'Boomerang Cup', 'https://mariokart8.nintendo.com/assets/img/booster/cup-badges/boomerang-cup.png'),
(21, 'Feather Cup', 'https://mario.wiki.gallery/images/c/cc/MK8_Secret_Character_Icon.png'),
(22, 'Cherry Cup', 'https://mario.wiki.gallery/images/c/cc/MK8_Secret_Character_Icon.png'),
(23, 'Acorn Cup', 'https://mario.wiki.gallery/images/c/cc/MK8_Secret_Character_Icon.png'),
(24, 'Spiny Cup', 'https://mario.wiki.gallery/images/c/cc/MK8_Secret_Character_Icon.png');

CREATE TABLE tracks (
    mapID int(3) NOT NULL,
    cupID int(2) NOT NULL,
    name varchar(30) COLLATE utf8_general_ci NOT NULL,
    link varchar(11) COLLATE utf8_general_ci NOT NULL,
    preview varchar(255) COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO tracks (mapID, cupID, name, link, preview) VALUES
(000, 00, 'Battle Stadium', 'xjZlnF8mAHU', 'https://mario.wiki.gallery/images/7/72/MK8D_Battle_Stadium_Course_Icon.png'),
(001, 00, 'Sweet Sweet Kingdom', 'OMKvCCZfaXs', 'https://mario.wiki.gallery/images/9/9f/MK8D_Sweet_Sweet_Kingdom_Course_Icon.png'),
(002, 00, 'Dragon Palace', 'iWc0nxLPrPw', 'https://mario.wiki.gallery/images/f/f3/MK8D_Dragon_Palace_Course_Icon.png'),
(003, 00, 'Lunar Colony', 'Df67eevncL0', 'https://mario.wiki.gallery/images/3/35/MK8D_Lunar_Colony_Course_Icon.png'),
(004, 00, '3DS Wuhu Town', 'Z-AyyagFgsU', 'https://mario.wiki.gallery/images/1/18/MK8D_3DS_Wuhu_Town_Course_Icon.png'),
(005, 00, "GCN Luigi's Mansion", 'SE8nsNnn4cY', 'https://mario.wiki.gallery/images/f/f8/MK8D_GCN_Luigi%27s_Mansion_Course_Icon.png'),
(006, 00, 'SNES Battle Course 1', 'YQJLERNhZTU', 'https://mario.wiki.gallery/images/a/ad/MK8D_SNES_Battle_Course_1_Course_Icon.png'),
(007, 00, 'Urchin Underpass', 'Woj2wa2oiw0', 'https://mario.wiki.gallery/images/3/36/MK8D_Urchin_Underpass_Course_Icon.png'),
(008, 01, 'Mario Kart Stadium', 'LMuFA_XBtWk', 'https://mario.wiki.gallery/images/0/09/MK8_Mario_Kart_Stadium_Course_Icon.png'),
(009, 01, 'Water Park', 'DRgH8gYF-W4', 'https://mario.wiki.gallery/images/4/40/MK8_Water_Park_Course_Icon.png'),
(010, 01, 'Sweet Sweet Canyon', 'ZExzZ_vs09E', 'https://mario.wiki.gallery/images/a/ad/MK8_Sweet_Sweet_Canyon_Course_Icon.png'),
(011, 01, 'Thwomp Ruins', 'yCYUkablczI', 'https://mario.wiki.gallery/images/e/e8/MK8_Thwomp_Ruins_Course_Icon.png'),
(012, 02, 'Mario Circuit', 'QiqGbH0LeAc', 'https://mario.wiki.gallery/images/2/28/MK8_Mario_Circuit_Course_Icon.png'),
(013, 02, 'Toad Harbor', 'YEpbMGxQTVQ', 'https://mario.wiki.gallery/images/2/2a/MK8_Toad_Harbor_Course_Icon.png'),
(014, 02, 'Twisted Mansion','fJxCiIa8N3Q', 'https://mario.wiki.gallery/images/6/68/MK8_Twisted_Mansion_Course_Icon.png'),
(015, 02, 'Shy Guy Falls', 'SwKVi97b9ig', 'https://mario.wiki.gallery/images/2/2a/MK8_Shy_Guy_Falls_Course_Icon.png'),
(016, 03, 'Sunshine Airport', '6-jEAJRppMg', 'https://mario.wiki.gallery/images/9/99/MK8_Sunshine_Airport_Course_Icon.png'),
(017, 03, 'Dolphin Shoals', 'dtf3IYNgkS8', 'https://mario.wiki.gallery/images/f/fc/MK8_Dolphin_Shoals_Course_Icon.png'),
(018, 03, 'Electrodrome', 'RVXzZ760XA8', 'https://mario.wiki.gallery/images/1/14/MK8_Electrodrome_Course_Icon.png'),
(019, 03, 'Mount Wario', 'MBBTr_dlma8', 'https://mario.wiki.gallery/images/3/38/MK8_Mount_Wario_Course_Icon.png'),
(020, 04, 'Cloudtop Cruise', 't1771Qo2CU8', 'https://mario.wiki.gallery/images/8/81/MK8_Cloudtop_Cruise_Course_Icon.png'),
(021, 04, 'Bone-Dry Dunes', 'PbSbjytgnWQ', 'https://mario.wiki.gallery/images/d/d3/MK8_Bone-Dry_Dunes_Course_Icon.png'),
(022, 04, "Bowser's Castle", 'MDhG8I9Bhdg', 'https://mario.wiki.gallery/images/2/2b/MK8_Bowser%27s_Castle_Course_Icon.png'),
(023, 04, 'Rainbow Road', 'WriO4Erm66Y', 'https://mario.wiki.gallery/images/7/77/MK8_Rainbow_Road_Course_Icon.png'),
(024, 05, 'Wii Moo Moo Meadows', 'zr7IdsRl9rk', 'https://mario.wiki.gallery/images/9/97/MK8_Wii_Moo_Moo_Meadows_Course_Icon.png'),
(025, 05, 'GBA Mario Circuit', 'Xj3tZp5WH_U', 'https://mario.wiki.gallery/images/f/f7/MK8_GBA_Mario_Circuit_Course_Icon.png'),
(026, 05, 'DS Cheep Cheep Beach', 'Sz1mXdMvaNk', 'https://mario.wiki.gallery/images/9/9e/MK8_DS_Cheep_Cheep_Beach_Course_Icon.png'),
(027, 05, "N64 Toad's Turnpike", 'NXXLlLovKcc', 'https://mario.wiki.gallery/images/5/55/MK8_N64_Toad%27s_Turnpike_Course_Icon.png'),
(028, 06, 'GCN Dry Dry Desert', 'G7xjAG2piq8', 'https://mario.wiki.gallery/images/6/64/MK8_GCN_Dry_Dry_Desert_Course_Icon.png'),
(029, 06, 'SNES Donut Plains 3', 'VPkKs0ov678', 'https://mario.wiki.gallery/images/b/b1/MK8_SNES_Donut_Plains_3_Course_Icon.png'),
(030, 06, 'N64 Royal Raceway', 'H7P6F0n4gVQ', 'https://mario.wiki.gallery/images/8/8a/MK8_N64_Royal_Raceway_Course_Icon.png'),
(031, 06, '3DS DK Jungle', '8n2f8e7XCSs', 'https://mario.wiki.gallery/images/3/35/MK8_3DS_DK_Jungle_Course_Icon.png'),
(032, 07, 'DS Wario Stadium', 'GdaX5iX0ZaU', 'https://mario.wiki.gallery/images/1/1a/MK8_DS_Wario_Stadium_Course_Icon.png'),
(033, 07, 'GCN Sherbet Land', 'nLhNtWMfD0E', 'https://mario.wiki.gallery/images/3/3f/MK8_GCN_Sherbet_Land_Course_Icon.png'),
(034, 07, '3DS Music Park', 'l-cKqYgijTM', 'https://mario.wiki.gallery/images/9/94/MK8_3DS_Music_Park_Course_Icon.png'),
(035, 07, 'N64 Yoshi Valley', 'ZrLOHnLnAzM', 'https://mario.wiki.gallery/images/a/a4/MK8_N64_Yoshi_Valley_Course_Icon.png'),
(036, 08, 'DS Tick-Tock Clock', 'Qnr8baUmOUY', 'https://mario.wiki.gallery/images/0/0b/MK8_DS_Tick-Tock_Clock_Course_Icon.png'),
(037, 08, '3DS Piranha Plant Slide', 'N2nfrW9PH1k', 'https://mario.wiki.gallery/images/d/d1/MK8_3DS_Piranha_Plant_Slide_Course_Icon.png'),
(038, 08, 'Wii Grumble Volcano', 'UBTLinvaMwc', 'https://mario.wiki.gallery/images/b/b2/MK8_Wii_Grumble_Volcano_Course_Icon.png'),
(039, 08, 'N64 Rainbow Road', 'NuG53TOJqlo', 'https://mario.wiki.gallery/images/b/b9/MK8_N64_Rainbow_Road_Course_Icon.png'),
(040, 09, 'GCN Yoshi Circuit', 'MpXqPFtEpDE', 'https://mario.wiki.gallery/images/9/94/MK8_GCN_Yoshi_Circuit_Course_Icon.png'),
(041, 09, 'Excitebike Arena', 'U-CfGdYcKLQ', 'https://mario.wiki.gallery/images/5/57/MK8_Excitebike_Arena_Course_Icon.png'),
(042, 09, 'Dragon Driftway', 'AWc_PbH1cCM', 'https://mario.wiki.gallery/images/b/bb/MK8_Dragon_Driftway_Course_Icon.png'),
(043, 09, 'Mute City', '-yW4CMjpeNk', 'https://mario.wiki.gallery/images/f/fa/MK8_Mute_City_Course_Icon.png'),
(044, 10, "Wii Wario's Gold Mine", 'gBdo_XH--io', 'https://mario.wiki.gallery/images/9/94/MK8_Wii_Wario%27s_Gold_Mine_Course_Icon.png'),
(045, 10, 'SNES Rainbow Road', 'jtCGHlt4MQc', 'https://mario.wiki.gallery/images/0/05/MK8_SNES_Rainbow_Road_Course_Icon.png'),
(046, 10, 'Ice Ice Outpost', 'M9v-7kP0b68', 'https://mario.wiki.gallery/images/c/c4/MK8_Ice_Ice_Outpost_Course_Icon.png'),
(047, 10, 'Hyrule Circuit', 'kM3XBWacZ7U', 'https://mario.wiki.gallery/images/5/5e/MK8_Hyrule_Circuit_Course_Icon.png'),
(048, 11, 'GCN Baby Park', '-_02dnnby2c', 'https://mario.wiki.gallery/images/3/34/MK8_GCN_Baby_Park_Course_Icon.png'),
(049, 11, 'GBA Cheese Land', 'X1lFaO6VSwA', 'https://mario.wiki.gallery/images/1/15/MK8_GBA_Cheese_Land_Course_Icon.png'),
(050, 11, 'Wild Woods', 'hbQTnJgaVvM', 'https://mario.wiki.gallery/images/e/e4/MK8_Wild_Woods_Course_Icon.png'),
(051, 11, 'Animal Crossing', 'ABiNCLQ9MO8', 'https://mario.wiki.gallery/images/1/15/MK8_Animal_Crossing_Course_Icon.png'),
(052, 12, '3DS Neo Bowser City', '_TrwF3jya50', 'https://mario.wiki.gallery/images/b/b0/MK8_3DS_Neo_Bowser_City_Course_Icon.png'),
(053, 12, 'GBA Ribbon Road', '4ErWN_rJbfA', 'https://mario.wiki.gallery/images/e/e2/MK8_GBA_Ribbon_Road_Course_Icon.png'),
(054, 12, 'Super Bell Subway', 'diHM-4huQB4', 'https://mario.wiki.gallery/images/7/7e/MK8_Super_Bell_Subway_Course_Icon.png'),
(055, 12, 'Big Blue', 'ETLNilxpvhY', 'https://mario.wiki.gallery/images/0/06/MK8_Big_Blue_Course_Icon.png'),
(056, 13, 'Tour Paris Promenade', 'y4QPEtd1OrI', 'https://mario.wiki.gallery/images/b/bb/MK8D_Tour_Paris_Promenade_Course_Icon.png'),
(057, 13, '3DS Toad Circuit', 'wJU-Pn5CbeE', 'https://mario.wiki.gallery/images/3/3b/MK8D_3DS_Toad_Circuit_Course_Icon.png'),
(058, 13, 'N64 Choco Mountain', 'YC3CSEyglTk', 'https://mario.wiki.gallery/images/7/74/MK8D_N64_Choco_Mountain_Course_Icon.png'),
(059, 13, 'Wii Coconut Mall', 'I-nU1yLlza4', 'https://mario.wiki.gallery/images/9/98/MK8D_Wii_Coconut_Mall_Course_Icon.png'),
(060, 14, 'Tour Tokyo Blur', 'uGEnQy7LjpI', 'https://mario.wiki.gallery/images/8/81/MK8D_Tour_Tokyo_Blur_Course_Icon.png'),
(061, 14, 'DS Shroom Ridge', 'DPuN1ACtiW0', 'https://mario.wiki.gallery/images/7/7e/MK8D_DS_Shroom_Ridge_Course_Icon.png'),
(062, 14, 'GBA Sky Garden', 'HJcWoGT7pk8', 'https://mario.wiki.gallery/images/0/09/MK8D_GBA_Sky_Garden_Course_Icon.png'),
(063, 14, 'Ninja Hideaway', 'NuOl0O5VXtw', 'https://mario.wiki.gallery/images/b/b1/MK8D_Ninja_Hideaway_Course_Icon.png'),
(064, 15, 'Tour New York Minute', 'WPdM3ZQQNKI', 'https://mario.wiki.gallery/images/d/d7/MK8D_Tour_New_York_Minute_Course_Icon.png'),
(065, 15, 'SNES Mario Circuit 3', '6qGmxdWz2dI', 'https://mario.wiki.gallery/images/e/e4/MK8D_SNES_Mario_Circuit_3_Course_Icon.png'),
(066, 15, 'N64 Kalimari Desert', '7qsKAXV0F_M', 'https://mario.wiki.gallery/images/3/3e/MK8D_N64_Kalimari_Desert_Course_Icon.png'),
(067, 15, 'DS Waluigi Pinball', 'GdaX5iX0ZaU', 'https://mario.wiki.gallery/images/b/b6/MK8D_DS_Waluigi_Pinball_Course_Icon.png'),
(068, 16, 'Tour Sydney Sprint', '1xJ3hVhsQEI', 'https://mario.wiki.gallery/images/d/d4/MK8D_Tour_Sydney_Sprint_Course_Icon.png'),
(069, 16, 'GBA Snow Land', '56-3qWLfuoA', 'https://mario.wiki.gallery/images/b/bc/MK8D_GBA_Snow_Land_Course_Icon.png'),
(070, 16, 'Wii Mushroom Gorge', 'OL_5IKFde3o', 'https://mario.wiki.gallery/images/f/fb/MK8D_Wii_Mushroom_Gorge_Course_Icon.png'),
(071, 16, 'Sky-High Sundae', 'E4pZSsb5wjU', 'https://mario.wiki.gallery/images/d/d0/MK8D_Sky-High_Sundae_Course_Icon.png'),
(072, 17, 'Tour London Loop', 'rAxJlLB8WJo', 'https://mario.wiki.gallery/images/2/24/MK8D_Tour_London_Loop_Course_Icon.png'),
(073, 17, 'GBA Boo Lake', 'FfMlIAd8P_Y', 'https://mario.wiki.gallery/images/7/71/MK8D_GBA_Boo_Lake_Course_Icon.png'),
(074, 17, '3DS Rock Rock Mountain', 'znuftt4Lwuw', 'https://mario.wiki.gallery/images/e/ee/MK8D_3DS_Rock_Rock_Mountain_Course_Icon.png'),
(075, 17, 'Wii Maple Treeway', 'aJAPDCEXsGA', 'https://mario.wiki.gallery/images/c/c9/MK8D_Wii_Maple_Treeway_Course_Icon.png'),
(076, 18, 'Tour Berlin Byways', 'oa_pKxJRRjs', 'https://mario.wiki.gallery/images/7/73/MK8D_Tour_Berlin_Byways_Course_Icon.png'),
(077, 18, 'DS Peach Gardens', 'JLzRnjzW-GA', 'https://mario.wiki.gallery/images/0/0b/MK8D_DS_Peach_Gardens_Course_Icon.png'),
(078, 18, 'Merry Mountain', '0LRLEQ3kMk4', 'https://mario.wiki.gallery/images/5/56/MK8D_Merry_Mountain_Course_Icon.png'),
(079, 18, '3DS Rainbow Road', 'FtP351pCbM4', 'https://mario.wiki.gallery/images/9/9f/MK8D_3DS_Rainbow_Road_Course_Icon.png'),
(080, 19, 'Tour Amsterdam Drift', 'moawdOCyZaQ', 'https://mario.wiki.gallery/images/c/c1/MK8D_Tour_Amsterdam_Drift_Course_Icon.png'),
(081, 19, 'GBA Riverside Park', 'daeP8bFTcG0', 'https://mario.wiki.gallery/images/5/5d/MK8D_GBA_Riverside_Park_Course_Icon.png'),
(082, 19, 'Wii DK Summit', 'HL9RN8VFojY', 'https://mario.wiki.gallery/images/0/01/MK8D_Wii_DK_Summit_Course_Icon.png'),
(083, 19, "Yoshi's Island", 'ev9ubsGxbR0', 'https://mario.wiki.gallery/images/2/23/MK8D_Yoshi%27s_Island_Course_Icon.png'),
(084, 20, 'Tour Bangkok Rush', '51wX3b_Q8G8', 'https://mario.wiki.gallery/images/f/f2/MK8D_Tour_Bangkok_Rush_Course_Icon.png'),
(085, 20, 'DS Mario Circuit', '-HaMsPMRlA8', 'https://mario.wiki.gallery/images/2/2c/MK8D_DS_Mario_Circuit_Course_Icon.png'),
(086, 20, 'GCN Waluigi Stadium', 'KNAtGMp4Udk', 'https://mario.wiki.gallery/images/f/f6/MK8D_GCN_Waluigi_Stadium_Course_Icon.png'),
(087, 20, 'Tour Singapore Speedway', '-JfhBus8qvU', 'https://mario.wiki.gallery/images/f/f5/MK8D_Tour_Singapore_Speedway_Course_Icon.png'),
(088, 21, 'Tour Los Angeles Laps', 'vd4lgL4SpMQ', 'https://mario.wiki.gallery/images/f/ff/MKT_Icon_LosAngelesLaps_MarioSunshine.png'),
(089, 21, '3DS Wario Shipyard', 'rSjdQJXCmj4', 'https://mario.wiki.gallery/images/4/43/MKT_Icon_WarioShipyard3DS_WarioCowboy.png'),
(090, 21, 'GBA Sunset Wilds', 'XFQciLj-J70', 'https://mario.wiki.gallery/images/8/84/MKT_Icon_SunsetWildsGBA_PeachExplorer.png'),
(091, 21, 'DS Airship Fortress', '-cireEjMak4', 'https://mario.wiki.gallery/images/9/90/MKT_Icon_AirshipFortressDS_BowserJrPirate.png'),
(092, 22, 'Tour Athens Dash', 'dQw4w9WgXcQ', 'https://www.worldhistory.org/img/r/p/500x600/3372.jpg?v=1645656303'),
(093, 22, 'Wii Dry Dry Ruins', '_1kMsWASS74', 'https://mario.wiki.gallery/images/d/d4/MKT_Icon_DryDryRuinsWii_PeachYukata.png'),
(094, 22, '3DS Wuhu Loop', 'lInoXk8u0-A', 'https://mario.wiki.gallery/images/c/cf/Wuhu_Loop.png'),
(095, 22, 'Piranha Plant Cove', 'Au_X-74PVy8', 'https://mario.wiki.gallery/images/1/18/MKT_Icon_PiranhaPlantCove2_PeteyPiranha.png'),
(096, 23, 'Tour Mexico Motor', 'q-Rqdgna3Yw', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f3/96/caption.jpg?w=700&h=500&s=1'),
(097, 23, 'SNES Vanilla Lake 2', '5aIHMfdxHyA', 'https://mario.wiki.gallery/images/8/86/MKT_Icon_VanillaLake2SNES_PeachWintertime.png'),
(098, 23, 'Wii Koopa Cape', 'IDRtQK1_fn4', 'https://mario.wiki.gallery/images/4/46/MKT_Icon_KoopaCapeWii_PenguinToadette.png'),
(099, 23, 'Bathroom Blitz', 'dQw4w9WgXcQ', 'https://styleblueprint.com/wp-content/uploads/2020/08/SB-Memphis-KitchenUnlimited-StyleBlueprint_Bathrooms-1-1-scaled-e1597700245629.jpg'),
(100, 24, 'Tour Vancouver Velocity', 'YYP4T3C4Gz4', 'https://mario.wiki.gallery/images/6/6b/MKT_Icon_VancouverVelocity_RosalinaAurora.png'),
(101, 24, 'N64 Koopa Troopa Beach', 'P7DD_dmt4_I', 'https://mario.wiki.gallery/images/a/a8/MKT_Icon_KoopaTroopaBeachN64_KoopaTroopa.png'),
(102, 24, "3DS Bowser's Castle", 'pwYmKqRvbAE', 'https://mario.wiki.gallery/images/5/54/MKT_Icon_BowsersCastle3DS_Meowser.png'),
(103, 24, 'Wii Rainbow Road', '9jOOAefc1bc', 'https://mario.wiki.gallery/images/e/eb/MKT_Icon_RainbowRoadWii_MarioSatellaview.png');

CREATE TABLE builds (
    buildID int(5) NOT NULL,
    charID int(2) NOT NULL,
    kartID int(2) NOT NULL,
    uses int(11) NOT NULL,
    speed float(5) NOT NULL,
    acceleration float(5) NOT NULL,
    weight float(5) NOT NULL,
    handling float(5) NOT NULL,
    traction float(5) NOT NULL,
    miniturbo float(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE races (
    entryID int(5) NOT NULL,
    raceID int(5) NOT NULL,
    buildID int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

ALTER TABLE characters
  ADD PRIMARY KEY (charID);

ALTER TABLE characters
  MODIFY charID int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

ALTER TABLE karts
  ADD PRIMARY KEY (kartID);

ALTER TABLE karts
  MODIFY kartID int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

ALTER TABLE cups
  ADD PRIMARY KEY (cupID);

ALTER TABLE cups
  MODIFY cupID int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

ALTER TABLE tracks
  ADD PRIMARY KEY (mapID),
  ADD KEY (cupID);

ALTER TABLE tracks
  MODIFY mapID int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

ALTER TABLE tracks
  ADD CONSTRAINT cup_track FOREIGN KEY (cupID) REFERENCES cups (cupID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE builds
  ADD PRIMARY KEY (buildID),
  ADD KEY charID (charID),
  ADD KEY kartID (kartID);

ALTER TABLE builds
  ADD CONSTRAINT build_fk_1 FOREIGN KEY (charID) REFERENCES characters (charID) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT build_fk_2 FOREIGN KEY (kartID) REFERENCES karts (kartID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE builds
  MODIFY buildID int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
  
ALTER TABLE races
  ADD PRIMARY KEY (entryID, raceID),
  ADD KEY buildID (buildID);

ALTER TABLE races
  ADD CONSTRAINT race_build FOREIGN KEY (buildID) REFERENCES builds (buildID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE races
  MODIFY entryID int(5) NOT NULL AUTO_INCREMENT;