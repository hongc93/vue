import { loadUser } from '@/assets/js/cache'

const state = {
  test: 'vuex test',

  // 用户信息
  userInfo: loadUser(),
}

export default state