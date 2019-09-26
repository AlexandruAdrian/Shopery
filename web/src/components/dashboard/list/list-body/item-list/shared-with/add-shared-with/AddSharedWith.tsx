import React, { useState } from "react";
// Styled Components
import { Overlay } from "../../../../../../common-styled-components/common";
import {
  FormContainer,
  FormHeader,
  CloseBtn,
  Title
} from "./add-shared-with-styles";
// Components
import Form from "./form/Form";
import SearchResult from "./search-result/SearchResult";

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserFriend } from "../../../../../../../reducers/friendsReducer";
import { Item } from "../../../../../../../reducers/itemsReducer";

interface Props {
  usersData: UserFriend[];
  setUsersData: React.Dispatch<React.SetStateAction<UserFriend[]>>;
  item: Item;
  toggleAddSharedWith: () => void;
}

const AddSharedWith: React.FC<Props> = ({
  usersData,
  setUsersData,
  item,
  toggleAddSharedWith
}) => {
  const [result, setResult] = useState<UserFriend[]>([]);
  const [resultError, setResultError] = useState<string>("");

  return (
    <Overlay>
      <FormContainer>
        <FormHeader>
          <CloseBtn onClick={toggleAddSharedWith}>
            <FontAwesomeIcon icon="times" />
          </CloseBtn>
          <Title>Search Friends</Title>
        </FormHeader>
        <Form setResult={setResult} setResultError={setResultError} />
        <SearchResult
          result={result}
          resultError={resultError}
          usersData={usersData}
          setUsersData={setUsersData}
          item={item}
        />
      </FormContainer>
    </Overlay>
  );
};

export default AddSharedWith;
