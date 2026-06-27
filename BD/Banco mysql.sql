-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: allshop
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao` (
  `usuario_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `data_avaliacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `nota` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`produto_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao`
--

LOCK TABLES `avaliacao` WRITE;
/*!40000 ALTER TABLE `avaliacao` DISABLE KEYS */;
INSERT INTO `avaliacao` VALUES (1,6,'2026-06-04 21:50:26',5),(2,8,'2026-06-04 21:50:26',5),(3,9,'2026-06-04 21:50:26',4),(4,10,'2026-06-04 21:50:26',5),(5,7,'2026-06-04 21:50:26',4);
/*!40000 ALTER TABLE `avaliacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carrinho`
--

DROP TABLE IF EXISTS `carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrinho` (
  `id_carrinho` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_carrinho`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `carrinho_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrinho`
--

LOCK TABLES `carrinho` WRITE;
/*!40000 ALTER TABLE `carrinho` DISABLE KEYS */;
INSERT INTO `carrinho` VALUES (1,1,'2026-06-04 21:43:48','Ativo'),(2,2,'2026-06-04 21:43:48','Ativo'),(3,3,'2026-06-04 21:43:48','Finalizado'),(4,4,'2026-06-04 21:43:48','Ativo'),(5,5,'2026-06-04 21:43:48','Finalizado');
/*!40000 ALTER TABLE `carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (8,'Games','Consoles e acessórios gamers'),(9,'Processadores','Processadores AMD e Intel'),(10,'Computadores','PCs Gamer e desktops'),(11,'Refrigeração','Water Coolers e sistemas de resfriamento'),(12,'Periféricos','Mouse, teclado, headset e controles');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `data_comentario` datetime DEFAULT CURRENT_TIMESTAMP,
  `texto` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,1,6,'2026-06-04 21:50:12','Excelente console, gráficos incríveis e muito rápido.'),(2,2,8,'2026-06-04 21:50:12','Processador excelente para jogos e estudos.'),(3,3,9,'2026-06-04 21:50:12','PC muito bom para trabalhar e jogar.'),(4,4,10,'2026-06-04 21:50:12','Ótima refrigeração e fácil instalação.'),(5,5,7,'2026-06-04 21:50:12','Controle confortável e bateria duradoura.');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracao_usuario`
--

DROP TABLE IF EXISTS `configuracao_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configuracao_usuario` (
  `usuario_id` int NOT NULL,
  `tamanho_fonte` varchar(20) DEFAULT NULL,
  `alto_contraste` tinyint(1) DEFAULT '0',
  `audio` tinyint(1) DEFAULT '0',
  `libras` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`usuario_id`),
  CONSTRAINT `configuracao_usuario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracao_usuario`
--

LOCK TABLES `configuracao_usuario` WRITE;
/*!40000 ALTER TABLE `configuracao_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `configuracao_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `endereco_id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `cep` char(9) NOT NULL,
  `logradouro` varchar(150) NOT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `complemento` varchar(100) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `estado` char(2) DEFAULT NULL,
  PRIMARY KEY (`endereco_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `endereco_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,1,'70040-010','Rua das Palmeiras','120','Casa','Centro','Brasília','DF'),(2,2,'40015-070','Avenida Oceânica','85','Apto 202','Barra','Salvador','BA'),(3,3,'01310-100','Rua Augusta','450','Apto 110','Consolação','São Paulo','SP'),(4,4,'30130-110','Rua da Bahia','300','Casa','Funcionários','Belo Horizonte','MG'),(5,5,'80010-000','Rua XV de Novembro','950','Apto 305','Centro','Curitiba','PR');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorito`
--

DROP TABLE IF EXISTS `favorito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorito` (
  `usuario_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `data_favorito` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usuario_id`,`produto_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `favorito_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `favorito_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorito`
--

LOCK TABLES `favorito` WRITE;
/*!40000 ALTER TABLE `favorito` DISABLE KEYS */;
INSERT INTO `favorito` VALUES (1,6,'2026-06-21 18:55:07'),(1,8,'2026-06-04 21:50:34'),(2,6,'2026-06-04 21:50:34'),(3,10,'2026-06-04 21:50:34'),(4,7,'2026-06-04 21:50:34'),(5,9,'2026-06-04 21:50:34');
/*!40000 ALTER TABLE `favorito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fornecedor` (
  `fornecedor_id` int NOT NULL AUTO_INCREMENT,
  `razao_social` varchar(150) NOT NULL,
  `cnpj` varchar(18) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fornecedor_id`),
  UNIQUE KEY `cnpj` (`cnpj`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
INSERT INTO `fornecedor` VALUES (1,'AMD Brasil LTDA','11.111.111/0001-11','contato@amdbrasil.com','61991111111','2026-06-04 21:25:21'),(2,'NVIDIA Brasil LTDA','22.222.222/0001-22','contato@nvidia.com','11992222222','2026-06-04 21:25:21'),(3,'Kingston Tecnologia LTDA','33.333.333/0001-33','contato@kingston.com','31993333333','2026-06-04 21:25:21'),(4,'Samsung Electronics Brasil','44.444.444/0001-44','contato@samsung.com','41994444444','2026-06-04 21:25:21'),(5,'Logitech Brasil LTDA','55.555.555/0001-55','contato@logitech.com','71995555555','2026-06-04 21:25:21');
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_carrinho`
--

DROP TABLE IF EXISTS `item_carrinho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_carrinho` (
  `id_carrinho` int NOT NULL,
  `id_produto` int NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`id_carrinho`,`id_produto`),
  KEY `id_produto` (`id_produto`),
  CONSTRAINT `item_carrinho_ibfk_1` FOREIGN KEY (`id_carrinho`) REFERENCES `carrinho` (`id_carrinho`),
  CONSTRAINT `item_carrinho_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_carrinho`
--

LOCK TABLES `item_carrinho` WRITE;
/*!40000 ALTER TABLE `item_carrinho` DISABLE KEYS */;
INSERT INTO `item_carrinho` VALUES (1,7,1),(1,8,1),(1,10,1),(1,11,1),(2,8,1),(3,9,1),(4,10,2),(5,7,1);
/*!40000 ALTER TABLE `item_carrinho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_pedido`
--

DROP TABLE IF EXISTS `item_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_pedido` (
  `pedido_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `quantidade` int NOT NULL,
  `preco_unitario` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`pedido_id`,`produto_id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `item_pedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`),
  CONSTRAINT `item_pedido_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_pedido`
--

LOCK TABLES `item_pedido` WRITE;
/*!40000 ALTER TABLE `item_pedido` DISABLE KEYS */;
INSERT INTO `item_pedido` VALUES (1,6,1,3737.00,3737.00),(2,8,1,899.00,899.00),(3,9,1,2499.00,2499.00),(4,10,1,291.64,291.64),(5,7,1,399.00,399.00);
/*!40000 ALTER TABLE `item_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `desconto` decimal(5,2) DEFAULT NULL,
  `produto_id` int NOT NULL,
  `data_inicio` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `oferta_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`produto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `endereco_id` int NOT NULL,
  `data_pedido` datetime DEFAULT CURRENT_TIMESTAMP,
  `forma_pagamento` varchar(50) DEFAULT NULL,
  `valor_total` decimal(10,2) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `endereco_id` (`endereco_id`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`),
  CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`endereco_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,1,1,'2026-06-04 21:43:11','PIX',3737.00,'Entregue'),(2,2,2,'2026-06-04 21:43:11','Cartao de Credito',899.00,'Em transporte'),(3,3,3,'2026-06-04 21:43:11','PIX',2499.00,'Entregue'),(4,4,4,'2026-06-04 21:43:11','Boleto',291.64,'Processando'),(5,5,5,'2026-06-04 21:43:11','Cartao de Debito',399.00,'Entregue');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `produto_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `descricao` text,
  `marca` varchar(100) DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `estoque` int DEFAULT '0',
  `especificacoes` text,
  `categoria_id` int NOT NULL,
  `fornecedor_id` int NOT NULL,
  PRIMARY KEY (`produto_id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `fornecedor_id` (`fornecedor_id`),
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  CONSTRAINT `produto_ibfk_2` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedor` (`fornecedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (6,'PlayStation 5 Slim Edicao Digital','Console Sony PlayStation 5 Slim Digital','Sony',3737.00,'/images/Console PlayStation 5 Slim.png',10,'SSD ultrarrapido, Ray Tracing, 4K',8,1),(7,'Controle sem fio DualSense Midnight','Controle oficial PlayStation','Sony',399.00,'/images/Controle sem fio DualSense Midnight.png',20,'Tecnologia tatil avancada',12,1),(8,'Processador Ryzen 5 5600G','Processador AMD Ryzen 5','AMD',899.00,'/images/Processador Ryzen 5 5600G.png',25,'6 nucleos, 12 threads, 4.4GHz',9,1),(9,'PC Gamer Completo RGB Ryzen 5','Computador Gamer Completo','AllShop',2499.00,'/images/PC Gamer Completo RGB Ryzen 5.png',5,'Ryzen 5, 16GB RAM, SSD 512GB',10,1),(10,'Water Cooler Rise Mode Gamer Black','Water Cooler 240mm','Rise Mode',291.64,'/images/Water Cooler Rise Mode Gamer Black.png',15,'240mm, alta dissipacao',11,1),(11,'Mouse Gamer RGB','Mouse gamer com iluminação RGB','Logitech',149.90,'/images/Mouse Gamer RGB.png',20,'RGB, USB, 7200 DPI',12,5),(12,'Teclado Mecânico RGB','Teclado mecânico gamer','Logitech',299.90,'/images/Teclado Mecânico RGB.png',15,'Switch mecânico, RGB',12,5),(13,'Headset Gamer HyperX Cloud III','Headset gamer com som surround','HyperX',499.90,'/images/Headset Gamer HyperX Cloud III.png',10,'7.1 Surround, USB',12,5),(14,'Webcam Logitech C920','Webcam Full HD para streaming','Logitech',399.90,'/images/Webcam Logitech C920.png',8,'1080p Full HD',12,5),(15,'Processador Intel Core Ultra 5','Processador Intel Core Ultra 5 para alta performance','Intel',1099.99,'/images/Processador Intel Core Ultra 5.png',20,'12 núcleos',9,1),(16,'Placa de Vídeo RTX 4060','Placa de vídeo NVIDIA RTX 4060','NVIDIA',2099.90,'/images/Placa de Vídeo RTX 4060.png',15,'8GB GDDR6',10,2),(17,'Memória RAM Kingston Fury 16GB','Memória DDR5 Kingston Fury','Kingston',289.90,'/images/Memória RAM Kingston Fury 16GB.png',30,'16GB DDR5',10,3),(18,'SSD Kingston NV3 1TB','SSD Kingston NV3 de 1TB','Kingston',399.90,'/images/SSD Kingston NV3 1TB.png',25,'NVMe PCIe 4.0',10,3),(19,'Notebook Dell Inspiron 15','Notebook Dell Inspiron para trabalho e estudos','Dell',5949.00,'/images/Notebook Dell Inspiron 15.png',10,'16GB RAM, SSD 512GB',10,4),(20,'Monitor Gamer 27 Polegadas','Monitor gamer Full HD','Samsung',899.90,'/images/Monitor Gamer 27 Polegadas.png',12,'27 polegadas, 144Hz',10,4),(21,'Smart TV 50 Polegadas 4K','Smart TV UHD 4K','Samsung',2499.90,'/images/Smart TV 50 Polegadas 4K.png',8,'50 polegadas, 4K',10,4),(22,'Apple Watch Series 10','Smartwatch Apple Watch Series 10','Apple',2999.90,'/images/Apple Watch Series 10.png',6,'GPS e monitor cardíaco',12,5),(23,'Cadeira Gamer ThunderX3','Cadeira gamer ergonômica','ThunderX3',1199.90,'/images/Cadeira Gamer ThunderX3.png',5,'Encosto reclinável',12,5),(24,'Caixa de Som JBL Flip 6','Caixa de som Bluetooth JBL','JBL',499.90,'/images/Caixa de Som JBL Flip 6.png',10,'Bluetooth portátil',12,5);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `data_cadastro` datetime DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(20) DEFAULT 'USER',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Cleiton','Oliveira','cleiton.oliveira@gmail.com','123456','111.111.111-11','61991111111','1998-05-15','2026-06-04 21:19:50','USER'),(2,'Marivalda','Santos','marivalda.santos@gmail.com','123456','222.222.222-22','71992222222','1985-09-20','2026-06-04 21:19:50','USER'),(3,'Gabriel','Ferreira','gabriel.ferreira@gmail.com','123456','333.333.333-33','11993333333','2002-03-10','2026-06-04 21:19:50','USER'),(4,'Geraldo','Almeida','geraldo.almeida@gmail.com','123456','444.444.444-44','31994444444','1978-11-08','2026-06-04 21:19:50','USER'),(5,'Thomas','Rodrigues','thomas.rodrigues@gmail.com','123456','555.555.555-55','41995555555','1995-07-25','2026-06-04 21:19:50','USER'),(6,'Ana','Luiza','Anateste123@gmail.com','$2b$10$ztfAX9u0qheRnXZL/fDEpe/Ve2912Kol7a9C5mHO2MZlUI5fiP4/.','373.460.130-42','(00) 00000-0000',NULL,'2026-06-22 23:52:12','USER');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-26 15:01:23
