# CREATORS web site

## file structure

- css: style.css 以外の css

  - sass
    - base: 共通スタイル
    - component: 使い回せそうなブロック
    - layout: 共通で使うレイアウト（ヘッダー、フッターなど）
    - page: 基本そのページでのみで利用されるブロック
    - variants: 変数（色）
  - reset.css: リセット css
  - style.scss: scss ファイル全てを@import している
  - style.css: styel.scss によって生成された css

- img: logo フォルダと各ページごとに分離
- js

- index.html
- contact.html
- service.html
- work.html

scss のフォルダthe 7-1 patternについては[こちら](https://umikuru.com/codingInfo/71pattern.html)を参照
