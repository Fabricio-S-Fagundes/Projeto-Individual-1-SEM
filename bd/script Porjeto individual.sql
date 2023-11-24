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
nCurtidas int,
constraint fkUsuPost
	foreign key(fkUsuario)
	references usuario(idUsuario),
primary key(idPost, fkUsuario)
);

-- update postagem set nCurtida = (sum(nCurtida + 1));

create table comentario (
idComentario int auto_increment,
fkUsuarioPost int,
constraint fkUsuPostCom
	foreign key(fkUsuarioPost)
    references postagem(fkUsuario),
fkPost int,
constraint fkPostCom
	foreign key(fkPost)
    references postagem(idPost),
fkUsuarioComent int,
constraint fkUsuComent
	foreign key(fkUsuarioComent)
    references usuario(idUsuario),
primary key(idComentario, fkUsuarioPost, fkPost, fkUsuarioComent),
textoComent text,
dtComentario timestamp
);

select * from usuario;

select * from postagem;

truncate table usuario;