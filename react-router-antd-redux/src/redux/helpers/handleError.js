export default function(state, { payload: err }) {
  if (err) {
    console.error(err);
  }
  return state;
}
