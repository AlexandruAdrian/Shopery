import { Item } from "../../reducers/itemsReducer";
import { ItemErrors } from "./interfaces";

export default function validateItemForm(values: Item) {
  const { name, quantity } = values;
  let errors: ItemErrors = {};

  if (!name || name.trim().length === 0) {
    errors.name = "- Name cannot be empty.";
  }

  if (quantity < 1) {
    errors.quantity = "- Quantity has to be greater than 0.";
  }

  return errors;
}
