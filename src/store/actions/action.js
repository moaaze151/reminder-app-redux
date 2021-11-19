const adding = (data) => {
  return {
    type: "ADD",
    payload: data ? data : {},
    // date: date ? date : "not sent",
  };
};
const removing = (id) => {
  return {
    type: "DEL",
    payload: id ? id : 0,
    // date: date ? date : "not sent",
  };
};
const clearing = () => {
  return {
    type: "CLR",
    payload: [],
    // date: date ? date : "not sent",
  };
};

export { adding ,removing,clearing};
