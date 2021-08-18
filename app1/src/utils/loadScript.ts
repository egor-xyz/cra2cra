import axios from "axios";

export const loadScript = async () => {
  const res = await axios(`${process.env.REACT_APP_APP2_URL}/asset-manifest.json`);
  const script = document.createElement('script');
  script.src = `${process.env.REACT_APP_APP2_URL}${res.data.files['main.js']}`;
  document.body.appendChild(script);
};
