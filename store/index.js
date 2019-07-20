export const state = () => ({
  pageList: [
    {
      title1: 'メッセージ',
      title2: 'MESSAGE',
      url: 'message'
    },
    {
      title1: '社員紹介',
      title2: 'PEOPLE',
      url: 'people_index'
    },
    {
      title1: '福利厚生・社風',
      title2: 'CULTURE',
      url: 'culture-company-style'
    },
    {
      title1: '会社概要',
      title2: 'ABOUT US',
      url: 'about'
    },
    {
      title1: '採用情報',
      title2: 'RECRUIT',
      url: 'entry'
    },
    {
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
