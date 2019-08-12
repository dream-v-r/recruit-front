const titleFirst = '採用情報 - ';
const titleLast = ' - ドリームビジョン株式会社'

export default {
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: `${titleFirst}${this.meta.title}${titleLast}` },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url }
      ]
    }
  }
}
