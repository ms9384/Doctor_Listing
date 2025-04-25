import qs from 'qs';

export function parseQuery(search) {
  return qs.parse(search, { ignoreQueryPrefix: true });
}

export function stringifyQuery(params) {
  return qs.stringify(params, { addQueryPrefix: true, arrayFormat: 'brackets' });
}