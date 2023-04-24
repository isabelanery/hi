import axios from "axios";

const BASE_URI="https://api.api-onepiece.com/"

export async function getOnePieceData(data) {
  const url = `${BASE_URI}/${data}`
  const battles = await axios.get(url);

  return battles.data;
}