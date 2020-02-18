import ReactDom from 'react-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import Result from './Result.jsx';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  .field-container {
    display: flex;
  }
  .field {
    flex: 1;
    margin: 0 1em;
    label {
      display: block;
      margin-bottom: 1em;
    }
    textarea {
      width: 100%;
    }
  }
  button {
    margin: 1em;
    padding: 0.5em 2em;
    font-size: 1.25em;
  }
`;

const App = () => {

  const [result, setResult] = useState([]);
  const [a, setA] = useState('ナイアシンアミド,ガラクトミセス培養液（ギュウニュウ）,ＢＧ,トリエチルヘキサノイン,ペンチレングリコール,グリセリン,ナイロン末,ラウロイルグルタミン酸ジ（フィトステリル・オクチルドデシル）,ポリメチルシルセスキオキサン,ＰＯＥ（２０）ヤシ油脂肪酸ソルビタン,パンテノール,イノシトール(保湿成分）,トリ（カプリル・カプリン酸）,マイカ,フェノキシエタノール,（アクリレーツ／アクリル酸アルキル（Ｃ１０－３０））クロスポリマー,ＰＥＧ－１１メチルエーテルジメチコン,ポリアクリルアミド,ＡＭＰ,ウンデシレノイルフェニルアラニン,ベンジルアルコール,（Ｃ１３，１４）イソパラフィン,ＥＤＴＡ－２Ｎａ,加水プルーンドメーティカ,キサンタンガム,安息香酸Ｎａ,ヘキシルデカノール,香料,ラウレス－７,柑橘・レティクラタ(タンジェリン)果皮エキス,メチルパラベン,アスコルビルグルコシド,ウメ果実エキス,ＣＩ７７８９１');
  const [b, setB] = useState('ガラクトミセス培養液（ギュウニュウ）,ナイアシンアミド,ＢＧ,トリエチルヘキサノイン,ペンチレングリコール,グリセリン,ナイロン末,ラウロイルグルタミン酸ジ（フィトステリル・オクチルドデシル）,テストドコサヘンサン,窒化ホウ素,ＰＯＥ（２０）ヤシ油脂肪酸ソルビタン,パンテノール,イノシトール(保湿成分）,トリ（カプリル・カプリン酸）,マイカ,フェノキシエタノール,（アクリレーツ／アクリル酸アルキル（Ｃ１０－３０））,ポリアクリルアミド,ＡＭＰ,ウンデシレノイルフェニルアラニン,ベンジルアルコール,（Ｃ１３，１４）イソパラフィン,ＥＤＴＡ－２Ｎａ,追加ヘキサデカデール,加水プルーンドメーティカ,キサンタンガム,安息香酸Ｎａ,ヘキシルデカノール,香料,ラウレス－７,柑橘・レティクラタ(タンジェリン)果皮エキス,メチルパラベン,アスコルビルグルコシド,ウメ果実エキス,ＣＩ７７８９１');

  const handleAChange = (event) => {
    setA(event.target.value);
  }

  const handleBChange = (event) => {
    setB(event.target.value);
  }

  const handleClick = () => {
    console.log('fire');
    const aArray = a.split(',').sort();
    const bArray = b.split(',').sort();
    const res = [];
    // 削除分
    aArray.forEach((text) => {
      if (bArray.indexOf(text) === -1) {
        res.push([-1, text]);
      } else {
        res.push([0, text]);
      }
    });
    // 追加分
    bArray.forEach((text) => {
      if (aArray.indexOf(text) === -1) {
        res.push([1, text]);
      }
    });
    setResult(res);
    console.log(aArray.length, bArray.length, res.length, res);
  }

  return (
    <Container>
      <h1>Text Differ</h1>
      <div className="field-container">
        <div class="field">
          <label>
            A
            ({a.split(',').length})
          </label>
          <textarea rows="10" onChange={handleAChange} value={a} />
        </div>
        <div class="field">
          <label>
            B
            ({b.split(',').length})
          </label>
          <textarea rows="10" onChange={handleBChange} value={b} />
        </div>
      </div>
      <button onClick={handleClick}>Diff</button>
      <Result aArray={a.split(',').sort()} result={result} />
    </Container>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No root element found');
}
