interface IQueryParser {
  [key: string]: string[];
}

function queryParser(querys: IQueryParser): string {
  let parsedQuery: string = '';

  for (const [key, value] of Object.entries(querys)) {
    if (value.length > 0) {
      parsedQuery = parsedQuery.concat(`${key}=${value.join()}&`);
    }
  }

  if (parsedQuery[parsedQuery.length - 1] === '&') {
    return parsedQuery.substring(0, parsedQuery.length - 1);
  }

  return parsedQuery;
}

export default queryParser;
