import { PrimaryButton, SecondaryButton, TertiaryButton, SignUpModal } from './components';
import { GlobalStyle } from './utils';
import { useState } from 'react';

function App() {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="main">
      <PrimaryButton modifiers="small" onClick={() => setShowModal(!showModal)}>
        Toggle modal!
      </PrimaryButton>
      <SecondaryButton modifiers={[ 'large', 'warning', 'secondaryButtonWarning' ]}>Hello World!</SecondaryButton>
      <TertiaryButton disabled>Hello World!</TertiaryButton>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </div>
  );
}

export default App;
