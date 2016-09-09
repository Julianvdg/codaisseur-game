import { MESSAGE_DIALOG_BOX } from '../actions/message-dialog-box'
import { EMPTY_DIALOG_BOX } from '../actions/empty-dialog-box'

export default function updateDialogBox( state = "I'm a message!", { type, payload  } ){
  switch (type) {
    case MESSAGE_DIALOG_BOX :
      console.log("Message fired")
      return payload

    case EMPTY_DIALOG_BOX :
      console.log("Emptied")
      const empty = ""
      return empty

    default :
      return state
  }
}