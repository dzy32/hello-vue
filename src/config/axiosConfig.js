import axios from "axios";
//输出通用axios实例
const instance =axios.create({
    timeout:5000,//设置axios请求超时时间
    headers:{
      "Content-Type":"application/json;charset=utf-8"
    }
})
export default {//封装get post 方法
  toPost(url,data){
    return instance.post("/api"+url,data);
  },
  toGet(url,config){
    return instance.get("/api"+url,config);
  }
}
