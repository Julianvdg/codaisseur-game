import { ADD_ITEM } from '../actions/add-item'

export default function updateInventory( state = [], { type, payload  } ){
  switch (type) {
    case ADD_ITEM:
    const newState = state.concat([payload])
    console.log(newState)
      return state.concat([payload])

    default :
      return state
  }
}
