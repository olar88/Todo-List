export function addCount(arr, id) {
  return arr.map((v) => {
    if (v.id === id) {
      return { ...v, count: v.count + 1 }
    } else {
      return { ...v }
    }
  })
}

export function delCount(arr, id) {
  return arr.map((v) => {
    if (v.id === id) {
      return { ...v, count: v.count - 1 }
    } else {
      return { ...v }
    }
  })
}

export function deleteProduct(arr, id) {
  return arr.filter((v) => v.id !== id)
}

export function addSummeryPrice(arr) {
  return arr.reduce((acc,v,i)=>acc+ v.count*v.price,0)
}

export function addSummeryCount(arr) {
  return arr.reduce((acc,v,i)=>acc+v.count,0)
}
