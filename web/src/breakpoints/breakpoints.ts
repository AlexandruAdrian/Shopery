interface breakpoints {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  customXL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
}

const size: breakpoints = {
  mobileS: "360px",
  mobileM: "375px",
  mobileL: "425px",
  customXL: "600px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  customXL: `(min-width: ${size.customXL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`
};
