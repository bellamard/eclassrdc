import React, {useState, useEffect, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';

const PickContenu = ({
  setStateAction,
  setStateContenu,
  stateAction,
  statecontenu,
}) => {
  const pickerRef = useRef();
  const [value, setValue] = useState('');
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <Picker
      ref={pickerRef}
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => {
        setValue(itemValue);
        value === 'Action'
          ? setStateAction(!stateAction)
          : setStateContenu(!statecontenu);
      }}>
      <Picker.Item label={'Titre'} value={'Titre'} />;
      <Picker.Item label={'Action'} value={'Action'} />;
    </Picker>
  );
};

export default PickContenu;
