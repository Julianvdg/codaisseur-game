import { SHOW_FIRST_STAGE } from '../actions/show-first-stage'
import { CHANGE_STAGE } from '../actions/change-stage'

export default function updateStage( state = 0, { type, payload  } ){
  switch (type) {
    case SHOW_FIRST_STAGE :
      return 4

    case CHANGE_STAGE :
      return payload

    default :
      return state
  }
}
