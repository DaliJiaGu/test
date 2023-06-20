import xlRequest from '../index';
import { IDataType } from '../type';
interface IAccount {
  name: string;
  password: string;
}
interface ILoginData {
  id: number;
  name: string;
  token: string;
}
export function accountLoginRequest(account: IAccount) {
  return xlRequest.post<IDataType<ILoginData>>({
    url: '/login',
    data: account,
    interceptors: {
      responseInterceptor(res) {
        return res;
      },
      responseInterceptorCatch(error) {
        console.log(error.response.status);
        if (error.response.status == 400) {
          window.alert('账号密码输入错误');
        }
        return error;
      }
    },
    showLoading: true
  });
}
