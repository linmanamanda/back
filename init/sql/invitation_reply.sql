# 相约信息和评论信息关联表
CREATE TABLE IF NOT EXISTS `invitation_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 关联信息ID
  `invitation_id` int(11) NOT NULL,                                             # 相约信息ID
  `reply_id` int(11) NOT NULL,                                                  # 评论信息ID 
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 关联信息创建时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 关联信息修改时间
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入关联信息
INSERT INTO `invitation_reply` SET
  invitation_id = 1,
  reply_id = 1;

INSERT INTO `invitation_reply` SET
  invitation_id = 1,
  reply_id = 2;

INSERT INTO `invitation_reply` SET
  invitation_id = 1,
  reply_id = 3;

INSERT INTO `invitation_reply` SET
  invitation_id = 1,
  reply_id = 4;