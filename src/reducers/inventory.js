import { ADD_ITEM } from '../actions/add-item'

export default function updateInventory( state = [], { type, payload  } ){
  switch (type) {
    case ADD_ITEM:
      console.log(state)
      console.log(payload)
      return state.concat([payload])



    default :
      return state
  }
}
