
const base  = ()=>{
    console.log('base line included!');
};
const cases = ()=>{
    console.log('cases is allowed to use in the varable names!!');
}
const add = (num1, num2)=>{
    console.log('good news');
   return num1+ num2;
     
}
// mjs
module.exports = {base, cases, add};
// ejs
// export default {base, cases, add};

