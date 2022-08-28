import { useState } from 'react';

export const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handelSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      search: '',
    });
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        onChange={handelChange}
        name="search"
        value={state.search}
        placeholder="search"
        required
      ></input>

      <button type="submit">Search</button>
    </form>
  );
};
