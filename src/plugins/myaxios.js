// 引入axios模块
import axios from 'axios';

const MyAxios = {};
MyAxios.install = function (Vue) {
  Vue.prototype.$http = axios;
};

export default MyAxios;
