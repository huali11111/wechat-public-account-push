/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4cfe8facbd8d4887',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '94b891a9f4099bb4877819576ec483cb',

  PROVINCE: '浙江',
  CITY: '宁波',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小天使',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'or-Nv5zi6Y8pO9v1BhyuVj042tsc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Vnxhk8lfvY7JRd_5EpcLlZY6u3NSiFD9p0tZguvB02w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小天使', year: '2002', date: '10-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
         type: '生日', name: '小天使', year: '2002', date: '10-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '12-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-22' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '6A9Q5s6LjBZPagOmJorRoK_4AjaUYUoG2D0Mp7JaOJE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'Vnxhk8lfvY7JRd_5EpcLlZY6u3NSiFD9p0tZguvB02w',
    }
  ],

}

module.exports = USER_CONFIG

