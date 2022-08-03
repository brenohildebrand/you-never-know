import generateIdentity from "../utils/generateIdentity.js";

export default function create () {
  return {
    id: generateIdentity(),
    from: null,
    to: null,
    props: {}
  }
}