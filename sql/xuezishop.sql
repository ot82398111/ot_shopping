SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;

#创建用户表
CREATE TABLE xz_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),
  user_name VARCHAR(32),
  gender INT
);
INSERT INTO xz_user VALUES
(NULL,'dangdang','123456','601022337@qq.com','13189075962','img/1235.jpg','王三毛',1),
(NULL,'dingding','123456','1471142227@qq.com','18191651885','img/1234.jpg','王二妮',0),
(NULL,'lingling','123456','7526356131@qq.com','15521194336','img/1295.jpg','宋四',1);

#创建用户地址表
CREATE TABLE xz_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  receiver VARCHAR(16),
  province VARCHAR(16),
  city VARCHAR(16),
  county VARCHAR(16),
  address VARCHAR(128),
  cellphone VARCHAR(16),
  fixedphone VARCHAR(16),
  postcode CHAR(6),
  tag VARCHAR(16),
  is_default BOOL
);
INSERT INTO xz_receiver_address VALUES
(NULL,1,'张大','山西省','运城市','河津县','僧楼镇北王村','18191657885','0359-5357871','043300','第一个注册',1),
(NULL,1,'张三','山西省','运城市','河津县','僧楼镇北王村','18191657885','0359-5357871','043300','备用地址',0),
(NULL,2,'宋大','山西省','运城市','河津县','僧楼镇北王村','18191657885','0359-5357871','043300','第一个注册',1),
(NULL,2,'宋三','山西省','运城市','河津县','僧楼镇北王村','18191657885','0359-5357871','043300','备用地址',0),
(NULL,3,'王大','山西省','运城市','河津县','僧楼镇北王村','18191657885','0359-5357871','043300','第一个注册',1),
(NULL,3,'王三','山西省','运城市','河津县','僧楼镇北王村','18191657885','0359-5357871','043300','备用地址',0); 

#创建笔记本商品类别表
CREATE TABLE xz_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32)
);
INSERT INTO xz_laptop_family VALUES
(NULL,'华硕'),
(NULL,'戴尔'),
(NULL,'联想'),
(NULL,'小米'),
(NULL,'Macbook');

#创建商品表-笔记本型号表
CREATE TABLE xz_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,
  product_id INT,
  title VARCHAR(128),
  subtitle VARCHAR(128),
  price DECIMAL(10,2),
  promise VARCHAR(64),
  spec VARCHAR(64),
  name VARCHAR(32),
  os VARCHAR(32),
  memory VARCHAR(32),
  resolution VARCHAR(32),
  video_card VARCHAR(32),
  cpu VARCHAR(32),
  video_memory VARCHAR(32),
  categroy VARCHAR(32),
  disc VARCHAR(32),
  details VARCHAR(1024),
  shelf_time BIGINT,
  sold_count INT,
  is_insale BOOL
);
INSERT INTO xz_laptop VALUES
(NULL,3,170709001,'联想(ThinkPad)轻薄系列E470c(20H3A000CD)14英寸笔记本电脑(i5-6200U 4G 500G 2G独显 Win10)黑色',
 '点击进入5月大促，超值满千减百品牌周','3998','*30天无忧退货 *48小时快速退款','【4700-2017新】i5 4G 500G','ThinkPadE470 c',
 'Linux','4G','标准屏(1366×768)','入门级游戏独立显卡','i5','2G显存','常规本','500G','产品详细说明',1490123456789,23,1),
(NULL,3,170709002,'联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色',
 '点击进入5月大促，超值满千减百品牌周',4699,'*30天无忧退货 *48小时快速退款','【4700-2017新】i5 8G 500G','ThinkPadE470 c',
 'Linux','8G','标准屏(1366*768)','入门级游戏独立显卡','i5-6200U','显存2G','常规本','500G','产品详细说明',1490123456789,80,0),
(NULL,3,170709002,'联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色',
 '点击进入5月大促，超值满千减百品牌周',4699,'*30天无忧退货 *48小时快速退款','【4700-2017新】i5 8G 500G','ThinkPadE470 c',
 'Linux','8G','标准屏(1366*768)','入门级游戏独立显卡','i5-6200U','显存2G','常规本','500G','产品详细说明',1490123456789,80,0),
(NULL,3,170709002,'联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色',
 '点击进入5月大促，超值满千减百品牌周',4699,'*30天无忧退货 *48小时快速退款','【4700-2017新】i5 8G 500G','ThinkPadE470 c',
 'Linux','8G','标准屏(1366*768)','入门级游戏独立显卡','i5-6200U','显存2G','常规本','500G','产品详细说明',1490123456789,80,0),
(NULL,3,170709002,'联想(ThinkPad)轻薄系列E470c(20H3A004CD)14英寸笔记本电脑(i5-6200U 8G 500G 2G独显 Win10)黑色',
 '点击进入5月大促，超值满千减百品牌周',4699,'*30天无忧退货 *48小时快速退款','【4700-2017新】i5 8G 500G','ThinkPadE470 c',
 'Linux','8G','标准屏(1366*768)','入门级游戏独立显卡','i5-6200U','显存2G','常规本','500G','产品详细说明',1490123456789,80,0);




#商品详情图（笔记本）
CREATE TABLE xz_laptop_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,
  sm VARCHAR(128),
  md VARCHAR(128),
  lg VARCHAR(128)
);
INSERT INTO xz_laptop_pic VALUES
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片'),
(NULL,1,'小图片','中图片','大图片');

#用户购物车表
CREATE TABLE xz_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  product_id INT,
  count INT
);
INSERT INTO xz_shopping_cart VALUES
(NULL,1,1,235);

CREATE TABLE xz_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  address_id INT,
  satatus INT,          #1为等待付款，2为等待发货
  order_time BIGINT,    #下单时间
  pay_time BIGINT,  
  deliver_time BIGINT,  #发货时间
  received_time BIGINT  #签收时间
);
INSERT INTO xz_order VALUES
(NULL,1,2,1490123456789,1490123456789,1490123456789,1490123456789);

#用户订单详情表
CREATE TABLE xz_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  count INT
);
INSERT INTO xz_order_detail VALUES
(NULL,1,2);

#首页商品栏目表
CREATE TABLE xz_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);
INSERT INTO xz_index_product VALUES
(NULL,'商品描述','详细描述','图片',4567,'123',456,789,556);

#首页轮播图表
CREATE TABLE xz_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
INSERT INTO xz_index_carousel VALUES
(NULL,'轮播图片路径','轮播图片的描述','点击轮播图片的超级链接');