import { OPENDOOR } from '../actions/opendoor'

export default function openDoor( state = false, { type, payload  } ){
  switch (type) {
    case OPENDOOR :
      return true

    default :
      return state
  }
}
