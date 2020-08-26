import React, { useState } from "react";

import NewGrowForm from "../components/grows/NewGrowForm";

import "./Views.scss";

/**
 * The view which defines the layout for the `grows` page. It will contain a search field
 * to filter all your grows and allows the user to create new grows. The user will also be
 * able to view all his grows. Selecing a specfic grow will open it up on a separate page
 * where all it's stats can be viewed and it's properties can be edited.
 *
 * @author Marko Maric
 * @version 1.0
 */
const GrowsView = () => {
  const [showForm, setShowForm] = useState(true);

  /**
   * Toggle if the `add a new grow` form is visible or not.
   */
  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <div className="view grows-view">
      <section className="form">{showForm && <NewGrowForm />}</section>

      <div className="buttons">
        {showForm ? (
          <button className="button is-danger is-light has-text-weight-bold action" onClick={() => setShowForm(false)}>
            Nevermind
            <i className="fas fa-ban"></i>
          </button>
        ) : (
          <button className="button is-primary is-light has-text-weight-bold action" onClick={() => setShowForm(true)}>
            Add Grow
            <i className="fas fa-cannabis"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default GrowsView;
