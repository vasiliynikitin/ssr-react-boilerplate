import injectSheet from 'react-jss';

export default function wrapWithStyles(...styles) {
  if (!styles || !styles.length) {
    return;
  }
  if (!Array.isArray(styles)) {
    styles = [styles];
  }
  return styles
    .map(style => injectSheet(style))
    .reduce((acc, item) => (acc ? Component => acc(item(Component)) : Component => item(Component)), null);
}