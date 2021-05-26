import { createContext, useState } from 'react';

const ModalContext = createContext({
  display: 'none',
  toggleDisplay: () => {},
});

export const ModalContextProvider = (props) => {
  const [modalDisplay, setModalDisplay] = useState('none');

  const toggleModalDisplay = () => {
    modalDisplay === 'block'
      ? setModalDisplay('none')
      : setModalDisplay('block');
  };

  const context = {
    display: modalDisplay,
    toggleDisplay: toggleModalDisplay,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
