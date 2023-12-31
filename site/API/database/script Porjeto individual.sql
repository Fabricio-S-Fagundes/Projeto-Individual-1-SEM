create database comunidadeMineBD;

use comunidadeMineBD;

create table usuario(
idUsuario int primary key auto_increment,
nomeComp varchar(255),
email varchar(150),
dtNasc date,
username varchar(30) unique,
senha varchar(20)
);

create table skin(
idSkin int primary key auto_increment,
arqSkin blob null,
fkUsuario int,
constraint fkUsuSkin 
	foreign key(fkUsuario)
    references usuario(idUsuario)
);

create table postagem(
idPost int auto_increment,
fkUsuario int,
txtPostagem text,
imagem blob null,
dtPost timestamp,
constraint fkUsuPost
	foreign key(fkUsuario)
	references usuario(idUsuario),
primary key(idPost, fkUsuario)
);


-- -----------------------------------
select
count(idUsuario) QtdeTotalUser
from usuario
union all
select
count(distinct fkUsuario) QtdePostUser
from postagem;

-- ----------------------------------
select
count(fkUsuario) QtdeSkinUser
from skin
where(
select arqSkin <> "imagensSkins/crepper.png"
)
union all
select
count(fkUsuario) QtdeSkinDefault
from skin
where(
select arqSkin = "imagensSkins/crepper.png"
);
-- ------------------------------------
select * from skin;

set foreign_key_checks = 0;

select * from usuario;

delete from usuario where idUsuario = 6;
delete from skin where fkUsuario = 6;



select
count(idUsuario) qtde
from usuario
union all
select
count(idPost)
from postagem;

