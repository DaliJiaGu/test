import { ILoginState } from './login/type';

// export interface IRootState {
//   allDepartment: any[];
//   allRole: any[];
//   allMenus: any[];
// }

// 写一个子模块的接口
export interface IRootWithModules {
  login: ILoginState;
}

export type StoreType = IRootWithModules;
