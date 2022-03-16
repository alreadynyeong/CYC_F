-- create database cyc;
-- use cyc;

create table `color`(
	`id` bigint NOT NULL AUTO_INCREMENT,
	`color` varchar(50) NOT NULL,
	`match` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

create table `cody`(
	`id` bigint NOT NULL AUTO_INCREMENT,
	`cody` varchar(2000) NOT NULL,
	`month` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

create table `closet`(
	`id` bigint NOT NULL AUTO_INCREMENT,
	`object` varchar(100) NOT NULL,
	`category` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);