import { State } from 'components/library-filter/library-filter-reducer';

function queryParser(querys: State): string {
  const { years, programmes } = querys;
  let festivals: string[] = [];
  let programs: string[] = [];
  let parsedQuery = '';

  if (years.length > 0) {
    years.forEach((el) => {
      festivals = [...festivals, `festival=${el}`];
    });
  }

  if (programmes.length > 0) {
    programmes.forEach((el) => {
      programs = [...programs, `program=${encodeURIComponent(el)}`];
    });
  }

  const festival = festivals.join('&');
  const program = programs.join('&');

  if (festival && program) {
    parsedQuery = `?${festival}&${program}`;
  } else if (festival) {
    parsedQuery = `?${festival}`;
  } else if (program) {
    parsedQuery = `?${program}`;
  }

  return parsedQuery;
}

export default queryParser;
