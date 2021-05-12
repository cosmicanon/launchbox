const url =
  process.env.NODE_ENV === "production"
    ? "https://launch-box.herokuapp.com"
    : "http://localhost:8000";

export const logo = url + "/images/logo.svg";
export const floatingIcon = url + "/images/floatingIcon.gif";
export const roadMapImg = url + "/images/roadMapImg.svg";
export const roadMapTabs = url + "/images/roadMapTabs.svg";
export const roadMapTabsAdaptive = url + "/images/roadMapTabsAdaptive.svg";
export const facebook = url + "/images/facebook.svg";
export const instagram = url + "/images/instagram.svg";
export const telegram = url + "/images/telegram.svg";
export const twitter = url + "/images/twitter.svg";
