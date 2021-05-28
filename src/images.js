const url =
  process.env.NODE_ENV === "production"
    ? "https://launchbox.finance" 
    : "http://localhost:8000";

export const logo = url + "/images/logo.svg";
export const logo3 = url + "/images/logox.png";
export const floatingIcon = url + "/images/floatingIcon.gif";
export const roadMapTabs = url + "/images/roadMapTabs.svg";
export const roadMapTabsAdaptive = url + "/images/roadMapTabsAdaptive.svg";
