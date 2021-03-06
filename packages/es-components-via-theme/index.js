const white = '#fff';
const gray1 = '#f4f4f4';
const gray2 = '#ecedee';
const gray3 = '#e4e4e4';
const gray4 = '#d8d8d8';
const gray5 = '#c5c5c5';
const gray6 = '#979797';
const gray7 = '#707070';
const gray8 = '#585858';
const gray9 = '#444';
const black = '#000';
const darkBlue = '#006685';

const defaultColor = '#d8d8d8';
const defaultHover = '#bfbfbf';
const defaultBtnText = black;
const primary = '#007fa7';
const primaryHover = '#005874';
const info = '#069';
const infoHover = '#004466';
const infoLight = '#b8e4f9';
const success = '#298544';
const successHover = '#1d5e30';
const successLight = '#d9eedf';
const warning = '#c25400';
const warningHover = '#8f3e00';
const warningLight = '#fcebde';
const danger = '#c00';
const dangerHover = '#990000';
const dangerLight = '#fde7e7';
const advisor = warning;
const advisorLight = warningLight;
const popoverHeader = darkBlue;

const vbBlue = '#00a0d2';
const vbGreen = '#00c389';
const vbMagenta = '#c110a0';
const wtwGray = '#63666a';

const boxShadowLight = 'rgba(0, 0, 0, 0.075)';
const boxShadowDark = 'rgba(0, 0, 0, 0.5)';

const inputBorder = gray4;
const inputFocus = '#83bffc';
const inputBoxShadow = 'rgba(102, 175, 233, 0.6)';

const violet = '#5a0c6f';
const blueLighter = '#d2f4ff';
const greenLighter = '#c3ffed';
const violetLighter = '#eac9f2';


// Datepicker colors
const navArrow = gray5;
const navArrowHover = gray6;
const selected = '#216ba5';
const hover = '#1d5d90';
const keyboard = '#2a87d0';
const inRange = 'rgba(33, 107, 165, 0.5)';
const highlight = '#3dcc4a';
const highlightHover = '#32be3f';

const theme = {
  colors: {
    black: black,
    gray1: gray1,
    gray2: gray2,
    gray3: gray3,
    gray4: gray4,
    gray5: gray5,
    gray6: gray6,
    gray7: gray7,
    gray8: gray8,
    gray9: gray9,
    white: white,
    defaultColor: defaultColor,
    defaultHover: defaultHover,
    defaultBtnText: defaultBtnText,
    primary: primary,
    primaryHover: primaryHover,
    success: success,
    successHover: successHover,
    successLight: successLight,
    info: info,
    infoHover: infoHover,
    infoLight: infoLight,
    warning: warning,
    warningHover: warningHover,
    warningLight: warningLight,
    danger: danger,
    dangerHover: dangerHover,
    dangerLight: dangerLight,
    advisor: advisor,
    advisorLight: advisorLight,
    boxShadowLight: boxShadowLight,
    boxShadowDark: boxShadowDark,
    inputFocus: inputFocus,
    popoverHeader: popoverHeader,
    greenLighter: greenLighter,
    violetLighter: violetLighter,
    blueLighter: blueLighter,
    violet: violet
  },
  brandColors: {
    vbBlue: vbBlue,
    vbGreen: vbGreen,
    vbMagenta: vbMagenta,
    wtwGray: wtwGray
  },
  datepickerColors: {
    navArrow: navArrow,
    navArrowHover: navArrowHover,
    selected: selected,
    hover: hover,
    keyboard: keyboard,
    inRange: inRange,
    highlight: highlight,
    highlightHover: highlightHover
  },
  notificationStyles: {
    success: {
      base: {
        bgColor: success,
        textColor: white
      },
      light: {
        bgColor: successLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: success
      }
    },
    info: {
      base: {
        bgColor: info,
        textColor: white
      },
      light: {
        bgColor: infoLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: info
      }
    },
    warning: {
      base: {
        bgColor: warning,
        textColor: white
      },
      light: {
        bgColor: warningLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: warning
      }
    },
    danger: {
      base: {
        bgColor: danger,
        textColor: white
      },
      light: {
        bgColor: dangerLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: danger
      }
    },
    advisor: {
      base: {
        bgColor: advisor,
        textColor: white
      },
      light: {
        bgColor: advisorLight,
        textColor: gray8
      },
      messageOnly: {
        bgColor: 'transparent',
        textColor: advisor
      }
    }
  },
  buttonStyles: {
    buttonsNormal: {
      // these button types are dynamic, so you can add/remove/rename them
      primary: {
        bgColor: primary,
        textColor: white,
        hoverBgColor: primaryHover,
        hoverTextColor: white,
        activeBgColor: primaryHover,
        activeTextColor: white,
        boxShadowColor: primaryHover
      },
      default: {
        bgColor: defaultColor,
        textColor: black,
        hoverBgColor: defaultHover,
        hoverTextColor: black,
        activeBgColor: defaultHover,
        activeTextColor: black,
        boxShadowColor: defaultHover
      },
      darkDefault: {
        bgColor: gray7,
        textColor: white,
        hoverBgColor: gray8,
        hoverTextColor: white,
        activeBgColor: gray8,
        activeTextColor: white,
        boxShadowColor: gray8
      },
      success: {
        bgColor: success,
        textColor: white,
        hoverBgColor: successHover,
        hoverTextColor: white,
        activeBgColor: successHover,
        activeTextColor: white,
        boxShadowColor: successHover
      },
      info: {
        bgColor: info,
        textColor: white,
        hoverBgColor: infoHover,
        hoverTextColor: white,
        activeBgColor: infoHover,
        activeTextColor: white,
        boxShadowColor: infoHover
      },
      warning: {
        bgColor: warning,
        textColor: white,
        hoverBgColor: warningHover,
        hoverTextColor: white,
        activeBgColor: warningHover,
        activeTextColor: white,
        boxShadowColor: warningHover
      },
      danger: {
        bgColor: danger,
        textColor: white,
        hoverBgColor: dangerHover,
        hoverTextColor: white,
        activeBgColor: dangerHover,
        activeTextColor: white,
        boxShadowColor: dangerHover
      }
    },
    buttonsOutline: {
      // these can be independent of the main buttons, but generally
      // should have matching sets
      primary: {
        bgColor: white,
        textColor: primary,
        hoverBgColor: primary,
        hoverTextColor: white,
        activeBgColor: primaryHover,
        activeTextColor: white,
        borderColor: primary
      },
      default: {
        bgColor: white,
        textColor: gray7,
        hoverBgColor: gray7,
        hoverTextColor: white,
        activeBgColor: gray8,
        activeTextColor: white,
        borderColor: gray7
      },
      success: {
        bgColor: white,
        textColor: success,
        hoverBgColor: success,
        hoverTextColor: white,
        activeBgColor: successHover,
        activeTextColor: white,
        borderColor: success
      },
      info: {
        bgColor: white,
        textColor: info,
        hoverBgColor: info,
        hoverTextColor: white,
        activeBgColor: infoHover,
        activeTextColor: white,
        borderColor: info
      },
      warning: {
        bgColor: white,
        textColor: warning,
        hoverBgColor: warning,
        hoverTextColor: white,
        activeBgColor: warningHover,
        activeTextColor: white,
        borderColor: warning
      },
      danger: {
        bgColor: white,
        textColor: danger,
        hoverBgColor: danger,
        hoverTextColor: white,
        activeBgColor: dangerHover,
        activeTextColor: white,
        borderColor: danger
      },
      gray: {
        bgColor: white,
        textColor: wtwGray,
        hoverBgColor: wtwGray,
        hoverTextColor: white,
        activeBgColor: '#4a4d50',
        activeTextColor: white,
        borderColor: wtwGray
      },
      magenta: {
        bgColor: white,
        textColor: vbMagenta,
        hoverBgColor: vbMagenta,
        hoverTextColor: white,
        activeBgColor: '#920C79',
        activeTextColor: white,
        borderColor: vbMagenta
      },
      violet: {
        bgColor: white,
        textColor: '#702082',
        hoverBgColor: '#702082',
        hoverTextColor: white,
        activeBgColor: '#4d1659',
        activeTextColor: white,
        borderColor: '#702082'
      }
    }
  },
  // buttonSizes should always have default, lg, sm, xs
  buttonSizes: {
    lg: {
      borderRadius: '5px',
      fontSize: '26px',
      paddingTop: '6px',
      paddingSides: '20px',
      paddingBottom: '5px'
    },
    default: {
      borderRadius: '4px',
      fontSize: '18px',
      paddingTop: '5px',
      paddingSides: '15px',
      paddingBottom: '4px'
    },
    sm: {
      borderRadius: '3px',
      fontSize: '17px',
      paddingTop: '4px',
      paddingSides: '10px',
      paddingBottom: '3px'
    },
    xs: {
      borderRadius: '3px',
      fontSize: '15px',
      paddingTop: '3px',
      paddingSides: '10px',
      paddingBottom: '2px',
      textTransform: 'uppercase'
    }
  },
  validationIconName: {
    success: 'ok',
    warning: 'exclamation-sign',
    danger: 'remove'
  },
  validationTextColor: {
    success: success,
    warning: warningHover,
    danger: danger
  },
  validationInputColor: {
    success: {
      borderColor: success,
      boxShadow: 'inset 0 0 5px ' + success,
      focusBorderColor: success,
      focusBoxShadow: '0 0 6px ' + success
    },
    warning: {
      borderColor: warning,
      boxShadow: 'inset 0 0 5px ' + warning,
      focusBorderColor: warning,
      focusBoxShadow: '0 0 6px ' + warning
    },
    danger: {
      borderColor: danger,
      boxShadow: 'inset 0 0 5px ' + danger,
      focusBorderColor: danger,
      focusBoxShadow: '0 0 6px ' + danger
    },
    default: {
      borderColor: inputBorder,
      boxShadow: 'inset 0 1px 1px ' + boxShadowLight,
      focusBorderColor: inputFocus,
      focusBoxShadow: '0 0 8px ' + inputBoxShadow
    }
  },
  sizes: {
    baseFontSize: '18px',
    baseLineHeight: 1.428
  },
  screenSize: {
    retina: '320px',
    phone: '480px',
    tablet: '768px',
    desktop: '900px',
    widescreen: '1200px'
  }
};

module.exports = theme;
