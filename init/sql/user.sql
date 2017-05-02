# 用户信息表
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,             # 用户ID
  `email` varchar(255) DEFAULT '',                  # 邮箱地址
  `password` varchar(255) NOT NULL,                 # 密码
  `name` varchar(255) NOT NULL,                     # 用户名
  `nickname` varchar(255) DEFAULT '',               # 用户昵称
  `brief_introduction` longtext,                    # 个人简介
  `authority` tinyint(4) DEFAULT 0,                 # 权限级别
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP, # 创建时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP, # 更新时间
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入用户信息
INSERT INTO `user` SET name = 'linman', email = 'linmanamanda@gmail.com', password = 'linman2491';