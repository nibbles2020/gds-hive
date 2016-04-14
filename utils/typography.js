import Typography from 'typography';

const options = {
  baseFontSize: '24px',
  baseLineHeight: '26px',
  modularScales: [
    {
      'scale': 'minor third'
    }
  ]
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
