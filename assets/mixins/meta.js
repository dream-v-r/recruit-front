const titleFirst = ' - 採用情報';
const titleLast = ' - ドリームビジョン株式会社'
const urlBase = 'http://www.dream-v.co.jp/recruit/'

export default {
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { name: 'keywords', content: this.meta.keywords},
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: `${this.meta.title}${titleFirst}${titleLast}` },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: `${urlBase}${this.meta.url}` }
      ]
    }
  }
}
