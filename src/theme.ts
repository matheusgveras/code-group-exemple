export default {
    grid: {
      container: '130rem',
      gutter: '8rem'
    },
    border: {
      radius: '0.4rem'
    },
    font: {
      family: {
        light: 'Kostic-Roc-Grotesk-Light, sans-serif',
        regular: 'Kostic-Roc-Grotesk-Regular, sans-serif',
        black: 'Kostic-RocGroteskBlack, sans-serif',
        bold: 'Kostic-Roc-Grotesk-Bold, sans-serif'
      },
      weight: {
        light: 300,
        normal: 400,
        black: 600,
        bold: 700
      },
      sizes: {
        xsmall: '0.875rem',
        small: '1rem',
        normal: '1.125rem',
        large: '1.25rem',
        xlarge: '2rem',
        xxlarge: '2.625rem',
        huge: '3.125rem'
      }
    },
    colors: {
      bgPurple: '#999',
      bgPurple2: '#888',
      bgPurple3: '#777',
      bgPrimary: '#EBEFF1',
      grayDisabled: '#C2C2C2',
      pink: '#999',
      colorPrimary: '#333',
      colorSecondary: '#F24D58',
      colorTerciary: '#777',
      yellow: '#F5E25F',
      darkPurple: '#333',
      white: '#FFFFFF',
      gray: '#CCCCCC',
      gray2: '#7e7e7e',
      red: '#F24D58',
      black: '#000000'
    },
    spacings: {
      xxsmall: '0.5rem',
      xsmall: '1rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '5.6rem'
    },
    layers: {
      base: 10,
      menu: 20,
      overlay: 30,
      modal: 40,
      alwaysOnTop: 50
    },
    transition: {
      default: '0.3s ease-in-out',
      fast: '0.1s ease-in-out'
    }
  } as const
  