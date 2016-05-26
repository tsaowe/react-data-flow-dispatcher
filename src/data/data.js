/**
 * Created by tsaowe on 16/5/25.
 */
export default {
    "baoyouInfo": [
        "测试", // 邮费信息.
        'bbbssdfs'
    ],
    "recommend": {
        "enable": "1", // 1 开启
        "query_str": "pids=111,222" // 促销查询依赖信息
    },
    "error_message": "asdfasd", // 错误消息提示.
    "server_current_time":1231232323,//时间戳
    "cart": {
        "status": 1,//有商品,0 表示没商品
        "message": "您的购物车中没有商品，请先去挑选心爱的商品吧！", // 为空提示
        "cart_update_time": "", // 购物车更新时间，用于购物车同步验证.
        "total_amount": "100.00", // 总有效商品金额.
        "quantity": 1, // 总有效商品数量.
        "item_limit": 10, // 限制数量.
        "mtime": 60, // 倒计时,购物车非空才显示.秒数,示例为1分钟
        "groups": [ // 分组
            {
                "title": "聚美优品发货sddddd",
                "delivery_desc": "包邮",
                "type": "product",//现目前没用
                "total_amount": "100.00", // 有效商品金额，保留两位有效数字.optional
                "quantity": 1, // 有效商品数量，web根据这个控制是否可选择.optional
                "items": [{
                    // 普通商品.
                    "item_key": "商品在购物车的标识",//唯一标示
                    "short_name_desc": "[极速免税]", // 名称前缀，有显示，没有不显示.
                    "item_short_name": "商品短名称", // 商品短名称
                    "price_desc": "", // 价格前缀,有则显示，没有不显示.
                    "item_price": "20.10", // 商品售价
                    "is_presale":0,//
                    "presale_info": {
                        "item_deposit_price": "10.00", // 定金
                        "item_balance_price": "10.10" // 尾款.
                    },
                    "item_buy_price": "10.00", // 商品应付单价,最终用到的真实价格
                    "quantity": 1,// optional
                    "attr_desc": "型号：美加净  容量：56",//合并之前的型号容量
                    "low_inventory": 1, // 低库存提示现实文案[库存紧张]
                    "user_purchase_limit": 2, // 限购数量.
                    "sale_status": "", // 售卖状态.整个disable'已过期/已售光'
                    "end_time": 0, // 结束时间 为0 不结束，为时间戳，在数字时间达到时结束.小于时间戳都可以卖
                    "add_key": "", // 加入购物车的key.
                    "image": "http://p1.jmstatic.com/product/001/602/1602226_std/1602226_200_200.jpg",
                    "item_url": "http://bj.jumei.com/i/deal/d160517p104009zc.html", // 商品链接.
                    "promo_sale": [{
                        "type": "reduce",
                        "type_name": "满减",
                        "rules": [{
                            "type": "reduce",
                            "show_name": "规则名称",
                            "content": "规则描述",
                            "url": "", // 描述链接.
                            "sale_id": "1" // 没有实际作用.
                        }]
                    }],
                    // 新组合附加属性.
                    "show_vcb": 1,//控制问号是否
                    "child_info": {
                        "title": "超值套装搭配:",
                        "footer": "搭配商品库存若抢光,小美将为您随机搭配其他礼物",
                        "child_items": [{
                            "item_short_name": "子商品",
                            "image": "http://p0.jmstatic.com/dev_test/test_product/222/551/222551165_std/222551165_200_200.jpg",
                            "quantity": 1,
                            "attr_desc": "型号：美加净  容量：56",
                            "is_main": "0" // 是否主商品.
                        }]
                    }
                }]
            },{
                "name": "global/2400",
                "type": "global",
                "title": "北京发货",
                "group_total_amount": 200,
                "items": [{
                    // 普通商品.
                    "item_key": "2",//唯一标示
                    "short_name_desc": "[极速免税]", // 名称前缀，有显示，没有不显示.
                    "item_short_name": "商品短名称", // 商品短名称
                    "price_desc": "", // 价格前缀,有则显示，没有不显示.
                    "item_price": "20.10", // 商品售价
                    "is_presale":0,//
                    "presale_info": {
                        "item_deposit_price": "10.00", // 定金
                        "item_balance_price": "10.10" // 尾款.
                    },
                    "item_buy_price": "10.00", // 商品应付单价,最终用到的真实价格
                    "quantity": 1,// optional
                    "attr_desc": "型号：美加净  容量：56",//合并之前的型号容量
                    "low_inventory": 1, // 低库存提示现实文案[库存紧张]
                    "user_purchase_limit": 2, // 限购数量.
                    "sale_status": "", // 售卖状态.整个disable'已过期/已售光'
                    "end_time": 0, // 结束时间 为0 不结束，为时间戳，在数字时间达到时结束.小于时间戳都可以卖
                    "add_key": "", // 加入购物车的key.
                    "image": "http://p1.jmstatic.com/product/001/602/1602226_std/1602226_200_200.jpg",
                    "item_url": "http://bj.jumei.com/i/deal/d160517p104009zc.html", // 商品链接.
                    "promo_sale": [{
                        "type": "reduce",
                        "type_name": "满减",
                        "rules": [{
                            "type": "reduce",
                            "show_name": "规则名称",
                            "content": "规则描述",
                            "url": "", // 描述链接.
                            "sale_id": "1" // 没有实际作用.
                        }]
                    }],
                    // 新组合附加属性.
                    "show_vcb": 1,//控制问号是否
                    "child_info": {
                        "title": "超值套装搭配:",
                        "footer": "搭配商品库存若抢光,小美将为您随机搭配其他礼物",
                        "child_items": [{
                            "item_short_name": "子商品",
                            "image": "http://p0.jmstatic.com/dev_test/test_product/222/551/222551165_std/222551165_200_200.jpg",
                            "quantity": 1,
                            "attr_desc": "型号：美加净  容量：56",
                            "is_main": "0" // 是否主商品.
                        }]
                    }
                },{
                    // 普通商品.
                    "item_key": "3",//唯一标示
                    "short_name_desc": "[极速免税]", // 名称前缀，有显示，没有不显示.
                    "item_short_name": "商品短名称", // 商品短名称
                    "price_desc": "", // 价格前缀,有则显示，没有不显示.
                    "item_price": "20.10", // 商品售价
                    "is_presale":0,//
                    "presale_info": {
                        "item_deposit_price": "10.00", // 定金
                        "item_balance_price": "10.10" // 尾款.
                    },
                    "item_buy_price": "10.00", // 商品应付单价,最终用到的真实价格
                    "quantity": 1,// optional
                    "attr_desc": "型号：美加净  容量：56",//合并之前的型号容量
                    "low_inventory": 1, // 低库存提示现实文案[库存紧张]
                    "user_purchase_limit": 2, // 限购数量.
                    "sale_status": "", // 售卖状态.整个disable'已过期/已售光'
                    "end_time": 0, // 结束时间 为0 不结束，为时间戳，在数字时间达到时结束.小于时间戳都可以卖
                    "add_key": "", // 加入购物车的key.
                    "image": "http://p1.jmstatic.com/product/001/602/1602226_std/1602226_200_200.jpg",
                    "item_url": "http://bj.jumei.com/i/deal/d160517p104009zc.html", // 商品链接.
                    "promo_sale": [{
                        "type": "reduce",
                        "type_name": "满减",
                        "rules": [{
                            "type": "reduce",
                            "show_name": "规则名称",
                            "content": "规则描述",
                            "url": "", // 描述链接.
                            "sale_id": "1" // 没有实际作用.
                        }]
                    }],
                    // 新组合附加属性.
                    "show_vcb": 1,//控制问号是否
                    "child_info": {
                        "title": "超值套装搭配:",
                        "footer": "搭配商品库存若抢光,小美将为您随机搭配其他礼物",
                        "child_items": [{
                            "item_short_name": "子商品",
                            "image": "http://p0.jmstatic.com/dev_test/test_product/222/551/222551165_std/222551165_200_200.jpg",
                            "quantity": 1,
                            "attr_desc": "型号：美加净  容量：56",
                            "is_main": "0" // 是否主商品.
                        }]
                    }
                }]
            }
        ]
    }
}
