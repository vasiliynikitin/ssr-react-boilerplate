import bg from '../../imgs/bg.png';

const styles = {
  page: {
    background: `#dfdfdf url(${bg})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  top: {
    display: 'flex',
  },
  loginForm: {
    width: 300,
    margin: 'auto',
    padding: '30px 0',
  },
  wrap: {
    position: 'relative',
    background: '#f9f2ff',
    overflow: 'hidden',
    borderRadius: 5,
    boxShadow: '0 2px 6px 0px rgba(0,0,0,0.3)',
  },
  logo: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  form: {
    padding: 20,
  },
  buttons: {
    marginTop: 10,
  },
  bottom: {
    color: '#fff',
    background: '#333833',
    textAlign: 'center',
    padding: '10px 0',
  },
  copy: {
    fontSize: '12px',
    color: '#777',
    lineHeight: '20px',
    margin: 10,
    textAlign: 'center',
    background: '#fff',
    padding: [0, 10],
    borderRadius: 4,
  },
};

export default styles;

/*.page-login .social-login {
  width: 50px;
  position: absolute;
  right: 100%;
  top: 50%;
  height: 170px;
  transform: translate(0, -50%);
  padding: 20px;
  margin-right: 20px;
  text-align: center;
}

.page-login .error {
  margin-bottom: 20px;
  line-height: 17px;
  padding: 15px 20px;
  background: rgba(242,98,90,0.9);
  color: #fff;
  border-radius: 5px;
  width: 200px;
  position: absolute;
  top: 100px;
  left: 100%;
  transition: 0.3s left ease-in;
  margin-left: 20px;
}

.page-login__error.hidden {
  left: -20px;
}*/
