import{V as m,b as c,c as u}from"./B22xuEom.js";import{a as f}from"./BS0uIqYZ.js";import{t as V,a0 as x,A as e,z as t,x as C,y as _,a2 as y,N as s}from"./DXnXjm7K.js";import{V as B}from"./CHercgjs.js";const D={__name:"confirmationModal",props:{open:{type:Boolean,default:!1},text:{type:String,default:""},submit:{type:Function,default:()=>{}}},emits:["update:open"],setup(o,{emit:i}){const a=o,n=i,r=()=>{n("update:open",!1)},p=()=>{a.submit(),n("update:open",!1)};return(b,l)=>(V(),x(B,{modelValue:a.open,"onUpdate:modelValue":l[0]||(l[0]=d=>a.open=d),width:"500"},{default:e(()=>[t(m,{"prepend-icon":"mdi-information-outline",title:"Confirmation"},{default:e(()=>[t(c,{class:"ma-4 text-center"},{default:e(()=>[C("p",null,_(o.text),1)]),_:1}),t(f),t(u,null,{default:e(()=>[t(y),t(s,{text:"Annuler",variant:"plain",onClick:r,class:"text-none"}),t(s,{color:"primary",text:"Valider",variant:"tonal",onClick:p,class:"text-none"})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};export{D as _};
