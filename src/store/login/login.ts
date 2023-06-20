import { Module } from 'vuex';
import type { ILoginState } from './type';
import { accountLoginRequest } from '../../services/login/login';

const loginModule: Module<ILoginState, any> = {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      token: ''
    };
  },
  mutations: {},
  actions: {
    async loginAccountAction({ commit, dispatch }, payload) {
      await accountLoginRequest(payload);
    }
  }
};

export default loginModule;
