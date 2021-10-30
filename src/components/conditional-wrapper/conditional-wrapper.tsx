export const ConditionalWrapper = ({
  children,
  condition,
  wrapper,
}: {
  children: JSX.Element,
  condition: boolean,
  wrapper: (children: JSX.Element) => JSX.Element,
}): JSX.Element => condition ? wrapper(children) : children;
