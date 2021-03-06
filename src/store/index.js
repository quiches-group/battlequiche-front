import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: ({ user, party }) => ({ user, party }),
});

export default new Vuex.Store({
  state: {
    tileSets: null,
    movableTiles: null,
    attackTiles: null,
    user: null,
    party: null,
    actions: null,
  },
  mutations: {
    setTileSets(state, tileSets) {
      state.tileSets = tileSets;
    },
    setMovableTiles(state, movableTiles) {
      state.movableTiles = movableTiles;
    },
    setUser(state, user) {
      state.user = user;
    },
    setParty(state, party) {
      state.party = party;
    },
    setActions(state, actions) {
      state.actions = actions;
    },
  },
  actions: {
    setTileSets({ commit }, tileSets) {
      commit('setTileSets', tileSets);
    },
    setMovableTiles({ commit }, movableTiles) {
      commit('setMovableTiles', movableTiles);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setParty({ commit }, party) {
      commit('setParty', party);
    },
    setActions({ commit }, actions) {
      commit('setActions', actions);
    },
  },
  modules: {},
  getters: {
    tileSets: (state) => state.tileSets,
    movableTiles: (state) => state.movableTiles,
    attackTiles: (state) => state.attackTiles,
    user: (state) => state.user,
    party: (state) => state.party,
    actions: (state) => state.actions,
  },
  plugins: [vuexLocalStorage.plugin],
});
