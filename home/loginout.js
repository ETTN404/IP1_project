const rname = document.getElementById('rname').value;
const remail = document.getElementById('remail').value;
const rpassword = document.getElementById('rpassword').value;
const rsignup = document.getElementById('rsignup');
const lemail = document.getElementById('lemail').value;
const lpassword = document.getElementById('lpassword').value;
const lsignin = document.getElementById('lsignin');
let rusers = [];
let loginusers = JSON.parse(localStorage.getItem('logininfo')) || [];
lsignin.addEventListener('click', () => {
  console.log('hello');

  if (lpassword === '') {
    alert('enter password');
  } else {
    console.log(lpassword);
    console.log(lemail);
  }
  const luser = {
    email: lemail,
    password: lpassword,
  };
  loginusers.push(luser);
  loginusers.forEach((element) => {
    console.log(element);
  });
  localStorage.setItem('userData', JSON.stringify(loginusers));
  const store = JSON.parse(localStorage.getItem('userData'));
  console.log(store.email1);
});
rsignup.addEventListener('click', () => {
  console.log('sin up');
  const name = rname.value;
  const email = rname.value;
  const password = rpassword.value;
  const ruser = {
    name,
    email,
    password,
  };
  console.log(ruser);
  rusers.push(ruser);
  localStorage.setItem('users', JSON.stringify(rusers));

  const storedusers = JSON.parse(localStorage.getItem('users')) || [];
  users = storedusers;
});
