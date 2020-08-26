import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { nanoid } from "nanoid";

import Calendar from "../calendar/Calendar";
import { addGrow } from "../../redux/actions/grows.actions";
import { fetchAllStrains } from "../../redux/actions/strains.actions";

/**
 * The form which allows a user to add a new strain to the list.
 *
 * @author Marko Maric
 * @version 1.0
 */
const NewGrowForm = () => {
  const [state, dispatchToState] = useReducer(growFormReducer, initialState);
  const dispatch = useDispatch();

  const strains = useSelector((state) => state.strains.strainList);

  useEffect(() => {
    dispatch(fetchAllStrains());
  }, []);

  /**
   * Handle when the user submits the form. This will only submit the form if it is valid.
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Make sure all the form inputs are valid
    if (validateFormInput()) {
      dispatch(
        addGrow({
          ...state,
          id: nanoid(),
        })
      );
    }
  }

  /**
   * Validate the form inputs to make sure only valid values are being passed. This function
   * is also responsible for displaying the invalid fields to the user.
   */
  function validateFormInput() {
    let isNameValid = true;

    if (state.name.value.length === 0) {
      isNameValid = false;
      dispatchToState({ type: UPDATE_NAME_ISVALID, payload: false });
    }

    return isNameValid;
  }

  return (
    <form>
      <h1 className="title">Add a new Grow</h1>

      <div className="field">
        <label htmlFor="growName" className="label">
          Name
        </label>
        <div className="control">
          <input
            type="text"
            id="growName"
            className={cn("input", { "is-danger": !state.name.isValid })}
            placeholder="G4-S-PE"
            value={state.name.value}
            onChange={(event) =>
              dispatchToState({
                type: UPDATE_NAME_VALUE,
                payload: event.currentTarget.value,
              })
            }
            onBlur={() => dispatchToState({ type: UPDATE_NAME_ISVALID, payload: true })}
          />
        </div>
        {!state.name.isValid && (
          <p className="help is-danger">Please enter a new for your strain. We'll use this so you can differentiate all your grows.</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="growStrain" className="label">
          Strain
        </label>
        <div className="control">
          <div className="select">
            <select id="growStrain">
              <option>Select your Strain</option>
              {strains.map((strain) => (
                <option value={strain.id}>{strain.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="growStartDate" className="label">
          Start Date
        </label>
        <div className="control">
          <Calendar inputClass="input" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-primary has-text-weight-bold" onClick={handleSubmit}>
            Add the new Grow
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewGrowForm;

const UPDATE_NAME_VALUE = "@@growForm/update/name-value";
const UPDATE_NAME_ISVALID = "@@growForm/update/name-isValid";

const initialState = {
  name: {
    value: "",
    isValid: true,
  },
  selectedStrain: null,
};

/**
 * The "growForm" reducer. It serves as the forms state.
 *
 * @param { Object } state The entire state of the component.
 * @param { Object } action The action which defines in what way the state will be changed.
 */
const growFormReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME_VALUE:
      return {
        ...state,
        name: {
          ...state.name,
          value: action.payload,
        },
      };

    case UPDATE_NAME_ISVALID:
      return {
        ...state,
        name: {
          ...state.name,
          isValid: action.payload,
        },
      };

    default:
      return state;
  }
};
