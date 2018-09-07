const styles = {
  caption: {
    textTransform: 'uppercase',
    color: '#555',
    fontSize: 10,
    marginBottom: 4,
  },
  wrap: {
    marginBottom: 15,
  },
  block: {
    '& textarea, & input[type="text"], & input[type="password"]': {
      fontSize: 12,
      lineHeight: '17px',
      fontFamily: '"open sans", arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 3,
      border: '1px solid #ccc',
    },
    '& input[type="text"], & input[type="password"]': {
      height: 34,
      padding: '0 10px',
    },
    '& textarea': {
      minHeight: 51,
      resize: 'vertical',
      padding: '5px 10px',
    },
  },
  disabled: {
    '& input[type="text"], & input[type="password"]': {
      background: '#ebebe4',
      color: '#545454',
    },
  },
  error: {
    '& input[type="password"], & input[type="text"]': {
      color: '#f33',
      borderColor: '#f33',
    },
    '& $caption': {
      color: '#f33',
    }
  },
  inline: {
    display: 'flex',
    '& $wrap': {
      flexGrow: 1,
    },
    '& $caption': {
      width: '30%',
      lineHeight: '34px',
    },
  },
};

export default styles;

/*
textarea {
  height: 68px;
  padding-top: 5px;
  padding-bottom: 5px;
}
textarea.fix-width {
  min-width: 100%;
  max-width: 100%;
}
div.textfield {
  height: auto;
  padding: 9px;
}

.field.checkbox {
  line-height: 20px;
}
.field.checkbox .input {
  float: left;
  margin-right: 10px;
}
.field.checkbox .caption {
  text-transform: none;
  font-size: 12px;
}


.combo {
  padding: 0;
}
.combo.single {
  cursor: pointer;
}
.combo.single:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  border: 4px solid transparent;
  border-top-color: #333;
  margin: 15px 9px 0 0;
}
.combo.multi {
  height: auto;
  min-height: 34px;
  border: none;
}
.combo .combo-item {

}
.combo .change.button {
  padding: 0 10px;
  line-height: 20px;
  position: absolute;
  top: -20px;
  right: 0;
}
.combo.multi .list {
  top: 0;
}
.combo .add,
.combo .item {
  line-height: 18px;
  background: #00b800;
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  margin: 2px;
  border-radius: 3px;
}
.combo.single .value {
  line-height: 34px;
  margin: 0 30px 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.combo input {
  display: none;
  height: 32px;
  border: none;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background: none;
}
.combo .list input[type="checkbox"] {
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
}
.combo.focus input {
  display: block;
}
.combo .list {
  display: none;
  background: #fff;
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  border: 1px solid #ccc;
  z-index: 1;
}
.combo .list li {
  padding: 0 10px;
  line-height: 24px;
  cursor: pointer;
}
.combo .list li:hover {
  background: #ccc;
} */