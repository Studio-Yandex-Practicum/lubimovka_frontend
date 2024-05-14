import TextInput from 'components/ui/text-input';

import type { TextInputProps } from 'components/ui/text-input';

type PhoneNumberInputProps = Omit<TextInputProps, 'mask'>

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (props) => (
  <TextInput
    {...props}
    type="tel"
    placeholder="Номер телефона"
  />
);
