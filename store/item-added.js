import { createContext, useState } from 'react';

const ItemAddedContext = createContext({
  display: 'none',
  toggleDisplay: () => {},
});

export const ItemAddedContextProvider = ({ children }) => {
  const [display, setDisplay] = useState('none');

  const toggleDisplay = () => {
    setDisplay('block');

    setTimeout(() => {
      setDisplay('none');
    }, 5000);
  };

  const context = {
    display: display,
    toggleDisplay: toggleDisplay,
  };

  return (
    <ItemAddedContext.Provider value={context}>
      {children}
    </ItemAddedContext.Provider>
  );
};

export default ItemAddedContext;
