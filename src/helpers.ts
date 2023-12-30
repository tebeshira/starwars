export const getItemIdFromUrlProp = (url: string) => {
  const paramsArr = url.split("/");
  const id = paramsArr[5];
  console.log(paramsArr);
  console.log(id);
  return id;
};

export const getItemResourceFromUrlProp = (url: string) => {
  const paramsArr = url.split("/");
  const resource = paramsArr[4];
  return resource;
};
