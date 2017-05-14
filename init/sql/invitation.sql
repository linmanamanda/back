# 相约信息表
CREATE TABLE IF NOT EXISTS `invitation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 相约信息ID
  `title` varchar(255) NOT NULL,                                                # 相约信息标题
  `content` text NOT NULL,                                                      # 相约信息内容
  `time` timestamp,                                                             # 相约时间
  `location` varchar(255) NOT NULL,                                             # 相约地点
  `status` tinyint(4) NOT NULL DEFAULT 0,                                       # 相约信息状态， 其中0为等待相约，1为相约成功，2为信息已过期，3为封禁
  `created_by` int(11) NOT NULL,                                                # 相约信息发布人
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 相约信息发布时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 相约信息修改时间
  PRIMARY KEY(`id`),
  CONSTRAINT FK_created_by FOREIGN KEY(created_by) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入相约信息
INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息',
  content = '普通用户发布的相约信息1，相约时间为2017-05-14 22:25:00， 相约地点为重邮老图书馆',
  time = '2017-05-14 22:25:00',
  location = '重邮老图书馆',
  status = 0,
  created_by = 36;

INSERT INTO `invitation` SET 
  title = '英语口语角约对练小伙伴',
  content = '英语口语角在春华秋实广场，求约小伙伴一起对练',
  time = '2017-05-10 20:00:00',
  location = '重邮春华秋实广场',
  status = 0,
  created_by = 3;

INSERT INTO `invitation` SET 
  title = '老操场夜跑组队',
  content = '晚上八点左右老操场夜跑组队',
  time = '2017-05-12 20:00:00',
  location = '重邮老操场',
  status = 0,
  created_by = 31;

INSERT INTO `invitation` SET 
  title = '考研求研友',
  content = '考研求研友，在数图自习',
  time = '2017-05-13 10:00:00',
  location = '重邮数图',
  status = 0,
  created_by = 31;

INSERT INTO `invitation` SET 
  title = '五一仙女山游玩，来组队',
  content = '五一仙女山游玩，来组队',
  time = '2017-05-01 12:00:00',
  location = '重庆仙女山',
  status = 0,
  created_by = 31;

INSERT INTO `invitation` SET 
  title = '江北机场拼车回学校',
  content = '江北机场拼车回学校',
  time = '2017-05-03 14:30:00',
  location = '重庆江北机场',
  status = 0,
  created_by = 31;



