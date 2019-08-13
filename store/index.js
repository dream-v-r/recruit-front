export const state = () => ({
  pageList: [
    {
      id: 1,
      title1: 'メッセージ',
      title2: 'message',
      url: 'message',
    },
    {
      id: 2,
      title1: '社員紹介',
      title2: 'people',
      url: 'people_index',
    },
    {
      id: 3,
      title1: '福利厚生・社風',
      title2: 'culture',
      url: 'culture-company-style',
    },
    {
      id: 4,
      title1: '会社概要',
      title2: 'about us',
      url: 'http://www.dream-v.co.jp/company/outline.html',
    },
    {
      id: 5,
      title1: '採用情報',
      title2: 'recruit',
      url: 'job/newgrads'
    },
    {
      id: 6,
      title1: '説明会',
      title2: 'event',
      url: 'seminar'
    }
  ],
  hamburger: false
})

export const getters = {
  pageList(state) {
    return state.pageList
  },
  hamburger(state) {
    return state.hamburger
  }
}

export const mutations = {
  hamburgerChange(state) {
    state.hamburger = !state.hamburger
  },
  hamburgerClose(state) {
    state.hamburger = false;
  }
}

