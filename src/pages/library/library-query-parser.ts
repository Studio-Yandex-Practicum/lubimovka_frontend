interface IQueryParser {
  [key: string]: string[]
}

function queryParser(querys: IQueryParser): string {
  const parsedQuery: string[] = [];

  for (const [key, value] of Object.entries(querys)) {
    value.forEach((el) => parsedQuery.push(`${key}=${el}`));
  }

  return `?${parsedQuery.join('&')}`;
}

export default queryParser;

