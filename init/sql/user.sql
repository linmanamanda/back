# 用户信息表
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,             # 用户ID
  `email` varchar(255) DEFAULT '',                  # 邮箱地址
  `password` varchar(255) NOT NULL,                 # 密码
  `username` varchar(255) DEFAULT '',               # 用户名
  `status` tinyint(4) DEFAULT 0,                    # 用户状态，其中0为正常，1为封禁
  `authority` tinyint(4) DEFAULT 0,                 # 权限级别，其中0为普通用户，1为管理员，2为超级管理员
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP, # 创建时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP, # 更新时间
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入用户信息
INSERT INTO `user` SET email = 'linmanamanda@gmail.com', password = 'linman2491', authority = 2;
INSERT INTO `user` SET email = 'liyitong@snh48.com', password = 'liyitong', authority = 0;
INSERT INTO `user` SET email = 'huangtingting@snh48.com', password = 'huangtingting', authority = 0;
INSERT INTO `user` SET email = 'khyyh@snh48.com', password = 'khyyh', authority = 1;
INSERT INTO `user` SET email = 'khgay@snh48.com', password = 'khgay', authority = 0, status = 1;