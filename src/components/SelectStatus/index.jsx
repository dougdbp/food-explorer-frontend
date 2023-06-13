import { Container } from './style';

import Select from 'react-select';
import chroma from 'chroma-js';

const options = [
  { value: 'pending', label: 'Pendente', color: '#AB222E' },
  { value: 'preparing', label: 'Preparando', color: '#FBA94C' },
  { value: 'delivered', label: 'Entregue', color: '#04D361' },
];

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 8,
    width: 8,
  },
});

const colourStyles = {
  control: (styles, { isDisabled }) => ({
    display: 'flex',
    height: isDisabled ? '' : '4.8rem',
    color: '#C4C4CC',
    // backgroundColor: '#0D1D25',
    backgroundColor: isDisabled ? 'transparent' : '#0D1D25',
    borderRadius: '5px',
    border: 'none',
    minWidth: isDisabled ? '' : 155,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
    color: '#C4C4CC',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (styles, { isDisabled }) => ({
    ...styles,
    display: isDisabled ? 'none' : 'flex',
  }),
  menu: (styles, state) => ({
    ...styles,
    backgroundColor: '#0d1d25',
  }),
};

export function SelectStatus({
  isDisabled = false,
  className,
  value,
  ...rest
}) {
  return (
    <Container className={className}>
      <Select
        options={options}
        isSearchable={false}
        defaultValue={options.find((option) => option.value === value)}
        styles={colourStyles}
        isDisabled={isDisabled}
        {...rest}
      />
    </Container>
  );
}
