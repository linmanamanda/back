# 评论信息表
CREATE TABLE IF NOT EXISTS `reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 评论信息ID
  `content` text NOT NULL,                                                      # 评论信息内容
  `type` tinyint(4) NOT NULL DEFAULT 0,                                         # 评论信息类型，其中0为直接回复相约信息，1为回复其它用户
  `from_id` int(11) NOT NULL,                                                   # 评论由何人发布
  `to_id` int(11) DEFAULT 0,                                                    # 如果评论信息类型为0，则为空（0），如果评论信息类型为1，则为被回复的人ID
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 评论信息创建时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 评论信息修改时间
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入评论信息
INSERT INTO `reply` SET
  content = '阿阿阿，要期末了，一起自习吧',
  type = 0,
  from_id = 5;

INSERT INTO `reply` SET
  content = '一起一起！我现在就在老图二楼，来约！',
  type = 0,
  from_id = 6;

INSERT INTO `reply` SET
  content = '已经在老图三楼坐等！',
  type = 0,
  from_id = 7;

INSERT INTO `reply` SET
  content = '好巧！',
  type = 1,
  from_id = 7,
  to_id = 6;

