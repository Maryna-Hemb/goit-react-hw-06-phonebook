import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/selectors';
import { addFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const state = useSelector(getFilterValue);
  const dispatch = useDispatch(getFilterValue);

  const onFilterChange = e => {
    dispatch(addFilter(e.target.value.trim()));
  };
  return (
    <label>
      <p>Find contacts by name</p>
      <Input value={state} onChange={onFilterChange} type="text"></Input>
    </label>
  );
};
