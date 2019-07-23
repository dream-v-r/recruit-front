# recruit-front

> My brilliant Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

- コンポーネントは複数単語
- dataは関数
- v-forはkey使用
- v-forとv-ifを一緒に使わない
- コンポーネントのCSSはscopedを使用
  - scss記法
- ファイル名はすべてパスカルケース
  - MyComponent
- 基底(base)となるコンポーネントはBase,App,Vなどのプレフィックスをつける
  - BaseButton,App,Button.VButton
- ページごとに１回しか使われないコンポーネントはTheプレフィックスをつける
  - TheHeader,TheFooter
- 密結合型コンポーネントは親の名前をプレフィックスに含む
  ```
  ×
  TodoList.vue
  TodoItem.vue
  TodoButton.vue
  
  ○
  TodoList.vue
  TodoListItem.vue
  TodoListItemButton.vue
  ```

- 中身を持たないコンポーネントは自己終了型で書く

  ```
  ×
  <MyComponent></MyComponent>　
  
  ○
  <MyComponent/>
  ```
- プロパティ名はキャメルケース

  ```
  greetingText
  ```
- 複数の属性をもつ要素は1行に1要素ずつ書く
```
 <img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
 >
 
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>

```

- templateの中で複雑な式を使わないでcomputedやmethodsで行う
- 複雑なcomputedはできるだけ単純なプロパティに分割する
- v-bindは「:」、v-on:は「@」で省略する

optimizedImagesで画像を圧縮するのでPhotoShopでは100%で書き出す  
generate時に圧縮

全部大文字のテキスト書くときは、
全部小文字か先頭だけ大文字で書いてCSSで全部大文字にする
