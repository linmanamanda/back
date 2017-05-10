# 相约信息表
CREATE TABLE IF NOT EXISTS `invitation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 相约信息ID
  `title` varchar(255) NOT NULL,                                                # 相约信息标题
  `content` text NOT NULL,                                                      # 相约信息内容
  `time` timestamp,                                                             # 相约时间
  `location` varchar(255) NOT NULL,                                             # 相约地点
  `status` tinyint(4) NOT NULL DEFAULT 0,                                       # 相约信息状态， 其中0为等待相约，1为相约成功，2为信息已过期，3为封禁
  `created_by` varchar(255) NOT NULL,                                           # 相约信息发布人
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 相约信息发布时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 相约信息修改时间
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入相约信息
INSERT INTO `invitation` SET 
  title = '期末复习约自习小伙伴',
  content = '宿舍在二教附近，求约小伙伴一起在老图自习',
  time = '2017-05-10 08:00:00',
  location = '重邮老图书馆',
  status = 0,
  created_by = 1;

INSERT INTO `invitation` SET 
  title = '英语口语角约对练小伙伴',
  content = '英语口语角在春华秋实广场，求约小伙伴一起对练',
  time = '2017-05-10 20:00:00',
  location = '重邮春华秋实广场',
  status = 0,
  created_by = 2;


