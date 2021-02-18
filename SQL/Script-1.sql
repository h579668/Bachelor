drop schema if exists bachelor_idretter cascade;
create schema bachelor_idretter;

set search_path = bachelor_idretter;

create table idretter (
	idrettid serial,
	idNavn varchar,
	lag_in varchar,
	score smallint,
	treffprosent smallint,
	styrke varchar,
	aktuell varchar,
	
	constraint idrett_PK primary key (idrettid)
	
);

create table fysiske_egenskaper (
	idrettid serial,
	styrke smallint,
	spenst_hurtighet smallint,
	utholdenhet smallint,
	bevegelighet smallint,
	
	constraint idrett_FK foreign key (idrettid) references idretter(idrettid),
	constraint fe_PK primary key (idrettid)
);

create table koordinative_egenskaper (
	idrettid serial,
	balanse smallint,
	rytme smallint,
	dynamikk smallint,
	oyefot smallint,
	oyehand smallint,
	romorientering smallint,
	
	constraint idrett_FK foreign key (idrettid) references idretter(idrettid),
	constraint ke_PK primary key (idrettid)
);

create table psykologiske_faktorer (
	idrettid serial,
	presisjon_perfeksjonimske smallint,
	taktikk smallint,
	selvstendihet smallint,
	spenningsnivaa smallint,
	kroppskontakt smallint,
	samspill smallint,
	
	constraint idrett_FK foreign key (idrettid) references idretter(idrettid),
	constraint pf_PK primary key (idrettid)
);
--select * from idretter
