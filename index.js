import { List } from 'immutable'

class Node {
  constructor(value, ...childNodes) {
    this.value = value
    this.children = childNodes.map(n => n.withParent(this))
  }

  withParent(node) {
    this.parent = node
    return this
  }

  pathFromRoot() {
    const parentPath = this.parent && this.parent.pathFromRoot() || []
    return parentPath.concat([this])
  }
}

export function permutations(...values) {
  const leaves = []

  function generatePaths(...vals) {
    const nodes = []
    const visited = {}
    vals.forEach((v, i) => {
      if (visited[v]) {
        return
      }

      visited[v] = true
      const before = List(vals).take(i)
      const after = List(vals).skip(i + 1)
      const childList = before.concat(after)
      const node = new Node(v, ...generatePaths(...childList))
      nodes.push(node)

      if (childList.size === 0) {
        leaves.push(node)
      }

    })

    return nodes
  }

  generatePaths(...values)
  return leaves
}

//const leaves = permutations('a', 'b', 'b')
//console.log(leaves.map(p => p.pathFromRoot().map(n => n.value)))
