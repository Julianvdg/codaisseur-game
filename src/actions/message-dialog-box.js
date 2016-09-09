export const MESSAGE_DIALOG_BOX = 'MESSAGE_DIALOG_BOX'

export default function messageDialogBox(message) {
  return {
    type: MESSAGE_DIALOG_BOX,
    payload: message,
  }
}
