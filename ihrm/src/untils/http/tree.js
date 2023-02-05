function toTree(arr) {
  const parent = arr.filter((item) => item.pid == 0)
  // 父
  const child = arr.filter((item) => item.pid != 0)
  // 子
  tree(parent, child)
  return parent
}
// 找出父子节点

function tree(parent, child) {
  for (const item of parent) {
    item.children = []
    for (const i in child) {
      const v = child[i]
      if (item.id == v.pid) {
        item.children.push(v)
        // 认父现场
        let c = JSON.parse(JSON.stringify(child))
        // 深拷贝
        c.splice(i, 1)
        // 认完父就可以删除之前的
        tree([v], c)
        // 多层树就需要继续认亲
      }
    }
  }
}

export { toTree, tree }
