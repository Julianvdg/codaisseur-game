export const ADD_ITEM = 'ADD_ITEM'

export default function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
