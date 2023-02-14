import { atom } from "recoil";
const searchInput = atom({
  key: "searchInput",
  default: "",
});
export default searchInput;
