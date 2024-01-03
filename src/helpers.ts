// for useOne
export const getItemIdFromUrlProp = (url: string) => {
  const paramsArr = url.split("/");
  const id = paramsArr[5];
  return parseInt(id);
};
// for useMany  (but starwars api does not maintain multiple ids requests)
export const getIdsFromUrls = (urls: string[]) => {
  return urls.map((url) => getItemIdFromUrlProp(url));
};

export const getItemResourceFromUrlProp = (url: string) => {
  const paramsArr = url.split("/");
  const resource = paramsArr[4];
  return resource;
};
