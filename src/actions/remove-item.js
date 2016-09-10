export const REMOVE_ITEM = 'REMOVE_ITEM'

export default function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    payload: index
  }
}
