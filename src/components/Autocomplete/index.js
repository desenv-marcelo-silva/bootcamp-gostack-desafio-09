import React, { useEffect, useState, useRef } from 'react';

import { Wrapper, AutoContainer, Options } from './styles';
import api from '~/services/api';

const Autocomplete = ({ url, placeHolder }) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    async function searchValue() {
      const response = await api.get(`${url}?q=${search}`);
      setOptions(response.data);
    }
    setTimeout(() => {
      searchValue();
    }, 500);
  }, [search]);

  function handleClickOutside(event) {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  }

  function updateInput(selectValue) {
    setSearch(selectValue);
    setDisplay(false);
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <Wrapper ref={wrapperRef}>
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder={placeHolder}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <AutoContainer>
          {options.map((value, i) => {
            return (
              <Options
                onClick={() => updateInput(value.name)}
                key={i}
                tabIndex="0"
              >
                <span>{value.name}</span>
              </Options>
            );
          })}
        </AutoContainer>
      )}
    </Wrapper>
  );
};

export default Autocomplete;
