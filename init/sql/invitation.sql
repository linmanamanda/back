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
  title = '普通用户发布的相约信息2',
  content = '普通用户发布的相约信息2，相约时间为2017-05-16 10:00:00， 相约地点为重邮雨红莲， 状态为等待相约',
  time = '2017-05-16 10:00:00',
  location = '重邮雨红莲',
  status = 0,
  created_by = 36;

INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息3',
  content = '普通用户发布的相约信息3，相约时间为2017-05-17 12:30:00， 相约地点为新校门， 状态为等待相约',
  time = '2017-05-17 12:30:00',
  location = '新校门',
  status = 0,
  created_by = 36;

INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息4',
  content = '普通用户发布的相约信息4，相约时间为2017-05-17 11:30:00， 相约地点为新校门， 状态为相约成功',
  time = '2017-05-17 11:30:00',
  location = '新校门',
  status = 1,
  created_by = 36;


INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息5',
  content = '普通用户发布的相约信息5，相约时间为2017-05-17 08:30:00， 相约地点为老校门， 状态为相约成功',
  time = '2017-05-17 08:30:00',
  location = '老校门',
  status = 1,
  created_by = 36;

INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息6',
  content = '普通用户发布的相约信息6，相约时间为2017-05-17 08:30:00， 相约地点为老校门， 状态为已过期',
  time = '2017-05-17 08:30:00',
  location = '老校门',
  status = 2,
  created_by = 36;

INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息7',
  content = '普通用户发布的相约信息7，相约时间为2017-05-17 08:30:00， 相约地点为老校门， 状态为已过期',
  time = '2017-05-17 08:30:00',
  location = '老校门',
  status = 2,
  created_by = 36;

INSERT INTO `invitation` SET 
  title = '普通用户发布的相约信息8',
  content = '普通用户发布的相约信息8，相约时间为2017-05-17 08:30:00， 相约地点为老校门， 状态为封禁',
  time = '2017-05-17 08:30:00',
  location = '老校门',
  status = 3,
  created_by = 36;






