import axios from "axios";
export async function browserSupports(input) {
  const { browser, version, caniuse } = input;

  const response = await axios({
    baseURL: "https://cdn.jsdelivr.net/gh/Fyrd/caniuse@master/features-json/",
    url: `/${caniuse}.json`
  }).catch(error => console.log("Oh noe...", error));

  const parsedVersion = version.split(".")[0]; // FIXME
  return {
    supported: response.data.stats[browser][parsedVersion],
    data: response.data
  };
}
