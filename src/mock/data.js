/**
 * Created by GuoMiaomiao on 2018/4/16.
 */
// const infoLogo = require('../images/information.png');
// const userLogo = require('../images/user.png');
export const submenu = [
  {
    title: 'demos',
    iconName: 'el-icon-document',
    // icon:infoLogo,
    submenu: [
      {
        title: 'todo-demo',
        url: '/todo'
      }, {
        title: '目录1-2',
        url: '/test'
      }, {
        title: '目录1-3',
        url: '/test',
        submenu: [
          {
            title: '目录1-3-1',
            url: '/test'
          }, {
            title: '目录1-3-2',
            url: '/test'
          }
        ]
      }
    ]
  }, {
    title: '目录2',
    url: '/test'
    // icon:userLogo,
  }
]
