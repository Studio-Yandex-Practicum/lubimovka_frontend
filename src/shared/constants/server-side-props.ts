export const notFoundResult = {
  notFound: true,
} as const;

export const serverErrorResult = {
  props: {
    errorCode: 500,
  },
} as const;
