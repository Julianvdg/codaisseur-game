import { MONDY } from '../actions/mondy'

export default function mondy( state = false, { type, payload  } ){
  switch (type) {
    case MONDY :
      return true

    default :
      return state
  }
}
