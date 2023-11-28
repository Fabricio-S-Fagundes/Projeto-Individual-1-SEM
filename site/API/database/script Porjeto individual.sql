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
arqSkin varchar(100),
fkUsuario int,
constraint fkUsuSkin 
	foreign key(fkUsuario)
    references usuario(idUsuario)
);

create table postagem(
idPost int auto_increment,
fkUsuario int,
txtPostagem text,
imagem varchar(100),
dtPost timestamp default current_timestamp,
nCurtidas int null,
constraint fkUsuPost
	foreign key(fkUsuario)
	references usuario(idUsuario),
primary key(idPost, fkUsuario)
);

update postagem set nCurtidas = nCurtidas + 1
 		where idPost = 5 and fkUsuario = 2;


select * from usuario;

select * from postagem;

truncate table usuario;


