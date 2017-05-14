# 举报用户信息表
CREATE TABLE IF NOT EXISTS `report_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 举报信息ID
  `user_id` int(11) NOT NULL,                                                   # 举报用户ID
  `reason` text NOT NULL,                                                       # 举报原因
  `status` tinyint(4) NOT NULL DEFAULT 0,                                       # 举报状态，其中0为未处理，1为已处理
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 举报信息发布时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 举报信息修改时间
  PRIMARY KEY(`id`),
  CONSTRAINT FK_report_user_id FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 插入举报用户信息
INSERT INTO `report_user` SET
  user_id = 5,
  reason =  '发布色情淫秽信息',
  status = 0;

INSERT INTO `report_user` SET
  user_id = 5,
  reason =  '发布广告',
  status = 0;

INSERT INTO `report_user` SET
  user_id = 5,
  reason =  '发布不实相约信息',
  status = 0;

INSERT INTO `report_user` SET
  user_id = 5,
  reason =  '发布无关信息',
  status = 1;


# 举报相约信息表
CREATE TABLE IF NOT EXISTS `report_invitation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 举报信息ID
  `invitation_id` int(11) NOT NULL,                                             # 举报相约信息ID
  `reason` text NOT NULL,                                                       # 举报原因
  `status` tinyint(4) NOT NULL DEFAULT 0,                                       # 举报状态，其中0为未处理，1为已处理
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 举报信息发布时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 举报信息修改时间
  PRIMARY KEY(`id`),
  CONSTRAINT FK_report_invitation_id FOREIGN KEY(invitation_id) REFERENCES invitation(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 举报评论信息表
CREATE TABLE IF NOT EXISTS `report_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,                                         # 举报信息ID
  `reply_id` int(11) NOT NULL,                                                  # 举报评论信息ID
  `reason` text NOT NULL,                                                       # 举报原因
  `status` tinyint(4) NOT NULL DEFAULT 0,                                       # 举报状态，其中0为未处理，1为已处理
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,                             # 举报信息发布时间
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 举报信息修改时间
  PRIMARY KEY(`id`),
  CONSTRAINT FK_report_reply_id FOREIGN KEY(reply_id) REFERENCES reply(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


