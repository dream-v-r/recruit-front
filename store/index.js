export const state = () => ({
  pageList: [
    {
      id: 1,
      title1: 'メッセージ',
      title2: 'MESSAGE',
      url: 'message'
    },
    {
      id: 2,
      title1: '社員紹介',
      title2: 'PEOPLE',
      url: 'people_index'
    },
    {
      id: 3,
      title1: '福利厚生・社風',
      title2: 'CULTURE',
      url: 'culture-company-style'
    },
    {
      id: 4,
      title1: '会社概要',
      title2: 'ABOUT US',
      url: 'about'
    },
    {
      id: 5,
      title1: '採用情報',
      title2: 'RECRUIT',
      url: 'entry'
    },
    {
      id: 6,
      title1: '説明会',
      title2: 'EVENT',
      url: 'seminar'
    }
  ]
})

export const getters = {
  pageList(state) {
    return state.pageList
  }
}
