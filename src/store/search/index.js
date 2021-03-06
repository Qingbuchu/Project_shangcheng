import { reqGetSearchInfo } from "@/api";
//search模块的仓库
const state = {
  searchList: {}
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    //reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
    //params形参：是当用户派发actions时，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data);
    }
  }
};
//计算属性，在项目当中，为了简化仓库中的数据而生。
const getters = {
  //当前形参state是当前仓库支中的state，并非大仓库中的state
  goodsList(state) {

    return state.searchList.goodsList;
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}