/* eslint-disable prettier/prettier */
import axios from "axios";

const basePath = `https://newsapi.org/v2/top-headlines?`;

const home = {
  namespaced: true,
  state: {
    articles: [],
  },
  mutations: {
    SET_ARTICLES (state, payload) {
      state.articles = payload.data;
    },
  },
  actions: {
    async GetIndex ({ commit }, payload) {
      return new Promise((resolve) => {
        let search =
          typeof payload === "undefined"
            ? ""
            : payload.search !== null
              ? payload.search
              : "";

        let category =
          typeof payload === "undefined"
            ? ""
            : payload.category !== null
              ? payload.category
              : "";

        let country =
          typeof payload === "undefined"
            ? ""
            : payload.country !== null
              ? payload.country
              : "";
        let sources = typeof payload === "undefined"
          ? ""
          : payload.sources !== null
            ? payload.sources
            : ""

        let language = typeof payload === "undefined"
          ? ""
          : payload.language !== null
            ? payload.language
            : ""

        axios.get(`${basePath}q=${search}&country=${country}&category=${category}&sources=${sources}&language=${language}&apiKey=553b8c33ffe144139ab98006382794e6`)
          .then((res) => {
            let data = res.data.articles
            commit('SET_ARTICLES', { data: data })
            resolve({
              data
            })
          })
      });
    },
  },
  getters: {
    articles (state) {
      return state.articles
    }
  }
};

export default home
