drop schema if exists bruker_tabeller cascade;
create schema bruker_tabeller;

set search_path = bruker_tabeller;

--drop table if exists bruker;
--drop table if exists aldersgruppe;
drop table if exists activities;
drop table if exists aktivitets;
drop table if exists tutorials;

create table kategori(
	kategori_id serial,
	navn varchar,
	constraint kategori_PK primary key(kategori_id)
);

create table egenskap(
	egenskap_id serial,
	kategori_id int,
	navn varchar,
	constraint egenskap_PK primary key(egenskap_id)
	--constraint kategori_FK foreign key (kategori_id) references kategori(kategori_id)
);


create table bruker(
	bruker_id serial,
	alder_id int,
	omraade_id int,
	constraint bruker_PK primary key(bruker_id)
	--constraint aldersgruppe_FK foreign key (alder_id) references aldersgruppe(alder_id),
	--constraint omraade_FK foreign key (omraade_id) references omraade(omraade_id)
);

create table bruker_egenskap(
	bruker_egenskap_id serial,
	bruker_id int,
	egenskap_id int,
	verdi int,
	constraint bruker_egenskap_PK primary key(bruker_egenskap_id)
	--constraint bruker_FK foreign key(bruker_id) references bruker(bruker_id),
	--constraint egenskap_FK foreign key(egenskap_id) references egenskap(egenskap_id)
	
);

create table omraade(
	omraade_id serial,
	land varchar,
	kommune varchar,
	fylke varchar,
	constraint omraade_PK primary key(omraade_id)
);


create table forbund(
	forbund_id serial,
	omraade_id int,
	navn varchar,
	constraint forbund_PK primary key(forbund_id)
	--constraint omraade_FK foreign key(omraade_id) references omraade(omraade_id)
);


create table aktivitet(
	aktivitet_id serial,
	forbund_id int,
	alder_id int,
	navn varchar,
	tlf varchar,
	epost varchar,
	kommentar varchar,
	constraint aktivitet_PK primary key(aktivitet_id)
	--constraint aldersgruppe_FK foreign key(alder_id) references aldersgruppe(alder_id),
	--constraint forbund_FK foreign key(forbund_id) references forbund(forbund_id)
);

create table aktivitet_egenskap (
	a_egenskap_id serial,
	aktivitet_id int,
	egenskap_id int,
	verdi int,
	constraint aktivitet_egenskap_PK primary key(a_egenskap_id)
	--constraint aktivitet_FK foreign key (aktivitet_id) references aktivitet(aktivitet_id),
	--constraint egenskap_FK foreign key (egenskap_id) references egenskap(egenskap_id);
);

create table bruker_aktivitet (
	bruker_aktivitet_id serial,
	bruker_id int,
	aktivitet_id int,
	skaare int,
	treff int,
	aktuell int,
	styrke int,
	constraint bruker_aktivitet_PK primary key(bruker_aktivitet_id)
	--constraint bruker_FK foreign key (bruker_id) references bruker(bruker_id),
	--constraint aktivitet_FK foreign key (aktivitet_id) references aktivitet(aktivitet_id);
);

create table aldersgruppe(
	alder_id serial,
	alder varchar,
	constraint aldersgruppe_PK primary key(alder_id)
);



alter table egenskap
add constraint kategori_FK foreign key (kategori_id) references kategori(kategori_id);

alter table bruker
add constraint aldersgruppe_FK foreign key (alder_id) references aldersgruppe(alder_id),
add constraint omraade_FK foreign key (omraade_id) references omraade(omraade_id);

alter table bruker_egenskap
add constraint bruker_FK foreign key(bruker_id) references bruker(bruker_id),
add constraint egenskap_FK foreign key(egenskap_id) references egenskap(egenskap_id);

alter table forbund
add constraint omraade_FK foreign key(omraade_id) references omraade(omraade_id);

alter table aktivitet
add constraint aldersgruppe_FK foreign key(alder_id) references aldersgruppe(alder_id),
add constraint forbund_FK foreign key(forbund_id) references forbund(forbund_id);

alter table aktivitet_egenskap
add constraint aktivitet_FK foreign key (aktivitet_id) references aktivitet(aktivitet_id),
add constraint egenskap_FK foreign key (egenskap_id) references egenskap(egenskap_id);

alter table bruker_aktivitet
add constraint bruker_FK foreign key (bruker_id) references bruker(bruker_id),
add constraint aktivitet_FK foreign key (aktivitet_id) references aktivitet(aktivitet_id);
