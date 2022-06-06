import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderList: [],
    value: "",
    sortDirection: "asc",
  },
  getters: {},
  mutations: {
    sortBy(state, sort) {
      if (sort === "id") {
        if (state.sortDirection === "asc") {
          state.orderList.sort((a, b) => b.id - a.id);
          state.sortDirection = "dec";
        } else if (state.sortDirection === "dec") {
          state.orderList.sort((a, b) => a.id - b.id);
          state.sortDirection = "asc";
        }
      } else if (sort === "orders") {
        if (state.sortDirection === "asc") {
          state.orderList.sort((a, b) => b.orders - a.orders);
          state.sortDirection = "dec";
        } else if (state.sortDirection === "dec") {
          state.orderList.sort((a, b) => a.orders - b.orders);
          state.sortDirection = "asc";
        }
      } else if (sort === "status") {
        if (state.sortDirection === "asc") {
          state.orderList.sort((a, b) => (b.status > a.status ? -1 : 1));
          state.sortDirection = "dec";
        } else if (state.sortDirection === "dec") {
          state.orderList.sort((a, b) => (a.status < b.status ? 1 : -1));
          state.sortDirection = "asc";
        }
      } else if (sort === "mail") {
        if (state.sortDirection === "asc") {
          state.orderList.sort((a, b) => (b.mail > a.mail ? -1 : 1));
          state.sortDirection = "dec";
        } else if (state.sortDirection === "dec") {
          state.orderList.sort((a, b) => (a.mail < b.mail ? 1 : -1));
          state.sortDirection = "asc";
        }
      }
    },

    setOrderList(state, payload) {
      state.orderList = payload;
    },
  },
  actions: {},
  modules: {},
});
