import { MONDY } from '../actions/mondy-people'

export default function people( state = {}, { type, payload  } ){
  switch (type) {
    case MONDY :
      return Object.assign({}, state, { mondy: true, })

    default :
      return state
  }
}
