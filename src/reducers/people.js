import { MONDY } from '../actions/mondy-people'
import { MIRIAM } from '../actions/miriam-people'
import { MONDYREMOVE } from '../actions/mondy-remove-people'

export default function people( state = {}, { type, payload  } ){
  switch (type) {
    case MONDY :
      return Object.assign({}, state, { mondy: true, })

    case MONDYREMOVE :
      return Object.assign({}, state, { mondy: false, })

    case MIRIAM :
      const present = Math.random()
      if (present > 0.33) return Object.assign({}, state, { miriam: true, })
      return Object.assign({}, state, { miriam: false, })

    default :
      return state
  }
}
