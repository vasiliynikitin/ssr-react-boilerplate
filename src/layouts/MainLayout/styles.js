import { colors } from '../../variables';

const styles = {
  mainLayout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  block: {
    width: '100%',
    padding: [0, 20],
    margin: [0, 'auto'],
    boxSizing: 'border-box',
  },
  logo: {
    display: 'inline-block',
    fontSize: 22,
  },
  header: {
    extend: 'block',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    background: colors.header,
    justifyContent: 'space-between',
  },
  content: {
    extend: 'block',
    flexGrow: 1,
    background: '#fff',
    color: '#333',
  },
  footer: {
    extend: 'block',
  },
};

export default styles;
