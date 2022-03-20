export const visibility = (target: HTMLElement | null): Partial<{[key in 'bottom' | 'top' | 'left' | 'right']: boolean}> => {
  if (!target) {
    return {};
  };

  const targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  };

  const windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  return { 
    'bottom': targetPosition.bottom < windowPosition.bottom
  };

};
