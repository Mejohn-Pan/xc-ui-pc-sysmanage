//public是对axios的工具类封装，定义了http请求方法
import http from './../../../base/api/public';
import querystring from 'querystring';
let sysConfig = require('@/../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;


//定义页面查询方法
export const page_list = (page,size,params)=>{
  //请求服务端的页面接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size);
};





