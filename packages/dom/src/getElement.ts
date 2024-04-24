import { assert, isString } from '@zkbridge/utils';
import { query } from './query';
import { Selector } from '@zkbridge/types';

export const getElement = <T extends HTMLElement = HTMLElement>(el: Selector | T): T => {
  if (isString(el)) {
    const _el = query<T>(el);
    assert(!!_el, `${el} does not exist `);
    return _el;
  }
  return el;
};
