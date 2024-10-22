
SELECT name, collation_name FROM sys.databases;
GO
ALTER DATABASE db_a98acf_wp4 SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_a98acf_wp4 COLLATE Croatian_CI_AS;
GO
ALTER DATABASE db_a98acf_wp4 SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;
GO




--drop table knjige;
--drop table sastanci;
--drop table clanovi;
--drop table dolasci;  




create table knjige (
sifra int not null primary key identity (1,1),
naziv varchar (50) not null,
autor varchar (50) not null,
godina date,

);

create table sastanci (
sifra int not null primary key identity (1,1),
datum datetime,
knjiga int,
mjesto varchar (50) not null
);

create table clanovi (
sifra int not null primary key identity (1,1),
ime varchar (50) not null,
prezime varchar (50) not null,
email varchar (50) not null,
lozinka int not null,
administrator bit
);

create table dolasci (
sastanak int,
clan int
);

alter table dolasci add foreign key (clan) references clanovi (sifra);
alter table dolasci add foreign key (sastanak) references sastanci (sifra);
alter table sastanci add foreign key (knjiga) references knjige (sifra);

insert into knjige (naziv, autor, godina) values 
('The Cruel Princ','Holly Black', '2018-01-02');
insert into knjige (naziv, autor, godina) values 
('The Wicked King', 'Holly Black','2019-01-08');
insert into knjige (naziv, autor, godina) values 
('The Queen of Nothing','Holly Black','2019-11-19');
insert into knjige (naziv, autor, godina) values 
('Soul of a Witch', 'Harley Laroux','2023-08-31');
insert into knjige (naziv, autor, godina) values 
('Crowed','Rina Kent','2019-01-30');
insert into knjige (naziv, autor, godina) values 
('Scarred','Emily McIntire','2023-04-10');
insert into knjige (naziv, autor, godina) values 
('Doll House','John Hunt','2017-01-19');
insert into knjige (naziv, autor, godina) values 
('Morally Corrupt','Veronica Lancet','2023-03-27');
insert into knjige (naziv, autor, godina) values 
('Ruthless Rival','Lj Shen','2022-05-03');
insert into knjige (naziv, autor, godina) values 
('Punk 57','Penelope Douglas','2022-10-29');
insert into knjige (naziv, autor, godina) values 
('The Mindfuck Series','S.T. Abby','2022-10-09');
insert into knjige (naziv, autor, godina) values
('The Chalk Man','C.J. Tudor','2018-01-01');
insert into knjige (naziv, autor, godina) values
('the sun and her flowers','Rupi Kaur','2018-09-18');
insert into knjige (naziv, autor, godina) values
('Dark Matter','Blake Crouch','2016-06-26');
insert into knjige (naziv, autor, godina) values
('Ward D','Freida McFadden','2023-05-08');
insert into knjige (naziv, autor, godina) values
('Lured','Rina Kent','2019-05-19');
insert into knjige (naziv, autor, godina) values
('Restrain Me','Michelle Heard','2023-05-04');
insert into knjige (naziv, autor, godina) values
('Fractured Freedom','Shain Rose','2022-06-21');
insert into knjige (naziv, autor, godina) values
('Moriarty','Anthony Horowitz','2014-10-23');
insert into knjige (naziv, autor, godina) values
('Born a Crime','Trevor Noah','2016-11-15');
insert into knjige (naziv, autor, godina) values 
('The Cenci','Percy Bysshe Shelley','1819-01-01');
insert into knjige (naziv, autor, godina) values
('Frivolous','Veronica Lancert','2021-07-30');
insert into knjige (naziv, autor, godina) values
('Bound by Vengeance','Cora Reilly','2017-01-20');
insert into knjige (naziv, autor, godina) values
('Call me by your name','André Aciman','2007-01-23');
insert into knjige (naziv, autor, godina) values
('A Dogs Purpose','W. Bruce Cameron','2010-06-10');
insert into knjige (naziv, autor, godina) values
('God of War','Rina Kent','2024-06-13');
insert into knjige (naziv, autor, godina) values
('Vicious','Lj Shen','2016-12-27');






insert into sastanci (datum, knjiga, mjesto) values 
('2024-03-02  14:30',1,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-03-10  15:25',2,'Beli Manastir');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-03-15  13:30',3,'Bilje');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-03-20  14:00',4,'Belišce');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-03-25  14:30',5,'Valpovo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-04-02  18:15',6,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-04-08  19:00',7,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-04-15  12:15',8,'Beli Manastir');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-04-23  20:15',9,'Đakovo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-04-30  14:20',10,'Čepin');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-05-10  18:15',11,'Kozarac');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-05-20  19:30',12,'Valpovo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-05-29  19:00',13,'Baranjsko Petrovo Selo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-06-06  20:30',14,'Čepin');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-06-18  11:30',15,'Valpovo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-06-26  19:15',16,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-07-07  19:30',17,'Beli Manastir');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-07-17  19:30',18,'Darda');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-07-27  15:30',19,'Bilje');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-08-10  12:00',20,'Kopačevo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-08-20  19:00',21,'Donji Miholjac');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-08-27  19:30',22,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-09-10  20:30',23,'Valpovo');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-09-20  20:00',24,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-09-29  19:00',25,'Beli Manastir');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-10-09  20:00',26,'Osijek');
insert into sastanci (datum, knjiga, mjesto) values 
('2024-10-20  16:00',27,'Osijek');



insert into clanovi (ime, prezime, email, lozinka, administrator) 
values ('Lea', 'Raguž','raguz.leaa@gmail.com',12515,1),
('Damir','Bukvašević','damirbukvasevic@gmail.com',74884,1),
('Senka','Banjac','sbanjac88@gmail.com',93772,1),
('Igor','Brzica','igorbrzica1@gmail.com',32873,1),
('Ivan','Mesarić','mesaritchievan@gmail.com',2973,1),
('Mirko','Ereš','mirko.eres1@gmail.com',82733,1),
('Dominik','Daraždi','dominikdarazdi@gmail.com', 37823,1),
('Dean','Vagner','deanvagner@yahoo.com',28732,1),
('Marko','Mudrovčić','markomudrovcic12@gmail.com',33234,1),
('Mario','Kušen','kusen.mario@gmail.com',43364,1),
('Leon','Jalovičar','ringerajacar@gmail.com',45151,1),
('Dražen','Kalazić','thekalazic@gmail.com',67851,1),
('Matej','Sudarić','matejsudo@gmail.com',67573,1),
('Antonijo','Šakić','a.sakic.1.g@gmail.com',75857,1),
('Nikola','Milić','nikk.mil@gmail.com',65786,1),
('Manuela','Slobođanac','manja496@gmail.com',76583,1),
('Srđan','Filipović','srdjanfilipovic991@gmail.com',36575,1),
('Goran','Matoš','goran.matos@a1.hr',68542,1),
('Igor','Tomić','i.tomic.babinski@gmail.com',78577,1),
('Borna','Štajduhar','bornastajduhar1999@gmail.com',84457,1),
('Ante','Filipović','ante.filipovic72@gmail.com',67471,1),
('Domagoj','Glavačević','glavacevic.d@gmail.com',76876,1),
('Lorena','Ostroški','lorena.ostroski2503@gmail.com',85871,1),
('Sanja','Boduljak','matkosanja@gmail.com',58752,1),
('Leon','Puhanić','leonpuhanic@gmail.com',75879,1),
('Danijel','Sačer','sacerdanijel@gmail.com',67878,1);



insert into dolasci(sastanak, clan) values 
(1,1), (1,3),(1,5),(1,6),(1,7),(1,9),(1,12),(1,15),(1,19),(1,20),(1,21),(1,22),(1,23);
insert into dolasci (sastanak, clan) values
(2,2), (2,4),(2,5),(2,6),(2,8),(2,10),(2,13),(2,15),(2,17),(2,18),(2,19),(2,22),(2,26);
insert into dolasci (sastanak, clan) values
(3,1), (3,4),(3,5),(3,7),(3,9),(3,10),(3,14),(3,15),(3,16),(3,18),(3,21),(3,24),(3,25);
insert into dolasci (sastanak, clan) values
(4,1), (4,2),(4,5),(4,6),(4,8),(4,10),(4,11),(4,14),(4,17),(4,18),(4,19),(4,25),(4,26);
insert into dolasci (sastanak, clan) values
(5,2), (5,3),(5,4),(5,6),(5,7),(5,12),(5,16),(5,17),(5,18),(5,20),(5,23),(5,24),(5,26);
insert into dolasci (sastanak, clan) values
(6,1), (6,3),(6,5),(6,6),(6,7),(6,8),(6,9),(6,11),(6,14),(6,19),(6,21),(6,22),(6,26);
insert into dolasci (sastanak, clan) values
(7,1), (7,3),(7,7),(7,8),(7,9),(7,10),(7,11),(7,13),(7,14),(7,16),(7,20),(7,22),(7,26);
insert into dolasci (sastanak, clan) values
(8,1), (8,3),(8,5),(8,6),(8,7),(8,8),(8,9),(8,11),(8,14),(8,19),(8,21),(8,24),(8,25);
insert into dolasci (sastanak, clan) values
(9,3), (9,4),(9,5),(9,9),(9,10),(9,12),(9,14),(9,16),(9,17),(9,19),(9,24),(9,25),(9,26);
insert into dolasci (sastanak, clan) values
(10,1), (10,3),(10,5),(10,6),(10,7),(10,8),(10,9),(10,11),(10,14),(10,19),(10,21),(10,22),(10,26);
insert into dolasci (sastanak, clan) values
(11,5), (11,6),(11,9),(11,12),(11,14),(11,18),(11,19),(11,20),(11,21),(11,22),(11,24),(11,25),(11,26);
insert into dolasci (sastanak, clan) values
(12,1), (12,4),(12,5),(12,6),(12,7),(12,12),(12,13),(12,14),(12,15),(12,19),(12,20),(12,22),(12,26);
insert into dolasci (sastanak, clan) values
(13,1), (13,2),(13,3),(13,5),(13,7),(13,10),(13,13),(13,14),(13,16),(13,17),(13,21),(13,22),(13,26);
insert into dolasci (sastanak, clan) values
(14,2), (14,4),(14,5),(14,6),(14,7),(14,12),(14,13),(14,14),(14,15),(14,19),(14,21),(14,24),(14,25);
insert into dolasci (sastanak, clan) values
(15,1), (15,2),(15,5),(15,6),(15,7),(15,9),(15,10),(15,11),(15,14),(15,15),(15,20),(15,21),(15,23);
insert into dolasci (sastanak, clan) values
(16,1), (16,3),(16,5),(16,6),(16,7),(16,8),(16,11),(16,12),(16,13),(16,15),(16,19),(16,20),(16,22);
insert into dolasci (sastanak, clan) values
(17,3), (17,5),(17,8),(17,9),(17,12),(17,14),(17,15),(17,16),(17,19),(17,21),(17,23),(17,25),(17,26);
insert into dolasci (sastanak, clan) values
(18,1), (18,2),(18,3),(18,5),(18,7),(18,11),(18,13),(18,14),(18,15),(18,19),(18,20),(18,22),(18,26);
insert into dolasci (sastanak, clan) values
(19,3), (19,4),(19,5),(19,6),(19,9),(19,10),(19,13),(19,14),(19,17),(19,19),(19,20),(19,22),(19,26);
insert into dolasci (sastanak, clan) values
(20,1), (20,2),(20,5),(20,6),(20,8),(20,9),(20,13),(20,14),(20,15),(20,16),(20,17),(20,18),(20,19);
insert into dolasci (sastanak, clan) values
(21,1), (21,4),(21,5),(21,6),(21,7),(21,9),(21,10),(21,11),(21,14),(21,19),(21,20),(21,22),(21,26);
insert into dolasci (sastanak, clan) values
(22,2), (22,3),(22,5),(22,6),(22,8),(22,12),(22,13),(22,15),(22,16),(22,17),(22,20),(22,21),(22,22);
insert into dolasci (sastanak, clan) values
(23,1), (23,4),(23,5),(23,6),(23,7),(23,12),(23,13),(23,14),(23,15),(23,19),(23,20),(23,22),(23,23);
insert into dolasci (sastanak, clan) values
(24,1), (24,2),(24,5),(24,6),(24,7),(24,12),(24,13),(24,14),(24,15),(24,19),(24,20),(24,22),(24,23);
insert into dolasci (sastanak, clan) values
(25,1), (25,4),(25,6),(25,7),(25,8),(25,9),(25,13),(25,14),(25,15),(25,19),(25,20),(25,22),(25,23);
insert into dolasci (sastanak, clan) values
(26,2), (26,4),(26,5),(26,6),(26,7),(26,12),(26,13),(26,14),(26,15),(26,19),(26,20),(26,22),(26,23);
insert into dolasci (sastanak, clan) values
(27,1), (27,4),(27,5),(27,6),(27,7),(27,12),(27,13),(27,14),(27,15),(27,19),(27,20),(27,22),(27,23);


--select * from knjige;
--select * from sastanci;
--select * from clanovi;
--select * from dolasci;
