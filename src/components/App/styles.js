import { colors } from "../../variables";

const styles = {
  '@global': {
    'html, body': {
      height: '100%',
      margin: 0,
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '12px',
    },
    '#app': {
      height: '100%',
    },
    a: {
      color: colors.primary,
    }
  }
};

export default styles;
