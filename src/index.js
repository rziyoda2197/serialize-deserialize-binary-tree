class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  if (!root) return 'X,';
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
  const nodes = data.split(',');
  let index = 0;

  function helper() {
    const val = nodes[index++];
    if (val === 'X') return null;
    const node = new Node(parseInt(val));
    node.left = helper();
    node.right = helper();
    return node;
  }

  return helper();
}
```

Kodda `serialize` funksiyasi binary tree ni string ga aylantiradi. Uning ishlash prinsipi shundaki, agar node bo'sh bo'lsa, u "X" degan qiymatni qo'shadi. Boshqa holatlarda, u node qiymatini qo'shadi va undan keyingi node larni qo'shadi.

`deserialize` funksiyasi esa string dan qayta binary tree quradi. U string ni node lari orasida bo'lgan separatorlar bo'yicha ajratib oladi va har bir node uchun `helper` funksiyasini chaquradi. `helper` funksiyasi agar node bo'sh bo'lsa, null qiymatini qaytaradi. Boshqa holatlarda, u node ni yaratib, undan keyingi node larni chaquradi.
