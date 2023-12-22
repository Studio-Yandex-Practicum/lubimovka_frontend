import useSWR from 'swr';

export const useCard = () => {
  const { data: state, mutate: setState } = useSWR('card');

  return [state, setState];
};
