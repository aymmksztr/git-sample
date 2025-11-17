const callApi = (id) => {
  // 本来はAPIを叩いて商品データを取得している想定
  return [
    {
      id,
      price: "1200",
      salePrice: "￥999",
      category: 1,
      tags: ["人気", "期間限定"],
      options: [
        { name: "色", values: ["赤", "青", "緑"] },
        { name: "サイズ", values: ["S", "M", "L"] },
      ],
      stock: 10,
      description: "サンプル商品だよ",
    },
    {
      id: id + 1,
      price: "￥2000",
      salePrice: 1800,
      category: 3,
      tags: [],
      options: [{ name: "容量", values: ["100ml"] }],
      stock: 0,
      description: "別の商品だよ",
    },
  ];
};

const getData = async (id) => {
  const response = callApi(id);

  let items = [];

  if (response) {
    for (let i = 0; i < response.length; i++) {
      const temp = response[i];

      // 税込み価格計算
      const price = parseInt(temp.price) * 1.1;
      const salePrice = parseInt(temp.salePrice) * 1.1;

      // カテゴリ変換
      let categoryName = "";
      if (temp.category === 1) {
        categoryName = "食品";
      }
      if (temp.category === 2) {
        categoryName = "雑貨";
      }
      if (temp.category === 3) {
        categoryName = "書籍";
      }
      if (temp.category === 4) {
        categoryName = "その他";
      }

      // タグ表示
      if (temp.tags) {
        if (temp.tags.length > 0) {
          for (let j = 0; j < temp.tags.length; j++) {
            console.log("タグ:", temp.tags[j]);
          }
        } else {
          console.log("タグなし");
        }
      }

      // オプション表示
      for (let k = 0; k < temp.options.length; k++) {
        const opt = temp.options[k];

        if (opt.values) {
          for (let m = 0; m < opt.values.length; m++) {
            console.log(`オプション: ${opt.name} → 値: ${opt.values[m]}`);
          }
        }
      }

      if (price && salePrice && categoryName) {
        items.push({
          id: temp.id,
          price,
          salePrice,
          categoryName,
          stock: temp.stock,
        });
      }
    }
  }

  return items;
};

getData();
