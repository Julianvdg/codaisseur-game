export const CHANGE_STAGE = 'CHANGE_STAGE'

export default function changeStage(stageReference) {
  return {
    type: CHANGE_STAGE,
    payload: stageReference,
  }
}
