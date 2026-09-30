// トップ画面の文言と、最初の画面「どの症状でお悩みですか？」の一覧。
// 面を足したら faces に1行足して types/◯◯.js を置く。文言を直すときはこのファイルだけ（index.html は触らない）
window.TYPECHECK_FACES = {
  title: "体のサインチェック",
  byline: "若すぎ先生　腸リバース研究室",

  // トップ画面（START の画面）
  start: {
    eyebrow: "Body Sign Check",
    title: "体のサインチェック",
    sub: "いま出ている体のサインから、あなたの型を知る",
    button: "START",
    time: "所要時間 1分",
    count: "全8問",
    byline: "若すぎ先生・腸リバース研究室"
  },

  question: "どの症状でお悩みですか？",
  lead: "1つ選ぶと、8問で、いまどこで止まっているかと、きょうやることが分かります。答えはどこにも送りません。",
  faces: [
    { key: "benpi", label: "便秘", sub: "出ない、硬い、残る、いきむ" },
    { key: "kettou", label: "血糖が高め", sub: "健診で言われた、食後に眠い、甘い物が止まらない" },
    { key: "hari", label: "お腹の張り・ガス", sub: "夕方パンパン、おなら、におい" },
    { key: "onaka", label: "お腹まわり・脂肪肝", sub: "ぽっこり、痩せない、健診の中性脂肪や肝臓の数字" }
  ],
  other: {
    label: "どれにも当てはまらない、別の悩み",
    title: "そのまま部屋で相談してください",
    body: "チェックにない悩みは、部屋で直接答えています。報告のスレッドに、いま困っていることを一言。翌日の20時に、僕からアドバイスしますね。匿名のままで大丈夫です。相談だけでも。",
    button: "オプチャで相談してみる",
    url: "https://line.me/ti/g2/69-75A1gh3Ttoy0PiqOduBgTs-c6ikZBjYaWXw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    under: "LINEのオープンチャット「腸リバース研究室」が開きます。"
  },
  footer: "僕は医師ではありません。ここに書いたのは、食べ方と出し方の順番だけです。数字の判定と薬のことは、主治医と薬剤師に。"
};
