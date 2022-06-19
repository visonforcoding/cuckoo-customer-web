import { createStore } from 'vuex'
/**
 * 创建仓库和导出
 */
export default createStore({
    state () {
        return {
          contacts: [],
        }
      },
      mutations: {
        logined (state,contact) {
            //上线
          state.contacts.push(contact)
        }
      }

})