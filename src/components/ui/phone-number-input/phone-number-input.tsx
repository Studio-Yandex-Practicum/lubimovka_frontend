import { DEFAULT_MASK_RULES } from 'react-hook-mask';

import TextInput from 'components/ui/text-input';

import type { TextInputProps } from 'components/ui/text-input';

const maskGenerator = {
  rules: DEFAULT_MASK_RULES,
  generateMask: (value: string) => value.startsWith('+') ? '+7 999 999 99 99' : '8 999 999 99 99',
};

type PhoneNumberInputProps = Omit<TextInputProps, 'mask'>

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (props) => (
  <TextInput
    {...props}
    type="tel"
    placeholder="Номер телефона"
    mask={maskGenerator}
  />
);
