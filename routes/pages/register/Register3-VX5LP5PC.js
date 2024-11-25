import{a as N,b as Y,c as T,d as $,e as O,f as Q,g as U,h as pe,i as ue,j as Z}from"/build/_shared/chunk-HD4GQ6P5.js";import{a as D,b as q}from"/build/_shared/chunk-GWTGRDR7.js";import{e as u}from"/build/_shared/chunk-ABZ6AMWH.js";import{a as E}from"/build/_shared/chunk-N7ETY7RE.js";import"/build/_shared/chunk-WHUDXK5E.js";import"/build/_shared/chunk-IAR5ORA3.js";import{B as k,H as z,J as g,N as G,O as j,P as C,Q as r,S as v,T as H,U as F,fa as I,k as w,ma as V,pa as B,s as W,t as n,z as s}from"/build/_shared/chunk-Z7ZHOKOZ.js";import{d,f as ce,h as b}from"/build/_shared/chunk-IA5SELQI.js";var m=d(ce());var c={paper:"#ffffff",primaryLight:"#eef2f6",primary200:"#90caf9",primaryMain:"#2196f3",primaryDark:"#1e88e5",primary800:"#1565c0",secondaryLight:"#ede7f6",secondary200:"#b39ddb",secondaryMain:"#673ab7",secondaryDark:"#5e35b1",secondary800:"#4527a0",successLight:"#b9f6ca",success200:"#69f0ae",successMain:"#00e676",successDark:"#00c853",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#F8FAFC",grey100:"#EEF2F6",grey200:"#E3E8EF",grey300:"#CDD5DF",grey500:"#697586",grey600:"#4B5565",grey700:"#364152",grey900:"#121926",darkPaper:"#111936",darkBackground:"#1a223f",darkLevel1:"#29314f",darkLevel2:"#212946",darkTextTitle:"#d7dcec",darkTextPrimary:"#bdc8f0",darkTextSecondary:"#8492c4",darkPrimaryLight:"#eef2f6",darkPrimaryMain:"#2196f3",darkPrimaryDark:"#1e88e5",darkPrimary200:"#90caf9",darkPrimary800:"#1565c0",darkSecondaryLight:"#d1c4e9",darkSecondaryMain:"#7c4dff",darkSecondaryDark:"#651fff",darkSecondary200:"#b39ddb",darkSecondary800:"#6200ea"},ge=o=>new RegExp(/[0-9]/).test(o),fe=o=>new RegExp(/[a-z]/).test(o)&&new RegExp(/[A-Z]/).test(o),he=o=>new RegExp(/[!#@$%^&*)(+=._-]/).test(o),_=o=>o<2?{label:"Poor",color:c.errorMain}:o<3?{label:"Weak",color:c.warningDark}:o<4?{label:"Normal",color:c.orangeMain}:o<5?{label:"Good",color:c.successMain}:o<6?{label:"Strong",color:c.successDark}:{label:"Poor",color:c.errorMain},J=o=>{let i=0;return o.length>5&&(i+=1),o.length>7&&(i+=1),ge(o)&&(i+=1),he(o)&&(i+=1),fe(o)&&(i+=1),i};var K=d(pe()),X=d(ue()),e=d(b()),ye=({...o})=>{let i=w(),L=Q(),M=v(i.breakpoints.down("md")),re=E(a=>a.customization),[S,te]=(0,m.useState)(!1),[oe,ie]=(0,m.useState)(!0),[ae,ne]=(0,m.useState)(0),[P,se]=(0,m.useState)(),le=async()=>{console.error("Register")},de=()=>{te(!S)},me=a=>{a.preventDefault()},A=a=>{let l=J(a);ne(l),se(_(l))};return(0,m.useEffect)(()=>{A("123456")},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,e.jsx)(r,{item:!0,xs:12,children:(0,e.jsx)(D,{children:(0,e.jsxs)(k,{variant:"outlined",fullWidth:!0,onClick:le,size:"large",sx:{color:"grey.700",backgroundColor:i.palette.grey[50],borderColor:i.palette.grey[100]},children:[(0,e.jsx)(s,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,e.jsx)("img",{src:U,alt:"google",width:16,height:16,style:{marginRight:M?8:16}})}),"Sign up with Google"]})})}),(0,e.jsx)(r,{item:!0,xs:12,children:(0,e.jsxs)(s,{sx:{alignItems:"center",display:"flex"},children:[(0,e.jsx)(g,{sx:{flexGrow:1},orientation:"horizontal"}),(0,e.jsx)(k,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${i.palette.grey[100]} !important`,color:`${i.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${re.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,e.jsx)(g,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,e.jsx)(r,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,e.jsx)(s,{sx:{mb:2},children:(0,e.jsx)(n,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),(0,e.jsx)(O,{initialValues:{email:"",password:"",submit:null},validationSchema:$().shape({email:T().email("Must be a valid email").max(255).required("Email is required"),password:T().max(255).required("Password is required")}),onSubmit:async(a,{setErrors:l,setStatus:p,setSubmitting:f})=>{try{L.current&&(p({success:!0}),f(!1))}catch(h){console.error(h),L.current&&(p({success:!1}),l({submit:h.message}),f(!1))}},children:({errors:a,handleBlur:l,handleChange:p,handleSubmit:f,isSubmitting:h,touched:y,values:R})=>(0,e.jsxs)("form",{noValidate:!0,onSubmit:f,...o,children:[(0,e.jsxs)(r,{container:!0,spacing:M?0:2,children:[(0,e.jsx)(r,{item:!0,xs:12,sm:6,children:(0,e.jsx)(B,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...i.typography.customInput}})}),(0,e.jsx)(r,{item:!0,xs:12,sm:6,children:(0,e.jsx)(B,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...i.typography.customInput}})})]}),(0,e.jsxs)(G,{fullWidth:!0,error:Boolean(y.email&&a.email),sx:{...i.typography.customInput},children:[(0,e.jsx)(F,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,e.jsx)(I,{id:"outlined-adornment-email-register",type:"email",value:R.email,name:"email",onBlur:l,onChange:p,inputProps:{}}),y.email&&a.email&&(0,e.jsx)(C,{error:!0,id:"standard-weight-helper-text--register",children:a.email})]}),(0,e.jsxs)(G,{fullWidth:!0,error:Boolean(y.password&&a.password),sx:{...i.typography.customInput},children:[(0,e.jsx)(F,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,e.jsx)(I,{id:"outlined-adornment-password-register",type:S?"text":"password",value:R.password,name:"password",label:"Password",onBlur:l,onChange:x=>{p(x),A(x.target.value)},endAdornment:(0,e.jsx)(H,{position:"end",children:(0,e.jsx)(W,{"aria-label":"toggle password visibility",onClick:de,onMouseDown:me,edge:"end",size:"large",children:S?(0,e.jsx)(K.default,{}):(0,e.jsx)(X.default,{})})}),inputProps:{}}),y.password&&a.password&&(0,e.jsx)(C,{error:!0,id:"standard-weight-helper-text-password-register",children:a.password})]}),ae!==0&&(0,e.jsx)(G,{fullWidth:!0,children:(0,e.jsx)(s,{sx:{mb:2},children:(0,e.jsxs)(r,{container:!0,spacing:2,alignItems:"center",children:[(0,e.jsx)(r,{item:!0,children:(0,e.jsx)(s,{style:{backgroundColor:P?.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,e.jsx)(r,{item:!0,children:(0,e.jsx)(n,{variant:"subtitle1",fontSize:"0.75rem",children:P?.label})})]})})}),(0,e.jsx)(r,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,e.jsx)(r,{item:!0,children:(0,e.jsx)(j,{control:(0,e.jsx)(z,{checked:oe,onChange:x=>ie(x.target.checked),name:"checked",color:"primary"}),label:(0,e.jsxs)(n,{variant:"subtitle1",children:["Agree with \xA0",(0,e.jsx)(n,{variant:"subtitle1",component:u,to:"#",children:"Terms & Condition."})]})})})}),a.submit&&(0,e.jsx)(s,{sx:{mt:3},children:(0,e.jsx)(C,{error:!0,children:a.submit})}),(0,e.jsx)(s,{sx:{mt:2},children:(0,e.jsx)(D,{children:(0,e.jsx)(k,{disableElevation:!0,disabled:h,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})})]})},ee=ye;var t=d(b()),xe=()=>{let o=w(),i=v(o.breakpoints.down("md"));return(0,t.jsx)(N,{children:(0,t.jsxs)(r,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,t.jsx)(r,{item:!0,xs:12,children:(0,t.jsx)(r,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,t.jsx)(r,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,t.jsx)(Y,{children:(0,t.jsxs)(r,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,t.jsx)(r,{item:!0,sx:{mb:3},children:(0,t.jsx)(u,{to:"#",children:(0,t.jsx)(q,{})})}),(0,t.jsx)(r,{item:!0,xs:12,children:(0,t.jsx)(r,{container:!0,direction:i?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,t.jsx)(r,{item:!0,children:(0,t.jsxs)(V,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,t.jsx)(n,{color:o.palette.secondary.main,gutterBottom:!0,variant:i?"h3":"h2",children:"Sign up"}),(0,t.jsx)(n,{variant:"caption",fontSize:"16px",textAlign:i?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,t.jsx)(r,{item:!0,xs:12,children:(0,t.jsx)(ee,{})}),(0,t.jsx)(r,{item:!0,xs:12,children:(0,t.jsx)(g,{})}),(0,t.jsx)(r,{item:!0,xs:12,children:(0,t.jsx)(r,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,t.jsx)(n,{component:u,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,t.jsx)(r,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,t.jsx)(Z,{})})]})})},be=xe;export{be as default};
