import { IndexedType } from '@zkbridge/fdn-types';

export const entries = <T extends IndexedType<any>>(obj: T): [keyof T, T[keyof T]][] =>
  Object.entries(obj);
