import { SHOW_FIRST_STAGE } from '../actions/show-first-stage'

export default function updateStage( state = 0, { type, payload  } ){
  switch (type) {
    case SHOW_FIRST_STAGE :
      return 1

    default :
      return state
  }
}
