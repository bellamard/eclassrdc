import React, {useState, useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
const items = props => {
  const {itemsSelect} = props;
  console.log(itemsSelect);
  return itemsSelect.map((item, index) => {
    return <Picker.Item label={item.title} value={item.title} key={index} />;
  });
};
const MyPicker = itemsSelect => {
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
      }}>
      {items(itemsSelect)}
    </Picker>
  );
};
export default MyPicker;
