const styles = {
  block: {
    fontSize: 14,
  },

  '@keyframes rotate360': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  '@keyframes ball6': {
    '0%': { transform: 'rotate(-120deg)' },
    '40%': { transform: 'rotate(240deg)' },
    '100%': { transform: 'rotate(240deg)' },
  },
  '@keyframes ball3': {
    '0%': { transform: 'rotate(-60deg)' },
    '10%': { transform: 'rotate(-60deg)' },
    '50%': { transform: 'rotate(300deg)' },
    '100%': { transform: 'rotate(300deg)' },
  },
  '@keyframes ball2': {
    '0%': { transform: 'rotate(0deg)' },
    '20%': { transform: 'rotate(0deg)' },
    '60%': { transform: 'rotate(360deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  '@keyframes ball1': {
    '0%': { transform: 'rotate(60deg)' },
    '30%': { transform: 'rotate(60deg)' },
    '70%': { transform: 'rotate(420deg)' },
    '100%': { transform: 'rotate(420deg)' },
  },
  '@keyframes ball4': {
    '0%': { transform: 'rotate(120deg)' },
    '40%': { transform: 'rotate(120deg)' },
    '80%': { transform: 'rotate(480deg)' },
    '100%': { transform: 'rotate(480deg)' },
  },
  '@keyframes ball5': {
    '0%': { transform: 'rotate(180deg)' },
    '50%': { transform: 'rotate(180deg)' },
    '90%': { transform: 'rotate(540deg)' },
    '100%': { transform: 'rotate(540deg)' },
  },
  loader: {
    width: '3em',
    height: '3em',
    // background: #ccc;
    position: 'relative',
    animation: 'rotate360 6s infinite reverse linear',
    display: 'inline-block',
  },
  ball: {
    position: 'relative',
    left: '50%',
    top: '50%',
    width: 0,
    height: 0,
    paddingLeft: '1.5em',
    marginLeft: '-.75em',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',

    '&:before': {
      width: '.4em',
      height: '.4em',
      borderRadius: '100%',
      content: "''",
      display: 'block',
      background: '#2fc149',
    },
  },
  ball0: {
    animationName: 'ball1',
  },
  ball1: {
    animationName: 'ball2',
  },
  ball2: {
    animationName: 'ball3',
  },
  ball3: {
    animationName: 'ball4',
  },
  ball4: {
    animationName: 'ball5',
  },
  ball5: {
    animationName: 'ball6',
  },
};

export default styles;
