# viteでapiデータを引っ張ってくる


## 課題内容（どんな作品か）
- 無料apiで引っ張ってきたデータにマテリアルUIでスタイルをあてた
- ポケモンAPIは普通にマテリアルで綺麗に表示してるだけ（下になんとなく123..10みたいなのつけてるけど雰囲気でつけただけなのでそれで次ページにいくとかはない。useStateとEffect使えばいけるかな。しらんけど発表までに対応できたらする）
- レシピAPIは検索をかけたらそのワードにひっかかるレシピが出てくる。マテリアル使ってる。.envでIDとKEYを管理しており、ローカルでは表示されるがデプロイ先では表示されないためなんかいじらなきゃいけんのかな。
- ビールAPIはbootstrapで見た目を整えてECサイト風にして、カートに入れるボタンを押したらプロップスが渡ってカートの数が増える仕様になってるけどなんか急に表示されなくなった。　表示回数制限超えたのかな。CORSエラー出たからconfig内に色々書いてみたがうまいこといかんので発表までに対応できたらします。


[ここから飛べるよ](https://viteapi-phi.vercel.app/)
レシピAPI押すとばぐるというか変なことになるんでポケモンAPIだけ押して確認していただけたらと！！

## 工夫した点・こだわった点
- reactフレームワークを使ったこと
 
## 難しかった点・次回トライしたいこと(又は機能)
- デプロイがうまくできてないことがつらい。.envファイルの取り扱い方。ギットハブ側でもなんかするんかな。バーセル側でも環境変数がうんぬんかんぬんいじらなきゃいけないのかな。

## 質問・疑問・感想、シェアしたいこと等なんでも
どうやったらレシピAPIうまいことデプロイできるか教えて欲しいです。
CORSエラーの解消法も。




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
