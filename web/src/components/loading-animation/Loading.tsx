import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingAnimation } from "../common-styled-components/common";

const Loading: React.FC = (): JSX.Element => (
  <LoadingAnimation>
    <FontAwesomeIcon icon="sync" className="fa-spin 4x" />
  </LoadingAnimation>
);

export default Loading;
