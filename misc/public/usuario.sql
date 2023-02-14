CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `ativo` tinyint(4) NOT NULL,
  `ultimoacesso` datetime DEFAULT NULL,
  `enderecoIP` varchar(255) DEFAULT NULL,
  `criacao` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`usuario`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8
