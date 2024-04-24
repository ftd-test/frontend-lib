import { assert } from '@zkbridge/utils';

export function injectCSS(css: string) {
  const id = 'zk-injected-css';
  let styleNode = document.getElementById(id) as HTMLStyleElement;
  if (!styleNode) {
    styleNode = document.createElement('style');
    styleNode.setAttribute('id', id);
    document.head.appendChild(styleNode);
  }
  assert(!!styleNode && !!styleNode.sheet, 'styleNode  or styleNode.sheet is not defined');
  styleNode.sheet.insertRule(css);
}
