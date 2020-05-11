import vue from 'vue';
import vuex from 'vuex';
import user from './module/user';
import stat from './module/stat';

vue.use(vuex);

export default new vuex.Store({
    modules: {
        user, stat,
    },
});