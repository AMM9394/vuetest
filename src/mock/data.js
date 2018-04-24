/**
 * Created by GuoMiaomiao on 2018/4/16.
 */
// const infoLogo = require('../images/information.png');
// const userLogo = require('../images/user.png');
export const submenu = [
  {
    title:'信息服务',
    // icon:infoLogo,
    submenu:[
      {
        title:'个人信息管理',
        url:'#/personal',
      },{
        title:'工资查询',
        url:'#/salary',
      },{
        title:'医疗记录',
        url:'#/test',
      },{
        title:'供给关系',
        url:'#/test',
      },{
        title:'被服领取',
        url:'#/uniform',
      },{
        title:'住房查询',
        url:'#/house',
      },{
        title:'保障标准',
        url:'#/test',
      },{
        title:'保障卡管理',
        url:'#/test',
        submenu:[
          {
            title:'当前卡信息',
            url:'#/bzkbasic',
          },{
            title:'补换卡申请',
            url:'#/test',
          },{
            title:'历史记录',
            url:'#/test',
          },
        ],
      },
    ],
  },{
    title:'用户管理',
    url:'#/test',
    // icon:userLogo,
  },
];
