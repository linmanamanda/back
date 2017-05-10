# 用户信息表
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 用户ID
  `email` varchar(255) NOT NULL UNIQUE,                                         # 邮箱地址
  `password` varchar(255) NOT NULL,                                             # 密码
  `username` varchar(255) DEFAULT '',                                           # 用户名
  `status` tinyint(4) DEFAULT 0,                                                # 用户状态，其中0为正常，1为封禁
  `authority` tinyint(4) DEFAULT 0,                                             # 权限级别，其中0为普通用户，1为管理员，2为超级管理员
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 创建时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 更新时间
  UNIQUE(`email`),
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入用户信息
INSERT INTO `user` SET email = 'linmanamanda@gmail.com', password = 'linman2491', username = '林蔓', authority = 2;
INSERT INTO `user` SET email = 'liyitong@snh48.com', password = 'liyitong', username = '李艺彤', authority = 0;
INSERT INTO `user` SET email = 'huangtingting@snh48.com', password = 'huangtingting', username = '黄婷婷', authority = 0;
INSERT INTO `user` SET email = 'khyyh@snh48.com', password = 'khyyh', username = '卡黄应援会', authority = 1;


INSERT INTO `user` SET email = 'khgay@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay1@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay2@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay3@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1; 
INSERT INTO `user` SET email = 'khgay4@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay5@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay6@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay7@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay8@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay9@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay10@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay11@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay12@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay13@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay14@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay15@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay16@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay17@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay18@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay19@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay20@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay21@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay22@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay23@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay24@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;
INSERT INTO `user` SET email = 'khgay25@snh48.com', password = 'khgay', username = '卡黄gay', authority = 0, status = 1;