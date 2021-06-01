const url =
  process.env.NODE_ENV === "production"
    ? "https://launchbox.finance" 
    : "http://localhost:8000";

export const logo = url + "/images/logo.svg";
export const logo3 = url + "/images/logo3.png";
export const ghoulLogo = url + "/images/ghoullogo.png";
export const ghostdaiLogo = url + "/images/ghostdai.png";
export const stepOne = url + "/images/stepone.svg";
export const stepTwo = url + "/images/steptwo.svg";
export const stepThree = url + "/images/stepthree.png";
export const roadMapTabs = url + "/images/roadMapTabs.svg";
export const roadMapTabsAdaptive = url + "/images/roadMapTabsAdaptive.svg";
