const grabToken = () => {
  let token = localStorage.getItem("token");

  return token;
};

export default grabToken;
