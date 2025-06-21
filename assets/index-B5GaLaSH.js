var J0=Object.defineProperty;var Q0=(n,t,e)=>t in n?J0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ct=(n,t,e)=>Q0(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="177",t_=0,wd=1,e_=2,im=1,sm=2,zi=3,Ji=0,dn=1,Gi=2,qi=0,_r=1,Oc=2,bd=3,Td=4,n_=5,Ns=100,i_=101,s_=102,r_=103,o_=104,a_=200,l_=201,c_=202,h_=203,Bc=204,zc=205,u_=206,d_=207,f_=208,p_=209,m_=210,g_=211,__=212,v_=213,x_=214,kc=0,Gc=1,Hc=2,Tr=3,Vc=4,Wc=5,Xc=6,qc=7,rm=0,y_=1,M_=2,fs=0,om=1,am=2,lm=3,cm=4,hm=5,um=6,dm=7,fm=300,Ar=301,Cr=302,jc=303,Yc=304,sl=306,$c=1e3,Os=1001,Kc=1002,ci=1003,S_=1004,qo=1005,Ei=1006,kl=1007,Bs=1008,bi=1009,pm=1010,mm=1011,Ao=1012,jh=1013,Ws=1014,Vi=1015,ji=1016,Yh=1017,$h=1018,Co=1020,gm=35902,_m=1021,vm=1022,ai=1023,Ro=1026,Po=1027,xm=1028,Kh=1029,ym=1030,Zh=1031,Jh=1033,Ta=33776,Aa=33777,Ca=33778,Ra=33779,Zc=35840,Jc=35841,Qc=35842,th=35843,eh=36196,nh=37492,ih=37496,sh=37808,rh=37809,oh=37810,ah=37811,lh=37812,ch=37813,hh=37814,uh=37815,dh=37816,fh=37817,ph=37818,mh=37819,gh=37820,_h=37821,Pa=36492,vh=36494,xh=36495,Mm=36283,yh=36284,Mh=36285,Sh=36286,E_=3200,w_=3201,Sm=0,b_=1,hs="",Wn="srgb",Rr="srgb-linear",ka="linear",fe="srgb",$s=7680,Ad=519,T_=512,A_=513,C_=514,Em=515,R_=516,P_=517,I_=518,L_=519,Cd=35044,Rd="300 es",Wi=2e3,Ga=2001;class Vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pd=1234567;const yo=Math.PI/180,Io=180/Math.PI;function Wr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Qh(n,t){return(n%t+t)%t}function D_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function N_(n,t,e){return n!==t?(e-n)/(t-n):0}function Mo(n,t,e){return(1-e)*n+e*t}function F_(n,t,e,i){return Mo(n,t,1-Math.exp(-e*i))}function U_(n,t=1){return t-Math.abs(Qh(n,t*2)-t)}function O_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function B_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function z_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function k_(n,t){return n+Math.random()*(t-n)}function G_(n){return n*(.5-Math.random())}function H_(n){n!==void 0&&(Pd=n);let t=Pd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function V_(n){return n*yo}function W_(n){return n*Io}function X_(n){return(n&n-1)===0&&n!==0}function q_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function j_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Y_(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ha={DEG2RAD:yo,RAD2DEG:Io,generateUUID:Wr,clamp:$t,euclideanModulo:Qh,mapLinear:D_,inverseLerp:N_,lerp:Mo,damp:F_,pingpong:U_,smoothstep:O_,smootherstep:B_,randInt:z_,randFloat:k_,randFloatSpread:G_,seededRandom:H_,degToRad:V_,radToDeg:W_,isPowerOfTwo:X_,ceilPowerOfTwo:q_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:Y_,normalize:cn,denormalize:fr};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let jn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-a;const f=l*u+c*p+h*g+d*_,v=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const A=Math.sqrt(E),T=Math.atan2(A,f*v);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const y=a*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+_*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Id.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new O,Id=new jn;class Xt{constructor(t,e,i,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],v=s[1],E=s[4],y=s[7],A=s[2],T=s[5],C=s[8];return r[0]=o*_+a*v+l*A,r[3]=o*m+a*E+l*T,r[6]=o*f+a*y+l*C,r[1]=c*_+h*v+d*A,r[4]=c*m+h*E+d*T,r[7]=c*f+h*y+d*C,r[2]=u*_+p*v+g*A,r[5]=u*m+p*E+g*T,r[8]=u*f+p*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new Xt;function wm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $_(){const n=Va("canvas");return n.style.display="block",n}const Ld={};function vr(n){n in Ld||(Ld[n]=!0,console.warn(n))}function K_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Z_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function J_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Dd=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q_(){const n={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?ka:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rr]:{primaries:t,whitePoint:i,transfer:ka,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const te=Q_();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ks;class tv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ks===void 0&&(Ks=Va("canvas")),Ks.width=t.width,Ks.height=t.height;const s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ks}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Va("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yi(e[i]/255)*255):e[i]=Yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ev=0;class tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;const Wl=new O;class yn extends Vr{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,i=Os,s=Os,r=Ei,o=Bs,a=ai,l=bi,c=yn.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Wr(),this.name="",this.source=new tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $c:t.x=t.x-Math.floor(t.x);break;case Os:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $c:t.y=t.y-Math.floor(t.y);break;case Os:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=fm;yn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,A=(f+1)/2,T=(h+u)/4,C=(d+_)/4,L=(g+m)/4;return E>y&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=C/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=L/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=L/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends Vr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new yn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new tu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends iv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class bm extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sv extends yn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(t.matrixWorld),this.union(jo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),Yo.subVectors(this.max,so),Zs.subVectors(t.a,so),Js.subVectors(t.b,so),Qs.subVectors(t.c,so),ns.subVectors(Js,Zs),is.subVectors(Qs,Js),Es.subVectors(Zs,Qs);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Es.z,Es.y,ns.z,0,-ns.x,is.z,0,-is.x,Es.z,0,-Es.x,-ns.y,ns.x,0,-is.y,is.x,0,-Es.y,Es.x,0];return!Xl(e,Zs,Js,Qs,Yo)||(e=[1,0,0,0,1,0,0,0,1],!Xl(e,Zs,Js,Qs,Yo))?!1:($o.crossVectors(ns,is),e=[$o.x,$o.y,$o.z],Xl(e,Zs,Js,Qs,Yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pi=[new O,new O,new O,new O,new O,new O,new O,new O],ni=new O,jo=new Uo,Zs=new O,Js=new O,Qs=new O,ns=new O,is=new O,Es=new O,so=new O,Yo=new O,$o=new O,ws=new O;function Xl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);const a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rv=new Uo,ro=new O,ql=new O;let rl=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);const e=ro.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ro,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(ql)),this.expandByPoint(ro.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Ii=new O,jl=new O,Ko=new O,ss=new O,Yl=new O,Zo=new O,$l=new O;let Tm=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jl.copy(t).add(e).multiplyScalar(.5),Ko.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(jl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ko),a=ss.dot(this.direction),l=-ss.dot(Ko),c=ss.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jl).addScaledVector(Ko,u),p}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,i,s,r){Yl.subVectors(e,t),Zo.subVectors(i,t),$l.crossVectors(Yl,Zo);let o=this.direction.dot($l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,t);const l=a*this.direction.dot(Zo.crossVectors(ss,Zo));if(l<0)return null;const c=a*this.direction.dot(Yl.cross(ss));if(c<0||l+c>o)return null;const h=-a*ss.dot($l);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class xe{constructor(t,e,i,s,r,o,a,l,c,h,d,u,p,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/tr.setFromMatrixColumn(t,0).length(),r=1/tr.setFromMatrixColumn(t,1).length(),o=1/tr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ov,t,av)}lookAt(t,e,i){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),rs.crossVectors(i,bn),rs.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),rs.crossVectors(i,bn)),rs.normalize(),Jo.crossVectors(bn,rs),s[0]=rs.x,s[4]=Jo.x,s[8]=bn.x,s[1]=rs.y,s[5]=Jo.y,s[9]=bn.y,s[2]=rs.z,s[6]=Jo.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],E=i[7],y=i[11],A=i[15],T=s[0],C=s[4],L=s[8],w=s[12],x=s[1],P=s[5],k=s[9],I=s[13],U=s[2],B=s[6],N=s[10],j=s[14],H=s[3],Z=s[7],rt=s[11],pt=s[15];return r[0]=o*T+a*x+l*U+c*H,r[4]=o*C+a*P+l*B+c*Z,r[8]=o*L+a*k+l*N+c*rt,r[12]=o*w+a*I+l*j+c*pt,r[1]=h*T+d*x+u*U+p*H,r[5]=h*C+d*P+u*B+p*Z,r[9]=h*L+d*k+u*N+p*rt,r[13]=h*w+d*I+u*j+p*pt,r[2]=g*T+_*x+m*U+f*H,r[6]=g*C+_*P+m*B+f*Z,r[10]=g*L+_*k+m*N+f*rt,r[14]=g*w+_*I+m*j+f*pt,r[3]=v*T+E*x+y*U+A*H,r[7]=v*C+E*P+y*B+A*Z,r[11]=v*L+E*k+y*N+A*rt,r[15]=v*w+E*I+y*j+A*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+_*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=d*m*c-_*u*c+_*l*p-a*m*p-d*l*f+a*u*f,E=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*_*c-g*d*c+g*a*p-o*_*p-h*a*f+o*d*f,A=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,T=e*v+i*E+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=v*C,t[1]=(_*u*r-d*m*r-_*s*p+i*m*p+d*s*f-i*u*f)*C,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*f+i*l*f)*C,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*C,t[4]=E*C,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*C,t[8]=y*C,t[9]=(g*d*r-h*_*r-g*i*p+e*_*p+h*i*f-e*d*f)*C,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*C,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*p-e*a*p)*C,t[12]=A*C,t[13]=(h*_*s-g*d*s+g*i*u-e*_*u-h*i*m+e*d*m)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,v=l*c,E=l*h,y=l*d,A=i.x,T=i.y,C=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(u+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+E)*C,s[9]=(m-v)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=tr.set(s[0],s[1],s[2]).length();const o=tr.set(s[4],s[5],s[6]).length(),a=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);const c=1/r,h=1/o,d=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,e.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Wi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s);let p,g;if(a===Wi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ga)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Wi){const l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,p=(i+s)*h;let g,_;if(a===Wi)g=(o+r)*d,_=-2*d;else if(a===Ga)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const tr=new O,ii=new xe,ov=new O(0,0,0),av=new O(1,1,1),rs=new O,Jo=new O,bn=new O,Fd=new xe,Ud=new jn;class Ti{constructor(t=0,e=0,i=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Am{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lv=0;const Od=new O,er=new jn,Li=new xe,Qo=new O,oo=new O,cv=new O,hv=new jn,Bd=new O(1,0,0),zd=new O(0,1,0),kd=new O(0,0,1),Gd={type:"added"},uv={type:"removed"},nr={type:"childadded",child:null},Kl={type:"childremoved",child:null};class en extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new O,e=new Ti,i=new jn,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Xt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.multiply(er),this}rotateOnWorldAxis(t,e){return er.setFromAxisAngle(t,e),this.quaternion.premultiply(er),this}rotateX(t){return this.rotateOnAxis(Bd,t)}rotateY(t){return this.rotateOnAxis(zd,t)}rotateZ(t){return this.rotateOnAxis(kd,t)}translateOnAxis(t,e){return Od.copy(t).applyQuaternion(this.quaternion),this.position.add(Od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bd,t)}translateY(t){return this.translateOnAxis(zd,t)}translateZ(t){return this.translateOnAxis(kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qo.copy(t):Qo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(oo,Qo,this.up):Li.lookAt(Qo,oo,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Li),this.quaternion.premultiply(er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gd),nr.child=t,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uv),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gd),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,cv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,hv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new O,Di=new O,Zl=new O,Ni=new O,ir=new O,sr=new O,Hd=new O,Jl=new O,Ql=new O,tc=new O,ec=new Fe,nc=new Fe,ic=new Fe;class oi{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),si.subVectors(t,e),s.cross(si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){si.subVectors(s,e),Di.subVectors(i,e),Zl.subVectors(t,e);const o=si.dot(si),a=si.dot(Di),l=si.dot(Zl),c=Di.dot(Di),h=Di.dot(Zl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,i),ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ec,r.x),o.addScaledVector(nc,r.y),o.addScaledVector(ic,r.z),o}static isFrontFacing(t,e,i,s){return si.subVectors(i,e),Di.subVectors(t,e),si.cross(Di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),si.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return oi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ir.subVectors(s,i),sr.subVectors(r,i),Jl.subVectors(t,i);const l=ir.dot(Jl),c=sr.dot(Jl);if(l<=0&&c<=0)return e.copy(i);Ql.subVectors(t,s);const h=ir.dot(Ql),d=sr.dot(Ql);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ir,o);tc.subVectors(t,r);const p=ir.dot(tc),g=sr.dot(tc);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(sr,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Hd.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Hd,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(i).addScaledVector(ir,o).addScaledVector(sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},ta={h:0,s:0,l:0};function sc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Qh(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sc(o,r,t+1/3),this.g=sc(o,r,t),this.b=sc(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Wn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){const i=Cm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return te.workingToColorSpace(sn.copy(this),t),Math.round($t(sn.r*255,0,255))*65536+Math.round($t(sn.g*255,0,255))*256+Math.round($t(sn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(sn.copy(this),e);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Wn){te.workingToColorSpace(sn.copy(this),t);const e=sn.r,i=sn.g,s=sn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(ta);const i=Mo(os.h,ta.h,e),s=Mo(os.s,ta.s,e),r=Mo(os.l,ta.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Yt;Yt.NAMES=Cm;let dv=0,Xr=class extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=_r,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=zc,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bc&&(i.blendSrc=this.blendSrc),this.blendDst!==zc&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class eu extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new O,ea=new Wt;let fv=0;class wi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cd,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cd&&(t.usage=this.usage),t}}class Rm extends wi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pm extends wi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends wi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pv=0;const kn=new xe,rc=new en,rr=new O,Tn=new Uo,ao=new Uo,Ze=new O;class Dn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wm(t)?Pm:Rm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,i){return kn.makeTranslation(t,e,i),this.applyMatrix4(kn),this}scale(t,e,i){return kn.makeScale(t,e,i),this.applyMatrix4(kn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Tn.min,ao.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,ao.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(ao.min),Tn.expandByPoint(ao.max))}Tn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(t,c),Ze.add(rr)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;const c=new O,h=new O,d=new O,u=new Wt,p=new Wt,g=new Wt,_=new O,m=new O;function f(L,w,x){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,x),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[w].add(_),a[x].add(_),l[L].add(m),l[w].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,w=v.length;L<w;++L){const x=v[L],P=x.start,k=x.count;for(let I=P,U=P+k;I<U;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const E=new O,y=new O,A=new O,T=new O;function C(L){A.fromBufferAttribute(s,L),T.copy(A);const w=a[L];E.copy(w),E.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(T,w);const P=y.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,P)}for(let L=0,w=v.length;L<w;++L){const x=v[L],P=x.start,k=x.count;for(let I=P,U=P+k;I<U;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new wi(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vd=new xe,bs=new Tm,na=new rl,Wd=new O,ia=new O,sa=new O,ra=new O,oc=new O,oa=new O,Xd=new O,aa=new O;class un extends en{constructor(t=new Dn,e=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(oc.fromBufferAttribute(d,t),o?oa.addScaledVector(oc,h):oa.addScaledVector(oc.sub(e),h))}e.add(oa)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(na.containsPoint(bs.origin)===!1&&(bs.intersectSphere(na,Wd)===null||bs.origin.distanceToSquared(Wd)>(t.far-t.near)**2))&&(Vd.copy(r).invert(),bs.copy(t.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=E;y<A;y+=3){const T=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);s=la(this,f,t,i,c,h,d,T,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=la(this,o,t,i,c,h,d,v,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=E;y<A;y+=3){const T=y,C=y+1,L=y+2;s=la(this,f,t,i,c,h,d,T,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,E=m+1,y=m+2;s=la(this,o,t,i,c,h,d,v,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mv(n,t,e,i,s,r,o,a){let l;if(t.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ji,a),l===null)return null;aa.copy(a),aa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:n}}function la(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ia),n.getVertexPosition(l,sa),n.getVertexPosition(c,ra);const h=mv(n,t,e,i,ia,sa,ra,Xd);if(h){const d=new O;oi.getBarycoord(Xd,ia,sa,ra,d),s&&(h.uv=oi.getInterpolatedAttribute(s,a,l,c,d,new Wt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,a,l,c,d,new Wt)),o&&(h.normal=oi.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};oi.getNormal(ia,sa,ra,u.normal),h.face=u,h.barycoord=d}return h}class qr extends Dn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function g(_,m,f,v,E,y,A,T,C,L,w){const x=y/C,P=A/L,k=y/2,I=A/2,U=T/2,B=C+1,N=L+1;let j=0,H=0;const Z=new O;for(let rt=0;rt<N;rt++){const pt=rt*P-I;for(let it=0;it<B;it++){const Qt=it*x-k;Z[_]=Qt*v,Z[m]=pt*E,Z[f]=U,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(it/C),d.push(1-rt/L),j+=1}}for(let rt=0;rt<L;rt++)for(let pt=0;pt<C;pt++){const it=u+pt+B*rt,Qt=u+pt+B*(rt+1),Y=u+(pt+1)+B*(rt+1),st=u+(pt+1)+B*rt;l.push(it,Qt,st),l.push(Qt,Y,st),H+=6}a.addGroup(p,H,w),p+=H,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function hn(n){const t={};for(let e=0;e<n.length;e++){const i=Pr(n[e]);for(const s in i)t[s]=i[s]}return t}function gv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Im(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ir={clone:Pr,merge:hn};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lm extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new O,qd=new Wt,jd=new Wt;class Xn extends Lm{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,qd,jd),e.subVectors(jd,qd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const or=-90,ar=1;class xv extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(or,ar,t,e);s.layers=this.layers,this.add(s);const r=new Xn(or,ar,t,e);r.layers=this.layers,this.add(r);const o=new Xn(or,ar,t,e);o.layers=this.layers,this.add(o);const a=new Xn(or,ar,t,e);a.layers=this.layers,this.add(a);const l=new Xn(or,ar,t,e);l.layers=this.layers,this.add(l);const c=new Xn(or,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dm extends yn{constructor(t=[],e=Ar,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yv extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Dm(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qr(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:qi});r.uniforms.tEquirect.value=e;const o=new un(s,r),a=e.minFilter;return e.minFilter===Bs&&(e.minFilter=Ei),new xv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class zs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mv={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Sv extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const lc=new O,Ev=new O,wv=new Xt;class Is{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=lc.subVectors(i,e).cross(Ev.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wv.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new rl,ca=new O;class nu{constructor(t=new Is,e=new Is,i=new Is,s=new Is,r=new Is,o=new Is){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],v=s[13],E=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-_,y-E).normalize(),e===Wi)i[5].setComponents(l+a,u+d,m+_,y+E).normalize();else if(e===Ga)i[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nm extends Xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wa=new O,Xa=new O,Yd=new xe,lo=new Tm,ha=new rl,cc=new O,$d=new O;class bv extends en{constructor(t=new Dn,e=new Nm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Wa.fromBufferAttribute(e,s-1),Xa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;Yd.copy(s).invert(),lo.copy(t.ray).applyMatrix4(Yd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),v=h.getX(_+1),E=ua(this,t,lo,l,f,v,_);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ua(this,t,lo,l,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=ua(this,t,lo,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=ua(this,t,lo,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Wa.fromBufferAttribute(a,s),Xa.fromBufferAttribute(a,r),e.distanceSqToSegment(Wa,Xa,cc,$d)>i)return;cc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cc);if(!(c<t.near||c>t.far))return{distance:c,point:$d.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Kd=new O,Zd=new O;class Tv extends bv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Kd.fromBufferAttribute(e,s),Zd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kd.distanceTo(Zd);t.setAttribute("lineDistance",new Oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fm extends yn{constructor(t,e,i=Ws,s,r,o,a=ci,l=ci,c,h=Ro,d=1){if(h!==Ro&&h!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qa extends Dn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,p=2*d+u,g=i*2+r,_=s+1,m=new O,f=new O;for(let v=0;v<=g;v++){let E=0,y=0,A=0,T=0;if(v<=i){const w=v/i,x=w*Math.PI/2;y=-h-t*Math.cos(x),A=t*Math.sin(x),T=-t*Math.cos(x),E=w*d}else if(v<=i+r){const w=(v-i)/r;y=-h+w*e,A=t,T=0,E=d+w*u}else{const w=(v-i-r)/i,x=w*Math.PI/2;y=h+t*Math.sin(x),A=t*Math.cos(x),T=t*Math.sin(x),E=d+u+w*d}const C=Math.max(0,Math.min(1,E/p));let L=0;v===0?L=.5/s:v===g&&(L=-.5/s);for(let w=0;w<=s;w++){const x=w/s,P=x*Math.PI*2,k=Math.sin(P),I=Math.cos(P);f.x=-A*I,f.y=y,f.z=A*k,a.push(f.x,f.y,f.z),m.set(-A*I,T,A*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+L,C)}if(v>0){const w=(v-1)*_;for(let x=0;x<s;x++){const P=w+x,k=w+x+1,I=v*_+x,U=v*_+x+1;o.push(P,k,I),o.push(k,U,I)}}}this.setIndex(o),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class iu extends Dn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(p,2));function v(){const y=new O,A=new O;let T=0;const C=(e-t)/i;for(let L=0;L<=r;L++){const w=[],x=L/r,P=x*(e-t)+t;for(let k=0;k<=s;k++){const I=k/s,U=I*l+a,B=Math.sin(U),N=Math.cos(U);A.x=P*B,A.y=-x*i+m,A.z=P*N,d.push(A.x,A.y,A.z),y.set(B,C,N).normalize(),u.push(y.x,y.y,y.z),p.push(I,1-x),w.push(g++)}_.push(w)}for(let L=0;L<s;L++)for(let w=0;w<r;w++){const x=_[w][L],P=_[w+1][L],k=_[w+1][L+1],I=_[w][L+1];(t>0||w!==0)&&(h.push(x,P,I),T+=3),(e>0||w!==r-1)&&(h.push(P,k,I),T+=3)}c.addGroup(f,T,0),f+=T}function E(y){const A=g,T=new Wt,C=new O;let L=0;const w=y===!0?t:e,x=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),g++;const P=g;for(let k=0;k<=s;k++){const U=k/s*l+a,B=Math.cos(U),N=Math.sin(U);C.x=w*N,C.y=m*x,C.z=w*B,d.push(C.x,C.y,C.z),u.push(0,x,0),T.x=B*.5+.5,T.y=N*.5*x+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){const I=A+k,U=P+k;y===!0?h.push(U,U+1,I):h.push(U+1,U,I),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new iu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends Dn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-o;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-v,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const E=v+c*f,y=v+c*(f+1),A=v+1+c*(f+1),T=v+1+c*f;p.push(E,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class su extends Dn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new O,u=new O,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],E=f/i;let y=0;f===0&&o===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const T=A/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+E*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+y,1-E),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<e;v++){const E=h[f][v+1],y=h[f][v],A=h[f+1][v],T=h[f+1][v+1];(f!==0||o>0)&&p.push(E,y,T),(f!==i-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new su(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Av extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Um extends Xr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sm,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cv extends Um{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rv extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pv extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Om extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const hc=new xe,Jd=new O,Qd=new O;class Iv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Jd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jd),Qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qd),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ru extends Lm{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lv extends Iv{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dv extends Om{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Lv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nv extends Om{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fv extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Uv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tf(){return performance.now()}class Ov extends Tv{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Dn;s.setAttribute("position",new Oe(e,3)),s.setAttribute("color",new Oe(i,3));const r=new Nm({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new Yt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function ef(n,t,e,i){const s=Bv(i);switch(e){case _m:return n*t;case xm:return n*t/s.components*s.byteLength;case Kh:return n*t/s.components*s.byteLength;case ym:return n*t*2/s.components*s.byteLength;case Zh:return n*t*2/s.components*s.byteLength;case vm:return n*t*3/s.components*s.byteLength;case ai:return n*t*4/s.components*s.byteLength;case Jh:return n*t*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jc:case th:return Math.max(n,16)*Math.max(t,8)/4;case Zc:case Qc:return Math.max(n,8)*Math.max(t,8)/2;case eh:case nh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ih:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ph:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Pa:case vh:case xh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mm:case yh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Mh:case Sh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bv(n){switch(n){case bi:case pm:return{byteLength:1,components:1};case Ao:case mm:case ji:return{byteLength:2,components:1};case Yh:case $h:return{byteLength:2,components:4};case Ws:case jh:case Vi:return{byteLength:4,components:1};case gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zv(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:kv,alphahash_pars_fragment:Gv,alphamap_fragment:Hv,alphamap_pars_fragment:Vv,alphatest_fragment:Wv,alphatest_pars_fragment:Xv,aomap_fragment:qv,aomap_pars_fragment:jv,batching_pars_vertex:Yv,batching_vertex:$v,begin_vertex:Kv,beginnormal_vertex:Zv,bsdfs:Jv,iridescence_fragment:Qv,bumpmap_pars_fragment:t1,clipping_planes_fragment:e1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:s1,color_fragment:r1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:u1,displacementmap_pars_vertex:d1,displacementmap_vertex:f1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:_1,envmap_fragment:v1,envmap_common_pars_fragment:x1,envmap_pars_fragment:y1,envmap_pars_vertex:M1,envmap_physical_pars_fragment:L1,envmap_vertex:S1,fog_vertex:E1,fog_pars_vertex:w1,fog_fragment:b1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:C1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:P1,lights_pars_begin:I1,lights_toon_fragment:D1,lights_toon_pars_fragment:N1,lights_phong_fragment:F1,lights_phong_pars_fragment:U1,lights_physical_fragment:O1,lights_physical_pars_fragment:B1,lights_fragment_begin:z1,lights_fragment_maps:k1,lights_fragment_end:G1,logdepthbuf_fragment:H1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:q1,map_pars_fragment:j1,map_particle_fragment:Y1,map_particle_pars_fragment:$1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:J1,morphcolor_vertex:Q1,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:fx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:_x,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Ex,shadowmask_pars_fragment:wx,skinbase_vertex:bx,skinning_pars_vertex:Tx,skinning_vertex:Ax,skinnormal_vertex:Cx,specularmap_fragment:Rx,specularmap_pars_fragment:Px,tonemapping_fragment:Ix,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Nx,uv_pars_fragment:Fx,uv_pars_vertex:Ux,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:zx,background_frag:kx,backgroundCube_vert:Gx,backgroundCube_frag:Hx,cube_vert:Vx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:jx,distanceRGBA_frag:Yx,equirect_vert:$x,equirect_frag:Kx,linedashed_vert:Zx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:t2,meshlambert_vert:e2,meshlambert_frag:n2,meshmatcap_vert:i2,meshmatcap_frag:s2,meshnormal_vert:r2,meshnormal_frag:o2,meshphong_vert:a2,meshphong_frag:l2,meshphysical_vert:c2,meshphysical_frag:h2,meshtoon_vert:u2,meshtoon_frag:d2,points_vert:f2,points_frag:p2,shadow_vert:m2,shadow_frag:g2,sprite_vert:_2,sprite_frag:v2},at={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Mi={basic:{uniforms:hn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:hn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:hn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:hn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:hn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:hn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:hn([at.points,at.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:hn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:hn([at.common,at.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:hn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:hn([at.sprite,at.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:hn([at.common,at.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:hn([at.lights,at.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Mi.physical={uniforms:hn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const da={r:0,b:0,g:0},As=new Ti,x2=new xe;function y2(n,t,e,i,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1;const A=g(E);A===null?f(a,l):A&&A.isColor&&(f(A,1),y=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===sl)?(h===void 0&&(h=new un(new qr(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Pr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(y.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x2.makeRotationFromEuler(As)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==fe,(d!==A||u!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new un(new ol(2,2),new on({name:"BackgroundMaterial",uniforms:Pr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(da,Im(n)),i.buffers.color.setClear(da.r,da.g,da.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m,dispose:v}}function M2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,P,k,I,U){let B=!1;const N=d(I,k,P);r!==N&&(r=N,c(r.object)),B=p(x,I,k,U),B&&g(x,I,k,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(x,P,k,I),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,P,k){const I=k.wireframe===!0;let U=i[x.id];U===void 0&&(U={},i[x.id]=U);let B=U[P.id];B===void 0&&(B={},U[P.id]=B);let N=B[I];return N===void 0&&(N=u(l()),B[I]=N),N}function u(x){const P=[],k=[],I=[];for(let U=0;U<e;U++)P[U]=0,k[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:I,object:x,attributes:{},index:null}}function p(x,P,k,I){const U=r.attributes,B=P.attributes;let N=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){const rt=U[H];let pt=B[H];if(pt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;N++}return r.attributesNum!==N||r.index!==I}function g(x,P,k,I){const U={},B=P.attributes;let N=0;const j=k.getAttributes();for(const H in j)if(j[H].location>=0){let rt=B[H];rt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),U[H]=pt,N++}r.attributes=U,r.attributesNum=N,r.index=I}function _(){const x=r.newAttributes;for(let P=0,k=x.length;P<k;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){const k=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;k[x]=1,I[x]===0&&(n.enableVertexAttribArray(x),I[x]=1),U[x]!==P&&(n.vertexAttribDivisor(x,P),U[x]=P)}function v(){const x=r.newAttributes,P=r.enabledAttributes;for(let k=0,I=P.length;k<I;k++)P[k]!==x[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function E(x,P,k,I,U,B,N){N===!0?n.vertexAttribIPointer(x,P,k,U,B):n.vertexAttribPointer(x,P,k,I,U,B)}function y(x,P,k,I){_();const U=I.attributes,B=k.getAttributes(),N=P.defaultAttributeValues;for(const j in B){const H=B[j];if(H.location>=0){let Z=U[j];if(Z===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const rt=Z.normalized,pt=Z.itemSize,it=t.get(Z);if(it===void 0)continue;const Qt=it.buffer,Y=it.type,st=it.bytesPerElement,Et=Y===n.INT||Y===n.UNSIGNED_INT||Z.gpuType===jh;if(Z.isInterleavedBufferAttribute){const ht=Z.data,Lt=ht.stride,re=Z.offset;if(ht.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)f(H.location+zt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let zt=0;zt<H.locationSize;zt++)E(H.location+zt,pt/H.locationSize,Y,rt,Lt*st,(re+pt/H.locationSize*zt)*st,Et)}else{if(Z.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)f(H.location+ht,Z.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let ht=0;ht<H.locationSize;ht++)E(H.location+ht,pt/H.locationSize,Y,rt,pt*st,pt/H.locationSize*ht*st,Et)}}else if(N!==void 0){const rt=N[j];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(H.location,rt);break;case 3:n.vertexAttrib3fv(H.location,rt);break;case 4:n.vertexAttrib4fv(H.location,rt);break;default:n.vertexAttrib1fv(H.location,rt)}}}}v()}function A(){L();for(const x in i){const P=i[x];for(const k in P){const I=P[k];for(const U in I)h(I[U].object),delete I[U];delete P[k]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const k in P){const I=P[k];for(const U in I)h(I[U].object),delete I[U];delete P[k]}delete i[x.id]}function C(x){for(const P in i){const k=i[P];if(k[x.id]===void 0)continue;const I=k[x.id];for(const U in I)h(I[U].object),delete I[U];delete k[x.id]}}function L(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function S2(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function E2(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ai&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vi&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function w2(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Is,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,E=v*4;let y=f.clippingState||null;l.value=y,y=h(g,u,E,p);for(let A=0;A!==E;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function b2(n){let t=new WeakMap;function e(o,a){return a===jc?o.mapping=Ar:a===Yc&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jc||a===Yc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const pr=4,nf=[.125,.215,.35,.446,.526,.582],Fs=20,uc=new ru,sf=new Yt;let dc=null,fc=0,pc=0,mc=!1;const Ls=(1+Math.sqrt(5))/2,lr=1/Ls,rf=[new O(-Ls,lr,0),new O(Ls,lr,0),new O(-lr,0,Ls),new O(lr,0,Ls),new O(0,Ls,-lr),new O(0,Ls,lr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],T2=new O;class of{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=T2}=r;dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ar||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ji,format:ai,colorSpace:Rr,depthBuffer:!1},s=af(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A2(r)),this._blurMaterial=C2(r,t,e)}return s}_compileMaterial(t){const e=new un(this._lodPlanes[0],t);this._renderer.compile(e,uc)}_sceneToCubeUV(t,e,i,s,r){const l=new Xn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(sf),d.toneMapping=fs,d.autoClear=!1;const g=new eu({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new un(new qr,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(sf),m=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):E===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const y=this._cubeSize;fa(s,E*y,v>2?y:0,y,y),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ar||t.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,uc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rf[(s-r-1)%rf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new un(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fs;m>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fs}`);const f=[];let v=0;for(let C=0;C<Fs;++C){const L=C/_,w=Math.exp(-L*L/2);f.push(w),C===0?v+=w:C<m&&(v+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;const y=this._sizeLods[s],A=3*y*(s>E-pr?s-E+pr:0),T=4*(this._cubeSize-y);fa(e,A,T,3*y,2*y),l.setRenderTarget(e),l.render(d,uc)}}function A2(n){const t=[],e=[],i=[];let s=n;const r=n-pr+1+nf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-pr?l=nf[o-n+pr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,L=T>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(w,_*g*T),E.set(u,m*g*T);const x=[T,T,T,T,T,T];y.set(x,f*g*T)}const A=new Dn;A.setAttribute("position",new wi(v,_)),A.setAttribute("uv",new wi(E,m)),A.setAttribute("faceIndex",new wi(y,f)),t.push(A),s>pr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function af(n,t,e){const i=new hi(n,t,e);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function C2(n,t,e){const i=new Float32Array(Fs),s=new O(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function lf(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function cf(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R2(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===jc||l===Yc,h=l===Ar||l===Cr;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new of(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new of(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function P2(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function I2(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let E=0,y=v.length;E<y;E+=3){const A=v[E+0],T=v[E+1],C=v[E+2];u.push(A,T,T,C,C,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let E=0,y=v.length/3-1;E<y;E+=3){const A=E+0,T=E+1,C=E+2;u.push(A,T,T,C,C,A)}}else return;const m=new(wm(u)?Pm:Rm)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function L2(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),e.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),e.update(p,i,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function D2(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function N2(n,t,e){const i=new WeakMap,s=new Fe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*T*4*d),L=new bm(C,A,T,d);L.type=Vi,L.needsUpdate=!0;const w=y*4;for(let P=0;P<d;P++){const k=f[P],I=v[P],U=E[P],B=A*T*4*P;for(let N=0;N<k.count;N++){const j=N*w;g===!0&&(s.fromBufferAttribute(k,N),C[B+j+0]=s.x,C[B+j+1]=s.y,C[B+j+2]=s.z,C[B+j+3]=0),_===!0&&(s.fromBufferAttribute(I,N),C[B+j+4]=s.x,C[B+j+5]=s.y,C[B+j+6]=s.z,C[B+j+7]=0),m===!0&&(s.fromBufferAttribute(U,N),C[B+j+8]=s.x,C[B+j+9]=s.y,C[B+j+10]=s.z,C[B+j+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new Wt(A,T)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function F2(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const zm=new yn,hf=new Fm(1,1),km=new bm,Gm=new sv,Hm=new Dm,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function jr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function $e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function al(n,t){let e=df[t];e===void 0&&(e=new Int32Array(t),df[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function O2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2fv(this.addr,t),Ke(e,t)}}function B2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;n.uniform3fv(this.addr,t),Ke(e,t)}}function z2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4fv(this.addr,t),Ke(e,t)}}function k2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;mf.set(i),n.uniformMatrix2fv(this.addr,!1,mf),Ke(e,i)}}function G2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;pf.set(i),n.uniformMatrix3fv(this.addr,!1,pf),Ke(e,i)}}function H2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,i))return;ff.set(i),n.uniformMatrix4fv(this.addr,!1,ff),Ke(e,i)}}function V2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function W2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2iv(this.addr,t),Ke(e,t)}}function X2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3iv(this.addr,t),Ke(e,t)}}function q2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4iv(this.addr,t),Ke(e,t)}}function j2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;n.uniform2uiv(this.addr,t),Ke(e,t)}}function $2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;n.uniform3uiv(this.addr,t),Ke(e,t)}}function K2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;n.uniform4uiv(this.addr,t),Ke(e,t)}}function Z2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hf.compareFunction=Em,r=hf):r=zm,e.setTexture2D(t||r,s)}function J2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Gm,s)}function Q2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hm,s)}function ty(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||km,s)}function ey(n){switch(n){case 5126:return U2;case 35664:return O2;case 35665:return B2;case 35666:return z2;case 35674:return k2;case 35675:return G2;case 35676:return H2;case 5124:case 35670:return V2;case 35667:case 35671:return W2;case 35668:case 35672:return X2;case 35669:case 35673:return q2;case 5125:return j2;case 36294:return Y2;case 36295:return $2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return ty}}function ny(n,t){n.uniform1fv(this.addr,t)}function iy(n,t){const e=jr(t,this.size,2);n.uniform2fv(this.addr,e)}function sy(n,t){const e=jr(t,this.size,3);n.uniform3fv(this.addr,e)}function ry(n,t){const e=jr(t,this.size,4);n.uniform4fv(this.addr,e)}function oy(n,t){const e=jr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ay(n,t){const e=jr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ly(n,t){const e=jr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function cy(n,t){n.uniform1iv(this.addr,t)}function hy(n,t){n.uniform2iv(this.addr,t)}function uy(n,t){n.uniform3iv(this.addr,t)}function dy(n,t){n.uniform4iv(this.addr,t)}function fy(n,t){n.uniform1uiv(this.addr,t)}function py(n,t){n.uniform2uiv(this.addr,t)}function my(n,t){n.uniform3uiv(this.addr,t)}function gy(n,t){n.uniform4uiv(this.addr,t)}function _y(n,t,e){const i=this.cache,s=t.length,r=al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zm,r[o])}function vy(n,t,e){const i=this.cache,s=t.length,r=al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gm,r[o])}function xy(n,t,e){const i=this.cache,s=t.length,r=al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hm,r[o])}function yy(n,t,e){const i=this.cache,s=t.length,r=al(e,s);$e(i,r)||(n.uniform1iv(this.addr,r),Ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||km,r[o])}function My(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return yy}}class Sy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ey(e.type)}}class Ey{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=My(e.type)}}class wy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function gf(n,t){n.seq.push(t),n.map[t.id]=t}function by(n,t,e){const i=n.name,s=i.length;for(gc.lastIndex=0;;){const r=gc.exec(i),o=gc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gf(e,c===void 0?new Sy(a,n,t):new Ey(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new wy(a),gf(e,d)),e=d}}}class Ia{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);by(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function _f(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ty=37297;let Ay=0;function Cy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const vf=new Xt;function Ry(n){te._getMatrix(vf,te.workingColorSpace,n);const t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case ka:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cy(n.getShaderSource(t),o)}else return s}function Py(n,t){const e=Ry(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Iy(n,t){let e;switch(t){case om:e="Linear";break;case am:e="Reinhard";break;case lm:e="Cineon";break;case cm:e="ACESFilmic";break;case um:e="AgX";break;case dm:e="Neutral";break;case hm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pa=new O;function Ly(){te.getLuminanceCoefficients(pa);const n=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function Ny(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Fy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function go(n){return n!==""}function yf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(n){return n.replace(Uy,By)}const Oy=new Map;function By(n,t){let e=jt[t];if(e===void 0){const i=Oy.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Eh(e)}const zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(n){return n.replace(zy,ky)}function ky(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gy(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===im?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Hy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ar:case Cr:t="ENVMAP_TYPE_CUBE";break;case sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Wy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rm:t="ENVMAP_BLENDING_MULTIPLY";break;case y_:t="ENVMAP_BLENDING_MIX";break;case M_:t="ENVMAP_BLENDING_ADD";break}return t}function Xy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function qy(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gy(e),c=Hy(e),h=Vy(e),d=Wy(e),u=Xy(e),p=Dy(e),g=Ny(r),_=s.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(go).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(go).join(`
`),f.length>0&&(f+=`
`)):(m=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),f=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fs?"#define TONE_MAPPING":"",e.toneMapping!==fs?jt.tonemapping_pars_fragment:"",e.toneMapping!==fs?Iy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Py("linearToOutputTexel",e.outputColorSpace),Ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=Eh(o),o=yf(o,e),o=Mf(o,e),a=Eh(a),a=yf(a,e),a=Mf(a,e),o=Sf(o),a=Sf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=v+m+o,y=v+f+a,A=_f(s,s.VERTEX_SHADER,E),T=_f(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(T).trim();let B=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,T);else{const j=xf(s,A,"vertex"),H=xf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+j+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||U==="")&&(N=!1);N&&(P.diagnostics={runnable:B,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(A),s.deleteShader(T),L=new Ia(s,_),w=Fy(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Ty)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ay++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let jy=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $y(t),e.set(t,i)),i}}class $y{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}}function Ky(n,t,e,i,s,r,o){const a=new Am,l=new Yy,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,x,P,k,I){const U=k.fog,B=I.geometry,N=w.isMeshStandardMaterial?k.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||N),H=j&&j.mapping===sl?j.image.height:null,Z=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const rt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,pt=rt!==void 0?rt.length:0;let it=0;B.morphAttributes.position!==void 0&&(it=1),B.morphAttributes.normal!==void 0&&(it=2),B.morphAttributes.color!==void 0&&(it=3);let Qt,Y,st,Et;if(Z){const ue=Mi[Z];Qt=ue.vertexShader,Y=ue.fragmentShader}else Qt=w.vertexShader,Y=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);const ht=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),re=I.isInstancedMesh===!0,zt=I.isBatchedMesh===!0,Ce=!!w.map,Re=!!w.matcap,oe=!!j,D=!!w.aoMap,an=!!w.lightMap,ae=!!w.bumpMap,ge=!!w.normalMap,At=!!w.displacementMap,ne=!!w.emissiveMap,Ft=!!w.metalnessMap,qt=!!w.roughnessMap,qe=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,V=w.iridescence>0,$=w.sheen>0,J=w.transmission>0,q=qe&&!!w.anisotropyMap,Pt=R&&!!w.clearcoatMap,lt=R&&!!w.clearcoatNormalMap,wt=R&&!!w.clearcoatRoughnessMap,It=V&&!!w.iridescenceMap,Q=V&&!!w.iridescenceThicknessMap,gt=$&&!!w.sheenColorMap,Bt=$&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,ot=!!w.specularColorMap,Ht=!!w.specularIntensityMap,F=J&&!!w.transmissionMap,ut=J&&!!w.thicknessMap,tt=!!w.gradientMap,xt=!!w.alphaMap,et=w.alphaTest>0,K=!!w.alphaHash,yt=!!w.extensions;let Vt=fs;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Vt=n.toneMapping);const Me={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:Y,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:zt,batchingColor:zt&&I._colorsTexture!==null,instancing:re,instancingColor:re&&I.instanceColor!==null,instancingMorph:re&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:Ce,matcap:Re,envMap:oe,envMapMode:oe&&j.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:an,bumpMap:ae,normalMap:ge,displacementMap:u&&At,emissiveMap:ne,normalMapObjectSpace:ge&&w.normalMapType===b_,normalMapTangentSpace:ge&&w.normalMapType===Sm,metalnessMap:Ft,roughnessMap:qt,anisotropy:qe,anisotropyMap:q,clearcoat:R,clearcoatMap:Pt,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:S,iridescence:V,iridescenceMap:It,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:gt,sheenRoughnessMap:Bt,specularMap:Ot,specularColorMap:ot,specularIntensityMap:Ht,transmission:J,transmissionMap:F,thicknessMap:ut,gradientMap:tt,opaque:w.transparent===!1&&w.blending===_r&&w.alphaToCoverage===!1,alphaMap:xt,alphaTest:et,alphaHash:K,combine:w.combine,mapUv:Ce&&_(w.map.channel),aoMapUv:D&&_(w.aoMap.channel),lightMapUv:an&&_(w.lightMap.channel),bumpMapUv:ae&&_(w.bumpMap.channel),normalMapUv:ge&&_(w.normalMap.channel),displacementMapUv:At&&_(w.displacementMap.channel),emissiveMapUv:ne&&_(w.emissiveMap.channel),metalnessMapUv:Ft&&_(w.metalnessMap.channel),roughnessMapUv:qt&&_(w.roughnessMap.channel),anisotropyMapUv:q&&_(w.anisotropyMap.channel),clearcoatMapUv:Pt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ot&&_(w.specularMap.channel),specularColorMapUv:ot&&_(w.specularColorMap.channel),specularIntensityMapUv:Ht&&_(w.specularIntensityMap.channel),transmissionMapUv:F&&_(w.transmissionMap.channel),thicknessMapUv:ut&&_(w.thicknessMap.channel),alphaMapUv:xt&&_(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||qe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ce||xt),fog:!!U,useFog:w.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Lt,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:it,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Ce&&w.map.isVideoTexture===!0&&te.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:ne&&w.emissiveMap.isVideoTexture===!0&&te.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gi,flipSided:w.side===dn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:yt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&w.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function f(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)x.push(P),x.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(x,w),E(x,w),x.push(n.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function v(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function E(w,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const x=g[w.type];let P;if(x){const k=Mi[x];P=Ir.clone(k.uniforms)}else P=w.uniforms;return P}function A(w,x){let P;for(let k=0,I=h.length;k<I;k++){const U=h[k];if(U.cacheKey===x){P=U,++P.usedTimes;break}}return P===void 0&&(P=new qy(n,x,w,r),h.push(P)),P}function T(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function Zy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Jy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function wf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,p,g,_,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Jy),i.length>1&&i.sort(u||wf),s.length>1&&s.sort(u||wf)}function h(){for(let d=t,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Qy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new bf,n.set(i,[o])):s>=r.length?(o=new bf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function tM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function eM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let nM=0;function iM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sM(n){const t=new tM,e=eM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new xe,o=new xe;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,E=0,y=0,A=0,T=0,C=0;c.sort(iM);for(let w=0,x=c.length;w<x;w++){const P=c[w],k=P.color,I=P.intensity,U=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*I,d+=k.g*I,u+=k.b*I;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],I);C++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=N,p++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(k).multiplyScalar(I),N.distance=U,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[_]=N;const j=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,j.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=B,y++}_++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(k).multiplyScalar(I),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=N,m++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const j=P.shadow,H=e.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=N,g++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(I),N.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[f]=N,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==v||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=v,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=C,i.version=nM++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const E=c[f];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Tf(n){const t=new sM(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Tf(n),t.set(s,[a])):r>=o.length?(a=new Tf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const oM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lM(n,t,e){let i=new nu;const s=new Wt,r=new Wt,o=new Fe,a=new Rv({depthPacking:w_}),l=new Pv,c={},h=e.maxTextureSize,d={[Ji]:dn,[dn]:Ji,[Gi]:Gi},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:oM,fragmentShader:aM}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dn;g.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new un(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=im;let f=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(qi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=f!==zi&&this.type===zi,U=f===zi&&this.type!==zi;for(let B=0,N=T.length;B<N;B++){const j=T[B],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Z=H.getFrameExtents();if(s.multiply(Z),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||I===!0||U===!0){const pt=this.type!==zi?{minFilter:ci,magFilter:ci}:{};H.map!==null&&H.map.dispose(),H.map=new hi(s.x,s.y,pt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const rt=H.getViewportCount();for(let pt=0;pt<rt;pt++){const it=H.getViewport(pt);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),k.viewport(o),H.updateMatrices(j,pt),i=H.getFrustum(),y(C,L,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&v(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,x,P)};function v(T,C){const L=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,L,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,L,p,_,null)}function E(T,C,L,w){let x=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=x.uuid,I=C.uuid;let U=c[k];U===void 0&&(U={},c[k]=U);let B=U[I];B===void 0&&(B=x.clone(),U[I]=B,C.addEventListener("dispose",A)),x=B}if(x.visible=C.visible,x.wireframe=C.wireframe,w===zi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=n.properties.get(x);k.light=L}return x}function y(T,C,L,w,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===zi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const I=t.update(T),U=T.material;if(Array.isArray(U)){const B=I.groups;for(let N=0,j=B.length;N<j;N++){const H=B[N],Z=U[H.materialIndex];if(Z&&Z.visible){const rt=E(T,Z,w,x);T.onBeforeShadow(n,T,C,L,I,rt,H),n.renderBufferDirect(L,null,I,rt,T,H),T.onAfterShadow(n,T,C,L,I,rt,H)}}}else if(U.visible){const B=E(T,U,w,x);T.onBeforeShadow(n,T,C,L,I,B,null),n.renderBufferDirect(L,null,I,B,T,null),T.onAfterShadow(n,T,C,L,I,B,null)}}const k=T.children;for(let I=0,U=k.length;I<U;I++)y(k[I],C,L,w,x)}function A(T){T.target.removeEventListener("dispose",A);for(const L in c){const w=c[L],x=T.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const cM={[kc]:Gc,[Hc]:Xc,[Vc]:qc,[Tr]:Wc,[Gc]:kc,[Xc]:Hc,[qc]:Vc,[Wc]:Tr};function hM(n,t){function e(){let F=!1;const ut=new Fe;let tt=null;const xt=new Fe(0,0,0,0);return{setMask:function(et){tt!==et&&!F&&(n.colorMask(et,et,et,et),tt=et)},setLocked:function(et){F=et},setClear:function(et,K,yt,Vt,Me){Me===!0&&(et*=Vt,K*=Vt,yt*=Vt),ut.set(et,K,yt,Vt),xt.equals(ut)===!1&&(n.clearColor(et,K,yt,Vt),xt.copy(ut))},reset:function(){F=!1,tt=null,xt.set(-1,0,0,0)}}}function i(){let F=!1,ut=!1,tt=null,xt=null,et=null;return{setReversed:function(K){if(ut!==K){const yt=t.get("EXT_clip_control");K?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),ut=K;const Vt=et;et=null,this.setClear(Vt)}},getReversed:function(){return ut},setTest:function(K){K?ht(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(K){tt!==K&&!F&&(n.depthMask(K),tt=K)},setFunc:function(K){if(ut&&(K=cM[K]),xt!==K){switch(K){case kc:n.depthFunc(n.NEVER);break;case Gc:n.depthFunc(n.ALWAYS);break;case Hc:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case Vc:n.depthFunc(n.EQUAL);break;case Wc:n.depthFunc(n.GEQUAL);break;case Xc:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=K}},setLocked:function(K){F=K},setClear:function(K){et!==K&&(ut&&(K=1-K),n.clearDepth(K),et=K)},reset:function(){F=!1,tt=null,xt=null,et=null,ut=!1}}}function s(){let F=!1,ut=null,tt=null,xt=null,et=null,K=null,yt=null,Vt=null,Me=null;return{setTest:function(ue){F||(ue?ht(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(ue){ut!==ue&&!F&&(n.stencilMask(ue),ut=ue)},setFunc:function(ue,ti,Ri){(tt!==ue||xt!==ti||et!==Ri)&&(n.stencilFunc(ue,ti,Ri),tt=ue,xt=ti,et=Ri)},setOp:function(ue,ti,Ri){(K!==ue||yt!==ti||Vt!==Ri)&&(n.stencilOp(ue,ti,Ri),K=ue,yt=ti,Vt=Ri)},setLocked:function(ue){F=ue},setClear:function(ue){Me!==ue&&(n.clearStencil(ue),Me=ue)},reset:function(){F=!1,ut=null,tt=null,xt=null,et=null,K=null,yt=null,Vt=null,Me=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,E=null,y=null,A=null,T=null,C=new Yt(0,0,0),L=0,w=!1,x=null,P=null,k=null,I=null,U=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,j=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=j>=2);let Z=null,rt={};const pt=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),Qt=new Fe().fromArray(pt),Y=new Fe().fromArray(it);function st(F,ut,tt,xt){const et=new Uint8Array(4),K=n.createTexture();n.bindTexture(F,K),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let yt=0;yt<tt;yt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,et):n.texImage2D(ut+yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,et);return K}const Et={};Et[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(Tr),ae(!1),ge(wd),ht(n.CULL_FACE),D(qi);function ht(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Lt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function re(F,ut){return d[F]!==ut?(n.bindFramebuffer(F,ut),d[F]=ut,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ut),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function zt(F,ut){let tt=p,xt=!1;if(F){tt=u.get(ut),tt===void 0&&(tt=[],u.set(ut,tt));const et=F.textures;if(tt.length!==et.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let K=0,yt=et.length;K<yt;K++)tt[K]=n.COLOR_ATTACHMENT0+K;tt.length=et.length,xt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,xt=!0);xt&&n.drawBuffers(tt)}function Ce(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Re={[Ns]:n.FUNC_ADD,[i_]:n.FUNC_SUBTRACT,[s_]:n.FUNC_REVERSE_SUBTRACT};Re[r_]=n.MIN,Re[o_]=n.MAX;const oe={[a_]:n.ZERO,[l_]:n.ONE,[c_]:n.SRC_COLOR,[Bc]:n.SRC_ALPHA,[m_]:n.SRC_ALPHA_SATURATE,[f_]:n.DST_COLOR,[u_]:n.DST_ALPHA,[h_]:n.ONE_MINUS_SRC_COLOR,[zc]:n.ONE_MINUS_SRC_ALPHA,[p_]:n.ONE_MINUS_DST_COLOR,[d_]:n.ONE_MINUS_DST_ALPHA,[g_]:n.CONSTANT_COLOR,[__]:n.ONE_MINUS_CONSTANT_COLOR,[v_]:n.CONSTANT_ALPHA,[x_]:n.ONE_MINUS_CONSTANT_ALPHA};function D(F,ut,tt,xt,et,K,yt,Vt,Me,ue){if(F===qi){_===!0&&(Lt(n.BLEND),_=!1);return}if(_===!1&&(ht(n.BLEND),_=!0),F!==n_){if(F!==m||ue!==w){if((f!==Ns||y!==Ns)&&(n.blendEquation(n.FUNC_ADD),f=Ns,y=Ns),ue)switch(F){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oc:n.blendFunc(n.ONE,n.ONE);break;case bd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Td:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Td:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,E=null,A=null,T=null,C.set(0,0,0),L=0,m=F,w=ue}return}et=et||ut,K=K||tt,yt=yt||xt,(ut!==f||et!==y)&&(n.blendEquationSeparate(Re[ut],Re[et]),f=ut,y=et),(tt!==v||xt!==E||K!==A||yt!==T)&&(n.blendFuncSeparate(oe[tt],oe[xt],oe[K],oe[yt]),v=tt,E=xt,A=K,T=yt),(Vt.equals(C)===!1||Me!==L)&&(n.blendColor(Vt.r,Vt.g,Vt.b,Me),C.copy(Vt),L=Me),m=F,w=!1}function an(F,ut){F.side===Gi?Lt(n.CULL_FACE):ht(n.CULL_FACE);let tt=F.side===dn;ut&&(tt=!tt),ae(tt),F.blending===_r&&F.transparent===!1?D(qi):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const xt=F.stencilWrite;a.setTest(xt),xt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){x!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),x=F)}function ge(F){F!==t_?(ht(n.CULL_FACE),F!==P&&(F===wd?n.cullFace(n.BACK):F===e_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),P=F}function At(F){F!==k&&(N&&n.lineWidth(F),k=F)}function ne(F,ut,tt){F?(ht(n.POLYGON_OFFSET_FILL),(I!==ut||U!==tt)&&(n.polygonOffset(ut,tt),I=ut,U=tt)):Lt(n.POLYGON_OFFSET_FILL)}function Ft(F){F?ht(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function qt(F){F===void 0&&(F=n.TEXTURE0+B-1),Z!==F&&(n.activeTexture(F),Z=F)}function qe(F,ut,tt){tt===void 0&&(Z===null?tt=n.TEXTURE0+B-1:tt=Z);let xt=rt[tt];xt===void 0&&(xt={type:void 0,texture:void 0},rt[tt]=xt),(xt.type!==F||xt.texture!==ut)&&(Z!==tt&&(n.activeTexture(tt),Z=tt),n.bindTexture(F,ut||Et[F]),xt.type=F,xt.texture=ut)}function R(){const F=rt[Z];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(F){Qt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Qt.copy(F))}function Bt(F){Y.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Ot(F,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let xt=tt.get(F);xt===void 0&&(xt=n.getUniformBlockIndex(ut,F.name),tt.set(F,xt))}function ot(F,ut){const xt=c.get(ut).get(F);l.get(ut)!==xt&&(n.uniformBlockBinding(ut,xt,F.__bindingPointIndex),l.set(ut,xt))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,rt={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,E=null,y=null,A=null,T=null,C=new Yt(0,0,0),L=0,w=!1,x=null,P=null,k=null,I=null,U=null,Qt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Lt,bindFramebuffer:re,drawBuffers:zt,useProgram:Ce,setBlending:D,setMaterial:an,setFlipSided:ae,setCullFace:ge,setLineWidth:At,setPolygonOffset:ne,setScissorTest:Ft,activeTexture:qt,bindTexture:qe,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:It,texImage3D:Q,updateUBOMapping:Ot,uniformBlockBinding:ot,texStorage2D:lt,texStorage3D:wt,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Pt,scissor:gt,viewport:Bt,reset:Ht}}function uM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Va("canvas")}function _(R,S,V){let $=1;const J=qe(R);if((J.width>V||J.height>V)&&($=V/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*J.width),Pt=Math.floor($*J.height);d===void 0&&(d=g(q,Pt));const lt=S?g(q,Pt):d;return lt.width=q,lt.height=Pt,lt.getContext("2d").drawImage(R,0,0,q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Pt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,S,V,$,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===n.RED&&(V===n.FLOAT&&(q=n.R32F),V===n.HALF_FLOAT&&(q=n.R16F),V===n.UNSIGNED_BYTE&&(q=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.R8UI),V===n.UNSIGNED_SHORT&&(q=n.R16UI),V===n.UNSIGNED_INT&&(q=n.R32UI),V===n.BYTE&&(q=n.R8I),V===n.SHORT&&(q=n.R16I),V===n.INT&&(q=n.R32I)),S===n.RG&&(V===n.FLOAT&&(q=n.RG32F),V===n.HALF_FLOAT&&(q=n.RG16F),V===n.UNSIGNED_BYTE&&(q=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RG8UI),V===n.UNSIGNED_SHORT&&(q=n.RG16UI),V===n.UNSIGNED_INT&&(q=n.RG32UI),V===n.BYTE&&(q=n.RG8I),V===n.SHORT&&(q=n.RG16I),V===n.INT&&(q=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(q=n.RGB16UI),V===n.UNSIGNED_INT&&(q=n.RGB32UI),V===n.BYTE&&(q=n.RGB8I),V===n.SHORT&&(q=n.RGB16I),V===n.INT&&(q=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),V===n.UNSIGNED_INT&&(q=n.RGBA32UI),V===n.BYTE&&(q=n.RGBA8I),V===n.SHORT&&(q=n.RGBA16I),V===n.INT&&(q=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),S===n.RGBA){const Pt=J?ka:te.getTransfer($);V===n.FLOAT&&(q=n.RGBA32F),V===n.HALF_FLOAT&&(q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(q=Pt===fe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(R,S){let V;return R?S===null||S===Ws||S===Co?V=n.DEPTH24_STENCIL8:S===Vi?V=n.DEPTH32F_STENCIL8:S===Ao&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ws||S===Co?V=n.DEPTH_COMPONENT24:S===Vi?V=n.DEPTH_COMPONENT32F:S===Ao&&(V=n.DEPTH_COMPONENT16),V}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ci&&R.minFilter!==Ei?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&h.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),x(S)}function L(R){const S=i.get(R);if(S.__webglInit===void 0)return;const V=R.source,$=u.get(V);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys($).length===0&&u.delete(V)}i.remove(R)}function w(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const V=R.source,$=u.get(V);delete $[S.__cacheKey],o.memory.textures--}function x(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[$][J]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let $=0,J=V.length;$<J;$++){const q=i.get(V[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(V[$])}i.remove(R)}let P=0;function k(){P=0}function I(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function U(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function B(R,S){const V=i.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(V,R,S);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function N(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Et(V,R,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function j(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Et(V,R,S);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function H(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ht(V,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}const Z={[$c]:n.REPEAT,[Os]:n.CLAMP_TO_EDGE,[Kc]:n.MIRRORED_REPEAT},rt={[ci]:n.NEAREST,[S_]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[Ei]:n.LINEAR,[kl]:n.LINEAR_MIPMAP_NEAREST,[Bs]:n.LINEAR_MIPMAP_LINEAR},pt={[T_]:n.NEVER,[L_]:n.ALWAYS,[A_]:n.LESS,[Em]:n.LEQUAL,[C_]:n.EQUAL,[I_]:n.GEQUAL,[R_]:n.GREATER,[P_]:n.NOTEQUAL};function it(R,S){if(S.type===Vi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ei||S.magFilter===kl||S.magFilter===qo||S.magFilter===Bs||S.minFilter===Ei||S.minFilter===kl||S.minFilter===qo||S.minFilter===Bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,rt[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ci||S.minFilter!==qo&&S.minFilter!==Bs||S.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const $=S.source;let J=u.get($);J===void 0&&(J={},u.set($,J));const q=U(S);if(q!==R.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),J[q].usedTimes++;const Pt=J[R.__cacheKey];Pt!==void 0&&(J[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(S)),R.__cacheKey=q,R.__webglTexture=J[q].texture}return V}function Y(R,S,V){return Math.floor(Math.floor(R/V)/S)}function st(R,S,V,$){const q=R.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data);else{q.sort((Q,gt)=>Q.start-gt.start);let Pt=0;for(let Q=1;Q<q.length;Q++){const gt=q[Pt],Bt=q[Q],Ot=gt.start+gt.count,ot=Y(Bt.start,S.width,4),Ht=Y(gt.start,S.width,4);Bt.start<=Ot+1&&ot===Ht&&Y(Bt.start+Bt.count-1,S.width,4)===ot?gt.count=Math.max(gt.count,Bt.start+Bt.count-gt.start):(++Pt,q[Pt]=Bt)}q.length=Pt+1;const lt=n.getParameter(n.UNPACK_ROW_LENGTH),wt=n.getParameter(n.UNPACK_SKIP_PIXELS),It=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Q=0,gt=q.length;Q<gt;Q++){const Bt=q[Q],Ot=Math.floor(Bt.start/4),ot=Math.ceil(Bt.count/4),Ht=Ot%S.width,F=Math.floor(Ot/S.width),ut=ot,tt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Ht,F,ut,tt,V,$,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,lt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),n.pixelStorei(n.UNPACK_SKIP_ROWS,It)}}function Et(R,S,V){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const J=Qt(R,S),q=S.source;e.bindTexture($,R.__webglTexture,n.TEXTURE0+V);const Pt=i.get(q);if(q.version!==Pt.__version||J===!0){e.activeTexture(n.TEXTURE0+V);const lt=te.getPrimaries(te.workingColorSpace),wt=S.colorSpace===hs?null:te.getPrimaries(S.colorSpace),It=S.colorSpace===hs||lt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Q=_(S.image,!1,s.maxTextureSize);Q=qt(S,Q);const gt=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type);let Ot=E(S.internalFormat,gt,Bt,S.colorSpace,S.isVideoTexture);it($,S);let ot;const Ht=S.mipmaps,F=S.isVideoTexture!==!0,ut=Pt.__version===void 0||J===!0,tt=q.dataReady,xt=A(S,Q);if(S.isDepthTexture)Ot=y(S.format===Po,S.type),ut&&(F?e.texStorage2D(n.TEXTURE_2D,1,Ot,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Ot,Q.width,Q.height,0,gt,Bt,null));else if(S.isDataTexture)if(Ht.length>0){F&&ut&&e.texStorage2D(n.TEXTURE_2D,xt,Ot,Ht[0].width,Ht[0].height);for(let et=0,K=Ht.length;et<K;et++)ot=Ht[et],F?tt&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ot.width,ot.height,gt,Bt,ot.data):e.texImage2D(n.TEXTURE_2D,et,Ot,ot.width,ot.height,0,gt,Bt,ot.data);S.generateMipmaps=!1}else F?(ut&&e.texStorage2D(n.TEXTURE_2D,xt,Ot,Q.width,Q.height),tt&&st(S,Q,gt,Bt)):e.texImage2D(n.TEXTURE_2D,0,Ot,Q.width,Q.height,0,gt,Bt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Ot,Ht[0].width,Ht[0].height,Q.depth);for(let et=0,K=Ht.length;et<K;et++)if(ot=Ht[et],S.format!==ai)if(gt!==null)if(F){if(tt)if(S.layerUpdates.size>0){const yt=ef(ot.width,ot.height,S.format,S.type);for(const Vt of S.layerUpdates){const Me=ot.data.subarray(Vt*yt/ot.data.BYTES_PER_ELEMENT,(Vt+1)*yt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Vt,ot.width,ot.height,1,gt,Me)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,Q.depth,gt,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Ot,ot.width,ot.height,Q.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?tt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,Q.depth,gt,Bt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Ot,ot.width,ot.height,Q.depth,0,gt,Bt,ot.data)}else{F&&ut&&e.texStorage2D(n.TEXTURE_2D,xt,Ot,Ht[0].width,Ht[0].height);for(let et=0,K=Ht.length;et<K;et++)ot=Ht[et],S.format!==ai?gt!==null?F?tt&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,ot.width,ot.height,gt,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Ot,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?tt&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ot.width,ot.height,gt,Bt,ot.data):e.texImage2D(n.TEXTURE_2D,et,Ot,ot.width,ot.height,0,gt,Bt,ot.data)}else if(S.isDataArrayTexture)if(F){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,Ot,Q.width,Q.height,Q.depth),tt)if(S.layerUpdates.size>0){const et=ef(Q.width,Q.height,S.format,S.type);for(const K of S.layerUpdates){const yt=Q.data.subarray(K*et/Q.data.BYTES_PER_ELEMENT,(K+1)*et/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,gt,Bt,yt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,Bt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,Q.width,Q.height,Q.depth,0,gt,Bt,Q.data);else if(S.isData3DTexture)F?(ut&&e.texStorage3D(n.TEXTURE_3D,xt,Ot,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,Bt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,Q.width,Q.height,Q.depth,0,gt,Bt,Q.data);else if(S.isFramebufferTexture){if(ut)if(F)e.texStorage2D(n.TEXTURE_2D,xt,Ot,Q.width,Q.height);else{let et=Q.width,K=Q.height;for(let yt=0;yt<xt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Ot,et,K,0,gt,Bt,null),et>>=1,K>>=1}}else if(Ht.length>0){if(F&&ut){const et=qe(Ht[0]);e.texStorage2D(n.TEXTURE_2D,xt,Ot,et.width,et.height)}for(let et=0,K=Ht.length;et<K;et++)ot=Ht[et],F?tt&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,gt,Bt,ot):e.texImage2D(n.TEXTURE_2D,et,Ot,gt,Bt,ot);S.generateMipmaps=!1}else if(F){if(ut){const et=qe(Q);e.texStorage2D(n.TEXTURE_2D,xt,Ot,et.width,et.height)}tt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Bt,Q)}else e.texImage2D(n.TEXTURE_2D,0,Ot,gt,Bt,Q);m(S)&&f($),Pt.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,V){if(S.image.length!==6)return;const $=Qt(R,S),J=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const q=i.get(J);if(J.version!==q.__version||$===!0){e.activeTexture(n.TEXTURE0+V);const Pt=te.getPrimaries(te.workingColorSpace),lt=S.colorSpace===hs?null:te.getPrimaries(S.colorSpace),wt=S.colorSpace===hs||Pt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!It&&!Q?gt[K]=_(S.image[K],!0,s.maxCubemapSize):gt[K]=Q?S.image[K].image:S.image[K],gt[K]=qt(S,gt[K]);const Bt=gt[0],Ot=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),Ht=E(S.internalFormat,Ot,ot,S.colorSpace),F=S.isVideoTexture!==!0,ut=q.__version===void 0||$===!0,tt=J.dataReady;let xt=A(S,Bt);it(n.TEXTURE_CUBE_MAP,S);let et;if(It){F&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ht,Bt.width,Bt.height);for(let K=0;K<6;K++){et=gt[K].mipmaps;for(let yt=0;yt<et.length;yt++){const Vt=et[yt];S.format!==ai?Ot!==null?F?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,0,0,Vt.width,Vt.height,Ot,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,Ht,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,0,0,Vt.width,Vt.height,Ot,ot,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt,Ht,Vt.width,Vt.height,0,Ot,ot,Vt.data)}}}else{if(et=S.mipmaps,F&&ut){et.length>0&&xt++;const K=qe(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(Q){F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Ot,ot,gt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,gt[K].width,gt[K].height,0,Ot,ot,gt[K].data);for(let yt=0;yt<et.length;yt++){const Me=et[yt].image[K].image;F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,0,0,Me.width,Me.height,Ot,ot,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,Ht,Me.width,Me.height,0,Ot,ot,Me.data)}}else{F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,ot,gt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Ot,ot,gt[K]);for(let yt=0;yt<et.length;yt++){const Vt=et[yt];F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,0,0,Ot,ot,Vt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,yt+1,Ht,Ot,ot,Vt.image[K])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),q.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Lt(R,S,V,$,J,q){const Pt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),wt=E(V.internalFormat,Pt,lt,V.colorSpace),It=i.get(S),Q=i.get(V);if(Q.__renderTarget=S,!It.__hasExternalTextures){const gt=Math.max(1,S.width>>q),Bt=Math.max(1,S.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,q,wt,gt,Bt,S.depth,0,Pt,lt,null):e.texImage2D(J,q,wt,gt,Bt,0,Pt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ne(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,Q.__webglTexture,0,At(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,Q.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function re(R,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,q=y(S.stencilBuffer,J),Pt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=At(S);ne(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,q,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,R)}else{const $=S.textures;for(let J=0;J<$.length;J++){const q=$[J],Pt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),wt=E(q.internalFormat,Pt,lt,q.colorSpace),It=At(S);V&&ne(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,wt,S.width,S.height):ne(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,wt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,wt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const J=$.__webglTexture,q=At(S);if(S.depthTexture.format===Ro)ne(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===Po)ne(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const S=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?zt(S.__webglFramebuffer[0],R):zt(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),re(S.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else{const $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),re(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,S,V){const $=i.get(R);S!==void 0&&Lt($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ce(R)}function oe(R){const S=R.texture,V=i.get(R),$=i.get(S);R.addEventListener("dispose",C);const J=R.textures,q=R.isWebGLCubeRenderTarget===!0,Pt=J.length>1;if(Pt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)V.__webglFramebuffer[lt][wt]=n.createFramebuffer()}else V.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)V.__webglFramebuffer[lt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let lt=0,wt=J.length;lt<wt;lt++){const It=i.get(J[lt]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ne(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const wt=J[lt];V.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const It=r.convert(wt.format,wt.colorSpace),Q=r.convert(wt.type),gt=E(wt.internalFormat,It,Q,wt.colorSpace,R.isXRRenderTarget===!0),Bt=At(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,gt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),re(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),it(n.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Lt(V.__webglFramebuffer[lt][wt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else Lt(V.__webglFramebuffer[lt],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let lt=0,wt=J.length;lt<wt;lt++){const It=J[lt],Q=i.get(It);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),it(n.TEXTURE_2D,It),Lt(V.__webglFramebuffer,R,It,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(It)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),it(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)Lt(V.__webglFramebuffer[wt],R,S,n.COLOR_ATTACHMENT0,lt,wt);else Lt(V.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,lt,0);m(S)&&f(lt),e.unbindTexture()}R.depthBuffer&&Ce(R)}function D(R){const S=R.textures;for(let V=0,$=S.length;V<$;V++){const J=S[V];if(m(J)){const q=v(R),Pt=i.get(J).__webglTexture;e.bindTexture(q,Pt),f(q),e.unbindTexture()}}}const an=[],ae=[];function ge(R){if(R.samples>0){if(ne(R)===!1){const S=R.textures,V=R.width,$=R.height;let J=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(R),lt=S.length>1;if(lt)for(let It=0;It<S.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let It=0;It<S.length;It++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[It]);const Q=i.get(S[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,J,n.NEAREST),l===!0&&(an.length=0,ae.length=0,an.push(n.COLOR_ATTACHMENT0+It),R.depthBuffer&&R.resolveDepthBuffer===!1&&(an.push(q),ae.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ae)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,an))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let It=0;It<S.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[It]);const Q=i.get(S[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function At(R){return Math.min(s.maxSamples,R.samples)}function ne(R){const S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function qt(R,S){const V=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Rr&&V!==hs&&(te.getTransfer(V)===fe?($!==ai||J!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ne}function dM(n,t){function e(i,s=hs){let r;const o=te.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Yh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pm)return n.BYTE;if(i===mm)return n.SHORT;if(i===Ao)return n.UNSIGNED_SHORT;if(i===jh)return n.INT;if(i===Ws)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===ji)return n.HALF_FLOAT;if(i===_m)return n.ALPHA;if(i===vm)return n.RGB;if(i===ai)return n.RGBA;if(i===Ro)return n.DEPTH_COMPONENT;if(i===Po)return n.DEPTH_STENCIL;if(i===xm)return n.RED;if(i===Kh)return n.RED_INTEGER;if(i===ym)return n.RG;if(i===Zh)return n.RG_INTEGER;if(i===Jh)return n.RGBA_INTEGER;if(i===Ta||i===Aa||i===Ca||i===Ra)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===Jc||i===Qc||i===th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===nh||i===ih)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eh||i===nh)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ih)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===_h)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ch)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ph)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gh)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===vh||i===xh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mm||i===yh||i===Mh||i===Sh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new yn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new on({vertexShader:fM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new un(new ol(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gM extends Vr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new mM,m=e.getContextAttributes();let f=null,v=null;const E=[],y=[],A=new Wt;let T=null;const C=new Xn;C.viewport=new Fe;const L=new Xn;L.viewport=new Fe;const w=[C,L],x=new Fv;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=E[Y];return st===void 0&&(st=new ac,E[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=E[Y];return st===void 0&&(st=new ac,E[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=E[Y];return st===void 0&&(st=new ac,E[Y]=st),st.getHandSpace()};function I(Y){const st=y.indexOf(Y.inputSource);if(st===-1)return;const Et=E[st];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,c||o),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<E.length;Y++){const st=y[Y];st!==null&&(y[Y]=null,E[Y].disconnect(st))}P=null,k=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,v=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,ht=null,Lt=null;m.depth&&(Lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=m.stencil?Po:Ro,ht=m.stencil?Co:Ws);const re={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(re),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new hi(u.textureWidth,u.textureHeight,{format:ai,type:bi,depthTexture:new Fm(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new hi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(Y){for(let st=0;st<Y.removed.length;st++){const Et=Y.removed[st],ht=y.indexOf(Et);ht>=0&&(y[ht]=null,E[ht].disconnect(Et))}for(let st=0;st<Y.added.length;st++){const Et=Y.added[st];let ht=y.indexOf(Et);if(ht===-1){for(let re=0;re<E.length;re++)if(re>=y.length){y.push(Et),ht=re;break}else if(y[re]===null){y[re]=Et,ht=re;break}if(ht===-1)break}const Lt=E[ht];Lt&&Lt.connect(Et)}}const N=new O,j=new O;function H(Y,st,Et){N.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const ht=N.distanceTo(j),Lt=st.projectionMatrix.elements,re=Et.projectionMatrix.elements,zt=Lt[14]/(Lt[10]-1),Ce=Lt[14]/(Lt[10]+1),Re=(Lt[9]+1)/Lt[5],oe=(Lt[9]-1)/Lt[5],D=(Lt[8]-1)/Lt[0],an=(re[8]+1)/re[0],ae=zt*D,ge=zt*an,At=ht/(-D+an),ne=At*-D;if(st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ne),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ft=zt+At,qt=Ce+At,qe=ae-ne,R=ge+(ht-ne),S=Re*Ce/qt*Ft,V=oe*Ce/qt*Ft;Y.projectionMatrix.makePerspective(qe,R,S,V,Ft,qt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let st=Y.near,Et=Y.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),x.near=L.near=C.near=st,x.far=L.far=C.far=Et,(P!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,k=x.far),C.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;const ht=Y.parent,Lt=x.cameras;Z(x,ht);for(let re=0;re<Lt.length;re++)Z(Lt[re],ht);Lt.length===2?H(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),rt(Y,x,ht)};function rt(Y,st,Et){Et===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Io*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let pt=null;function it(Y,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const Et=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ht=!1;Et.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let zt=0;zt<Et.length;zt++){const Ce=Et[zt];let Re=null;if(p!==null)Re=p.getViewport(Ce);else{const D=d.getViewSubImage(u,Ce);Re=D.viewport,zt===0&&(t.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(v))}let oe=w[zt];oe===void 0&&(oe=new Xn,oe.layers.enable(zt),oe.viewport=new Fe,w[zt]=oe),oe.matrix.fromArray(Ce.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ce.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Re.x,Re.y,Re.width,Re.height),zt===0&&(x.matrix.copy(oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(oe)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const zt=d.getDepthInformation(Et[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let Et=0;Et<E.length;Et++){const ht=y[Et],Lt=E[Et];ht!==null&&Lt!==void 0&&Lt.update(ht,st,c||o)}pt&&pt(Y,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const Qt=new Bm;Qt.setAnimationLoop(it),this.setAnimationLoop=function(Y){pt=Y},this.dispose=function(){}}}const Cs=new Ti,_M=new xe;function vM(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Im(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),E=v.envMap,y=v.envMapRotation;E&&(m.envMap.value=E,Cs.copy(y),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),m.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(Cs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const y=E.program;i.uniformBlockBinding(v,y)}function c(v,E){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(v,A);const T=t.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){const E=d();v.__bindingPointIndex=E;const y=n.createBuffer(),A=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const E=s[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,C=y.length;T<C;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,x=L.length;w<x;w++){const P=L[w];if(p(P,T,w,A)===!0){const k=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let B=0;B<I.length;B++){const N=I[B],j=_(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,k+U,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,U),U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,E,y,A){const T=v.value,C=E+"_"+y;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const L=A[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(v){const E=v.uniforms;let y=0;const A=16;for(let C=0,L=E.length;C<L;C++){const w=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,P=w.length;x<P;x++){const k=w[x],I=Array.isArray(k.value)?k.value:[k.value];for(let U=0,B=I.length;U<B;U++){const N=I[U],j=_(N),H=y%A,Z=H%j.boundary,rt=H+Z;y+=Z,rt!==0&&A-rt<j.storage&&(y+=A-rt),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=j.storage}}}const T=y%A;return T>0&&(y+=A-T),v.__size=y,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class yM{constructor(t={}){const{canvas:e=$_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Wn;let T=0,C=0,L=null,w=-1,x=null;const P=new Fe,k=new Fe;let I=null;const U=new Yt(0);let B=0,N=e.width,j=e.height,H=1,Z=null,rt=null;const pt=new Fe(0,0,N,j),it=new Fe(0,0,N,j);let Qt=!1;const Y=new nu;let st=!1,Et=!1;const ht=new xe,Lt=new xe,re=new O,zt=new Fe,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function oe(){return L===null?H:1}let D=i;function an(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qh}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",K,!1),D===null){const z="webgl2";if(D=an(z,b),D===null)throw an(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,ge,At,ne,Ft,qt,qe,R,S,V,$,J,q,Pt,lt,wt,It,Q,gt,Bt,Ot,ot,Ht,F;function ut(){ae=new P2(D),ae.init(),ot=new dM(D,ae),ge=new E2(D,ae,t,ot),At=new hM(D,ae),ge.reverseDepthBuffer&&u&&At.buffers.depth.setReversed(!0),ne=new D2(D),Ft=new Zy,qt=new uM(D,ae,At,Ft,ge,ot,ne),qe=new b2(y),R=new R2(y),S=new zv(D),Ht=new M2(D,S),V=new I2(D,S,ne,Ht),$=new F2(D,V,S,ne),gt=new N2(D,ge,qt),wt=new w2(Ft),J=new Ky(y,qe,R,ae,ge,Ht,wt),q=new vM(y,Ft),Pt=new Qy,lt=new rM(ae),Q=new y2(y,qe,R,At,$,p,l),It=new lM(y,$,ge),F=new xM(D,ne,ge,At),Bt=new S2(D,ae,ne),Ot=new L2(D,ae,ne),ne.programs=J.programs,y.capabilities=ge,y.extensions=ae,y.properties=Ft,y.renderLists=Pt,y.shadowMap=It,y.state=At,y.info=ne}ut();const tt=new gM(y,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(N,j,!1))},this.getSize=function(b){return b.set(N,j)},this.setSize=function(b,z,W=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,j=z,e.width=Math.floor(b*H),e.height=Math.floor(z*H),W===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(N*H,j*H).floor()},this.setDrawingBufferSize=function(b,z,W){N=b,j=z,H=W,e.width=Math.floor(b*W),e.height=Math.floor(z*W),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,z,W,X){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,z,W,X),At.viewport(P.copy(pt).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,z,W,X){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,z,W,X),At.scissor(k.copy(it).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(b){At.setScissorTest(Qt=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,W=!0){let X=0;if(b){let G=!1;if(L!==null){const nt=L.texture.format;G=nt===Jh||nt===Zh||nt===Kh}if(G){const nt=L.texture.type,dt=nt===bi||nt===Ws||nt===Ao||nt===Co||nt===Yh||nt===$h,Mt=Q.getClearColor(),_t=Q.getClearAlpha(),kt=Mt.r,Gt=Mt.g,Dt=Mt.b;dt?(g[0]=kt,g[1]=Gt,g[2]=Dt,g[3]=_t,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Dt,_[3]=_t,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}z&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",K,!1),Q.dispose(),Pt.dispose(),lt.dispose(),Ft.dispose(),qe.dispose(),R.dispose(),$.dispose(),Ht.dispose(),F.dispose(),J.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",_d),tt.removeEventListener("sessionend",vd),Ms.stop()};function xt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=ne.autoReset,z=It.enabled,W=It.autoUpdate,X=It.needsUpdate,G=It.type;ut(),ne.autoReset=b,It.enabled=z,It.autoUpdate=W,It.needsUpdate=X,It.type=G}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function yt(b){const z=b.target;z.removeEventListener("dispose",yt),Vt(z)}function Vt(b){Me(b),Ft.remove(b)}function Me(b){const z=Ft.get(b).programs;z!==void 0&&(z.forEach(function(W){J.releaseProgram(W)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,W,X,G,nt){z===null&&(z=Ce);const dt=G.isMesh&&G.matrixWorld.determinant()<0,Mt=q0(b,z,W,X,G);At.setMaterial(X,dt);let _t=W.index,kt=1;if(X.wireframe===!0){if(_t=V.getWireframeAttribute(W),_t===void 0)return;kt=2}const Gt=W.drawRange,Dt=W.attributes.position;let Zt=Gt.start*kt,de=(Gt.start+Gt.count)*kt;nt!==null&&(Zt=Math.max(Zt,nt.start*kt),de=Math.min(de,(nt.start+nt.count)*kt)),_t!==null?(Zt=Math.max(Zt,0),de=Math.min(de,_t.count)):Dt!=null&&(Zt=Math.max(Zt,0),de=Math.min(de,Dt.count));const Pe=de-Zt;if(Pe<0||Pe===1/0)return;Ht.setup(G,X,Mt,W,_t);let Le,ie=Bt;if(_t!==null&&(Le=S.get(_t),ie=Ot,ie.setIndex(Le)),G.isMesh)X.wireframe===!0?(At.setLineWidth(X.wireframeLinewidth*oe()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(G.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),At.setLineWidth(Ut*oe()),G.isLineSegments?ie.setMode(D.LINES):G.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else G.isPoints?ie.setMode(D.POINTS):G.isSprite&&ie.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,tn=G._multiDrawCounts,ce=G._multiDrawCount,ei=_t?S.get(_t).bytesPerElement:1,Ys=Ft.get(X).currentProgram.getUniforms();for(let wn=0;wn<ce;wn++)Ys.setValue(D,"_gl_DrawID",wn),ie.render(Ut[wn]/ei,tn[wn])}else if(G.isInstancedMesh)ie.renderInstances(Zt,Pe,G.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,tn=Math.min(W.instanceCount,Ut);ie.renderInstances(Zt,Pe,tn)}else ie.render(Zt,Pe)};function ue(b,z,W){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=dn,b.needsUpdate=!0,Xo(b,z,W),b.side=Ji,b.needsUpdate=!0,Xo(b,z,W),b.side=Gi):Xo(b,z,W)}this.compile=function(b,z,W=null){W===null&&(W=b),f=lt.get(W),f.init(z),E.push(f),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const X=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const nt=G.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const Mt=nt[dt];ue(Mt,W,G),X.add(Mt)}else ue(nt,W,G),X.add(nt)}),f=E.pop(),X},this.compileAsync=function(b,z,W=null){const X=this.compile(b,z,W);return new Promise(G=>{function nt(){if(X.forEach(function(dt){Ft.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){G(b);return}setTimeout(nt,10)}ae.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ti=null;function Ri(b){ti&&ti(b)}function _d(){Ms.stop()}function vd(){Ms.start()}const Ms=new Bm;Ms.setAnimationLoop(Ri),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(b){ti=b,tt.setAnimationLoop(b),b===null?Ms.stop():Ms.start()},tt.addEventListener("sessionstart",_d),tt.addEventListener("sessionend",vd),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(z),z=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,z,L),f=lt.get(b,E.length),f.init(z),E.push(f),Lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(Lt),Et=this.localClippingEnabled,st=wt.init(this.clippingPlanes,Et),m=Pt.get(b,v.length),m.init(),v.push(m),tt.enabled===!0&&tt.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Bl(nt,z,-1/0,y.sortObjects)}Bl(b,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,rt),Re=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Re&&Q.addToRenderList(m,b),this.info.render.frame++,st===!0&&wt.beginShadows();const W=f.state.shadowsArray;It.render(W,b,z),st===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,G=m.transmissive;if(f.setupLights(),z.isArrayCamera){const nt=z.cameras;if(G.length>0)for(let dt=0,Mt=nt.length;dt<Mt;dt++){const _t=nt[dt];yd(X,G,b,_t)}Re&&Q.render(b);for(let dt=0,Mt=nt.length;dt<Mt;dt++){const _t=nt[dt];xd(m,b,_t,_t.viewport)}}else G.length>0&&yd(X,G,b,z),Re&&Q.render(b),xd(m,b,z);L!==null&&C===0&&(qt.updateMultisampleRenderTarget(L),qt.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,z),Ht.resetDefaultState(),w=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],st===!0&&wt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Bl(b,z,W,X){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){X&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const dt=$.update(b),Mt=b.material;Mt.visible&&m.push(b,dt,Mt,W,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const dt=$.update(b),Mt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),zt.copy(dt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(Mt)){const _t=dt.groups;for(let kt=0,Gt=_t.length;kt<Gt;kt++){const Dt=_t[kt],Zt=Mt[Dt.materialIndex];Zt&&Zt.visible&&m.push(b,dt,Zt,W,zt.z,Dt)}}else Mt.visible&&m.push(b,dt,Mt,W,zt.z,null)}}const nt=b.children;for(let dt=0,Mt=nt.length;dt<Mt;dt++)Bl(nt[dt],z,W,X)}function xd(b,z,W,X){const G=b.opaque,nt=b.transmissive,dt=b.transparent;f.setupLightsView(W),st===!0&&wt.setGlobalState(y.clippingPlanes,W),X&&At.viewport(P.copy(X)),G.length>0&&Wo(G,z,W),nt.length>0&&Wo(nt,z,W),dt.length>0&&Wo(dt,z,W),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function yd(b,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new hi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ji:bi,minFilter:Bs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const nt=f.state.transmissionRenderTarget[X.id],dt=X.viewport||P;nt.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);const Mt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(U),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Re&&Q.render(W);const _t=y.toneMapping;y.toneMapping=fs;const kt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),st===!0&&wt.setGlobalState(y.clippingPlanes,X),Wo(b,W,X),qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Dt=0,Zt=z.length;Dt<Zt;Dt++){const de=z[Dt],Pe=de.object,Le=de.geometry,ie=de.material,Ut=de.group;if(ie.side===Gi&&Pe.layers.test(X.layers)){const tn=ie.side;ie.side=dn,ie.needsUpdate=!0,Md(Pe,W,X,Le,ie,Ut),ie.side=tn,ie.needsUpdate=!0,Gt=!0}}Gt===!0&&(qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt))}y.setRenderTarget(Mt),y.setClearColor(U,B),kt!==void 0&&(X.viewport=kt),y.toneMapping=_t}function Wo(b,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let G=0,nt=b.length;G<nt;G++){const dt=b[G],Mt=dt.object,_t=dt.geometry,kt=dt.group;let Gt=dt.material;Gt.allowOverride===!0&&X!==null&&(Gt=X),Mt.layers.test(W.layers)&&Md(Mt,z,W,_t,Gt,kt)}}function Md(b,z,W,X,G,nt){b.onBeforeRender(y,z,W,X,G,nt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(y,z,W,X,b,nt),G.transparent===!0&&G.side===Gi&&G.forceSinglePass===!1?(G.side=dn,G.needsUpdate=!0,y.renderBufferDirect(W,z,X,G,b,nt),G.side=Ji,G.needsUpdate=!0,y.renderBufferDirect(W,z,X,G,b,nt),G.side=Gi):y.renderBufferDirect(W,z,X,G,b,nt),b.onAfterRender(y,z,W,X,G,nt)}function Xo(b,z,W){z.isScene!==!0&&(z=Ce);const X=Ft.get(b),G=f.state.lights,nt=f.state.shadowsArray,dt=G.state.version,Mt=J.getParameters(b,G.state,nt,z,W),_t=J.getProgramCacheKey(Mt);let kt=X.programs;X.environment=b.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(b.isMeshStandardMaterial?R:qe).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",yt),kt=new Map,X.programs=kt);let Gt=kt.get(_t);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===dt)return Ed(b,Mt),Gt}else Mt.uniforms=J.getUniforms(b),b.onBeforeCompile(Mt,y),Gt=J.acquireProgram(Mt,_t),kt.set(_t,Gt),X.uniforms=Mt.uniforms;const Dt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=wt.uniform),Ed(b,Mt),X.needsLights=Y0(b),X.lightsStateVersion=dt,X.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMap.value=G.state.directionalShadowMap,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotShadowMap.value=G.state.spotShadowMap,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMap.value=G.state.pointShadowMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function Sd(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Ia.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Ed(b,z){const W=Ft.get(b);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function q0(b,z,W,X,G){z.isScene!==!0&&(z=Ce),qt.resetTextureUnits();const nt=z.fog,dt=X.isMeshStandardMaterial?z.environment:null,Mt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Rr,_t=(X.isMeshStandardMaterial?R:qe).get(X.envMap||dt),kt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,de=!!W.morphAttributes.color;let Pe=fs;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=y.toneMapping);const Le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=Le!==void 0?Le.length:0,Ut=Ft.get(X),tn=f.state.lights;if(st===!0&&(Et===!0||b!==x)){const ln=b===x&&X.id===w;wt.setState(X,b,ln)}let ce=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==tn.state.version||Ut.outputColorSpace!==Mt||G.isBatchedMesh&&Ut.batching===!1||!G.isBatchedMesh&&Ut.batching===!0||G.isBatchedMesh&&Ut.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ut.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ut.instancing===!1||!G.isInstancedMesh&&Ut.instancing===!0||G.isSkinnedMesh&&Ut.skinning===!1||!G.isSkinnedMesh&&Ut.skinning===!0||G.isInstancedMesh&&Ut.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ut.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ut.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ut.instancingMorph===!1&&G.morphTexture!==null||Ut.envMap!==_t||X.fog===!0&&Ut.fog!==nt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==wt.numPlanes||Ut.numIntersection!==wt.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==Gt||Ut.morphTargets!==Dt||Ut.morphNormals!==Zt||Ut.morphColors!==de||Ut.toneMapping!==Pe||Ut.morphTargetsCount!==ie)&&(ce=!0):(ce=!0,Ut.__version=X.version);let ei=Ut.currentProgram;ce===!0&&(ei=Xo(X,z,G));let Ys=!1,wn=!1,io=!1;const we=ei.getUniforms(),Bn=Ut.uniforms;if(At.useProgram(ei.program)&&(Ys=!0,wn=!0,io=!0),X.id!==w&&(w=X.id,wn=!0),Ys||x!==b){At.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),Z_(ht),J_(ht),we.setValue(D,"projectionMatrix",ht)):we.setValue(D,"projectionMatrix",b.projectionMatrix),we.setValue(D,"viewMatrix",b.matrixWorldInverse);const gn=we.map.cameraPosition;gn!==void 0&&gn.setValue(D,re.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&we.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,wn=!0,io=!0)}if(G.isSkinnedMesh){we.setOptional(D,G,"bindMatrix"),we.setOptional(D,G,"bindMatrixInverse");const ln=G.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),we.setValue(D,"boneTexture",ln.boneTexture,qt))}G.isBatchedMesh&&(we.setOptional(D,G,"batchingTexture"),we.setValue(D,"batchingTexture",G._matricesTexture,qt),we.setOptional(D,G,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",G._indirectTexture,qt),we.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",G._colorsTexture,qt));const zn=W.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&gt.update(G,W,ei),(wn||Ut.receiveShadow!==G.receiveShadow)&&(Ut.receiveShadow=G.receiveShadow,we.setValue(D,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Bn.envMap.value=_t,Bn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Bn.envMapIntensity.value=z.environmentIntensity),wn&&(we.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&j0(Bn,io),nt&&X.fog===!0&&q.refreshFogUniforms(Bn,nt),q.refreshMaterialUniforms(Bn,X,H,j,f.state.transmissionRenderTarget[b.id]),Ia.upload(D,Sd(Ut),Bn,qt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ia.upload(D,Sd(Ut),Bn,qt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&we.setValue(D,"center",G.center),we.setValue(D,"modelViewMatrix",G.modelViewMatrix),we.setValue(D,"normalMatrix",G.normalMatrix),we.setValue(D,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let gn=0,zl=ln.length;gn<zl;gn++){const Ss=ln[gn];F.update(Ss,ei),F.bind(Ss,ei)}}return ei}function j0(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Y0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,z,W){const X=Ft.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ft.get(b.texture).__webglTexture=z,Ft.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const W=Ft.get(b);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const $0=D.createFramebuffer();this.setRenderTarget=function(b,z=0,W=0){L=b,T=z,C=W;let X=!0,G=null,nt=!1,dt=!1;if(b){const _t=Ft.get(b);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(_t.__webglFramebuffer===void 0)qt.setupRenderTarget(b);else if(_t.__hasExternalTextures)qt.rebindTextures(b,Ft.get(b.texture).__webglTexture,Ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Dt=b.depthTexture;if(_t.__boundDepthTexture!==Dt){if(Dt!==null&&Ft.has(Dt)&&(b.width!==Dt.image.width||b.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(dt=!0);const Gt=Ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?G=Gt[z][W]:G=Gt[z],nt=!0):b.samples>0&&qt.useMultisampledRTT(b)===!1?G=Ft.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?G=Gt[W]:G=Gt,P.copy(b.viewport),k.copy(b.scissor),I=b.scissorTest}else P.copy(pt).multiplyScalar(H).floor(),k.copy(it).multiplyScalar(H).floor(),I=Qt;if(W!==0&&(G=$0),At.bindFramebuffer(D.FRAMEBUFFER,G)&&X&&At.drawBuffers(b,G),At.viewport(P),At.scissor(k),At.setScissorTest(I),nt){const _t=Ft.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,_t.__webglTexture,W)}else if(dt){const _t=Ft.get(b.texture),kt=z;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,W,kt)}else if(b!==null&&W!==0){const _t=Ft.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(b,z,W,X,G,nt,dt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){At.bindFramebuffer(D.FRAMEBUFFER,_t);try{const kt=b.textures[Mt],Gt=kt.format,Dt=kt.type;if(!ge.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-X&&W>=0&&W<=b.height-G&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt),D.readPixels(z,W,X,G,ot.convert(Gt),ot.convert(Dt),nt))}finally{const kt=L!==null?Ft.get(L).__webglFramebuffer:null;At.bindFramebuffer(D.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,z,W,X,G,nt,dt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t)if(z>=0&&z<=b.width-X&&W>=0&&W<=b.height-G){At.bindFramebuffer(D.FRAMEBUFFER,_t);const kt=b.textures[Mt],Gt=kt.format,Dt=kt.type;if(!ge.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt),D.readPixels(z,W,X,G,ot.convert(Gt),ot.convert(Dt),0);const de=L!==null?Ft.get(L).__webglFramebuffer:null;At.bindFramebuffer(D.FRAMEBUFFER,de);const Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await K_(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Zt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Zt),D.deleteSync(Pe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,W=0){const X=Math.pow(2,-W),G=Math.floor(b.image.width*X),nt=Math.floor(b.image.height*X),dt=z!==null?z.x:0,Mt=z!==null?z.y:0;qt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,dt,Mt,G,nt),At.unbindTexture()};const K0=D.createFramebuffer(),Z0=D.createFramebuffer();this.copyTextureToTexture=function(b,z,W=null,X=null,G=0,nt=null){nt===null&&(G!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=G,G=0):nt=0);let dt,Mt,_t,kt,Gt,Dt,Zt,de,Pe;const Le=b.isCompressedTexture?b.mipmaps[nt]:b.image;if(W!==null)dt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,kt=W.min.x,Gt=W.min.y,Dt=W.isBox3?W.min.z:0;else{const zn=Math.pow(2,-G);dt=Math.floor(Le.width*zn),Mt=Math.floor(Le.height*zn),b.isDataArrayTexture?_t=Le.depth:b.isData3DTexture?_t=Math.floor(Le.depth*zn):_t=1,kt=0,Gt=0,Dt=0}X!==null?(Zt=X.x,de=X.y,Pe=X.z):(Zt=0,de=0,Pe=0);const ie=ot.convert(z.format),Ut=ot.convert(z.type);let tn;z.isData3DTexture?(qt.setTexture3D(z,0),tn=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(qt.setTexture2DArray(z,0),tn=D.TEXTURE_2D_ARRAY):(qt.setTexture2D(z,0),tn=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ce=D.getParameter(D.UNPACK_ROW_LENGTH),ei=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ys=D.getParameter(D.UNPACK_SKIP_PIXELS),wn=D.getParameter(D.UNPACK_SKIP_ROWS),io=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt);const we=b.isDataArrayTexture||b.isData3DTexture,Bn=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const zn=Ft.get(b),ln=Ft.get(z),gn=Ft.get(zn.__renderTarget),zl=Ft.get(ln.__renderTarget);At.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,zl.__webglFramebuffer);for(let Ss=0;Ss<_t;Ss++)we&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(b).__webglTexture,G,Dt+Ss),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(z).__webglTexture,nt,Pe+Ss)),D.blitFramebuffer(kt,Gt,dt,Mt,Zt,de,dt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);At.bindFramebuffer(D.READ_FRAMEBUFFER,null),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Ft.has(b)){const zn=Ft.get(b),ln=Ft.get(z);At.bindFramebuffer(D.READ_FRAMEBUFFER,K0),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,Z0);for(let gn=0;gn<_t;gn++)we?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zn.__webglTexture,G,Dt+gn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zn.__webglTexture,G),Bn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,nt,Pe+gn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,nt),G!==0?D.blitFramebuffer(kt,Gt,dt,Mt,Zt,de,dt,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):Bn?D.copyTexSubImage3D(tn,nt,Zt,de,Pe+gn,kt,Gt,dt,Mt):D.copyTexSubImage2D(tn,nt,Zt,de,kt,Gt,dt,Mt);At.bindFramebuffer(D.READ_FRAMEBUFFER,null),At.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Bn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(tn,nt,Zt,de,Pe,dt,Mt,_t,ie,Ut,Le.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(tn,nt,Zt,de,Pe,dt,Mt,_t,ie,Le.data):D.texSubImage3D(tn,nt,Zt,de,Pe,dt,Mt,_t,ie,Ut,Le):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,Zt,de,dt,Mt,ie,Ut,Le.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,Zt,de,Le.width,Le.height,ie,Le.data):D.texSubImage2D(D.TEXTURE_2D,nt,Zt,de,dt,Mt,ie,Ut,Le);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ei),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ys),D.pixelStorei(D.UNPACK_SKIP_ROWS,wn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,io),nt===0&&z.generateMipmaps&&D.generateMipmap(tn),At.unbindTexture()},this.copyTextureToTexture3D=function(b,z,W=null,X=null,G=0){return vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,W,X,G)},this.initRenderTarget=function(b){Ft.get(b).__webglFramebuffer===void 0&&qt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qt.setTextureCube(b,0):b.isData3DTexture?qt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qt.setTexture2DArray(b,0):qt.setTexture2D(b,0),At.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,At.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class MM{constructor(t){ct(this,"_displayElement",null);this._displayElement=document.getElementById(t),this._displayElement||console.warn(`DebugDisplay: Element with ID "${t}" not found.`)}update(t){this._displayElement&&(this._displayElement.textContent=t)}clear(){this._displayElement&&(this._displayElement.textContent="")}append(t){this._displayElement&&(this._displayElement.innerHTML+=`${t}<br>`)}setVisible(t){this._displayElement&&(this._displayElement.style.display=t?"block":"none")}}class SM{constructor(t){ct(this,"videoElement",null);ct(this,"_stream",null);ct(this,"isStarted",!1);if(this.videoElement=document.getElementById(t),!this.videoElement)throw console.error(`WebcamController: Video element with ID "${t}" not found.`),new Error(`Video element with ID "${t}" not found.`)}async start(t={video:!0,audio:!1}){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){const e="WebcamController: getUserMedia not supported in this browser.";throw console.error(e),this.isStarted=!1,new Error(e)}if(!this.videoElement){const e="WebcamController: Video element not initialized.";throw console.error(e),this.isStarted=!1,new Error(e)}try{this._stream=await navigator.mediaDevices.getUserMedia(t),this.videoElement.srcObject=this._stream,await new Promise(e=>{this.videoElement.onloadedmetadata=()=>{this.videoElement.play(),this.isStarted=!0,console.log("WebcamController: Webcam stream started."),e()}})}catch(e){let i="WebcamController: Error accessing webcam: ";throw e.name==="NotFoundError"||e.name==="DevicesNotFoundError"?i+="No camera found on this device.":e.name==="NotAllowedError"||e.name==="PermissionDeniedError"?i+="Permission to access camera was denied.":e.name==="OverconstrainedError"||e.name==="ConstraintNotSatisfiedError"?i+=`The constraints ${JSON.stringify(t)} could not be satisfied by the available devices.`:e.name==="NotReadableError"||e.name==="TrackStartError"?i+="The webcam is already in use by another application or system process.":i+=`${e.name}: ${e.message}`,console.error(i,e),this.isStarted=!1,new Error(i)}}stop(){this._stream&&(this._stream.getTracks().forEach(t=>t.stop()),this._stream=null,console.log("WebcamController: Webcam stream stopped.")),this.videoElement&&(this.videoElement.srcObject=null),this.isStarted=!1}getVideoElement(){return this.videoElement}}var Xs=typeof self<"u"?self:{};function Rs(){throw Error("Invalid UTF8")}function Af(n,t){return t=String.fromCharCode.apply(null,t),n==null?t:n+t}let ma,_c;const EM=typeof TextDecoder<"u";let wM;const bM=typeof TextEncoder<"u";function Vm(n){if(bM)n=(wM||(wM=new TextEncoder)).encode(n);else{let e=0;const i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var t=n.charCodeAt(s);if(t<128)i[e++]=t;else{if(t<2048)i[e++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<n.length){const r=n.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[e++]=t>>18|240,i[e++]=t>>12&63|128,i[e++]=t>>6&63|128,i[e++]=63&t|128;continue}s--}t=65533}i[e++]=t>>12|224,i[e++]=t>>6&63|128}i[e++]=63&t|128}}n=e===i.length?i:i.subarray(0,e)}return n}var au,ja;t:{for(var Cf=["CLOSURE_FLAGS"],vc=Xs,xc=0;xc<Cf.length;xc++)if((vc=vc[Cf[xc]])==null){ja=null;break t}ja=vc}var Lo,Rf=ja&&ja[610401301];au=Rf!=null&&Rf;const Pf=Xs.navigator;function wh(n){return!!au&&!!Lo&&Lo.brands.some(({brand:t})=>t&&t.indexOf(n)!=-1)}function qn(n){var t;return(t=Xs.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(n)!=-1}function us(){return!!au&&!!Lo&&Lo.brands.length>0}function yc(){return us()?wh("Chromium"):(qn("Chrome")||qn("CriOS"))&&!(!us()&&qn("Edge"))||qn("Silk")}function lu(n){return lu[" "](n),n}Lo=Pf&&Pf.userAgentData||null,lu[" "]=function(){};var TM=!us()&&(qn("Trident")||qn("MSIE"));!qn("Android")||yc(),yc(),qn("Safari")&&(yc()||!us()&&qn("Coast")||!us()&&qn("Opera")||!us()&&qn("Edge")||(us()?wh("Microsoft Edge"):qn("Edg/"))||us()&&wh("Opera"));var Wm={},_o=null;function AM(n){const t=n.length;let e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(n[t-1])!=-1&&(e="=.".indexOf(n[t-2])!=-1?e-2:e-1);const i=new Uint8Array(e);let s=0;return function(r,o){function a(c){for(;l<r.length;){const h=r.charAt(l++),d=_o[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}Xm();let l=0;for(;;){const c=a(-1),h=a(0),d=a(64),u=a(64);if(u===64&&c===-1)break;o(c<<2|h>>4),d!=64&&(o(h<<4&240|d>>2),u!=64&&o(d<<6&192|u))}}(n,function(r){i[s++]=r}),s!==e?i.subarray(0,s):i}function Xm(){if(!_o){_o={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let e=0;e<5;e++){const i=n.concat(t[e].split(""));Wm[e]=i;for(let s=0;s<i.length;s++){const r=i[s];_o[r]===void 0&&(_o[r]=s)}}}}var qm=typeof Uint8Array<"u",jm=!TM&&typeof btoa=="function";function If(n){if(!jm){var t;t===void 0&&(t=0),Xm(),t=Wm[t];var e=Array(Math.floor(n.length/3)),i=t[64]||"";let l=0,c=0;for(;l<n.length-2;l+=3){var s=n[l],r=n[l+1],o=n[l+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],e[c++]=a+s+r+o}switch(a=0,o=i,n.length-l){case 2:o=t[(15&(a=n[l+1]))<<2]||i;case 1:n=n[l],e[c]=t[n>>2]+t[(3&n)<<4|a>>4]+o+i}return e.join("")}for(t="",e=0,i=n.length-10240;e<i;)t+=String.fromCharCode.apply(null,n.subarray(e,e+=10240));return t+=String.fromCharCode.apply(null,e?n.subarray(e):n),btoa(t)}const Lf=/[-_.]/g,CM={"-":"+",_:"/",".":"="};function RM(n){return CM[n]||""}function Ym(n){if(!jm)return AM(n);Lf.test(n)&&(n=n.replace(Lf,RM)),n=atob(n);const t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return t}function Oo(n){return qm&&n!=null&&n instanceof Uint8Array}var Lr={};function qs(){return PM||(PM=new $i(null,Lr))}function cu(n){$m(Lr);var t=n.g;return(t=t==null||Oo(t)?t:typeof t=="string"?Ym(t):null)==null?t:n.g=t}var $i=class{h(){return new Uint8Array(cu(this)||0)}constructor(n,t){if($m(t),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};let PM,IM;function $m(n){if(n!==Lr)throw Error("illegal external caller")}function Km(n,t){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=t}function bh(n){return Km(n=Error(n),"warning"),n}var ll=typeof Symbol=="function"&&typeof Symbol()=="symbol",LM=new Set;function Bo(n,t,e=!1,i=!1){return n=typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():t,e&&LM.add(n),n}var DM=Bo("jas",void 0,!0,!0),Df=Bo(void 0,"0di"),Mc=Bo(void 0,"2ex"),co=Bo(void 0,"1oa",!0),Dr=Bo(void 0,Symbol(),!0);const Rt=ll?DM:"Ga",Zm={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Jm=Object.defineProperties;function cl(n,t){ll||Rt in n||Jm(n,Zm),n[Rt]|=t}function Ve(n,t){ll||Rt in n||Jm(n,Zm),n[Rt]=t}function Yr(n){return cl(n,34),n}function NM(n,t){Ve(t,-30975&(0|n))}function Th(n,t){Ve(t,-30941&(34|n))}function hu(){return typeof BigInt=="function"}function Mn(n){return Array.prototype.slice.call(n)}var uu,zo={},Qm={};function Nf(n){return!(!n||typeof n!="object"||n.Ia!==Qm)}function du(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function fu(n,t){if(n!=null){if(typeof n=="string")n=n?new $i(n,Lr):qs();else if(n.constructor!==$i)if(Oo(n))n=n.length?new $i(new Uint8Array(n),Lr):qs();else{if(!t)throw Error();n=void 0}}return n}function Ya(n){return!(!Array.isArray(n)||n.length)&&!!(1&(0|n[Rt]))}const Ff=[];function vs(n){if(2&n)throw Error()}Ve(Ff,55),uu=Object.freeze(Ff);class $a{constructor(t,e,i){this.l=0,this.g=t,this.h=e,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new $a(this.g,this.h,this.m)}}function pu(n){return Dr?n[Dr]:void 0}var FM=Object.freeze({});function hl(n){return n.Qa=!0,n}var UM=hl(n=>typeof n=="number"),Uf=hl(n=>typeof n=="string"),OM=hl(n=>typeof n=="boolean"),ul=typeof Xs.BigInt=="function"&&typeof Xs.BigInt(0)=="bigint",Ah=hl(n=>ul?n>=zM&&n<=GM:n[0]==="-"?Of(n,BM):Of(n,kM));const BM=Number.MIN_SAFE_INTEGER.toString(),zM=ul?BigInt(Number.MIN_SAFE_INTEGER):void 0,kM=Number.MAX_SAFE_INTEGER.toString(),GM=ul?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Of(n,t){if(n.length>t.length)return!1;if(n.length<t.length||n===t)return!0;for(let e=0;e<n.length;e++){const i=n[e],s=t[e];if(i>s)return!1;if(i<s)return!0}}const HM=typeof Uint8Array.prototype.slice=="function";let tg,me=0,Ne=0;function Bf(n){const t=n>>>0;me=t,Ne=(n-t)/4294967296>>>0}function Nr(n){if(n<0){Bf(-n);const[t,e]=vu(me,Ne);me=t>>>0,Ne=e>>>0}else Bf(n)}function mu(n){const t=tg||(tg=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+n,!0),Ne=0,me=t.getUint32(0,!0)}function gu(n,t){const e=4294967296*t+(n>>>0);return Number.isSafeInteger(e)?e:Do(n,t)}function _u(n,t){const e=2147483648&t;return e&&(t=~t>>>0,(n=1+~n>>>0)==0&&(t=t+1>>>0)),typeof(n=gu(n,t))=="number"?e?-n:n:e?"-"+n:n}function Do(n,t){if(n>>>=0,(t>>>=0)<=2097151)var e=""+(4294967296*t+n);else hu()?e=""+(BigInt(t)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(e=16777215&(n>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,n>=1e7&&(e+=n/1e7>>>0,n%=1e7),e>=1e7&&(t+=e/1e7>>>0,e%=1e7),e=t+zf(e)+zf(n));return e}function zf(n){return n=String(n),"0000000".slice(n.length)+n}function dl(n){if(n.length<16)Nr(Number(n));else if(hu())n=BigInt(n),me=Number(n&BigInt(4294967295))>>>0,Ne=Number(n>>BigInt(32)&BigInt(4294967295));else{const t=+(n[0]==="-");Ne=me=0;const e=n.length;for(let i=t,s=(e-t)%6+t;s<=e;i=s,s+=6){const r=Number(n.slice(i,s));Ne*=1e6,me=1e6*me+r,me>=4294967296&&(Ne+=Math.trunc(me/4294967296),Ne>>>=0,me>>>=0)}if(t){const[i,s]=vu(me,Ne);me=i,Ne=s}}}function vu(n,t){return t=~t,n?n=1+~n:t+=1,[n,t]}const xu=typeof BigInt=="function"?BigInt.asIntN:void 0,VM=typeof BigInt=="function"?BigInt.asUintN:void 0,yr=Number.isSafeInteger,fl=Number.isFinite,Ka=Math.trunc;function xs(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function eg(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}const WM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function pl(n){switch(typeof n){case"bigint":return!0;case"number":return fl(n);case"string":return WM.test(n);default:return!1}}function $r(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return fl(n)?0|n:void 0}function ng(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return fl(n)?n>>>0:void 0}function kf(n){if(n[0]==="-")return!1;const t=n.length;return t<20||t===20&&Number(n.substring(0,6))<184467}function yu(n){return n=Ka(n),yr(n)||(Nr(n),n=_u(me,Ne)),n}function Mu(n){var t=Ka(Number(n));if(yr(t))return String(t);if((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),t=n.length,!(n[0]==="-"?t<20||t===20&&Number(n.substring(0,7))>-922337:t<19||t===19&&Number(n.substring(0,6))<922337))if(dl(n),n=me,2147483648&(t=Ne))if(hu())n=""+(BigInt(0|t)<<BigInt(32)|BigInt(n>>>0));else{const[e,i]=vu(n,t);n="-"+Do(e,i)}else n=Do(n,t);return n}function Za(n){return n==null?n:typeof n=="bigint"?(Ah(n)?n=Number(n):(n=xu(64,n),n=Ah(n)?Number(n):String(n)),n):pl(n)?typeof n=="number"?yu(n):Mu(n):void 0}function XM(n){if(n==null)return n;var t=typeof n;if(t==="bigint")return String(VM(64,n));if(pl(n)){if(t==="string")return t=Ka(Number(n)),yr(t)&&t>=0?n=String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),kf(n)||(dl(n),n=Do(me,Ne))),n;if(t==="number")return(n=Ka(n))>=0&&yr(n)?n:function(e){if(e<0){Nr(e);var i=Do(me,Ne);return e=Number(i),yr(e)?e:i}return kf(i=String(e))?i:(Nr(e),gu(me,Ne))}(n)}}function ig(n){if(typeof n!="string")throw Error();return n}function Kr(n){if(n!=null&&typeof n!="string")throw Error();return n}function Fr(n){return n==null||typeof n=="string"?n:void 0}function Su(n,t,e,i){if(n!=null&&typeof n=="object"&&n.W===zo)return n;if(!Array.isArray(n))return e?2&i?((n=t[Df])||(Yr((n=new t).u),n=t[Df]=n),t=n):t=new t:t=void 0,t;let s=e=0|n[Rt];return s===0&&(s|=32&i),s|=2&i,s!==e&&Ve(n,s),new t(n)}function qM(n,t,e){if(t)t:{if(!pl(t=n))throw bh("int64");switch(typeof t){case"string":t=Mu(t);break t;case"bigint":if(n=t=xu(64,t),Uf(n)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(n))throw Error(String(n))}else if(UM(n)&&!Number.isSafeInteger(n))throw Error(String(n));t=ul?BigInt(t):OM(t)?t?"1":"0":Uf(t)?t.trim()||"0":String(t);break t;default:t=yu(t)}}else t=Za(n);return typeof(e=(n=t)==null?e?0:void 0:n)=="string"&&yr(t=+e)?t:e}const jM={};let YM=function(){try{return lu(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Sc{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,e){return this.g.set(t,e),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,e){return this.g.forEach(t,e)}[Symbol.iterator](){return this.entries()}}const $M=YM?(Object.setPrototypeOf(Sc.prototype,Map.prototype),Object.defineProperties(Sc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Sc):class extends Map{constructor(){super()}};function Gf(n){return n}function Ec(n){if(2&n.L)throw Error("Cannot mutate an immutable Map")}var $n=class extends $M{constructor(n,t,e=Gf,i=Gf){super();let s=0|n[Rt];s|=64,Ve(n,s),this.L=s,this.S=t,this.R=e,this.Y=this.S?KM:i;for(let r=0;r<n.length;r++){const o=n[r],a=e(o[0],!1,!0);let l=o[1];t?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,s),super.set(a,l)}}na(n=Hf){if(this.size!==0)return this.X(n)}X(n=Hf){const t=[],e=super.entries();for(var i;!(i=e.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),t.push(i);return t}clear(){Ec(this),super.clear()}delete(n){return Ec(this),super.delete(this.R(n,!0,!1))}entries(){var n=this.ma();return new $a(n,ZM,this)}keys(){return this.Ha()}values(){var n=this.ma();return new $a(n,$n.prototype.get,this)}forEach(n,t){super.forEach((e,i)=>{n.call(t,this.get(i),i,this)})}set(n,t){return Ec(this),(n=this.R(n,!0,!1))==null?this:t==null?(super.delete(n),this):super.set(n,this.Y(t,!0,!0,this.S,!1,this.L))}Na(n){const t=this.R(n[0],!1,!0);n=n[1],n=this.S?n===void 0?null:n:this.Y(n,!1,!0,void 0,!1,this.L),super.set(t,n)}has(n){return super.has(this.R(n,!1,!1))}get(n){n=this.R(n,!1,!1);const t=super.get(n);if(t!==void 0){var e=this.S;return e?((e=this.Y(t,!1,!0,e,this.ra,this.L))!==t&&super.set(n,e),e):t}}ma(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function KM(n,t,e,i,s,r){return n=Su(n,i,e,r),s&&(n=gl(n)),n}function Hf(n){return n}function ZM(n){return[n,this.get(n)]}let JM,sg,QM;function Vf(){return JM||(JM=new $n(Yr([]),void 0,void 0,void 0,jM))}function Eu(n,t,e,i,s){if(n!=null){if(Array.isArray(n))n=Ya(n)?void 0:s&&2&(0|n[Rt])?n:wu(n,t,e,i!==void 0,s);else if(du(n)){const r={};for(let o in n)r[o]=Eu(n[o],t,e,i,s);n=r}else n=t(n,i);return n}}function wu(n,t,e,i,s){const r=i||e?0|n[Rt]:0,o=i?!!(32&r):void 0;i=Mn(n);for(let a=0;a<i.length;a++)i[a]=Eu(i[a],t,e,o,s);return e&&((n=pu(n))&&(i[Dr]=Mn(n)),e(r,i)),i}function tS(n){return Eu(n,rg,void 0,void 0,!1)}function rg(n){return n.W===zo?n.toJSON():n instanceof $n?n.na(tS):function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return Ah(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(Ya(t))return}else{if(Oo(t))return If(t);if(t instanceof $i){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=If(e)}if(t instanceof $n)return t.na()}}return t}(n)}function og(n){return wu(n,rg,void 0,void 0,!1)}function ps(n,t,e){return n=ag(n,t[0],t[1],e?1:2),t!==sg&&e&&cl(n,16384),n}function ag(n,t,e,i){if(n==null){var s=96;e?(n=[e],s|=512):n=[],t&&(s=-33521665&s|(1023&t)<<15)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(s=0|n[Rt]))throw Error("farr");if(64&s)return n;if(i===1||i===2||(s|=64),e&&(s|=512,e!==n[0]))throw Error("mid");t:{if(i=(e=n).length){const r=i-1;if(du(e[r])){if((t=r-(512&(s|=256)?0:-1))>=1024)throw Error("pvtlmt");s=-33521665&s|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,i-(512&s?0:-1)))>1024)throw Error("spvt");s=-33521665&s|(1023&t)<<15}}}return Ve(n,s),n}function Ch(n,t,e=Th){if(n!=null){if(qm&&n instanceof Uint8Array)return t?n:new Uint8Array(n);if(Array.isArray(n)){var i=0|n[Rt];return 2&i?n:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(Ve(n,-12293&(34|i)),n):wu(n,Ch,4&i?Th:e,!0,!0))}return n.W===zo?n=2&(i=0|(e=n.u)[Rt])?n:new n.constructor(ml(e,i,!0)):n instanceof $n&&!(2&n.L)&&(e=Yr(n.X(Ch)),n=new $n(e,n.S,n.R,n.Y)),n}}function ml(n,t,e){const i=e||2&t?Th:NM,s=!!(32&t);return n=function(r,o,a){const l=Mn(r);var c=l.length;const h=256&o?l[c-1]:void 0;for(c+=h?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(h){o=l[o]={};for(const d in h)o[d]=a(h[d])}return(r=pu(r))&&(l[Dr]=Mn(r)),l}(n,t,r=>Ch(r,s,i)),cl(n,32|(e?2:0)),n}function gl(n){const t=n.u,e=0|t[Rt];return 2&e?new n.constructor(ml(t,e,!1)):n}function Ur(n,t){return es(n=n.u,0|n[Rt],t)}function es(n,t,e,i){if(e===-1)return null;var s=e+(512&t?0:-1);const r=n.length-1;return s>=r&&256&t?n[r][e]:i&&256&t&&(t=n[r][e])!=null?(n[s]!=null&&Mc!=null&&((s=(n=IM??(IM={}))[Mc]||0)>=4||(n[Mc]=s+1,Km(n=Error(),"incident"),function(o){Xs.setTimeout(()=>{throw o},0)}(n))),t):s<=r?n[s]:void 0}function ve(n,t,e){const i=n.u;let s=0|i[Rt];return vs(s),Ie(i,s,t,e),n}function Ie(n,t,e,i){const s=512&t?0:-1,r=e+s;var o=n.length-1;return r>=o&&256&t?(n[o][e]=i,t):r<=o?(n[r]=i,256&t&&e in(n=n[o])&&delete n[e],t):(i!==void 0&&(e>=(o=t>>15&1023||536870912)?i!=null&&(n[o+s]={[e]:i},Ve(n,t|=256)):n[r]=i),t)}function La(n,t){let e=0|(n=n.u)[Rt];const i=es(n,e,t),s=xs(i);return s!=null&&s!==i&&Ie(n,e,t,s),s}function lg(n){let t=0|(n=n.u)[Rt];const e=es(n,t,1),i=fu(e,!0);return i!=null&&i!==e&&Ie(n,t,1,i),i}function ks(){return FM===void 0?2:4}function Gs(n,t,e,i,s){const r=n.u,o=2&(n=0|r[Rt])?1:i;s=!!s;let a=0|(i=bu(r,n,t))[Rt];if(!(4&a)){4&a&&(i=Mn(i),a=Ki(a,n),n=Ie(r,n,t,i));let l=0,c=0;for(;l<i.length;l++){const h=e(i[l]);h!=null&&(i[c++]=h)}c<l&&(i.length=c),a=Tu(a,n),e=-4097&(20|a),a=e&=-8193,Ve(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?Xi(a)||(s=a,a|=2,a!==s&&Ve(i,a),Object.freeze(i)):(o===2&&Xi(a)&&(i=Mn(i),a=Ki(a,n),a=ms(a,n,s),Ve(i,a),n=Ie(r,n,t,i)),Xi(a)||(t=a,a=ms(a,n,s),a!==t&&Ve(i,a))),i}function bu(n,t,e,i){return n=es(n,t,e,i),Array.isArray(n)?n:uu}function Tu(n,t){return n===0&&(n=Ki(n,t)),1|n}function Xi(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function cg(n){n=Mn(n);for(let t=0;t<n.length;t++){const e=n[t]=Mn(n[t]);Array.isArray(e[1])&&(e[1]=Yr(e[1]))}return n}function Rh(n,t,e,i){let s=0|(n=n.u)[Rt];vs(s),Ie(n,s,t,(i==="0"?Number(e)===0:e===i)?void 0:e)}function Zr(n,t,e,i,s){vs(t);var r=!(!(64&t)&&16384&t);const o=(s=bu(n,t,e,s))!==uu;if(r||!o){let a=r=o?0|s[Rt]:0;(!o||2&a||Xi(a)||4&a&&!(32&a))&&(s=Mn(s),a=Ki(a,t),t=Ie(n,t,e,s)),a=-13&Tu(a,t),a=ms(i?-17&a:16|a,t,!0),a!==r&&Ve(s,a)}return s}function wc(n,t){var e=Jg;return Cu(Au(n=n.u),n,0|n[Rt],e)===t?t:-1}function Au(n){if(ll)return n[co]??(n[co]=new Map);if(co in n)return n[co];const t=new Map;return Object.defineProperty(n,co,{value:t}),t}function hg(n,t,e,i){const s=Au(n),r=Cu(s,n,t,e);return r!==i&&(r&&(t=Ie(n,t,r)),s.set(e,i)),t}function Cu(n,t,e,i){let s=n.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){const o=i[r];es(t,e,o)!=null&&(s!==0&&(e=Ie(t,e,s)),s=o)}return n.set(i,s),s}function Ru(n,t,e,i){let s,r=0|n[Rt];if((i=es(n,r,e,i))!=null&&i.W===zo)return(t=gl(i))!==i&&Ie(n,r,e,t),t.u;if(Array.isArray(i)){const o=0|i[Rt];s=2&o?ps(ml(i,o,!1),t,!0):64&o?i:ps(s,t,!0)}else s=ps(void 0,t,!0);return s!==i&&Ie(n,r,e,s),s}function ug(n,t,e,i){let s=0|(n=n.u)[Rt];return(t=Su(i=es(n,s,e,i),t,!1,s))!==i&&t!=null&&Ie(n,s,e,t),t}function ee(n,t,e,i=!1){if((t=ug(n,t,e,i))==null)return t;if(!(2&(i=0|(n=n.u)[Rt]))){const s=gl(t);s!==t&&Ie(n,i,e,t=s)}return t}function dg(n,t,e,i,s,r,o){n=n.u;var a=!!(2&t);const l=a?1:s;r=!!r,o&&(o=!a);var c=0|(s=bu(n,t,i))[Rt];if(!(a=!!(4&c))){var h=s,d=t;const u=!!(2&(c=Tu(c,t)));u&&(d|=2);let p=!u,g=!0,_=0,m=0;for(;_<h.length;_++){const f=Su(h[_],e,!1,d);if(f instanceof e){if(!u){const v=!!(2&(0|f.u[Rt]));p&&(p=!v),g&&(g=v)}h[m++]=f}}m<_&&(h.length=m),c|=4,c=g?16|c:-17&c,Ve(h,c=p?8|c:-9&c),u&&Object.freeze(h)}if(o&&!(8&c||!s.length&&(l===1||l===4&&32&c))){for(Xi(c)&&(s=Mn(s),c=Ki(c,t),t=Ie(n,t,i,s)),e=s,o=c,h=0;h<e.length;h++)(c=e[h])!==(d=gl(c))&&(e[h]=d);o|=8,Ve(e,o=e.length?-17&o:16|o),c=o}return l===1||l===4&&32&c?Xi(c)||(t=c,(c|=!s.length||16&c&&(!a||32&c)?2:2048)!==t&&Ve(s,c),Object.freeze(s)):(l===2&&Xi(c)&&(Ve(s=Mn(s),c=ms(c=Ki(c,t),t,r)),t=Ie(n,t,i,s)),Xi(c)||(i=c,(c=ms(c,t,r))!==i&&Ve(s,c))),s}function Qi(n,t,e){const i=0|n.u[Rt];return dg(n,i,t,e,ks(),!1,!(2&i))}function Nt(n,t,e,i){return i==null&&(i=void 0),ve(n,e,i)}function So(n,t,e,i){i==null&&(i=void 0);t:{let s=0|(n=n.u)[Rt];if(vs(s),i==null){const r=Au(n);if(Cu(r,n,s,e)!==t)break t;r.set(e,0)}else s=hg(n,s,e,t);Ie(n,s,t,i)}}function Ki(n,t){return-2049&(n=32|(2&t?2|n:-3&n))}function ms(n,t,e){return 32&t&&e||(n&=-33),n}function Ja(n,t,e,i){const s=0|n.u[Rt];vs(s),n=dg(n,s,e,t,2,!0),i=i??new e,n.push(i),n[Rt]=2&(0|i.u[Rt])?-9&n[Rt]:-17&n[Rt]}function Yn(n,t){return $r(Ur(n,t))}function Kn(n,t){return Fr(Ur(n,t))}function Be(n,t){return La(n,t)??0}function No(n,t,e){if(e!=null&&typeof e!="boolean")throw n=typeof e,Error(`Expected boolean but got ${n!="object"?n:e?Array.isArray(e)?"array":n:"null"}: ${e}`);ve(n,t,e)}function Ai(n,t,e){if(e!=null){if(typeof e!="number"||!fl(e))throw bh("int32");e|=0}ve(n,t,e)}function Tt(n,t,e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);ve(n,t,e)}function Qa(n,t,e){{const o=n.u;let a=0|o[Rt];if(vs(a),e==null)Ie(o,a,t);else{var i=n=0|e[Rt],s=Xi(n),r=s||Object.isFrozen(e);for(s||(n=0),r||(e=Mn(e),i=0,n=ms(n=Ki(n,a),a,!0),r=!1),n|=21,s=0;s<e.length;s++){const l=e[s],c=ig(l);Object.is(l,c)||(r&&(e=Mn(e),i=0,n=ms(n=Ki(n,a),a,!0),r=!1),e[s]=c)}n!==i&&(r&&(e=Mn(e),n=ms(n=Ki(n,a),a,!0)),Ve(e,n)),Ie(o,a,t,e)}}}function _l(n,t,e){vs(0|n.u[Rt]),Gs(n,t,Fr,2,!0).push(ig(e))}function fg(n,t){return Error(`Invalid wire type: ${n} (at position ${t})`)}function Pu(){return Error("Failed to read varint, encoding is invalid.")}function pg(n,t){return Error(`Tried to read past the end of the data ${t} > ${n}`)}function Iu(n){if(typeof n=="string")return{buffer:Ym(n),N:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),N:!1};if(n.constructor===Uint8Array)return{buffer:n,N:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),N:!1};if(n.constructor===$i)return{buffer:cu(n)||new Uint8Array(0),N:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),N:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Lu(n,t){let e,i=0,s=0,r=0;const o=n.h;let a=n.g;do e=o[a++],i|=(127&e)<<r,r+=7;while(r<32&&128&e);for(r>32&&(s|=(127&e)>>4),r=3;r<32&&128&e;r+=7)e=o[a++],s|=(127&e)<<r;if(Hs(n,a),e<128)return t(i>>>0,s>>>0);throw Pu()}function Du(n){let t=0,e=n.g;const i=e+10,s=n.h;for(;e<i;){const r=s[e++];if(t|=r,(128&r)==0)return Hs(n,e),!!(127&t)}throw Pu()}function gs(n){const t=n.h;let e=n.g,i=t[e++],s=127&i;if(128&i&&(i=t[e++],s|=(127&i)<<7,128&i&&(i=t[e++],s|=(127&i)<<14,128&i&&(i=t[e++],s|=(127&i)<<21,128&i&&(i=t[e++],s|=i<<28,128&i&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw Pu();return Hs(n,e),s}function ts(n){return gs(n)>>>0}function Ph(n){var t=n.h;const e=n.g,i=t[e],s=t[e+1],r=t[e+2];return t=t[e+3],Hs(n,n.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function Ih(n){var t=Ph(n);n=2*(t>>31)+1;const e=t>>>23&255;return t&=8388607,e==255?t?NaN:n*(1/0):e==0?1401298464324817e-60*n*t:n*Math.pow(2,e-150)*(t+8388608)}function eS(n){return gs(n)}function bc(n,t,{ba:e=!1}={}){n.ba=e,t&&(t=Iu(t),n.h=t.buffer,n.m=t.N,n.j=0,n.l=n.h.length,n.g=n.j)}function Hs(n,t){if(n.g=t,t>n.l)throw pg(n.l,t)}function mg(n,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const e=n.g,i=e+t;if(i>n.l)throw pg(t,n.l-e);return n.g=i,e}function gg(n,t){if(t==0)return qs();var e=mg(n,t);return n.ba&&n.m?e=n.h.subarray(e,e+t):(n=n.h,e=e===(t=e+t)?new Uint8Array(0):HM?n.slice(e,t):new Uint8Array(n.subarray(e,t))),e.length==0?qs():new $i(e,Lr)}$n.prototype.toJSON=void 0,$n.prototype.Ia=Qm;var Wf=[];function _g(n){var t=n.g;if(t.g==t.l)return!1;n.l=n.g.g;var e=ts(n.g);if(t=e>>>3,!((e&=7)>=0&&e<=5))throw fg(e,n.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${n.l})`);return n.m=t,n.h=e,!0}function Da(n){switch(n.h){case 0:n.h!=0?Da(n):Du(n.g);break;case 1:Hs(n=n.g,n.g+8);break;case 2:if(n.h!=2)Da(n);else{var t=ts(n.g);Hs(n=n.g,n.g+t)}break;case 5:Hs(n=n.g,n.g+4);break;case 3:for(t=n.m;;){if(!_g(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=t)throw Error("Unmatched end-group tag");break}Da(n)}break;default:throw fg(n.h,n.l)}}function ko(n,t,e){const i=n.g.l,s=ts(n.g),r=n.g.g+s;let o=r-i;if(o<=0&&(n.g.l=r,e(t,n,void 0,void 0,void 0),o=r-n.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=r,n.g.l=i,t}function Nu(n){var t=ts(n.g),e=mg(n=n.g,t);if(n=n.h,EM){var i,s=n;(i=_c)||(i=_c=new TextDecoder("utf-8",{fatal:!0})),t=e+t,s=e===0&&t===s.length?s:s.subarray(e,t);try{var r=i.decode(s)}catch(a){if(ma===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ma=!0}catch{ma=!1}}throw!ma&&(_c=void 0),a}}else{t=(r=e)+t,e=[];let a,l=null;for(;r<t;){var o=n[r++];o<128?e.push(o):o<224?r>=t?Rs():(a=n[r++],o<194||(192&a)!=128?(r--,Rs()):e.push((31&o)<<6|63&a)):o<240?r>=t-1?Rs():(a=n[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=n[r++]))!=128?(r--,Rs()):e.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Rs():(a=n[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,Rs()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,e.push(55296+(o>>10&1023),56320+(1023&o)))):Rs(),e.length>=8192&&(l=Af(l,e),e.length=0)}r=Af(l,e)}return r}function vg(n){const t=ts(n.g);return gg(n.g,t)}function vl(n,t,e){var i=ts(n.g);for(i=n.g.g+i;n.g.g<i;)e.push(t(n.g))}var ga=[];function nS(n){return n}let Mr;function ui(n,t,e){t.g?t.m(n,t.g,t.h,e):t.m(n,t.h,e)}var St=class{constructor(n,t){this.u=ag(n,t)}toJSON(){const n=!Mr;try{return n&&(Mr=og),xg(this)}finally{n&&(Mr=void 0)}}l(){var n=BS;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.u;return new this.constructor(ml(n,0|n[Rt],!1))}N(){return!!(2&(0|this.u[Rt]))}};function xg(n){var t=n.u;{t=(n=Mr(t))!==t;let c=n.length;if(c){var e=n[c-1],i=du(e);i?c--:e=void 0;var s=n;if(i){t:{var r,o=e,a=!1;if(o)for(let h in o)isNaN(+h)?(r??(r={}))[h]=o[h]:(i=o[h],Array.isArray(i)&&(Ya(i)||Nf(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((r??(r={}))[h]=i));if(a||(r=o),r)for(let h in r){a=r;break t}a=null}o=a==null?e!=null:a!==e}for(;c>0&&((r=s[c-1])==null||Ya(r)||Nf(r)&&r.size===0);c--)var l=!0;(s!==n||o||l)&&(t?(l||o||a)&&(s.length=c):s=Array.prototype.slice.call(s,0,c),a&&s.push(a)),l=s}else l=n}return l}function Xf(n){return n?/^\d+$/.test(n)?(dl(n),new Lh(me,Ne)):null:iS||(iS=new Lh(0,0))}St.prototype.W=zo,St.prototype.toString=function(){try{return Mr=nS,xg(this).toString()}finally{Mr=void 0}};var Lh=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let iS;function qf(n){return n?/^-?\d+$/.test(n)?(dl(n),new Dh(me,Ne)):null:sS||(sS=new Dh(0,0))}var Dh=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let sS;function Sr(n,t,e){for(;e>0||t>127;)n.g.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;n.g.push(t)}function Jr(n,t){for(;t>127;)n.g.push(127&t|128),t>>>=7;n.g.push(t)}function xl(n,t){if(t>=0)Jr(n,t);else{for(let e=0;e<9;e++)n.g.push(127&t|128),t>>=7;n.g.push(1)}}function Fo(n,t){n.g.push(t>>>0&255),n.g.push(t>>>8&255),n.g.push(t>>>16&255),n.g.push(t>>>24&255)}function Or(n,t){t.length!==0&&(n.l.push(t),n.h+=t.length)}function Nn(n,t,e){Jr(n.g,8*t+e)}function Fu(n,t){return Nn(n,t,2),t=n.g.end(),Or(n,t),t.push(n.h),t}function Uu(n,t){var e=t.pop();for(e=n.h+n.g.length()-e;e>127;)t.push(127&e|128),e>>>=7,n.h++;t.push(e),n.h++}function yl(n,t,e){Nn(n,t,2),Jr(n.g,e.length),Or(n,n.g.end()),Or(n,e)}function tl(n,t,e,i){e!=null&&(t=Fu(n,t),i(e,n),Uu(n,t))}function di(){const n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var Ou=di(),yg=di(),Bu=di(),zu=di(),Mg=di(),Sg=di(),ku=di(),Eg=di(),wg=di(),Qr=class{constructor(n,t,e){this.g=n,this.h=t,n=Ou,this.l=!!n&&e===n||!1}};function Ml(n,t){return new Qr(n,t,Ou)}function bg(n,t,e,i,s){tl(n,e,Rg(t,i),s)}const rS=Ml(function(n,t,e,i,s){return n.h===2&&(ko(n,Ru(t,i,e),s),!0)},bg),oS=Ml(function(n,t,e,i,s){return n.h===2&&(ko(n,Ru(t,i,e,!0),s),!0)},bg);var Sl=Symbol(),Gu=Symbol(),jf=Symbol(),Yf=Symbol();let Tg,Ag;function js(n,t,e,i){var s=i[n];if(s)return s;(s={}).Pa=i,s.V=function(d){switch(typeof d){case"boolean":return sg||(sg=[0,void 0,!0]);case"number":return d>0?void 0:d===0?QM||(QM=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}}(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++o])=="function"&&(s.la=!0,Tg??(Tg=r),Ag??(Ag=i[o+1]),r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof Qr?d=r:(d=rS,o--),d==null?void 0:d.l){r=i[++o],c=i;var h=o;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);l<h;l++){const u=a[l];c?e(s,l,d,c,u):t(s,l,d,u)}}return i[n]=s}function Cg(n){return Array.isArray(n)?n[0]instanceof Qr?n:[oS,n]:[n,void 0]}function Rg(n,t){return n instanceof St?n.u:Array.isArray(n)?ps(n,t,!1):void 0}function Hu(n,t,e,i){const s=e.g;n[t]=i?(r,o,a)=>s(r,o,a,i):s}function Vu(n,t,e,i,s){const r=e.g;let o,a;n[t]=(l,c,h)=>r(l,c,h,a||(a=js(Gu,Hu,Vu,i).V),o||(o=Wu(i)),s)}function Wu(n){let t=n[jf];if(t!=null)return t;const e=js(Gu,Hu,Vu,n);return t=e.la?(i,s)=>Tg(i,s,e):(i,s)=>{const r=0|i[Rt];for(;_g(s)&&s.h!=4;){var o=s.m,a=e[o];if(a==null){var l=e.ga;l&&(l=l[o])&&(l=aS(l))!=null&&(a=e[o]=l)}a!=null&&a(s,i,o)||(o=(a=s).l,Da(a),a.fa?a=void 0:(l=a.g.g-o,a.g.g=o,a=gg(a.g,l)),o=i,a&&((l=o[Dr])?l.push(a):o[Dr]=[a]))}return 16384&r&&Yr(i),!0},n[jf]=t}function aS(n){const t=(n=Cg(n))[0].g;if(n=n[1]){const e=Wu(n),i=js(Gu,Hu,Vu,n).V;return(s,r,o)=>t(s,r,o,i,e)}return t}function El(n,t,e){n[t]=e.h}function wl(n,t,e,i){let s,r;const o=e.h;n[t]=(a,l,c)=>o(a,l,c,r||(r=js(Sl,El,wl,i).V),s||(s=Pg(i)))}function Pg(n){let t=n[Yf];if(!t){const e=js(Sl,El,wl,n);t=(i,s)=>Ig(i,s,e),n[Yf]=t}return t}function Ig(n,t,e){for(var i=0|n[Rt],s=512&i?0:-1,r=n.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){const l=n[o];if(l==null)continue;const c=o-s,h=$f(e,c);h&&h(t,l,c)}if(256&i){i=n[r-1];for(const l in i)s=+l,Number.isNaN(s)||(r=i[s])!=null&&(a=$f(e,s))&&a(t,r,s)}if(n=pu(n))for(Or(t,t.g.end()),e=0;e<n.length;e++)Or(t,cu(n[e])||new Uint8Array(0))}function $f(n,t){var e=n[t];if(e)return e;if((e=n.ga)&&(e=e[t])){var i=(e=Cg(e))[0].h;if(e=e[1]){const s=Pg(e),r=js(Sl,El,wl,e).V;e=n.la?Ag(r,s):(o,a,l)=>i(o,a,l,r,s)}else e=i;return n[t]=e}}function to(n,t){if(Array.isArray(t)){var e=0|t[Rt];if(4&e)return t;for(var i=0,s=0;i<t.length;i++){const r=n(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),Ve(t,-12289&(5|e)),2&e&&Object.freeze(t),t}}function pn(n,t,e){return new Qr(n,t,e)}function eo(n,t,e){return new Qr(n,t,e)}function mn(n,t,e){Ie(n,0|n[Rt],t,e)}var lS=Ml(function(n,t,e,i,s){return n.h===2&&(n=ko(n,ps([void 0,void 0],i,!0),s),vs(i=0|t[Rt]),(s=es(t,i,e))instanceof $n?(2&s.L)!=0?((s=s.X()).push(n),Ie(t,i,e,s)):s.Na(n):Array.isArray(s)?(2&(0|s[Rt])&&Ie(t,i,e,s=cg(s)),s.push(n)):Ie(t,i,e,[n]),!0)},function(n,t,e,i,s){if(t instanceof $n)t.forEach((r,o)=>{tl(n,e,ps([o,r],i,!1),s)});else if(Array.isArray(t))for(let r=0;r<t.length;r++){const o=t[r];Array.isArray(o)&&tl(n,e,ps(o,i,!1),s)}});function Lg(n,t,e){if(t=function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(xu(64,i));if(pl(i)){if(s==="string")return Mu(i);if(s==="number")return yu(i)}}(t),t!=null&&(typeof t=="string"&&qf(t),t!=null))switch(Nn(n,e,0),typeof t){case"number":n=n.g,Nr(t),Sr(n,me,Ne);break;case"bigint":e=BigInt.asUintN(64,t),e=new Dh(Number(e&BigInt(4294967295)),Number(e>>BigInt(32))),Sr(n.g,e.h,e.g);break;default:e=qf(t),Sr(n.g,e.h,e.g)}}function Dg(n,t,e){(t=$r(t))!=null&&t!=null&&(Nn(n,e,0),xl(n.g,t))}function Ng(n,t,e){(t=eg(t))!=null&&(Nn(n,e,0),n.g.g.push(t?1:0))}function Fg(n,t,e){(t=Fr(t))!=null&&yl(n,e,Vm(t))}function Ug(n,t,e,i,s){tl(n,e,Rg(t,i),s)}function Og(n,t,e){(t=t==null||typeof t=="string"||Oo(t)||t instanceof $i?t:void 0)!=null&&yl(n,e,Iu(t).buffer)}function Bg(n,t,e){return(n.h===5||n.h===2)&&(t=Zr(t,0|t[Rt],e,!1,!1),n.h==2?vl(n,Ih,t):t.push(Ih(n.g)),!0)}var ki=pn(function(n,t,e){if(n.h!==1)return!1;var i=n.g;n=Ph(i);const s=Ph(i);i=2*(s>>31)+1;const r=s>>>20&2047;return n=4294967296*(1048575&s)+n,mn(t,e,r==2047?n?NaN:i*(1/0):r==0?5e-324*i*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0},function(n,t,e){(t=xs(t))!=null&&(Nn(n,e,1),n=n.g,(e=tg||(tg=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),me=e.getUint32(0,!0),Ne=e.getUint32(4,!0),Fo(n,me),Fo(n,Ne))},di()),We=pn(function(n,t,e){return n.h===5&&(mn(t,e,Ih(n.g)),!0)},function(n,t,e){(t=xs(t))!=null&&(Nn(n,e,5),n=n.g,mu(t),Fo(n,me))},ku),cS=eo(Bg,function(n,t,e){if((t=to(xs,t))!=null)for(let o=0;o<t.length;o++){var i=n,s=e,r=t[o];r!=null&&(Nn(i,s,5),i=i.g,mu(r),Fo(i,me))}},ku),Xu=eo(Bg,function(n,t,e){if((t=to(xs,t))!=null&&t.length){Nn(n,e,2),Jr(n.g,4*t.length);for(let i=0;i<t.length;i++)e=n.g,mu(t[i]),Fo(e,me)}},ku),_s=pn(function(n,t,e){return n.h===0&&(mn(t,e,Lu(n.g,_u)),!0)},Lg,Sg),Tc=pn(function(n,t,e){return n.h===0&&(mn(t,e,(n=Lu(n.g,_u))===0?void 0:n),!0)},Lg,Sg),hS=pn(function(n,t,e){return n.h===0&&(mn(t,e,Lu(n.g,gu)),!0)},function(n,t,e){if((t=XM(t))!=null&&(typeof t=="string"&&Xf(t),t!=null))switch(Nn(n,e,0),typeof t){case"number":n=n.g,Nr(t),Sr(n,me,Ne);break;case"bigint":e=BigInt.asUintN(64,t),e=new Lh(Number(e&BigInt(4294967295)),Number(e>>BigInt(32))),Sr(n.g,e.h,e.g);break;default:e=Xf(t),Sr(n.g,e.h,e.g)}},di()),Ue=pn(function(n,t,e){return n.h===0&&(mn(t,e,gs(n.g)),!0)},Dg,zu),bl=eo(function(n,t,e){return(n.h===0||n.h===2)&&(t=Zr(t,0|t[Rt],e,!1,!1),n.h==2?vl(n,gs,t):t.push(gs(n.g)),!0)},function(n,t,e){if((t=to($r,t))!=null&&t.length){e=Fu(n,e);for(let i=0;i<t.length;i++)xl(n.g,t[i]);Uu(n,e)}},zu),mr=pn(function(n,t,e){return n.h===0&&(mn(t,e,(n=gs(n.g))===0?void 0:n),!0)},Dg,zu),Te=pn(function(n,t,e){return n.h===0&&(mn(t,e,Du(n.g)),!0)},Ng,yg),Er=pn(function(n,t,e){return n.h===0&&(mn(t,e,(n=Du(n.g))===!1?void 0:n),!0)},Ng,yg),rn=eo(function(n,t,e){return n.h===2&&(n=Nu(n),Zr(t,0|t[Rt],e,!1).push(n),!0)},function(n,t,e){if((t=to(Fr,t))!=null)for(let o=0;o<t.length;o++){var i=n,s=e,r=t[o];r!=null&&yl(i,s,Vm(r))}},Bu),ds=pn(function(n,t,e){return n.h===2&&(mn(t,e,(n=Nu(n))===""?void 0:n),!0)},Fg,Bu),he=pn(function(n,t,e){return n.h===2&&(mn(t,e,Nu(n)),!0)},Fg,Bu),Ye=function(n,t,e=Ou){return new Qr(n,t,e)}(function(n,t,e,i,s){return n.h===2&&(i=ps(void 0,i,!0),Zr(t,0|t[Rt],e,!0).push(i),ko(n,i,s),!0)},function(n,t,e,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)Ug(n,t[r],e,i,s)}),pe=Ml(function(n,t,e,i,s,r){return n.h===2&&(hg(t,0|t[Rt],r,e),ko(n,t=Ru(t,i,e),s),!0)},Ug),zg=pn(function(n,t,e){return n.h===2&&(mn(t,e,vg(n)),!0)},Og,Eg),uS=eo(function(n,t,e){return(n.h===0||n.h===2)&&(t=Zr(t,0|t[Rt],e,!1,!1),n.h==2?vl(n,ts,t):t.push(ts(n.g)),!0)},function(n,t,e){if((t=to(ng,t))!=null)for(let o=0;o<t.length;o++){var i=n,s=e,r=t[o];r!=null&&(Nn(i,s,0),Jr(i.g,r))}},Mg),dS=pn(function(n,t,e){return n.h===0&&(mn(t,e,(n=ts(n.g))===0?void 0:n),!0)},function(n,t,e){(t=ng(t))!=null&&t!=null&&(Nn(n,e,0),Jr(n.g,t))},Mg),Zn=pn(function(n,t,e){return n.h===0&&(mn(t,e,gs(n.g)),!0)},function(n,t,e){(t=$r(t))!=null&&(t=parseInt(t,10),Nn(n,e,0),xl(n.g,t))},wg);class fS{constructor(t,e){this.h=t,this.g=e,this.l=ee,this.m=Nt,this.defaultValue=void 0}}function fi(n,t){return new fS(n,t)}function ys(n,t){return(e,i)=>{if(ga.length){const r=ga.pop();r.o(i),bc(r.g,e,i),e=r}else e=new class{constructor(r,o){if(Wf.length){const a=Wf.pop();bc(a,r,o),r=a}else r=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,bc(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ba=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:r=!1}={}){this.fa=r}}(e,i);try{const r=new n,o=r.u;Wu(t)(o,e);var s=r}finally{e.g.clear(),e.m=-1,e.h=-1,ga.length<100&&ga.push(e)}return s}}function Tl(n){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Ig(this.u,t,js(Sl,El,wl,n)),Or(t,t.g.end());const e=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];e.set(a,r),r+=a.length}return t.l=[e],e}}var Kf=class extends St{constructor(n){super(n)}},Zf=[0,ds,pn(function(n,t,e){return n.h===2&&(mn(t,e,(n=vg(n))===qs()?void 0:n),!0)},function(n,t,e){if(t!=null){if(t instanceof St){const i=t.Ra;return void(i&&(t=i(t),t!=null&&yl(n,e,Iu(t).buffer)))}if(Array.isArray(t))return}Og(n,t,e)},Eg)];let Ac,Jf=globalThis.trustedTypes;function Qf(n){Ac===void 0&&(Ac=function(){let e=null;if(!Jf)return e;try{const i=s=>s;e=Jf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return e}());var t=Ac;return new class{constructor(e){this.g=e}toString(){return this.g+""}}(t?t.createScriptURL(n):n)}function pS(n,...t){if(t.length===0)return Qf(n[0]);let e=n[0];for(let i=0;i<t.length;i++)e+=encodeURIComponent(t[i])+n[i+1];return Qf(e)}var kg=[0,Ue,Zn,Te,-1,bl,Zn,-1],mS=class extends St{constructor(n){super(n)}},Gg=[0,Te,he,Te,Zn,-1,eo(function(n,t,e){return(n.h===0||n.h===2)&&(t=Zr(t,0|t[Rt],e,!1,!1),n.h==2?vl(n,eS,t):t.push(gs(n.g)),!0)},function(n,t,e){if((t=to($r,t))!=null&&t.length){e=Fu(n,e);for(let i=0;i<t.length;i++)xl(n.g,t[i]);Uu(n,e)}},wg),he,-1,[0,Te,-1],Zn,Te,-1],Hg=[0,he,-2],tp=class extends St{constructor(n){super(n)}},Vg=[0],Wg=[0,Ue,Te,1,Te,-3],Ln=class extends St{constructor(n){super(n,2)}},Xe={};Xe[336783863]=[0,he,Te,-1,Ue,[0,[1,2,3,4,5,6,7,8],pe,Vg,pe,Gg,pe,Hg,pe,Wg,pe,kg,pe,[0,he,-2],pe,[0,he,Zn],pe,[0,Zn,he]],[0,he],Te,[0,[1,3],[2,4],pe,[0,bl],-1,pe,[0,rn],-1,Ye,[0,he,-1]],he];var ep=[0,Tc,-1,Er,-3,Tc,bl,ds,mr,Tc,-1,Er,mr,Er,-2,ds];function Fn(n,t){Rh(n,2,Kr(t),"")}function ye(n,t){_l(n,3,t)}function Jt(n,t){_l(n,4,t)}var fn=class extends St{constructor(n){super(n,500)}o(n){return Nt(this,0,7,n)}},Eo=[-1,{}],np=[0,he,1,Eo],ip=[0,he,rn,Eo];function Un(n,t){Ja(n,1,fn,t)}function Ee(n,t){_l(n,10,t)}function se(n,t){_l(n,15,t)}var En=class extends St{constructor(n){super(n,500)}o(n){return Nt(this,0,1001,n)}},Xg=[-500,Ye,[-500,ds,-1,rn,-3,[-2,Xe,Te],Ye,Zf,mr,-1,np,ip,Ye,[0,ds,Er],ds,ep,mr,rn,987,rn],4,Ye,[-500,he,-1,[-1,{}],998,he],Ye,[-500,he,rn,-1,[-2,{},Te],997,rn,-1],mr,Ye,[-500,he,rn,Eo,998,rn],rn,mr,np,ip,Ye,[0,ds,-1,Eo],rn,-2,ep,ds,-1,Er,[0,Er,dS],978,Eo,Ye,Zf];En.prototype.g=Tl(Xg);var gS=ys(En,Xg),_S=class extends St{constructor(n){super(n)}},qg=class extends St{constructor(n){super(n)}g(){return Qi(this,_S,1)}},jg=[0,Ye,[0,Ue,We,he,-1]],Al=ys(qg,jg),vS=class extends St{constructor(n){super(n)}},xS=class extends St{constructor(n){super(n)}},Cc=class extends St{constructor(n){super(n)}h(){return ee(this,vS,2)}g(){return Qi(this,xS,5)}},Yg=ys(class extends St{constructor(n){super(n)}},[0,rn,bl,Xu,[0,Zn,[0,Ue,-3],[0,We,-3],[0,Ue,-1,[0,Ye,[0,Ue,-2]]],Ye,[0,We,-1,he,We]],he,-1,_s,Ye,[0,Ue,We],rn,_s]),$g=class extends St{constructor(n){super(n)}},wr=ys(class extends St{constructor(n){super(n)}},[0,Ye,[0,We,-4]]),Kg=class extends St{constructor(n){super(n)}},Go=ys(class extends St{constructor(n){super(n)}},[0,Ye,[0,We,-4]]),yS=class extends St{constructor(n){super(n)}},MS=[0,Ue,-1,Xu,Zn],Zg=class extends St{constructor(n){super(n)}};Zg.prototype.g=Tl([0,We,-4,_s]);var SS=class extends St{constructor(n){super(n)}},ES=ys(class extends St{constructor(n){super(n)}},[0,Ye,[0,1,Ue,he,jg],_s]),sp=class extends St{constructor(n){super(n)}},wS=class extends St{constructor(n){super(n)}oa(){const n=lg(this);return n??qs()}},bS=class extends St{constructor(n){super(n)}},Jg=[1,2],TS=ys(class extends St{constructor(n){super(n)}},[0,Ye,[0,Jg,pe,[0,Xu],pe,[0,zg],Ue,he],_s]),qu=class extends St{constructor(n){super(n)}},Qg=[0,he,Ue,We,rn,-1],rp=class extends St{constructor(n){super(n)}},AS=[0,Te,-1],op=class extends St{constructor(n){super(n)}},Na=[1,2,3,4,5],el=class extends St{constructor(n){super(n)}g(){return lg(this)!=null}h(){return Kn(this,2)!=null}},Ae=class extends St{constructor(n){super(n)}g(){return eg(Ur(this,2))??!1}},t0=[0,zg,he,[0,Ue,_s,-1],[0,hS,_s]],ze=[0,t0,Te,[0,Na,pe,Wg,pe,Gg,pe,kg,pe,Vg,pe,Hg],Zn],Cl=class extends St{constructor(n){super(n)}},ju=[0,ze,We,-1,Ue],CS=fi(502141897,Cl);Xe[502141897]=ju;var RS=ys(class extends St{constructor(n){super(n)}},[0,[0,Zn,-1,cS,uS],MS]),e0=class extends St{constructor(n){super(n)}},n0=class extends St{constructor(n){super(n)}},Yu=[0,ze,We,[0,ze],Te],i0=[0,ze,ju,Yu,We,[0,[0,t0]]],PS=fi(508968150,n0);Xe[508968150]=i0,Xe[508968149]=Yu;var s0=class extends St{constructor(n){super(n)}},IS=fi(513916220,s0);Xe[513916220]=[0,ze,i0,Ue];var cr=class extends St{constructor(n){super(n)}h(){return ee(this,qu,2)}g(){ve(this,2)}},r0=[0,ze,Qg];Xe[478825465]=r0;var LS=class extends St{constructor(n){super(n)}},o0=class extends St{constructor(n){super(n)}},$u=class extends St{constructor(n){super(n)}},Ku=class extends St{constructor(n){super(n)}},a0=class extends St{constructor(n){super(n)}},ap=[0,ze,[0,ze],r0,-1],l0=[0,ze,We,Ue],Zu=[0,ze,We],c0=[0,ze,l0,Zu,We],DS=fi(479097054,a0);Xe[479097054]=[0,ze,c0,ap],Xe[463370452]=ap,Xe[464864288]=l0;var NS=fi(462713202,Ku);Xe[462713202]=c0,Xe[474472470]=Zu;var FS=class extends St{constructor(n){super(n)}},h0=class extends St{constructor(n){super(n)}},u0=class extends St{constructor(n){super(n)}},d0=class extends St{constructor(n){super(n)}},Ju=[0,ze,We,-1,Ue],Nh=[0,ze,We,Te];d0.prototype.g=Tl([0,ze,Zu,[0,ze],ju,Yu,Ju,Nh]);var f0=class extends St{constructor(n){super(n)}},US=fi(456383383,f0);Xe[456383383]=[0,ze,Qg];var p0=class extends St{constructor(n){super(n)}},OS=fi(476348187,p0);Xe[476348187]=[0,ze,AS];var m0=class extends St{constructor(n){super(n)}},lp=class extends St{constructor(n){super(n)}},g0=[0,Zn,-1],BS=fi(458105876,class extends St{constructor(n){super(n)}g(){var n=this.u;const t=0|n[Rt],e=2&t;return n=function(i,s,r){var o=lp;const a=2&s;let l=!1;if(r==null){if(a)return Vf();r=[]}else if(r.constructor===$n){if((2&r.L)==0||a)return r;r=r.X()}else Array.isArray(r)?l=!!(2&(0|r[Rt])):r=[];if(a){if(!r.length)return Vf();l||(l=!0,Yr(r))}else l&&(l=!1,r=cg(r));return l||(64&(0|r[Rt])?r[Rt]&=-33:32&s&&cl(r,32)),Ie(i,s,2,o=new $n(r,o,qM,void 0)),o}(n,t,es(n,t,2)),!e&&lp&&(n.ra=!0),n}});Xe[458105876]=[0,g0,lS,[!0,_s,[0,he,-1,rn]]];var Qu=class extends St{constructor(n){super(n)}},_0=fi(458105758,Qu);Xe[458105758]=[0,ze,he,g0];var v0=class extends St{constructor(n){super(n)}},zS=fi(443442058,v0);Xe[443442058]=[0,ze,he,Ue,We,rn,-1,Te,We],Xe[514774813]=Ju;var x0=class extends St{constructor(n){super(n)}},kS=fi(516587230,x0);function Fh(n,t){return t=t?t.clone():new qu,n.displayNamesLocale!==void 0?ve(t,1,Kr(n.displayNamesLocale)):n.displayNamesLocale===void 0&&ve(t,1),n.maxResults!==void 0?Ai(t,2,n.maxResults):"maxResults"in n&&ve(t,2),n.scoreThreshold!==void 0?Tt(t,3,n.scoreThreshold):"scoreThreshold"in n&&ve(t,3),n.categoryAllowlist!==void 0?Qa(t,4,n.categoryAllowlist):"categoryAllowlist"in n&&ve(t,4),n.categoryDenylist!==void 0?Qa(t,5,n.categoryDenylist):"categoryDenylist"in n&&ve(t,5),t}function td(n,t=-1,e=""){return{categories:n.map(i=>({index:Yn(i,1)??0??-1,score:Be(i,2)??0,categoryName:Kn(i,3)??""??"",displayName:Kn(i,4)??""??""})),headIndex:t,headName:e}}function y0(n){var o,a;var t=Gs(n,3,xs,ks()),e=Gs(n,2,$r,ks()),i=Gs(n,1,Fr,ks()),s=Gs(n,9,Fr,ks());const r={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)r.categories.push({score:t[l],index:e[l]??-1,categoryName:i[l]??"",displayName:s[l]??""});if((t=(o=ee(n,Cc,4))==null?void 0:o.h())&&(r.boundingBox={originX:Yn(t,1)??0,originY:Yn(t,2)??0,width:Yn(t,3)??0,height:Yn(t,4)??0,angle:0}),(a=ee(n,Cc,4))==null?void 0:a.g().length)for(const l of ee(n,Cc,4).g())r.keypoints.push({x:La(l,1)??0,y:La(l,2)??0,score:La(l,4)??0,label:Kn(l,3)??""});return r}function Rl(n){const t=[];for(const e of Qi(n,Kg,1))t.push({x:Be(e,1)??0,y:Be(e,2)??0,z:Be(e,3)??0,visibility:Be(e,4)??0});return t}function wo(n){const t=[];for(const e of Qi(n,$g,1))t.push({x:Be(e,1)??0,y:Be(e,2)??0,z:Be(e,3)??0,visibility:Be(e,4)??0});return t}function cp(n){return Array.from(n,t=>t>127?t-256:t)}function hp(n,t){if(n.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${t.length}).`);let e=0,i=0,s=0;for(let r=0;r<n.length;r++)e+=n[r]*t[r],i+=n[r]*n[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(i*s)}let _a;Xe[516587230]=[0,ze,Ju,Nh,We],Xe[518928384]=Nh;const GS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function M0(){if(_a===void 0)try{await WebAssembly.instantiate(GS),_a=!0}catch{_a=!1}return _a}async function ho(n,t=pS``){const e=await M0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${n}_${e}.js`,wasmBinaryPath:`${t}/${n}_${e}.wasm`}}var Ds=class{};function S0(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function up(n){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=n.toString(),t.crossOrigin="anonymous",new Promise((e,i)=>{t.addEventListener("load",()=>{e()},!1),t.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(t)})}importScripts(n.toString())}function E0(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Ct(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=n.i.stringToNewUTF8(t)),n.i._free(t)}function dp(n,t,e){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(e?n.i._bindTextureToStream(e):n.i._bindTextureToCanvas(),!(e=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=E0(t);return!n.l||i===n.i.canvas.width&&s===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=s),[i,s]}function fp(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=n.i.stringToNewUTF8(t[s]);t=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,t>>2),e(t);for(const s of i)n.i._free(s);n.i._free(t)}function mi(n,t,e){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=e}function ls(n,t,e){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=(s,r,o)=>{r?(e(i,o),i=[]):i.push(s)}}Ds.forVisionTasks=function(n){return ho("vision",n)},Ds.forTextTasks=function(n){return ho("text",n)},Ds.forGenAiExperimentalTasks=function(n){return ho("genai_experimental",n)},Ds.forGenAiTasks=function(n){return ho("genai",n)},Ds.forAudioTasks=function(n){return ho("audio",n)},Ds.isSimdSupported=function(){return M0()};async function HS(n,t,e,i){return n=await(async(s,r,o,a,l)=>{if(r&&await up(r),!self.ModuleFactory||o&&(await up(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(n,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&s.endsWith(".data")?e.assetBinaryPath.toString():s}),await n.o(i),n}function Rc(n,t){const e=ee(n.baseOptions,el,1)||new el;typeof t=="string"?(ve(e,2,Kr(t)),ve(e,1)):t instanceof Uint8Array&&(ve(e,1,fu(t,!1)),ve(e,2)),Nt(n.baseOptions,0,1,e)}function pp(n){try{const t=n.G.length;if(t===1)throw Error(n.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+n.G.map(e=>e.message).join(", "))}finally{n.G=[]}}function mt(n,t){n.B=Math.max(n.B,t)}function Pl(n,t){n.A=new fn,Fn(n.A,"PassThroughCalculator"),ye(n.A,"free_memory"),Jt(n.A,"free_memory_unused_out"),Ee(t,"free_memory"),Un(t,n.A)}function Br(n,t){ye(n.A,t),Jt(n.A,t+"_unused_out")}function Il(n){n.g.addBoolToStream(!0,"free_memory",n.B)}var Fa=class{constructor(n){this.g=n,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(n,t=!0){var e,i,s,r,o,a;if(t){const l=n.baseOptions||{};if((e=n.baseOptions)!=null&&e.modelAssetBuffer&&((i=n.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=ee(this.baseOptions,el,1))!=null&&s.g()||(r=ee(this.baseOptions,el,1))!=null&&r.h()||(o=n.baseOptions)!=null&&o.modelAssetBuffer||(a=n.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,h){let d=ee(c.baseOptions,op,3);if(!d){var u=d=new op,p=new tp;So(u,4,Na,p)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new mS,So(h,2,Na,u)):(h=d,u=new tp,So(h,4,Na,u))),Nt(c.baseOptions,0,3,d)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Rc(this,"/model.dat"),this.m(),this.I()});if(l.modelAssetBuffer instanceof Uint8Array)Rc(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const h=[];for(var d=0;;){const{done:u,value:p}=await c.read();if(u)break;h.push(p),d+=p.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(d),d=0;for(const u of h)c.set(u,d),d+=u.length;return c}(l.modelAssetBuffer).then(c=>{Rc(this,c),this.m(),this.I()})}return this.m(),this.I(),Promise.resolve()}I(){}da(){let n;if(this.g.da(t=>{n=gS(t)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,t){this.g.attachErrorListener((e,i)=>{this.G.push(Error(i))}),this.g.La(),this.g.setGraph(n,t),this.A=void 0,pp(this)}finishProcessing(){this.g.finishProcessing(),pp(this)}close(){this.A=void 0,this.g.closeGraph()}};function Zi(n,t){if(!n)throw Error(`Unable to obtain required WebGL resource: ${t}`);return n}Fa.prototype.close=Fa.prototype.close,function(n,t){n=n.split(".");var e,i=Xs;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(e=n.shift());)n.length||t===void 0?i=i[e]&&i[e]!==Object.prototype[e]?i[e]:i[e]={}:i[e]=t}("TaskRunner",Fa);class VS{constructor(t,e,i,s){this.g=t,this.h=e,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function mp(n,t,e){const i=n.g;if(e=Zi(i.createShader(e),"Failed to create WebGL shader"),i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(e)}`);return i.attachShader(n.h,e),e}function gp(n,t){const e=n.g,i=Zi(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(i);const s=Zi(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(n.O),e.vertexAttribPointer(n.O,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);const r=Zi(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(n.I),e.vertexAttribPointer(n.I,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new VS(e,i,s,r)}function ed(n,t){if(n.g){if(t!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=t}function nd(n,t,e,i){return ed(n,t),n.h||(n.m(),n.C()),e?(n.s||(n.s=gp(n,!0)),e=n.s):(n.v||(n.v=gp(n,!1)),e=n.v),t.useProgram(n.h),e.bind(),n.l(),n=i(),e.g.bindVertexArray(null),n}function Ll(n,t,e){return ed(n,t),n=Zi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),n}function Dl(n,t,e){ed(n,t),n.A||(n.A=Zi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,n.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function id(n){var t;(t=n.g)==null||t.bindFramebuffer(n.g.FRAMEBUFFER,null)}var sd=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=Zi(n.createProgram(),"Failed to create WebGL program"),this.aa=mp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.Z=mp(this,this.G(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.O=n.getAttribLocation(this.h,"aVertex"),this.I=n.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.aa),n.deleteShader(this.Z)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function Hi(n,t){switch(t){case 0:return n.g.find(e=>e instanceof Uint8Array);case 1:return n.g.find(e=>e instanceof Float32Array);case 2:return n.g.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Uh(n){var t=Hi(n,1);if(!t){if(t=Hi(n,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(n.width*n.height);const i=zr(n);var e=rd(n);if(Dl(e,i,w0(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){e=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,e);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=e[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,t)}n.g.push(t)}return t}function w0(n){let t=Hi(n,2);if(!t){const e=zr(n);t=T0(n);const i=Uh(n),s=b0(n);e.texImage2D(e.TEXTURE_2D,0,s,n.width,n.height,0,e.RED,e.FLOAT,i),Oh(n)}return t}function zr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Zi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function b0(n){if(n=zr(n),!va)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))va=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");va=n.R16F}return va}function rd(n){return n.l||(n.l=new sd),n.l}function T0(n){const t=zr(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Hi(n,2);return e||(e=Ll(rd(n),t,n.m?t.LINEAR:t.NEAREST),n.g.push(e),n.j=!0),t.bindTexture(t.TEXTURE_2D,e),e}function Oh(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var va,Je=class{constructor(n,t,e,i,s,r,o){this.g=n,this.m=t,this.j=e,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--_p===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Hi(this,0)}ja(){return!!Hi(this,1)}P(){return!!Hi(this,2)}ia(){return(t=Hi(n=this,0))||(t=Uh(n),t=new Uint8Array(t.map(e=>255*e)),n.g.push(t)),t;var n,t}ha(){return Uh(this)}M(){return w0(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=zr(this),s=rd(this);i.activeTexture(i.TEXTURE1),e=Ll(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,e);const r=b0(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Dl(s,i,e),nd(s,i,!1,()=>{T0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Oh(this)}),id(s),Oh(this)}}n.push(e)}return new Je(n,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&zr(this).deleteTexture(Hi(this,2)),_p=-1}};Je.prototype.close=Je.prototype.close,Je.prototype.clone=Je.prototype.clone,Je.prototype.getAsWebGLTexture=Je.prototype.M,Je.prototype.getAsFloat32Array=Je.prototype.ha,Je.prototype.getAsUint8Array=Je.prototype.ia,Je.prototype.hasWebGLTexture=Je.prototype.P,Je.prototype.hasFloat32Array=Je.prototype.ja,Je.prototype.hasUint8Array=Je.prototype.Fa;var _p=250;function Si(n,t){switch(t){case 0:return n.g.find(e=>e instanceof ImageData);case 1:return n.g.find(e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap);case 2:return n.g.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function A0(n){var t=Si(n,0);if(!t){t=kr(n);const e=Nl(n),i=new Uint8Array(n.width*n.height*4);Dl(e,t,Ua(n)),t.readPixels(0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,i),id(e),t=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(t)}return t}function Ua(n){let t=Si(n,2);if(!t){const e=kr(n);t=Oa(n);const i=Si(n,1)||A0(n);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),vo(n)}return t}function kr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Zi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Nl(n){return n.l||(n.l=new sd),n.l}function Oa(n){const t=kr(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Si(n,2);return e||(e=Ll(Nl(n),t),n.g.push(e),n.m=!0),t.bindTexture(t.TEXTURE_2D,e),e}function vo(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function vp(n){const t=kr(n);return nd(Nl(n),t,!0,()=>function(e,i){const s=e.canvas;if(s.width===e.width&&s.height===e.height)return i();const r=s.width,o=s.height;return s.width=e.width,s.height=e.height,e=i(),s.width=r,s.height=o,e}(n,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))}var Qe=class{constructor(n,t,e,i,s,r,o){this.g=n,this.j=t,this.m=e,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--xp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!Si(this,0)}ka(){return!!Si(this,1)}P(){return!!Si(this,2)}Ca(){return A0(this)}Ba(){var n=Si(this,1);return n||(Ua(this),Oa(this),n=vp(this),vo(this),this.g.push(n),this.j=!0),n}M(){return Ua(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=kr(this),s=Nl(this);i.activeTexture(i.TEXTURE1),e=Ll(s,i),i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Dl(s,i,e),nd(s,i,!1,()=>{Oa(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),vo(this)}),id(s),vo(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Ua(this),Oa(this),e=vp(this),vo(this)}n.push(e)}return new Qe(n,this.ka(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Si(this,1).close(),this.m&&kr(this).deleteTexture(Si(this,2)),xp=-1}};Qe.prototype.close=Qe.prototype.close,Qe.prototype.clone=Qe.prototype.clone,Qe.prototype.getAsWebGLTexture=Qe.prototype.M,Qe.prototype.getAsImageBitmap=Qe.prototype.Ba,Qe.prototype.getAsImageData=Qe.prototype.Ca,Qe.prototype.hasWebGLTexture=Qe.prototype.P,Qe.prototype.hasImageBitmap=Qe.prototype.ka,Qe.prototype.hasImageData=Qe.prototype.Ea;var xp=250;function pi(...n){return n.map(([t,e])=>({start:t,end:e}))}const WS=function(n){return class extends n{La(){this.i._registerModelResourcesGraphService()}}}((yp=class{constructor(n,t){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:S0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const t=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(t),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,t){const e=n.length,i=this.i._malloc(e);this.i.HEAPU8.set(n,i),t?this.i._changeBinaryGraph(e,i):this.i._changeTextGraph(e,i),this.i._free(i)}configureAudio(n,t,e,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ct(this,i||"input_audio",r=>{Ct(this,s=s||"audio_header",o=>{this.i._configureAudio(r,o,n,t??0,e)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}da(n){mi(this,"__graph_config__",t=>{n(t)}),Ct(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=t}addAudioToStream(n,t,e){this.addAudioToStreamWithShape(n,0,0,t,e)}addAudioToStreamWithShape(n,t,e,i,s){const r=4*n.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(n,this.g/4),Ct(this,i,o=>{this.i._addAudioToInputStream(this.g,t,e,o,s)})}addGpuBufferToStream(n,t,e){Ct(this,t,i=>{const[s,r]=dp(this,n,i);this.i._addBoundTextureToStream(i,s,r,e)})}addBoolToStream(n,t,e){Ct(this,t,i=>{this.i._addBoolToInputStream(n,i,e)})}addDoubleToStream(n,t,e){Ct(this,t,i=>{this.i._addDoubleToInputStream(n,i,e)})}addFloatToStream(n,t,e){Ct(this,t,i=>{this.i._addFloatToInputStream(n,i,e)})}addIntToStream(n,t,e){Ct(this,t,i=>{this.i._addIntToInputStream(n,i,e)})}addUintToStream(n,t,e){Ct(this,t,i=>{this.i._addUintToInputStream(n,i,e)})}addStringToStream(n,t,e){Ct(this,t,i=>{Ct(this,n,s=>{this.i._addStringToInputStream(s,i,e)})})}addStringRecordToStream(n,t,e){Ct(this,t,i=>{fp(this,Object.keys(n),s=>{fp(this,Object.values(n),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,e)})})})}addProtoToStream(n,t,e,i){Ct(this,e,s=>{Ct(this,t,r=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,r,s,i),this.i._free(o)})})}addEmptyPacketToStream(n,t){Ct(this,n,e=>{this.i._addEmptyPacketToInputStream(e,t)})}addBoolVectorToStream(n,t,e){Ct(this,t,i=>{const s=this.i._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,e)})}addDoubleVectorToStream(n,t,e){Ct(this,t,i=>{const s=this.i._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,e)})}addFloatVectorToStream(n,t,e){Ct(this,t,i=>{const s=this.i._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,e)})}addIntVectorToStream(n,t,e){Ct(this,t,i=>{const s=this.i._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,e)})}addUintVectorToStream(n,t,e){Ct(this,t,i=>{const s=this.i._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,e)})}addStringVectorToStream(n,t,e){Ct(this,t,i=>{const s=this.i._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Ct(this,r,o=>{this.i._addStringVectorEntry(s,o)});this.i._addStringVectorToInputStream(s,i,e)})}addBoolToInputSidePacket(n,t){Ct(this,t,e=>{this.i._addBoolToInputSidePacket(n,e)})}addDoubleToInputSidePacket(n,t){Ct(this,t,e=>{this.i._addDoubleToInputSidePacket(n,e)})}addFloatToInputSidePacket(n,t){Ct(this,t,e=>{this.i._addFloatToInputSidePacket(n,e)})}addIntToInputSidePacket(n,t){Ct(this,t,e=>{this.i._addIntToInputSidePacket(n,e)})}addUintToInputSidePacket(n,t){Ct(this,t,e=>{this.i._addUintToInputSidePacket(n,e)})}addStringToInputSidePacket(n,t){Ct(this,t,e=>{Ct(this,n,i=>{this.i._addStringToInputSidePacket(i,e)})})}addProtoToInputSidePacket(n,t,e){Ct(this,e,i=>{Ct(this,t,s=>{const r=this.i._malloc(n.length);this.i.HEAPU8.set(n,r),this.i._addProtoToInputSidePacket(r,n.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(n,t){Ct(this,t,e=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,e)})}addDoubleVectorToInputSidePacket(n,t){Ct(this,t,e=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,e)})}addFloatVectorToInputSidePacket(n,t){Ct(this,t,e=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,e)})}addIntVectorToInputSidePacket(n,t){Ct(this,t,e=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,e)})}addUintVectorToInputSidePacket(n,t){Ct(this,t,e=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,e)})}addStringVectorToInputSidePacket(n,t){Ct(this,t,e=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Ct(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,e)})}attachBoolListener(n,t){mi(this,n,t),Ct(this,n,e=>{this.i._attachBoolListener(e)})}attachBoolVectorListener(n,t){ls(this,n,t),Ct(this,n,e=>{this.i._attachBoolVectorListener(e)})}attachIntListener(n,t){mi(this,n,t),Ct(this,n,e=>{this.i._attachIntListener(e)})}attachIntVectorListener(n,t){ls(this,n,t),Ct(this,n,e=>{this.i._attachIntVectorListener(e)})}attachUintListener(n,t){mi(this,n,t),Ct(this,n,e=>{this.i._attachUintListener(e)})}attachUintVectorListener(n,t){ls(this,n,t),Ct(this,n,e=>{this.i._attachUintVectorListener(e)})}attachDoubleListener(n,t){mi(this,n,t),Ct(this,n,e=>{this.i._attachDoubleListener(e)})}attachDoubleVectorListener(n,t){ls(this,n,t),Ct(this,n,e=>{this.i._attachDoubleVectorListener(e)})}attachFloatListener(n,t){mi(this,n,t),Ct(this,n,e=>{this.i._attachFloatListener(e)})}attachFloatVectorListener(n,t){ls(this,n,t),Ct(this,n,e=>{this.i._attachFloatVectorListener(e)})}attachStringListener(n,t){mi(this,n,t),Ct(this,n,e=>{this.i._attachStringListener(e)})}attachStringVectorListener(n,t){ls(this,n,t),Ct(this,n,e=>{this.i._attachStringVectorListener(e)})}attachProtoListener(n,t,e){mi(this,n,t),Ct(this,n,i=>{this.i._attachProtoListener(i,e||!1)})}attachProtoVectorListener(n,t,e){ls(this,n,t),Ct(this,n,i=>{this.i._attachProtoVectorListener(i,e||!1)})}attachAudioListener(n,t,e){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),mi(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)}),Ct(this,n,i=>{this.i._attachAudioListener(i,e||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends yp{get ea(){return this.i}qa(n,t,e){Ct(this,t,i=>{const[s,r]=dp(this,n,i);this.ea._addBoundTextureAsImageToStream(i,s,r,e)})}U(n,t){mi(this,n,t),Ct(this,n,e=>{this.ea._attachImageListener(e)})}ca(n,t){ls(this,n,t),Ct(this,n,e=>{this.ea._attachImageVectorListener(e)})}}));var yp,Jn=class extends WS{};async function Kt(n,t,e){return async function(i,s,r,o){return HS(i,s,r,o)}(n,e.canvas??(S0()?void 0:document.createElement("canvas")),t,e)}function C0(n,t,e,i){if(n.T){const r=new Zg;if(e!=null&&e.regionOfInterest){if(!n.pa)throw Error("This task doesn't support region-of-interest.");var s=e.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Tt(r,1,(s.left+s.right)/2),Tt(r,2,(s.top+s.bottom)/2),Tt(r,4,s.right-s.left),Tt(r,3,s.bottom-s.top)}else Tt(r,1,.5),Tt(r,2,.5),Tt(r,4,1),Tt(r,3,1);if(e!=null&&e.rotationDegrees){if((e==null?void 0:e.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Tt(r,5,-Math.PI*e.rotationDegrees/180),(e==null?void 0:e.rotationDegrees)%180!=0){const[o,a]=E0(t);e=Be(r,3)*a/o,s=Be(r,4)*o/a,Tt(r,4,e),Tt(r,3,s)}}n.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",n.T,i)}n.g.qa(t,n.aa,i??performance.now()),n.finishProcessing()}function Qn(n,t,e){var i;if((i=n.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");C0(n,t,e,n.B+1)}function Ci(n,t,e,i){var s;if(!((s=n.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");C0(n,t,e,i)}function Gr(n,t,e,i){var s=t.data;const r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return n=new Je([s],e,!1,n.g.i.canvas,n.O,r,t),i?n.clone():n}var Sn=class extends Fa{constructor(n,t,e,i){super(n),this.g=n,this.aa=t,this.T=e,this.pa=i,this.O=new sd}l(n,t=!0){if("runningMode"in n&&No(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,t)}close(){this.O.close(),super.close()}};Sn.prototype.close=Sn.prototype.close;var Gn=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Nt(n=this.h=new Cl,0,1,t=new Ae),Tt(this.h,2,.5),Tt(this.h,3,.3)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Tt(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Tt(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}D(n,t){return this.j={detections:[]},Qn(this,n,t),this.j}F(n,t,e){return this.j={detections:[]},Ci(this,n,e,t),this.j}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect_in"),se(n,"detections");const t=new Ln;ui(t,CS,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect_in"),Jt(e,"DETECTIONS:detections"),e.o(t),Un(n,e),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=Yg(r),this.j.detections.push(y0(i));mt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Gn.prototype.detectForVideo=Gn.prototype.F,Gn.prototype.detect=Gn.prototype.D,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=async function(n,t){return Kt(Gn,n,{baseOptions:{modelAssetPath:t}})},Gn.createFromModelBuffer=function(n,t){return Kt(Gn,n,{baseOptions:{modelAssetBuffer:t}})},Gn.createFromOptions=function(n,t){return Kt(Gn,n,t)};var od=pi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),ad=pi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ld=pi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),R0=pi([474,475],[475,476],[476,477],[477,474]),cd=pi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),hd=pi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),P0=pi([469,470],[470,471],[471,472],[472,469]),ud=pi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),I0=[...od,...ad,...ld,...cd,...hd,...ud],L0=pi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Mp(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var De=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Nt(n=this.h=new n0,0,1,t=new Ae),this.v=new e0,Nt(this.h,0,3,this.v),this.s=new Cl,Nt(this.h,0,2,this.s),Ai(this.s,4,1),Tt(this.s,2,.5),Tt(this.v,2,.5),Tt(this.h,4,.5)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return"numFaces"in n&&Ai(this.s,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Tt(this.s,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Tt(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Tt(this.v,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}D(n,t){return Mp(this),Qn(this,n,t),this.j}F(n,t,e){return Mp(this),Ci(this,n,e,t),this.j}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect"),se(n,"face_landmarks");const t=new Ln;ui(t,PS,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"NORM_LANDMARKS:face_landmarks"),e.o(t),Un(n,e),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(const r of i)i=Go(r),this.j.faceLandmarks.push(Rl(i));mt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{mt(this,i)}),this.outputFaceBlendshapes&&(se(n,"blendshapes"),Jt(e,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=Al(r),this.j.faceBlendshapes.push(td(i.g()??[]));mt(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{mt(this,i)})),this.outputFacialTransformationMatrixes&&(se(n,"face_geometry"),Jt(e,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=ee(RS(r),yS,2))&&this.j.facialTransformationMatrixes.push({rows:Yn(i,1)??0??0,columns:Yn(i,2)??0??0,data:Gs(i,3,xs,ks()).slice()??[]});mt(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{mt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};De.prototype.detectForVideo=De.prototype.F,De.prototype.detect=De.prototype.D,De.prototype.setOptions=De.prototype.o,De.createFromModelPath=function(n,t){return Kt(De,n,{baseOptions:{modelAssetPath:t}})},De.createFromModelBuffer=function(n,t){return Kt(De,n,{baseOptions:{modelAssetBuffer:t}})},De.createFromOptions=function(n,t){return Kt(De,n,t)},De.FACE_LANDMARKS_LIPS=od,De.FACE_LANDMARKS_LEFT_EYE=ad,De.FACE_LANDMARKS_LEFT_EYEBROW=ld,De.FACE_LANDMARKS_LEFT_IRIS=R0,De.FACE_LANDMARKS_RIGHT_EYE=cd,De.FACE_LANDMARKS_RIGHT_EYEBROW=hd,De.FACE_LANDMARKS_RIGHT_IRIS=P0,De.FACE_LANDMARKS_FACE_OVAL=ud,De.FACE_LANDMARKS_CONTOURS=I0,De.FACE_LANDMARKS_TESSELATION=L0;var gi=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!0),Nt(n=this.j=new s0,0,1,t=new Ae)}get baseOptions(){return ee(this.j,Ae,1)}set baseOptions(n){Nt(this.j,0,1,n)}o(n){return super.l(n)}Oa(n,t,e){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:e,Qn(this,n,i??{}),!this.h)return this.s}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect"),se(n,"stylized_image");const t=new Ln;ui(t,IS,this.j);const e=new fn;Fn(e,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"STYLIZED_IMAGE:stylized_image"),e.o(t),Un(n,e),this.g.U("stylized_image",(i,s)=>{var r=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=o[3*h],c[4*h+1]=o[3*h+1],c[4*h+2]=o[3*h+2],c[4*h+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Qe([o],!1,!1,this.g.i.canvas,this.O,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),mt(this,s)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};gi.prototype.stylize=gi.prototype.Oa,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(n,t){return Kt(gi,n,{baseOptions:{modelAssetPath:t}})},gi.createFromModelBuffer=function(n,t){return Kt(gi,n,{baseOptions:{modelAssetBuffer:t}})},gi.createFromOptions=function(n,t){return Kt(gi,n,t)};var dd=pi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Sp(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Ep(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function wp(n,t=!0){const e=[];for(const s of n){var i=Al(s);n=[];for(const r of i.g())i=t&&Yn(r,1)!=null?Yn(r,1)??0:-1,n.push({score:Be(r,2)??0,index:i,categoryName:Kn(r,3)??""??"",displayName:Kn(r,4)??""??""});e.push(n)}return e}var An=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Nt(n=this.j=new a0,0,1,t=new Ae),this.s=new Ku,Nt(this.j,0,2,this.s),this.C=new $u,Nt(this.s,0,3,this.C),this.v=new o0,Nt(this.s,0,2,this.v),this.h=new LS,Nt(this.j,0,3,this.h),Tt(this.v,2,.5),Tt(this.s,4,.5),Tt(this.C,2,.5)}get baseOptions(){return ee(this.j,Ae,1)}set baseOptions(n){Nt(this.j,0,1,n)}o(n){var s,r,o,a;if(Ai(this.v,3,n.numHands??1),"minHandDetectionConfidence"in n&&Tt(this.v,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Tt(this.s,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Tt(this.C,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var t=new cr,e=t,i=Fh(n.cannedGesturesClassifierOptions,(s=ee(this.h,cr,3))==null?void 0:s.h());Nt(e,0,2,i),Nt(this.h,0,3,t)}else n.cannedGesturesClassifierOptions===void 0&&((r=ee(this.h,cr,3))==null||r.g());return n.customGesturesClassifierOptions?(Nt(e=t=new cr,0,2,i=Fh(n.customGesturesClassifierOptions,(o=ee(this.h,cr,4))==null?void 0:o.h())),Nt(this.h,0,4,t)):n.customGesturesClassifierOptions===void 0&&((a=ee(this.h,cr,4))==null||a.g()),this.l(n)}Ja(n,t){return Sp(this),Qn(this,n,t),Ep(this)}Ka(n,t,e){return Sp(this),Ci(this,n,e,t),Ep(this)}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect"),se(n,"hand_gestures"),se(n,"hand_landmarks"),se(n,"world_hand_landmarks"),se(n,"handedness");const t=new Ln;ui(t,DS,this.j);const e=new fn;Fn(e,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"HAND_GESTURES:hand_gestures"),Jt(e,"LANDMARKS:hand_landmarks"),Jt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Jt(e,"HANDEDNESS:handedness"),e.o(t),Un(n,e),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i){i=Go(r);const o=[];for(const a of Qi(i,Kg,1))o.push({x:Be(a,1)??0,y:Be(a,2)??0,z:Be(a,3)??0,visibility:Be(a,4)??0});this.landmarks.push(o)}mt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i){i=wr(r);const o=[];for(const a of Qi(i,$g,1))o.push({x:Be(a,1)??0,y:Be(a,2)??0,z:Be(a,3)??0,visibility:Be(a,4)??0});this.worldLandmarks.push(o)}mt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...wp(i,!1)),mt(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{mt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...wp(i)),mt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function bp(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}An.prototype.recognizeForVideo=An.prototype.Ka,An.prototype.recognize=An.prototype.Ja,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(n,t){return Kt(An,n,{baseOptions:{modelAssetPath:t}})},An.createFromModelBuffer=function(n,t){return Kt(An,n,{baseOptions:{modelAssetBuffer:t}})},An.createFromOptions=function(n,t){return Kt(An,n,t)},An.HAND_CONNECTIONS=dd;var xn=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Nt(n=this.h=new Ku,0,1,t=new Ae),this.s=new $u,Nt(this.h,0,3,this.s),this.j=new o0,Nt(this.h,0,2,this.j),Ai(this.j,3,1),Tt(this.j,2,.5),Tt(this.s,2,.5),Tt(this.h,4,.5)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return"numHands"in n&&Ai(this.j,3,n.numHands??1),"minHandDetectionConfidence"in n&&Tt(this.j,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Tt(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Tt(this.s,2,n.minHandPresenceConfidence??.5),this.l(n)}D(n,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Qn(this,n,t),bp(this)}F(n,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ci(this,n,e,t),bp(this)}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect"),se(n,"hand_landmarks"),se(n,"world_hand_landmarks"),se(n,"handedness");const t=new Ln;ui(t,NS,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"LANDMARKS:hand_landmarks"),Jt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Jt(e,"HANDEDNESS:handedness"),e.o(t),Un(n,e),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i)i=Go(r),this.landmarks.push(Rl(i));mt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i)i=wr(r),this.worldLandmarks.push(wo(i));mt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const l of i){i=Al(l);const c=[];for(const h of i.g())c.push({score:Be(h,2)??0,index:Yn(h,1)??0??-1,categoryName:Kn(h,3)??""??"",displayName:Kn(h,4)??""??""});a.push(c)}o.call(r,...a),mt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};xn.prototype.detectForVideo=xn.prototype.F,xn.prototype.detect=xn.prototype.D,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(n,t){return Kt(xn,n,{baseOptions:{modelAssetPath:t}})},xn.createFromModelBuffer=function(n,t){return Kt(xn,n,{baseOptions:{modelAssetBuffer:t}})},xn.createFromOptions=function(n,t){return Kt(xn,n,t)},xn.HAND_CONNECTIONS=dd;var D0=pi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Tp(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ap(n){try{if(!n.C)return n.h;n.C(n.h)}finally{Il(n)}}function xa(n,t){n=Go(n),t.push(Rl(n))}var be=class extends Sn{constructor(n,t){super(new Jn(n,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Nt(n=this.j=new d0,0,1,t=new Ae),this.J=new $u,Nt(this.j,0,2,this.J),this.Z=new FS,Nt(this.j,0,3,this.Z),this.s=new Cl,Nt(this.j,0,4,this.s),this.H=new e0,Nt(this.j,0,5,this.H),this.v=new h0,Nt(this.j,0,6,this.v),this.K=new u0,Nt(this.j,0,7,this.K),Tt(this.s,2,.5),Tt(this.s,3,.3),Tt(this.H,2,.5),Tt(this.v,2,.5),Tt(this.v,3,.3),Tt(this.K,2,.5),Tt(this.J,2,.5)}get baseOptions(){return ee(this.j,Ae,1)}set baseOptions(n){Nt(this.j,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&Tt(this.s,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Tt(this.s,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Tt(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Tt(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Tt(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Tt(this.K,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Tt(this.J,2,n.minHandLandmarksConfidence??.5),this.l(n)}D(n,t,e){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:e,Tp(this),Qn(this,n,i),Ap(this)}F(n,t,e,i){const s=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:i,Tp(this),Ci(this,n,s,t),Ap(this)}m(){var n=new En;Ee(n,"input_frames_image"),se(n,"pose_landmarks"),se(n,"pose_world_landmarks"),se(n,"face_landmarks"),se(n,"left_hand_landmarks"),se(n,"left_hand_world_landmarks"),se(n,"right_hand_landmarks"),se(n,"right_hand_world_landmarks");const t=new Ln,e=new Kf;Rh(e,1,Kr("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(s,r){if(r!=null)if(Array.isArray(r))ve(s,2,og(r));else{if(!(typeof r=="string"||r instanceof $i||Oo(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Rh(s,2,fu(r,!1),qs())}}(e,this.j.g());const i=new fn;Fn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Ja(i,8,Kf,e),ye(i,"IMAGE:input_frames_image"),Jt(i,"POSE_LANDMARKS:pose_landmarks"),Jt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Jt(i,"FACE_LANDMARKS:face_landmarks"),Jt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Jt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Jt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Jt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Un(n,i),Pl(this,n),this.g.attachProtoListener("pose_landmarks",(s,r)=>{xa(s,this.h.poseLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var o=this.h.poseWorldLandmarks;s=wr(s),o.push(wo(s)),mt(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{mt(this,s)}),this.outputPoseSegmentationMasks&&(Jt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Br(this,"pose_segmentation_mask"),this.g.U("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[Gr(this,s,!0,!this.C)],mt(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],mt(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{xa(s,this.h.faceLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{mt(this,s)}),this.outputFaceBlendshapes&&(se(n,"extra_blendshapes"),Jt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Al(s),o.push(td(s.g()??[]))),mt(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{mt(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{xa(s,this.h.leftHandLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var o=this.h.leftHandWorldLandmarks;s=wr(s),o.push(wo(s)),mt(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{xa(s,this.h.rightHandLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var o=this.h.rightHandWorldLandmarks;s=wr(s),o.push(wo(s)),mt(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{mt(this,s)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};be.prototype.detectForVideo=be.prototype.F,be.prototype.detect=be.prototype.D,be.prototype.setOptions=be.prototype.o,be.createFromModelPath=function(n,t){return Kt(be,n,{baseOptions:{modelAssetPath:t}})},be.createFromModelBuffer=function(n,t){return Kt(be,n,{baseOptions:{modelAssetBuffer:t}})},be.createFromOptions=function(n,t){return Kt(be,n,t)},be.HAND_CONNECTIONS=dd,be.POSE_CONNECTIONS=D0,be.FACE_LANDMARKS_LIPS=od,be.FACE_LANDMARKS_LEFT_EYE=ad,be.FACE_LANDMARKS_LEFT_EYEBROW=ld,be.FACE_LANDMARKS_LEFT_IRIS=R0,be.FACE_LANDMARKS_RIGHT_EYE=cd,be.FACE_LANDMARKS_RIGHT_EYEBROW=hd,be.FACE_LANDMARKS_RIGHT_IRIS=P0,be.FACE_LANDMARKS_FACE_OVAL=ud,be.FACE_LANDMARKS_CONTOURS=I0,be.FACE_LANDMARKS_TESSELATION=L0;var Hn=class extends Sn{constructor(n,t){super(new Jn(n,t),"input_image","norm_rect",!0),this.j={classifications:[]},Nt(n=this.h=new f0,0,1,t=new Ae)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return Nt(this.h,0,2,Fh(n,ee(this.h,qu,2))),this.l(n)}sa(n,t){return this.j={classifications:[]},Qn(this,n,t),this.j}ta(n,t,e){return this.j={classifications:[]},Ci(this,n,e,t),this.j}m(){var n=new En;Ee(n,"input_image"),Ee(n,"norm_rect"),se(n,"classifications");const t=new Ln;ui(t,US,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ye(e,"IMAGE:input_image"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"CLASSIFICATIONS:classifications"),e.o(t),Un(n,e),this.g.attachProtoListener("classifications",(i,s)=>{this.j=function(r){const o={classifications:Qi(r,SS,1).map(a=>{var l;return td(((l=ee(a,qg,4))==null?void 0:l.g())??[],Yn(a,2)??0,Kn(a,3)??"")})};return Za(Ur(r,2))!=null&&(o.timestampMs=Za(Ur(r,2))??0),o}(ES(i)),mt(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Hn.prototype.classifyForVideo=Hn.prototype.ta,Hn.prototype.classify=Hn.prototype.sa,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=function(n,t){return Kt(Hn,n,{baseOptions:{modelAssetPath:t}})},Hn.createFromModelBuffer=function(n,t){return Kt(Hn,n,{baseOptions:{modelAssetBuffer:t}})},Hn.createFromOptions=function(n,t){return Kt(Hn,n,t)};var Cn=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!0),this.h=new p0,this.embeddings={embeddings:[]},Nt(n=this.h,0,1,t=new Ae)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){var t=this.h,e=ee(this.h,rp,2);return e=e?e.clone():new rp,n.l2Normalize!==void 0?No(e,1,n.l2Normalize):"l2Normalize"in n&&ve(e,1),n.quantize!==void 0?No(e,2,n.quantize):"quantize"in n&&ve(e,2),Nt(t,0,2,e),this.l(n)}za(n,t){return Qn(this,n,t),this.embeddings}Aa(n,t,e){return Ci(this,n,e,t),this.embeddings}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect"),se(n,"embeddings_out");const t=new Ln;ui(t,OS,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"EMBEDDINGS:embeddings_out"),e.o(t),Un(n,e),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=TS(i),this.embeddings=function(r){return{embeddings:Qi(r,bS,1).map(o=>{var l,c;const a={headIndex:Yn(o,3)??0??-1,headName:Kn(o,4)??""??""};if(ug(o,sp,wc(o,1))!==void 0)o=Gs(o=ee(o,sp,wc(o,1)),1,xs,ks()),a.floatEmbedding=o.slice();else{const h=new Uint8Array(0);a.quantizedEmbedding=((c=(l=ee(o,wS,wc(o,2)))==null?void 0:l.oa())==null?void 0:c.h())??h}return a}),timestampMs:Za(Ur(r,2))??0}}(i),mt(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Cn.cosineSimilarity=function(n,t){if(n.floatEmbedding&&t.floatEmbedding)n=hp(n.floatEmbedding,t.floatEmbedding);else{if(!n.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=hp(cp(n.quantizedEmbedding),cp(t.quantizedEmbedding))}return n},Cn.prototype.embedForVideo=Cn.prototype.Aa,Cn.prototype.embed=Cn.prototype.za,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(n,t){return Kt(Cn,n,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(n,t){return Kt(Cn,n,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(n,t){return Kt(Cn,n,t)};var Bh=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){var n,t;(n=this.confidenceMasks)==null||n.forEach(e=>{e.close()}),(t=this.categoryMask)==null||t.close()}};function Cp(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Rp(n){try{const t=new Bh(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return t;n.j(t)}finally{Il(n)}}Bh.prototype.close=Bh.prototype.close;var _n=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Qu,this.v=new m0,Nt(this.h,0,3,this.v),Nt(n=this.h,0,1,t=new Ae)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?ve(this.h,2,Kr(n.displayNamesLocale)):"displayNamesLocale"in n&&ve(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}I(){(function(n){var e,i;const t=Qi(n.da(),fn,1).filter(s=>(Kn(s,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(e=ee(t[0],Ln,7))==null?void 0:e.l())==null?void 0:i.g())??new Map).forEach((s,r)=>{n.s[Number(r)]=Kn(s,1)??""})})(this)}segment(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,Cp(this),Qn(this,n,i),Rp(this)}Ma(n,t,e,i){const s=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,Cp(this),Ci(this,n,s,t),Rp(this)}Da(){return this.s}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect");const t=new Ln;ui(t,_0,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),e.o(t),Un(n,e),Pl(this,n),this.outputConfidenceMasks&&(se(n,"confidence_masks"),Jt(e,"CONFIDENCE_MASKS:confidence_masks"),Br(this,"confidence_masks"),this.g.ca("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Gr(this,r,!0,!this.j)),mt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],mt(this,i)})),this.outputCategoryMask&&(se(n,"category_mask"),Jt(e,"CATEGORY_MASK:category_mask"),Br(this,"category_mask"),this.g.U("category_mask",(i,s)=>{this.categoryMask=Gr(this,i,!1,!this.j),mt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,mt(this,i)})),se(n,"quality_scores"),Jt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,mt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_n.prototype.getLabels=_n.prototype.Da,_n.prototype.segmentForVideo=_n.prototype.Ma,_n.prototype.segment=_n.prototype.segment,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(n,t){return Kt(_n,n,{baseOptions:{modelAssetPath:t}})},_n.createFromModelBuffer=function(n,t){return Kt(_n,n,{baseOptions:{modelAssetBuffer:t}})},_n.createFromOptions=function(n,t){return Kt(_n,n,t)};var zh=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){var n,t;(n=this.confidenceMasks)==null||n.forEach(e=>{e.close()}),(t=this.categoryMask)==null||t.close()}};zh.prototype.close=zh.prototype.close;var XS=class extends St{constructor(n){super(n)}},hr=[0,Ue,-2],nl=[0,ki,-3,Te,ki,-1],Pp=[0,nl],Ip=[0,nl,Ue,-1],Pc=class extends St{constructor(n){super(n)}},Lp=[0,ki,-1,Te],qS=class extends St{constructor(n){super(n)}},Dp=class extends St{constructor(n){super(n)}},kh=[1,2,3,4,5,6,7,8,9,10,14,15],N0=class extends St{constructor(n){super(n)}};N0.prototype.g=Tl([0,Ye,[0,kh,pe,nl,pe,[0,nl,hr],pe,Pp,pe,[0,Pp,hr],pe,Lp,pe,[0,ki,-3,Te,Zn],pe,[0,ki,-3,Te],pe,[0,he,ki,-2,Te,Ue,Te,-1,2,ki,hr],pe,Ip,pe,[0,Ip,hr],ki,hr,he,pe,[0,ki,-3,Te,hr,-1],pe,[0,Ye,Lp]],he,[0,he,Ue,-1,Te]]);var _i=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Qu,this.s=new m0,Nt(this.h,0,3,this.s),Nt(n=this.h,0,1,t=new Ae)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}segment(n,t,e,i){const s=typeof e!="function"?e:{};this.j=typeof e=="function"?e:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.B+1,i=new N0;const r=new Dp;var o=new XS;if(Ai(o,1,255),Nt(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new Pc;No(a,3,!0),Tt(a,1,t.keypoint.x),Tt(a,2,t.keypoint.y),So(r,5,kh,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new qS,t.scribble))No(t=new Pc,3,!0),Tt(t,1,a.x),Tt(t,2,a.y),Ja(o,1,Pc,t);So(r,15,kh,o)}Ja(i,1,Dp,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",e),Qn(this,n,s);t:{try{const c=new zh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break t}this.j(c)}finally{Il(this)}l=void 0}return l}m(){var n=new En;Ee(n,"image_in"),Ee(n,"roi_in"),Ee(n,"norm_rect_in");const t=new Ln;ui(t,_0,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ye(e,"IMAGE:image_in"),ye(e,"ROI:roi_in"),ye(e,"NORM_RECT:norm_rect_in"),e.o(t),Un(n,e),Pl(this,n),this.outputConfidenceMasks&&(se(n,"confidence_masks"),Jt(e,"CONFIDENCE_MASKS:confidence_masks"),Br(this,"confidence_masks"),this.g.ca("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Gr(this,r,!0,!this.j)),mt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],mt(this,i)})),this.outputCategoryMask&&(se(n,"category_mask"),Jt(e,"CATEGORY_MASK:category_mask"),Br(this,"category_mask"),this.g.U("category_mask",(i,s)=>{this.categoryMask=Gr(this,i,!1,!this.j),mt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,mt(this,i)})),se(n,"quality_scores"),Jt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,mt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_i.prototype.segment=_i.prototype.segment,_i.prototype.setOptions=_i.prototype.o,_i.createFromModelPath=function(n,t){return Kt(_i,n,{baseOptions:{modelAssetPath:t}})},_i.createFromModelBuffer=function(n,t){return Kt(_i,n,{baseOptions:{modelAssetBuffer:t}})},_i.createFromOptions=function(n,t){return Kt(_i,n,t)};var Vn=class extends Sn{constructor(n,t){super(new Jn(n,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Nt(n=this.h=new v0,0,1,t=new Ae)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?ve(this.h,2,Kr(n.displayNamesLocale)):"displayNamesLocale"in n&&ve(this.h,2),n.maxResults!==void 0?Ai(this.h,3,n.maxResults):"maxResults"in n&&ve(this.h,3),n.scoreThreshold!==void 0?Tt(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&ve(this.h,4),n.categoryAllowlist!==void 0?Qa(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&ve(this.h,5),n.categoryDenylist!==void 0?Qa(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&ve(this.h,6),this.l(n)}D(n,t){return this.j={detections:[]},Qn(this,n,t),this.j}F(n,t,e){return this.j={detections:[]},Ci(this,n,e,t),this.j}m(){var n=new En;Ee(n,"input_frame_gpu"),Ee(n,"norm_rect"),se(n,"detections");const t=new Ln;ui(t,zS,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.ObjectDetectorGraph"),ye(e,"IMAGE:input_frame_gpu"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"DETECTIONS:detections"),e.o(t),Un(n,e),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=Yg(r),this.j.detections.push(y0(i));mt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{mt(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Vn.prototype.detectForVideo=Vn.prototype.F,Vn.prototype.detect=Vn.prototype.D,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=async function(n,t){return Kt(Vn,n,{baseOptions:{modelAssetPath:t}})},Vn.createFromModelBuffer=function(n,t){return Kt(Vn,n,{baseOptions:{modelAssetBuffer:t}})},Vn.createFromOptions=function(n,t){return Kt(Vn,n,t)};var Gh=class{constructor(n,t,e){this.landmarks=n,this.worldLandmarks=t,this.segmentationMasks=e}close(){var n;(n=this.segmentationMasks)==null||n.forEach(t=>{t.close()})}};function Np(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function Fp(n){try{const t=new Gh(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.s)return t;n.s(t)}finally{Il(n)}}Gh.prototype.close=Gh.prototype.close;var Rn=class extends Sn{constructor(n,t){super(new Jn(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Nt(n=this.h=new x0,0,1,t=new Ae),this.v=new u0,Nt(this.h,0,3,this.v),this.j=new h0,Nt(this.h,0,2,this.j),Ai(this.j,4,1),Tt(this.j,2,.5),Tt(this.v,2,.5),Tt(this.h,4,.5)}get baseOptions(){return ee(this.h,Ae,1)}set baseOptions(n){Nt(this.h,0,1,n)}o(n){return"numPoses"in n&&Ai(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Tt(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Tt(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Tt(this.v,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}D(n,t,e){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:e,Np(this),Qn(this,n,i),Fp(this)}F(n,t,e,i){const s=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:i,Np(this),Ci(this,n,s,t),Fp(this)}m(){var n=new En;Ee(n,"image_in"),Ee(n,"norm_rect"),se(n,"normalized_landmarks"),se(n,"world_landmarks"),se(n,"segmentation_masks");const t=new Ln;ui(t,kS,this.h);const e=new fn;Fn(e,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Jt(e,"NORM_LANDMARKS:normalized_landmarks"),Jt(e,"WORLD_LANDMARKS:world_landmarks"),e.o(t),Un(n,e),Pl(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(const r of i)i=Go(r),this.landmarks.push(Rl(i));mt(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],mt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(const r of i)i=wr(r),this.worldLandmarks.push(wo(i));mt(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],mt(this,i)}),this.outputSegmentationMasks&&(Jt(e,"SEGMENTATION_MASK:segmentation_masks"),Br(this,"segmentation_masks"),this.g.ca("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Gr(this,r,!0,!this.s)),mt(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],mt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Rn.prototype.detectForVideo=Rn.prototype.F,Rn.prototype.detect=Rn.prototype.D,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(n,t){return Kt(Rn,n,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(n,t){return Kt(Rn,n,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(n,t){return Kt(Rn,n,t)},Rn.POSE_CONNECTIONS=D0;class jS{constructor(t){ct(this,"_handLandmarker",null);ct(this,"_videoElement");ct(this,"_visionFilesetResolver",null);ct(this,"isInitialized",!1);ct(this,"lastResults",null);ct(this,"_lastVideoTime",-1);ct(this,"_onResultsCallback",null);if(!t)throw new Error("HandTrackingController: HTMLVideoElement is required.");this._videoElement=t}async initialize(t="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task"){if(this.isInitialized){console.warn("HandTrackingController is already initialized.");return}console.log("Initializing HandTrackingController...");try{this._visionFilesetResolver=await Ds.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),this._handLandmarker=await xn.createFromOptions(this._visionFilesetResolver,{baseOptions:{modelAssetPath:t,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),this.isInitialized=!0,console.log("HandTrackingController initialized successfully with HandLandmarker.")}catch(e){throw console.error("Failed to initialize HandLandmarker:",e),this.isInitialized=!1,new Error(`Failed to initialize HandLandmarker: ${e.message||e}`)}}detectHands(){if(!this.isInitialized||!this._handLandmarker)return;const t=this._videoElement;if(t.readyState<t.HAVE_CURRENT_DATA||t.paused||t.ended)return;const e=performance.now();if(t.currentTime!==this._lastVideoTime){this._lastVideoTime=t.currentTime;try{this.lastResults=this._handLandmarker.detectForVideo(t,e),this._onResultsCallback&&this.lastResults&&this.lastResults.landmarks.length>0&&this._onResultsCallback(this.lastResults)}catch(i){console.error("Error during hand detection:",i)}}}setOnResultsCallback(t){this._onResultsCallback=t}getLatestResults(){return this.lastResults}async dispose(){if(console.log("Disposing HandTrackingController..."),this._handLandmarker)try{await this._handLandmarker.close(),this._handLandmarker=null,console.log("HandLandmarker closed successfully.")}catch(t){console.error("Error closing HandLandmarker:",t)}this.isInitialized=!1,this.lastResults=null,this._onResultsCallback=null,this._visionFilesetResolver=null}}const YS=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[0,17],[13,17],[17,18],[18,19],[19,20]];function $S(n,t,e={}){const{color:i="white",radius:s=3,lineWidth:r=2,fill:o=!0}=e;if(t){n.fillStyle=i,n.strokeStyle=i,n.lineWidth=r;for(const a of t)n.beginPath(),n.arc(a.x*n.canvas.width,a.y*n.canvas.height,s,0,2*Math.PI),o?n.fill():n.stroke()}}function KS(n,t,e,i={}){const{color:s="white",lineWidth:r=2}=i;if(!(!t||!e)){n.strokeStyle=s,n.lineWidth=r;for(const o of e){const a=t[o[0]],l=t[o[1]];a&&l&&(n.beginPath(),n.moveTo(a.x*n.canvas.width,a.y*n.canvas.height),n.lineTo(l.x*n.canvas.width,l.y*n.canvas.height),n.stroke())}}}class ZS{constructor(t){ct(this,"canvas");ct(this,"ctx");if(this.canvas=document.getElementById(t),!this.canvas)throw new Error(`HandDebugRenderer: Canvas with ID "${t}" not found.`);if(this.ctx=this.canvas.getContext("2d"),!this.ctx)throw new Error(`HandDebugRenderer: Could not get 2D context from canvas "${t}".`);this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}drawHands(t){if(!t||!t.landmarks||t.landmarks.length===0){this.clear();return}this.clear();for(let e=0;e<t.landmarks.length;e++){const i=t.landmarks[e],s=t.handedness&&t.handedness[e]&&t.handedness[e][0]?t.handedness[e][0].categoryName:"Unknown",r=i.map(l=>({x:1-l.x,y:l.y,z:l.z,visibility:l.visibility})),o=s==="Left"?"rgba(255, 0, 0, 0.8)":"rgba(0, 0, 255, 0.8)",a=s==="Left"?"rgba(255, 100, 100, 0.9)":"rgba(100, 100, 255, 0.9)";if(KS(this.ctx,r,YS,{color:o,lineWidth:3}),$S(this.ctx,r,{color:a,radius:4,lineWidth:2,fill:!0}),r[0]){this.ctx.fillStyle=o,this.ctx.font="bold 14px Arial";const l=r[0].x*this.canvas.width,c=r[0].y*this.canvas.height+15;this.ctx.textBaseline="top",s==="Left"?(this.ctx.textAlign="left",this.ctx.fillText(s,l+5,c-7)):(this.ctx.textAlign="right",this.ctx.fillText(s,l-5,c-7))}}}resize(t,e){this.canvas.width=t,this.canvas.height=e}}class li{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const i=this.elements,s=t.x,r=t.y,o=t.z;return e.x=i[0]*s+i[1]*r+i[2]*o,e.y=i[3]*s+i[4]*r+i[5]*o,e.z=i[6]*s+i[7]*r+i[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new li);const i=this.elements,s=t.elements,r=e.elements,o=i[0],a=i[1],l=i[2],c=i[3],h=i[4],d=i[5],u=i[6],p=i[7],g=i[8],_=s[0],m=s[1],f=s[2],v=s[3],E=s[4],y=s[5],A=s[6],T=s[7],C=s[8];return r[0]=o*_+a*v+l*A,r[1]=o*m+a*E+l*T,r[2]=o*f+a*y+l*C,r[3]=c*_+h*v+d*A,r[4]=c*m+h*E+d*T,r[5]=c*f+h*y+d*C,r[6]=u*_+p*v+g*A,r[7]=u*m+p*E+g*T,r[8]=u*f+p*y+g*C,e}scale(t,e){e===void 0&&(e=new li);const i=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*i[3*r+0],s[3*r+1]=t.y*i[3*r+1],s[3*r+2]=t.z*i[3*r+2];return e}solve(t,e){e===void 0&&(e=new M);const i=3,s=4,r=[];let o,a;for(o=0;o<i*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const p=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*p;while(--h)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let i=0;i<9;i++)t+=this.elements[i]+e;return t}reverse(t){t===void 0&&(t=new li);const e=3,i=6,s=JS;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const h=i;let d;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){c=h;do d=h-c,s[d+i*r]+=s[d+i*o];while(--c);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const u=s[r+i*o]/s[r+i*r];c=h;do d=h-c,s[d+i*o]=d<=r?0:s[d+i*o]-s[d+i*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=s[r+i*o]/s[r+i*r];c=i;do d=i-c,s[d+i*o]=s[d+i*o]-s[d+i*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/s[r+i*r];c=i;do d=i-c,s[d+i*r]=s[d+i*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[e+o+i*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,r=t.w,o=e+e,a=i+i,l=s+s,c=e*o,h=e*a,d=e*l,u=i*a,p=i*l,g=s*l,_=r*o,m=r*a,f=r*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-f,v[3*0+2]=d+m,v[3*1+0]=h+f,v[3*1+1]=1-(c+g),v[3*1+2]=p-_,v[3*2+0]=d-m,v[3*2+1]=p+_,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new li);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const JS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new M);const i=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*i-o*r,e.z=o*s-a*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new li([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new M);const e=this.x,i=this.y,s=this.z;let r=Math.sqrt(e*e+i*i+s*s);return r>0?(r=1/r,t.x=e*r,t.y=i*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-i)*(o-i)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-i)*(o-i)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new M);const i=this.x,s=this.y,r=this.z;return e.x=t*i,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new M),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=QS,r=1/i;s.set(this.x*r,this.y*r,this.z*r);const o=tE;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,r=this.y,o=this.z;i.x=s+(t.x-s)*e,i.y=r+(t.y-r)*e,i.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Up),Up.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const QS=new M,tE=new M,Up=new M;class On{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const r=this.lowerBound,o=this.upperBound,a=i;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Op),c=Op),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new On().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=i.x&&i.x<=r.x||e.x<=r.x&&r.x<=i.x,a=s.y<=i.y&&i.y<=r.y||e.y<=r.y&&r.y<=i.y,l=s.z<=i.z&&i.z<=r.z||e.z<=r.z&&r.z<=i.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&i.x>=r.x&&e.y<=s.y&&i.y>=r.y&&e.z<=s.z&&i.z>=r.z}getCorners(t,e,i,s,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const i=Bp,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=i[u];t.pointToLocal(p,p)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=Bp,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=i[u];t.pointToWorld(p,p)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*r,h=(this.upperBound.y-i.y)*r,d=(this.lowerBound.z-i.z)*o,u=(this.upperBound.z-i.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const Op=new M,Bp=[new M,new M,new M,new M,new M,new M,new M,new M];class zp{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class F0{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,r=i.length;s<r;s++)i[s].call(this,t)}return this}}class He{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=eE,s=nE;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new He);const i=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=i*h+o*a+s*c-r*l,e.y=s*h+o*l+r*a-i*c,e.z=r*h+o*c+i*l-s*a,e.w=o*h-i*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new He);const e=this.x,i=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+i*i+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new He),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const i=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*i+a*r-l*s,d=c*s+l*i-o*r,u=c*r+o*s-a*i,p=-o*i-a*s-l*r;return e.x=h*c+p*-o+d*-l-u*-a,e.y=d*c+p*-a+u*-o-h*-l,e.z=u*c+p*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(i=2*Math.atan2(o,c),s=Math.PI/2,r=0),h<-.499&&(i=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),i===void 0){const d=o*o,u=a*a,p=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*u-2*p),s=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=r}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(i/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(i/2);return s==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):s==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new He(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new He);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,p,g,_,m;return p=s*l+r*c+o*h+a*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),_=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(_=1-e,m=e),i.x=_*s+m*l,i.y=_*r+m*c,i.z=_*o+m*h,i.w=_*a+m*d,i}integrate(t,e,i,s){s===void 0&&(s=new He);const r=t.x*i.x,o=t.y*i.y,a=t.z*i.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(r*d+o*h-a*c),s.y+=u*(o*d+a*l-r*h),s.z+=u*(a*d+r*c-o*l),s.w+=u*(-r*l-o*c-a*h),s}}const eE=new M,nE=new M,iE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=iE;class le{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new He,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return le.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return le.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new M),i.vsub(t,s),e.conjugate(kp),kp.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new M),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new M),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new M),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const kp=new He;class br extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new M;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let h=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(s)||i[d].almostEquals(s)){h=!0;break}h||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],r=this.vertices[i[1]],o=this.vertices[i[2]];br.computeNormal(s,r,o,e)}static computeNormal(t,e,i,s){const r=new M,o=new M;e.vsub(t,o),i.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,r,o,a,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){h.copy(i.faceNormals[g]),r.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const p=[];for(let g=0;g<i.faces[d].length;g++){const _=i.vertices[i.faces[d][g]],m=new M;m.copy(_),r.vmult(m,m),s.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,i,s,r,o,a,l){const c=new M,h=new M,d=new M,u=new M,p=new M,g=new M;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){i.vmult(m.uniqueAxes[f],c);const v=m.testSepAxis(c,t,e,i,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const f=a?a.length:m.faces.length;for(let v=0;v<f;v++){const E=a?a[v]:v;c.copy(m.faceNormals[E]),i.vmult(c,c);const y=m.testSepAxis(c,t,e,i,s,r);if(y===!1)return!1;y<_&&(_=y,o.copy(c))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){r.vmult(t.uniqueAxes[f],h);const v=m.testSepAxis(h,t,e,i,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const f=l?l.length:t.faces.length;for(let v=0;v<f;v++){const E=l?l[v]:v;h.copy(t.faceNormals[E]),r.vmult(h,h);const y=m.testSepAxis(h,t,e,i,s,r);if(y===!1)return!1;y<_&&(_=y,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){i.vmult(m.uniqueEdges[f],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],p),u.cross(p,g),!g.almostZero()){g.normalize();const E=m.testSepAxis(g,t,e,i,s,r);if(E===!1)return!1;E<_&&(_=E,o.copy(g))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,i,s,r,o){const a=this;br.project(a,t,i,s,Ic),br.project(e,t,r,o,Lc);const l=Ic[0],c=Ic[1],h=Lc[0],d=Lc[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(t,e){const i=new M,s=new M;this.computeLocalAABB(s,i);const r=i.x-s.x,o=i.y-s.y,a=i.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,r,o,a){const l=new M,c=new M,h=new M,d=new M,u=new M,p=new M,g=new M,_=new M,m=this,f=[],v=s,E=f;let y=-1,A=Number.MAX_VALUE;for(let x=0;x<m.faces.length;x++){l.copy(m.faceNormals[x]),i.vmult(l,l);const P=l.dot(t);P<A&&(A=P,y=x)}if(y<0)return;const T=m.faces[y];T.connectedFaces=[];for(let x=0;x<m.faces.length;x++)for(let P=0;P<m.faces[x].length;P++)T.indexOf(m.faces[x][P])!==-1&&x!==y&&T.connectedFaces.indexOf(x)===-1&&T.connectedFaces.push(x);const C=T.length;for(let x=0;x<C;x++){const P=m.vertices[T[x]],k=m.vertices[T[(x+1)%C]];P.vsub(k,c),h.copy(c),i.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),i.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(P),i.vmult(p,p),e.vadd(p,p);const I=T.connectedFaces[x];g.copy(this.faceNormals[I]);const U=this.getPlaneConstantOfFace(I);_.copy(g),i.vmult(_,_);const B=U-_.dot(e);for(this.clipFaceAgainstPlane(v,E,_,B);v.length;)v.shift();for(;E.length;)v.push(E.shift())}g.copy(this.faceNormals[y]);const L=this.getPlaneConstantOfFace(y);_.copy(g),i.vmult(_,_);const w=L-_.dot(e);for(let x=0;x<v.length;x++){let P=_.dot(v[x])+w;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){const k=v[x];if(P<=1e-6){const I={point:k,normal:_,depth:P};a.push(I)}}}}clipFaceAgainstPlane(t,e,i,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=i.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],o=i.dot(c)+s,r<0)if(o<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new M;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const i=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(i[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=i[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const i=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(i[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const r=this.vertices;let o,a,l,c,h,d,u=new M;for(let p=0;p<r.length;p++){u.copy(r[p]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}i.set(o,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<i;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<i;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[i[o][0]],c=new M;t.vsub(l,c);const h=a.dot(c),d=new M;r.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,i,s,r){const o=t.vertices.length,a=sE;let l=0,c=0;const h=rE,d=t.vertices;h.setZero(),le.vectorToLocalFrame(i,s,e,a),le.pointToLocalFrame(i,s,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let p=1;p<o;p++){const g=d[p].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}r[0]=l,r[1]=c}}const Ic=[],Lc=[];new M;const sE=new M,rE=new M;class Fl extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=M,r=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new br({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Fl.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==i.length;r++)e.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)cs.set(r[o][0],r[o][1],r[o][2]),e.vmult(cs,cs),t.vadd(cs,cs),i(cs.x,cs.y,cs.z)}calculateWorldAABB(t,e,i,s){const r=this.halfExtents;vi[0].set(r.x,r.y,r.z),vi[1].set(-r.x,r.y,r.z),vi[2].set(-r.x,-r.y,r.z),vi[3].set(-r.x,-r.y,-r.z),vi[4].set(r.x,-r.y,-r.z),vi[5].set(r.x,r.y,-r.z),vi[6].set(-r.x,r.y,-r.z),vi[7].set(r.x,-r.y,r.z);const o=vi[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=vi[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<i.x&&(i.x=c),h<i.y&&(i.y=h),d<i.z&&(i.z=d)}}}const cs=new M,vi=[new M,new M,new M,new M,new M,new M,new M,new M],fd={DYNAMIC:1,STATIC:2,KINEMATIC:4},pd={AWAKE:0,SLEEPY:1,SLEEPING:2};class ft extends F0{constructor(t){t===void 0&&(t={}),super(),this.id=ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ft.STATIC:ft.DYNAMIC,typeof t.type==typeof ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new He,this.initQuaternion=new He,this.previousQuaternion=new He,this.interpolatedQuaternion=new He,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new li,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new li,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new On,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ft.SLEEPING&&this.dispatchEvent(ft.wakeupEvent)}sleep(){this.sleepState=ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===ft.AWAKE&&i<s?(this.sleepState=ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ft.sleepyEvent)):e===ft.SLEEPY&&i>s?this.wakeUp():e===ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ft.SLEEPING||this.type===ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new M,r=new He;return e&&s.copy(e),i&&r.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let r=0;r!==i;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,r=oE,o=aE,a=this.quaternion,l=this.aabb,c=lE;for(let h=0;h!==s;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(i[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=cE,s=hE;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const i=uE;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;const i=dE,s=fE;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===ft.DYNAMIC&&(this.sleepState===ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const i=e,s=pE;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=mE;i.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;const i=gE,s=_E;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=vE;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Fl.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new M;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ft.DYNAMIC||this.type===ft.KINEMATIC)||this.sleepState===ft.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;s.x+=a.x*p*u.x,s.y+=a.y*p*u.y,s.z+=a.z*p*u.z;const g=d.elements,_=this.angularFactor,m=l.x*_.x,f=l.y*_.y,v=l.z*_.z;r.x+=t*(g[0]*m+g[1]*f+g[2]*v),r.y+=t*(g[3]*m+g[4]*f+g[5]*v),r.z+=t*(g[6]*m+g[7]*f+g[8]*v),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ft.idCounter=0;ft.COLLIDE_EVENT_NAME="collide";ft.DYNAMIC=fd.DYNAMIC;ft.STATIC=fd.STATIC;ft.KINEMATIC=fd.KINEMATIC;ft.AWAKE=pd.AWAKE;ft.SLEEPY=pd.SLEEPY;ft.SLEEPING=pd.SLEEPING;ft.wakeupEvent={type:"wakeup"};ft.sleepyEvent={type:"sleepy"};ft.sleepEvent={type:"sleep"};const oE=new M,aE=new He,lE=new On,cE=new li,hE=new li;new li;const uE=new M,dE=new M,fE=new M,pE=new M,mE=new M,gE=new M,_E=new M,vE=new M;class U0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&ft.STATIC)!==0||t.sleepState===ft.SLEEPING)&&((e.type&ft.STATIC)!==0||e.sleepState===ft.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const r=xE;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=yE,s=ME,r=SE,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=a,i.keys.push(h)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];t.push(s[c]),e.push(r[c]),delete i[l]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new M;t.position.vsub(e.position,i);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const xE=new M;new M;new He;new M;const yE={keys:[]},ME=[],SE=[];new M;new M;new M;class EE extends U0{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&i.push(r)}return i}}class il{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let O0,B0,z0,k0,G0,H0,V0;const md={CLOSEST:1,ANY:2,ALL:4};O0=vt.types.SPHERE;B0=vt.types.PLANE;z0=vt.types.BOX;k0=vt.types.CYLINDER;G0=vt.types.CONVEXPOLYHEDRON;H0=vt.types.HEIGHTFIELD;V0=vt.types.TRIMESH;class Ge{get[O0](){return this._intersectSphere}get[B0](){return this._intersectPlane}get[z0](){return this._intersectBox}get[k0](){return this._intersectConvex}get[G0](){return this._intersectConvex}get[H0](){return this._intersectHeightfield}get[V0](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ge.ANY,this.result=new il,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||Ge.ANY,this.result=e.result||new il,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Gp),Dc.length=0,t.broadphase.aabbQuery(t,Gp,Dc),this.intersectBodies(Dc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const s=wE,r=bE;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(i&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const r=this.from;if(zE(r,this.direction,i)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,r)}_intersectPlane(t,e,i,s,r){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(i,h);const d=h.dot(c);a.vsub(i,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new M,_=new M,m=new M;o.vsub(i,g);const f=-c.dot(g)/p;l.scale(f,_),o.vadd(_,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),i.x=Math.max(s.x,r.x),i.y=Math.max(s.y,r.y),i.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,i,s,r){t.data,t.elementSize;const o=TE;o.from.copy(this.from),o.to.copy(this.to),le.pointToLocalFrame(i,e,o.from,o.from),le.pointToLocalFrame(i,e,o.to,o.to),o.updateDirection();const a=AE;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new On;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=l;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),le.pointToWorldFrame(i,e,t.pillarOffset,ya),this._intersectConvex(t.pillarConvex,e,ya,s,r,Hp),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),le.pointToWorldFrame(i,e,t.pillarOffset,ya),this._intersectConvex(t.pillarConvex,e,ya,s,r,Hp)}}}_intersectSphere(t,e,i,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),d=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,u=h**2-4*c*d,p=CE,g=RE;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,s,-1);else{const _=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(i,g),g.normalize(),this.reportIntersection(g,p,r,s,-1))}}_intersectConvex(t,e,i,s,r,o){const a=PE,l=Vp,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),f=c?c.length:h.length,v=this.result;for(let E=0;!v.shouldStop&&E<f;E++){const y=c?c[E]:E,A=h[y],T=u[y],C=e,L=i;l.copy(d[A[0]]),C.vmult(l,l),l.vadd(L,l),l.vsub(g,l),C.vmult(T,a);const w=p.dot(a);if(Math.abs(w)<this.precision)continue;const x=a.dot(l)/w;if(!(x<0)){p.scale(x,vn),vn.vadd(g,vn),ri.copy(d[A[0]]),C.vmult(ri,ri),L.vadd(ri,ri);for(let P=1;!v.shouldStop&&P<A.length-1;P++){xi.copy(d[A[P]]),yi.copy(d[A[P+1]]),C.vmult(xi,xi),C.vmult(yi,yi),L.vadd(xi,xi),L.vadd(yi,yi);const k=vn.distanceTo(g);!(Ge.pointInTriangle(vn,ri,xi,yi)||Ge.pointInTriangle(vn,xi,ri,yi))||k>m||this.reportIntersection(a,vn,r,s,y)}}}}_intersectTrimesh(t,e,i,s,r,o){const a=IE,l=OE,c=BE,h=Vp,d=LE,u=DE,p=NE,g=UE,_=FE,m=t.indices;t.vertices;const f=this.from,v=this.to,E=this.direction;c.position.copy(i),c.quaternion.copy(e),le.vectorToLocalFrame(i,e,E,d),le.pointToLocalFrame(i,e,f,u),le.pointToLocalFrame(i,e,v,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const y=u.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let A=0,T=l.length;!this.result.shouldStop&&A!==T;A++){const C=l[A];t.getNormal(C,a),t.getVertex(m[C*3],ri),ri.vsub(u,h);const L=d.dot(a),w=a.dot(h)/L;if(w<0)continue;d.scale(w,vn),vn.vadd(u,vn),t.getVertex(m[C*3+1],xi),t.getVertex(m[C*3+2],yi);const x=vn.distanceSquared(u);!(Ge.pointInTriangle(vn,xi,ri,yi)||Ge.pointInTriangle(vn,ri,xi,yi))||x>y||(le.vectorToWorldFrame(e,a,_),le.pointToWorldFrame(i,e,vn,g),this.reportIntersection(_,g,r,s,C))}l.length=0}reportIntersection(t,e,i,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ge.ALL:this.hasHit=!0,c.set(o,a,t,e,i,s,l),c.hasHit=!0,this.callback(c);break;case Ge.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,i,s,l));break;case Ge.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,Us),i.vsub(e,uo),t.vsub(e,Nc);const r=Us.dot(Us),o=Us.dot(uo),a=Us.dot(Nc),l=uo.dot(uo),c=uo.dot(Nc);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}Ge.CLOSEST=md.CLOSEST;Ge.ANY=md.ANY;Ge.ALL=md.ALL;const Gp=new On,Dc=[],uo=new M,Nc=new M,wE=new M,bE=new He,vn=new M,ri=new M,xi=new M,yi=new M;new M;new il;const Hp={faceList:[0]},ya=new M,TE=new Ge,AE=[],CE=new M,RE=new M,PE=new M;new M;new M;const Vp=new M,IE=new M,LE=new M,DE=new M,NE=new M,FE=new M,UE=new M;new On;const OE=[],BE=new le,Us=new M,Ma=new M;function zE(n,t,e){e.vsub(n,Us);const i=Us.dot(t);return t.scale(i,Ma),Ma.vadd(n,Ma),e.distanceTo(Ma)}class gr extends U0{static checkBounds(t,e,i){let s,r;i===0?(s=t.position.x,r=e.position.x):i===1?(s=t.position.y,r=e.position.y):i===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,i=t.length;e<i;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=i=>{e.push(i.body)},this._removeBodyHandler=i=>{const s=e.indexOf(i.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,i){const s=this.axisList,r=s.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=s[a];for(l=a+1;l<r;l++){const h=s[l];if(this.needBroadphaseCollision(c,h)){if(!gr.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,i)}}}}sortList(){const t=this.axisList,e=this.axisIndex,i=t.length;for(let s=0;s!==i;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?gr.insertionSortX(t):e===1?gr.insertionSortY(t):e===2&&gr.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,i=0,s=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let p=0;p!==l;p++){const g=a[p],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;i+=m,s+=m*m;const f=g.position.z;r+=f,o+=f*f}const h=e-t*t*c,d=s-i*i*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&i.push(l)}return i}}class W0{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class Ul{constructor(t,e,i){i===void 0&&(i={}),i=W0.defaults(i,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=Ul.idCounter++,this.collideConnected=i.collideConnected,i.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}}Ul.idCounter=0;class Wp{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ho{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=Ho.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Wp,this.jacobianElementB=new Wp,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,r=t,o=i;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.velocity,o=s.velocity,a=i.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.vlambda,o=s.vlambda,a=i.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.force,o=i.torque,a=s.force,l=s.torque,c=i.invMassSolve,h=s.invMassSolve;return r.scale(c,Xp),a.scale(h,qp),i.invInertiaWorldSolve.vmult(o,jp),s.invInertiaWorldSolve.vmult(l,Yp),t.multiplyVectors(Xp,jp)+e.multiplyVectors(qp,Yp)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.invMassSolve,o=s.invMassSolve,a=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,Sa),c+=Sa.dot(t.rotational),l.vmult(e.rotational,Sa),c+=Sa.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,r=this.bj,o=kE;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,i.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ho.idCounter=0;const Xp=new M,qp=new M,jp=new M,Yp=new M,Sa=new M,kE=new M;class Ba extends Ho{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,i=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=GE,c=HE,h=s.velocity,d=s.angularVelocity;s.force,s.torque;const u=r.velocity,p=r.angularVelocity;r.force,r.torque;const g=VE,_=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const v=f.dot(g),E=this.restitution+1,y=E*u.dot(f)-E*h.dot(f)+p.dot(c)-d.dot(l),A=this.computeGiMf();return-v*e-y*i-t*A}getImpactVelocityAlongNormal(){const t=WE,e=XE,i=qE,s=jE,r=YE;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const GE=new M,HE=new M,VE=new M,WE=new M,XE=new M,qE=new M,jE=new M,YE=new M;class $p extends Ul{constructor(t,e,i,s,r){e===void 0&&(e=new M),s===void 0&&(s=new M),r===void 0&&(r=1e6),super(t,i),this.pivotA=e.clone(),this.pivotB=s.clone();const o=this.equationX=new Ba(t,i),a=this.equationY=new Ba(t,i),l=this.equationZ=new Ba(t,i);this.equations.push(o,a,l),o.minForce=a.minForce=l.minForce=-r,o.maxForce=a.maxForce=l.maxForce=r,o.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){const t=this.bodyA,e=this.bodyB,i=this.equationX,s=this.equationY,r=this.equationZ;t.quaternion.vmult(this.pivotA,i.ri),e.quaternion.vmult(this.pivotB,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj)}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Kp extends Ho{constructor(t,e,i){super(t,e,-i,i),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,r=$E,o=KE,a=this.t;i.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const $E=new M,KE=new M;class Vo{constructor(t,e,i){i=W0.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Vo.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}Vo.idCounter=0;class Vs{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Vs.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Vs.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ge;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Hh extends vt{constructor(t){if(super({type:vt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const i=2*t*this.radius*this.radius/5;return e.x=i,e.y=i,e.z=i,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,i,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];i[l]=t[l]-r,s[l]=t[l]+r}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class Vh extends br{constructor(t,e,i,s){if(t===void 0&&(t=1),e===void 0&&(e=1),i===void 0&&(i=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=s,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-e*u(0),-i*.5,e*d(0))),c.push(0),o.push(new M(-t*u(0),i*.5,t*d(0))),h.push(1);for(let g=0;g<r;g++){const _=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new M(-e*u(_),-i*.5,e*d(_))),c.push(2*g+2),o.push(new M(-t*u(_),i*.5,t*d(_))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new M(-u(m),0,d(m)))}l.push(c),a.push(new M(0,1,0));const p=[];for(let g=0;g<h.length;g++)p.push(h[h.length-g-1]);l.push(p),super({vertices:o,faces:l,axes:a}),this.type=vt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=i,this.numSegments=s}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new On;new M;new On;new M;new M;new M;new M;new M;new M;new M;new On;new M;new le;new On;class ZE{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class JE extends ZE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,p,g,_,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const f=t3,v=e3,E=QE;f.length=a,v.length=a,E.length=a;for(let y=0;y!==a;y++){const A=o[y];E[y]=0,v[y]=A.computeB(h),f[y]=1/A.computeC()}if(a!==0){for(let T=0;T!==c;T++){const C=l[T],L=C.vlambda,w=C.wlambda;L.set(0,0,0),w.set(0,0,0)}for(i=0;i!==s;i++){g=0;for(let T=0;T!==a;T++){const C=o[T];d=v[T],u=f[T],m=E[T],_=C.computeGWlambda(),p=u*(d-_-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),E[T]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<r)break}for(let T=0;T!==c;T++){const C=l[T],L=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),L.vadd(C.vlambda,L),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let y=o.length;const A=1/h;for(;y--;)o[y].multiplier=E[y]*A}return i}}const QE=[],t3=[],e3=[];class n3{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class i3 extends n3{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Se={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class s3{get[Se.sphereSphere](){return this.sphereSphere}get[Se.spherePlane](){return this.spherePlane}get[Se.boxBox](){return this.boxBox}get[Se.sphereBox](){return this.sphereBox}get[Se.planeBox](){return this.planeBox}get[Se.convexConvex](){return this.convexConvex}get[Se.sphereConvex](){return this.sphereConvex}get[Se.planeConvex](){return this.planeConvex}get[Se.boxConvex](){return this.boxConvex}get[Se.sphereHeightfield](){return this.sphereHeightfield}get[Se.boxHeightfield](){return this.boxHeightfield}get[Se.convexHeightfield](){return this.convexHeightfield}get[Se.sphereParticle](){return this.sphereParticle}get[Se.planeParticle](){return this.planeParticle}get[Se.boxParticle](){return this.boxParticle}get[Se.convexParticle](){return this.convexParticle}get[Se.cylinderCylinder](){return this.convexConvex}get[Se.sphereCylinder](){return this.sphereConvex}get[Se.planeCylinder](){return this.planeConvex}get[Se.boxCylinder](){return this.boxConvex}get[Se.convexCylinder](){return this.convexConvex}get[Se.heightfieldCylinder](){return this.heightfieldCylinder}get[Se.particleCylinder](){return this.particleCylinder}get[Se.sphereTrimesh](){return this.sphereTrimesh}get[Se.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new i3,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Ba(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||i,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||i.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let p=i.invMass+s.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new Kp(i,s,u*p),m=g.length?g.pop():new Kp(i,s,u*p);return _.bi=m.bi=i,_.bj=m.bj=s,_.minForce=m.minForce=-u*p,_.maxForce=m.maxForce=u*p,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ps.setZero(),ur.setZero(),dr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Ps.vadd(e.ni,Ps),ur.vadd(e.ri,ur),dr.vadd(e.rj,dr)):(Ps.vsub(e.ni,Ps),ur.vadd(e.rj,ur),dr.vadd(e.ri,dr));const o=1/t;ur.scale(o,i.ri),dr.scale(o,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),Ps.normalize(),Ps.tangents(i.t,s.t)}getContacts(t,e,i,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=a3,c=l3,h=r3,d=o3;for(let u=0,p=t.length;u!==p;u++){const g=t[u],_=e[u];let m=null;g.material&&_.material&&(m=i.getContactMaterial(g.material,_.material)||null);const f=g.type&ft.KINEMATIC&&_.type&ft.STATIC||g.type&ft.STATIC&&_.type&ft.KINEMATIC||g.type&ft.KINEMATIC&&_.type&ft.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const E=g.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],c),_.quaternion.vmult(_.shapeOffsets[y],d),d.vadd(_.position,d);const A=_.shapes[y];if(!(E.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&E.collisionFilterGroup)||h.distanceTo(d)>E.boundingSphereRadius+A.boundingSphereRadius)continue;let T=null;E.material&&A.material&&(T=i.getContactMaterial(E.material,A.material)||null),this.currentContactMaterial=T||m||i.defaultContactMaterial;const C=E.type|A.type,L=this[C];if(L){let w=!1;E.type<A.type?w=L.call(this,E,A,h,d,l,c,g,_,E,A,f):w=L.call(this,A,E,d,h,c,l,_,g,E,A,f),w&&f&&(i.shapeOverlapKeeper.set(E.id,A.id),i.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,i,s,r,o,a,l,c,h,d){if(d)return i.distanceSquared(s)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);s.vsub(i,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(i,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,i,s,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),i.vsub(s,Ea),u.ni.scale(u.ni.dot(Ea),Zp),Ea.vsub(Zp,u.rj),-Ea.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(i,p),p.vsub(a.position,p),g.vadd(s,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,i,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,r,o,a,l,t,e,d)}sphereBox(t,e,i,s,r,o,a,l,c,h,d){const u=this.v3pool,p=N3;i.vsub(s,wa),e.getSideNormals(p,o);const g=t.radius;let _=!1;const m=U3,f=O3,v=B3;let E=null,y=0,A=0,T=0,C=null;for(let N=0,j=p.length;N!==j&&_===!1;N++){const H=I3;H.copy(p[N]);const Z=H.length();H.normalize();const rt=wa.dot(H);if(rt<Z+g&&rt>0){const pt=L3,it=D3;pt.copy(p[(N+1)%3]),it.copy(p[(N+2)%3]);const Qt=pt.length(),Y=it.length();pt.normalize(),it.normalize();const st=wa.dot(pt),Et=wa.dot(it);if(st<Qt&&st>-Qt&&Et<Y&&Et>-Y){const ht=Math.abs(rt-Z-g);if((C===null||ht<C)&&(C=ht,A=st,T=Et,E=Z,m.copy(H),f.copy(pt),v.copy(it),y++,d))return!0}}}if(y){_=!0;const N=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(E,m),f.scale(A,f),m.vadd(f,m),v.scale(T,v),m.vadd(v,N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(s,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let L=u.get();const w=F3;for(let N=0;N!==2&&!_;N++)for(let j=0;j!==2&&!_;j++)for(let H=0;H!==2&&!_;H++)if(L.set(0,0,0),N?L.vadd(p[0],L):L.vsub(p[0],L),j?L.vadd(p[1],L):L.vsub(p[1],L),H?L.vadd(p[2],L):L.vsub(p[2],L),s.vadd(L,w),w.vsub(i,w),w.lengthSquared()<g*g){if(d)return!0;_=!0;const Z=this.createContactEquation(a,l,t,e,c,h);Z.ri.copy(w),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(L),Z.ri.vadd(i,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(s,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(L),L=null;const x=u.get(),P=u.get(),k=u.get(),I=u.get(),U=u.get(),B=p.length;for(let N=0;N!==B&&!_;N++)for(let j=0;j!==B&&!_;j++)if(N%3!==j%3){p[j].cross(p[N],x),x.normalize(),p[N].vadd(p[j],P),k.copy(i),k.vsub(P,k),k.vsub(s,k);const H=k.dot(x);x.scale(H,I);let Z=0;for(;Z===N%3||Z===j%3;)Z++;U.copy(i),U.vsub(I,U),U.vsub(P,U),U.vsub(s,U);const rt=Math.abs(H),pt=U.length();if(rt<p[Z].length()&&pt<g){if(d)return!0;_=!0;const it=this.createContactEquation(a,l,t,e,c,h);P.vadd(I,it.rj),it.rj.copy(it.rj),U.negate(it.ni),it.ni.normalize(),it.ri.copy(it.rj),it.ri.vadd(s,it.ri),it.ri.vsub(i,it.ri),it.ri.normalize(),it.ri.scale(g,it.ri),it.ri.vadd(i,it.ri),it.ri.vsub(a.position,it.ri),it.rj.vadd(s,it.rj),it.rj.vsub(l.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}}u.release(x,P,k,I,U)}planeBox(t,e,i,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,r,o,a,l,t,e,d)}convexConvex(t,e,i,s,r,o,a,l,c,h,d,u,p){const g=Q3;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,r,s,o,g,u,p)){const _=[],m=tw;t.clipAgainstHull(i,r,e,s,o,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const E=this.createContactEquation(a,l,t,e,c,h),y=E.ri,A=E.rj;g.negate(E.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,y),A.copy(_[v].point),y.vsub(i,y),A.vsub(s,A),y.vadd(i,y),y.vsub(a.position,y),A.vadd(s,A),A.vsub(l.position,A),this.result.push(E),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(E,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,i,s,r,o,a,l,c,h,d){const u=this.v3pool;i.vsub(s,z3);const p=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let f=!1;for(let v=0;v!==_.length;v++){const E=_[v],y=V3;o.vmult(E,y),s.vadd(y,y);const A=H3;if(y.vsub(i,A),A.lengthSquared()<m*m){if(d)return!0;f=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(A),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),y.vsub(s,T.rj),T.ri.vadd(i,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,E=g.length;v!==E&&f===!1;v++){const y=p[v],A=g[v],T=W3;o.vmult(y,T);const C=X3;o.vmult(_[A[0]],C),C.vadd(s,C);const L=q3;T.scale(-m,L),i.vadd(L,L);const w=j3;L.vsub(C,w);const x=w.dot(T),P=Y3;if(i.vsub(C,P),x<0&&P.dot(T)>0){const k=[];for(let I=0,U=A.length;I!==U;I++){const B=u.get();o.vmult(_[A[I]],B),s.vadd(B,B),k.push(B)}if(P3(k,T,i)){if(d)return!0;f=!0;const I=this.createContactEquation(a,l,t,e,c,h);T.scale(-m,I.ri),T.negate(I.ni);const U=u.get();T.scale(-x,U);const B=u.get();T.scale(-m,B),i.vsub(s,I.rj),I.rj.vadd(B,I.rj),I.rj.vadd(U,I.rj),I.rj.vadd(s,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(a.position,I.ri),u.release(U),u.release(B),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let N=0,j=k.length;N!==j;N++)u.release(k[N]);return}else for(let I=0;I!==A.length;I++){const U=u.get(),B=u.get();o.vmult(_[A[(I+1)%A.length]],U),o.vmult(_[A[(I+2)%A.length]],B),s.vadd(U,U),s.vadd(B,B);const N=k3;B.vsub(U,N);const j=G3;N.unit(j);const H=u.get(),Z=u.get();i.vsub(U,Z);const rt=Z.dot(j);j.scale(rt,H),H.vadd(U,H);const pt=u.get();if(H.vsub(i,pt),rt>0&&rt*rt<N.lengthSquared()&&pt.lengthSquared()<m*m){if(d)return!0;const it=this.createContactEquation(a,l,t,e,c,h);H.vsub(s,it.rj),H.vsub(i,it.ni),it.ni.normalize(),it.ni.scale(m,it.ri),it.rj.vadd(s,it.rj),it.rj.vsub(l.position,it.rj),it.ri.vadd(i,it.ri),it.ri.vsub(a.position,it.ri),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult);for(let Qt=0,Y=k.length;Qt!==Y;Qt++)u.release(k[Qt]);u.release(U),u.release(B),u.release(H),u.release(pt),u.release(Z);return}u.release(U),u.release(B),u.release(H),u.release(pt),u.release(Z)}for(let I=0,U=k.length;I!==U;I++)u.release(k[I])}}}planeConvex(t,e,i,s,r,o,a,l,c,h,d){const u=$3,p=K3;p.set(0,0,1),r.vmult(p,p);let g=0;const _=Z3;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(i,_),p.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),E=J3;p.scale(p.dot(_),E),u.vsub(E,E),E.vsub(i,v.ri),v.ni.copy(p),u.vsub(s,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,i,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,r,o,a,l,t,e,d)}sphereHeightfield(t,e,i,s,r,o,a,l,c,h,d){const u=e.data,p=t.radius,g=e.elementSize,_=dw,m=uw;le.pointToLocalFrame(s,o,i,m);let f=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,E=Math.floor((m.y-p)/g)-1,y=Math.ceil((m.y+p)/g)+1;if(v<0||y<0||f>u.length||E>u[0].length)return;f<0&&(f=0),v<0&&(v=0),E<0&&(E=0),y<0&&(y=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),E>=u[0].length&&(E=u[0].length-1);const A=[];e.getRectMinMax(f,E,v,y,A);const T=A[0],C=A[1];if(m.z-p>C||m.z+p<T)return;const L=this.result;for(let w=f;w<v;w++)for(let x=E;x<y;x++){const P=L.length;let k=!1;if(e.getConvexTrianglePillar(w,x,!1),le.pointToWorldFrame(s,o,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,i,_,r,o,a,l,t,e,d)),d&&k||(e.getConvexTrianglePillar(w,x,!0),le.pointToWorldFrame(s,o,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,i,_,r,o,a,l,t,e,d)),d&&k))return!0;if(L.length-P>2)return}}boxHeightfield(t,e,i,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,r,o,a,l,t,e,d)}convexHeightfield(t,e,i,s,r,o,a,l,c,h,d){const u=e.data,p=e.elementSize,g=t.boundingSphereRadius,_=cw,m=hw,f=lw;le.pointToLocalFrame(s,o,i,f);let v=Math.floor((f.x-g)/p)-1,E=Math.ceil((f.x+g)/p)+1,y=Math.floor((f.y-g)/p)-1,A=Math.ceil((f.y+g)/p)+1;if(E<0||A<0||v>u.length||y>u[0].length)return;v<0&&(v=0),E<0&&(E=0),y<0&&(y=0),A<0&&(A=0),v>=u.length&&(v=u.length-1),E>=u.length&&(E=u.length-1),A>=u[0].length&&(A=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const T=[];e.getRectMinMax(v,y,E,A,T);const C=T[0],L=T[1];if(!(f.z-g>L||f.z+g<C))for(let w=v;w<E;w++)for(let x=y;x<A;x++){let P=!1;if(e.getConvexTrianglePillar(w,x,!1),le.pointToWorldFrame(s,o,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,i,_,r,o,a,l,null,null,d,m,null)),d&&P||(e.getConvexTrianglePillar(w,x,!0),le.pointToWorldFrame(s,o,e.pillarOffset,_),i.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,i,_,r,o,a,l,null,null,d,m,null)),d&&P))return!0}}sphereParticle(t,e,i,s,r,o,a,l,c,h,d){const u=sw;if(u.set(0,0,1),s.vsub(i,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,i,s,r,o,a,l,c,h,d){const u=ew;u.set(0,0,1),a.quaternion.vmult(u,u);const p=nw;if(s.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=iw;u.scale(u.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,i,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,r,o,a,l,t,e,d)}convexParticle(t,e,i,s,r,o,a,l,c,h,d){let u=-1;const p=ow,g=aw;let _=null;const m=rw;if(m.copy(s),m.vsub(i,m),r.conjugate(Jp),Jp.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let f=0,v=t.faces.length;f!==v;f++){const E=[t.worldVertices[t.faces[f][0]]],y=t.worldFaceNormals[f];s.vsub(E[0],Qp);const A=-y.dot(Qp);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,u=f,p.copy(y)}}if(u!==-1){const f=this.createContactEquation(l,a,e,t,c,h);p.scale(_,g),g.vadd(s,g),g.vsub(i,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,E=f.rj;v.vadd(s,v),v.vsub(l.position,v),E.vadd(i,E),E.vsub(a.position,E),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,s,i,o,r,l,a,c,h,d)}particleCylinder(t,e,i,s,r,o,a,l,c,h,d){return this.convexParticle(e,t,s,i,o,r,l,a,c,h,d)}sphereTrimesh(t,e,i,s,r,o,a,l,c,h,d){const u=g3,p=_3,g=v3,_=x3,m=y3,f=M3,v=b3,E=m3,y=f3,A=T3;le.pointToLocalFrame(s,o,i,m);const T=t.radius;v.lowerBound.set(m.x-T,m.y-T,m.z-T),v.upperBound.set(m.x+T,m.y+T,m.z+T),e.getTrianglesInAABB(v,A);const C=p3,L=t.radius*t.radius;for(let I=0;I<A.length;I++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[A[I]*3+U],C),C.vsub(m,y),y.lengthSquared()<=L){if(E.copy(C),le.pointToWorldFrame(s,o,E,C),C.vsub(i,y),d)return!0;let B=this.createContactEquation(a,l,t,e,c,h);B.ni.copy(y),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(i,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(C),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let I=0;I<A.length;I++)for(let U=0;U<3;U++){e.getVertex(e.indices[A[I]*3+U],u),e.getVertex(e.indices[A[I]*3+(U+1)%3],p),p.vsub(u,g),m.vsub(p,f);const B=f.dot(g);m.vsub(u,f);let N=f.dot(g);if(N>0&&B<0&&(m.vsub(u,f),_.copy(g),_.normalize(),N=f.dot(_),_.scale(N,f),f.vadd(u,f),f.distanceTo(m)<t.radius)){if(d)return!0;const H=this.createContactEquation(a,l,t,e,c,h);f.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(i,H.ri),H.ri.vsub(a.position,H.ri),le.pointToWorldFrame(s,o,f,f),f.vsub(l.position,H.rj),le.vectorToWorldFrame(o,H.ni,H.ni),le.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const w=S3,x=E3,P=w3,k=d3;for(let I=0,U=A.length;I!==U;I++){e.getTriangleVertices(A[I],w,x,P),e.getNormal(A[I],k),m.vsub(w,f);let B=f.dot(k);if(k.scale(B,f),m.vsub(f,f),B=f.distanceTo(m),Ge.pointInTriangle(f,w,x,P)&&B<t.radius){if(d)return!0;let N=this.createContactEquation(a,l,t,e,c,h);f.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(i,N.ri),N.ri.vsub(a.position,N.ri),le.pointToWorldFrame(s,o,f,f),f.vsub(l.position,N.rj),le.vectorToWorldFrame(o,N.ni,N.ni),le.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}A.length=0}planeTrimesh(t,e,i,s,r,o,a,l,c,h,d){const u=new M,p=c3;p.set(0,0,1),r.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const _=new M;_.copy(u),le.pointToWorldFrame(s,o,_,u);const m=h3;if(u.vsub(i,m),p.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(p);const E=u3;p.scale(m.dot(p),E),u.vsub(E,E),v.ri.copy(E),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Ps=new M,ur=new M,dr=new M,r3=new M,o3=new M,a3=new He,l3=new He,c3=new M,h3=new M,u3=new M,d3=new M,f3=new M;new M;const p3=new M,m3=new M,g3=new M,_3=new M,v3=new M,x3=new M,y3=new M,M3=new M,S3=new M,E3=new M,w3=new M,b3=new On,T3=[],Ea=new M,Zp=new M,A3=new M,C3=new M,R3=new M;function P3(n,t,e){let i=null;const s=n.length;for(let r=0;r!==s;r++){const o=n[r],a=A3;n[(r+1)%s].vsub(o,a);const l=C3;a.cross(t,l);const c=R3;e.vsub(o,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const wa=new M,I3=new M,L3=new M,D3=new M,N3=[new M,new M,new M,new M,new M,new M],F3=new M,U3=new M,O3=new M,B3=new M,z3=new M,k3=new M,G3=new M,H3=new M,V3=new M,W3=new M,X3=new M,q3=new M,j3=new M,Y3=new M;new M;new M;const $3=new M,K3=new M,Z3=new M,J3=new M,Q3=new M,tw=new M,ew=new M,nw=new M,iw=new M,sw=new M,Jp=new He,rw=new M;new M;const ow=new M,Qp=new M,aw=new M,lw=new M,cw=new M,hw=[0],uw=new M,dw=new M;class tm{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let r=0;for(;i>s[r];)r++;if(i!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,r=i.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>s[a];)a++;c=h===s[a],c||em(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=s[l];for(;h>i[a];)a++;c=i[a]===h,c||em(e,h)}}}function em(n,t){n.push((t&4294901760)>>16,t&65535)}const Fc=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class fw{constructor(){this.data={keys:[]}}get(t,e){const i=Fc(t,e);return this.data[i]}set(t,e,i){const s=Fc(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=Fc(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class pw extends F0{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new EE,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new JE,this.constraints=[],this.narrowphase=new s3(this),this.collisionMatrix=new zp,this.collisionMatrixPrevious=new zp,this.bodyOverlapKeeper=new tm,this.shapeOverlapKeeper=new tm,this.contactmaterials=[],this.contactMaterialTable=new fw,this.defaultMaterial=new Vs("default"),this.defaultContactMaterial=new Vo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof il?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=Ge.ALL,i.from=t,i.to=e,i.callback=s,Uc.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=Ge.ANY,i.from=t,i.to=e,i.result=s,Uc.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=Ge.CLOSEST,i.from=t,i.to=e,i.result=s,Uc.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=je.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=je.now();let r=0;for(;this.accumulator>=t&&r<i&&(this.internalStep(t),this.accumulator-=t,r++,!(je.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=xw,s=yw,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=ft.DYNAMIC;let u=-1/0;const p=this.constraints,g=vw;l.length();const _=l.x,m=l.y,f=l.z;let v=0;for(c&&(u=je.now()),v=0;v!==r;v++){const I=o[v];if(I.type===d){const U=I.force,B=I.mass;U.x+=B*_,U.y+=B*m,U.z+=B*f}}for(let I=0,U=this.subsystems.length;I!==U;I++)this.subsystems[I].update();c&&(u=je.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(h.broadphase=je.now()-u);let E=p.length;for(v=0;v!==E;v++){const I=p[v];if(!I.collideConnected)for(let U=i.length-1;U>=0;U-=1)(I.bodyA===i[U]&&I.bodyB===s[U]||I.bodyB===i[U]&&I.bodyA===s[U])&&(i.splice(U,1),s.splice(U,1))}this.collisionMatrixTick(),c&&(u=je.now());const y=_w,A=e.length;for(v=0;v!==A;v++)y.push(e[v]);e.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=je.now()-u),c&&(u=je.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=e.length;for(let I=0;I!==C;I++){const U=e[I],B=U.bi,N=U.bj,j=U.si,H=U.sj;let Z;if(B.material&&N.material?Z=this.getContactMaterial(B.material,N.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,B.material&&N.material&&(B.material.friction>=0&&N.material.friction>=0&&B.material.friction*N.material.friction,B.material.restitution>=0&&N.material.restitution>=0&&(U.restitution=B.material.restitution*N.material.restitution)),a.addEquation(U),B.allowSleep&&B.type===ft.DYNAMIC&&B.sleepState===ft.SLEEPING&&N.sleepState===ft.AWAKE&&N.type!==ft.STATIC){const rt=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),pt=N.sleepSpeedLimit**2;rt>=pt*2&&(B.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ft.DYNAMIC&&N.sleepState===ft.SLEEPING&&B.sleepState===ft.AWAKE&&B.type!==ft.STATIC){const rt=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),pt=B.sleepSpeedLimit**2;rt>=pt*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,N,!0),this.collisionMatrixPrevious.get(B,N)||(fo.body=N,fo.contact=U,B.dispatchEvent(fo),fo.body=B,N.dispatchEvent(fo)),this.bodyOverlapKeeper.set(B.id,N.id),this.shapeOverlapKeeper.set(j.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=je.now()-u,u=je.now()),v=0;v!==r;v++){const I=o[v];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(E=p.length,v=0;v!==E;v++){const I=p[v];I.update();for(let U=0,B=I.equations.length;U!==B;U++){const N=I.equations[U];a.addEquation(N)}}a.solve(t,this),c&&(h.solve=je.now()-u),a.removeAllEquations();const L=Math.pow;for(v=0;v!==r;v++){const I=o[v];if(I.type&d){const U=L(1-I.linearDamping,t),B=I.velocity;B.scale(U,B);const N=I.angularVelocity;if(N){const j=L(1-I.angularDamping,t);N.scale(j,N)}}}this.dispatchEvent(gw),c&&(u=je.now());const x=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,x,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=je.now()-u),this.stepnumber+=1,this.dispatchEvent(mw);let k=!0;if(this.allowSleep)for(k=!1,v=0;v!==r;v++){const I=o[v];I.sleepTick(this.time),I.sleepState!==ft.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Fi,Ui),t){for(let r=0,o=Fi.length;r<o;r+=2)po.bodyA=this.getBodyById(Fi[r]),po.bodyB=this.getBodyById(Fi[r+1]),this.dispatchEvent(po);po.bodyA=po.bodyB=null}if(e){for(let r=0,o=Ui.length;r<o;r+=2)mo.bodyA=this.getBodyById(Ui[r]),mo.bodyB=this.getBodyById(Ui[r+1]),this.dispatchEvent(mo);mo.bodyA=mo.bodyB=null}Fi.length=Ui.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(Fi,Ui),i){for(let r=0,o=Fi.length;r<o;r+=2){const a=this.getShapeById(Fi[r]),l=this.getShapeById(Fi[r+1]);Oi.shapeA=a,Oi.shapeB=l,a&&(Oi.bodyA=a.body),l&&(Oi.bodyB=l.body),this.dispatchEvent(Oi)}Oi.bodyA=Oi.bodyB=Oi.shapeA=Oi.shapeB=null}if(s){for(let r=0,o=Ui.length;r<o;r+=2){const a=this.getShapeById(Ui[r]),l=this.getShapeById(Ui[r+1]);Bi.shapeA=a,Bi.shapeB=l,a&&(Bi.bodyA=a.body),l&&(Bi.bodyB=l.body),this.dispatchEvent(Bi)}Bi.bodyA=Bi.bodyB=Bi.shapeA=Bi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new On;const Uc=new Ge,je=globalThis.performance||{};if(!je.now){let n=Date.now();je.timing&&je.timing.navigationStart&&(n=je.timing.navigationStart),je.now=()=>Date.now()-n}new M;const mw={type:"postStep"},gw={type:"preStep"},fo={type:ft.COLLIDE_EVENT_NAME,body:null,contact:null},_w=[],vw=[],xw=[],yw=[],Fi=[],Ui=[],po={type:"beginContact",bodyA:null,bodyB:null},mo={type:"endContact",bodyA:null,bodyB:null},Oi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Bi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},To=class To{static solve2BoneIK(t,e,i,s=!1){const r=Math.sqrt(t.y*t.y+t.z*t.z),o=e+i,a=Math.abs(e-i),l=.001;if(r>o-l)return{thighAngle:Math.atan2(t.z,t.y),tibiaAngle:0,reachable:!1};if(r<a+l)return{thighAngle:0,tibiaAngle:Math.PI*.6,reachable:!1};const c=(e*e+i*i-r*r)/(2*e*i),h=Math.max(-1+l,Math.min(1-l,c)),d=Math.acos(h),u=(e*e+r*r-i*i)/(2*e*r),p=Math.max(-1+l,Math.min(1-l,u)),g=Math.acos(p),m=Math.atan2(t.z,t.y)-g,f=Math.PI-d;return{thighAngle:m,tibiaAngle:f,reachable:!0}}static fingerCurlToFootTarget(t,e,i,s){const r=i+s,o=r*.85,a=r*.3,l=Ha.lerp(o,a,t),c=-r*.95,h=r*.5,d=Ha.lerp(c,h,t),u=0;return new O(u,l,d)}static applyIKToLeg(t,e,i){const s=t.userData.legIndex||0,r=t.getObjectByName(`knee_group_${s}`);if(r){t.userData.baseQuaternion||(t.userData.baseQuaternion=t.quaternion.clone());const o=new jn;o.setFromAxisAngle(new O(1,0,0),e),t.quaternion.multiplyQuaternions(t.userData.baseQuaternion,o),r.rotation.x=i,s===0&&Math.random()<.05&&console.log(`IK Applied - Leg ${s}: thigh=${e.toFixed(3)}rad (${(e*180/Math.PI).toFixed(1)}°), tibia=${i.toFixed(3)}rad (${(i*180/Math.PI).toFixed(1)}°)`)}}static getFootWorldPosition(t,e,i){const s=t.userData.legIndex||0,r=t.getObjectByName(`knee_group_${s}`);if(!r)return console.warn(`Could not find knee_group_${s}`),new O;const o=r.getObjectByName(`tibia_${s}`);if(!o)return console.warn(`Could not find tibia_${s}`),new O;t.updateMatrixWorld(!0);const a=new O;t.getWorldPosition(a);const l=new O;r.getWorldPosition(l);const c=new O(0,1,0);c.applyQuaternion(o.getWorldQuaternion(new jn));const h=l.clone();return h.add(c.multiplyScalar(i)),s===0&&Math.random()<.02&&console.log(`Foot Position - attach: (${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}), knee: (${l.x.toFixed(2)}, ${l.y.toFixed(2)}, ${l.z.toFixed(2)}), foot: (${h.x.toFixed(2)}, ${h.y.toFixed(2)}, ${h.z.toFixed(2)})`),h}};ct(To,"debugUtils",{addAxesToLeg(t,e=.1){const i=t.userData.legIndex||0,s=t.getObjectByName(`debug_axes_${i}`);s&&t.remove(s);const r=new Ov(e);r.name=`debug_axes_${i}`,t.add(r)},logIKSolution(t,e,i,s){console.group(`🕷️ IK Debug - Leg ${t}`),console.log(`Target (leg-local): (${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)})`),console.log(`Thigh angle: ${i.thighAngle.toFixed(3)}rad (${(i.thighAngle*180/Math.PI).toFixed(1)}°)`),console.log(`Tibia angle: ${i.tibiaAngle.toFixed(3)}rad (${(i.tibiaAngle*180/Math.PI).toFixed(1)}°)`),console.log(`Reachable: ${i.reachable}`),console.log(`Actual foot (world): (${s.x.toFixed(3)}, ${s.y.toFixed(3)}, ${s.z.toFixed(3)})`),console.groupEnd()},testFingerCurlRange(t,e,i){console.group(`🧪 IK Finger Curl Test - Leg ${t}`);for(let s=0;s<=1;s+=.2){const r=To.fingerCurlToFootTarget(s,t,e,i),o=To.solve2BoneIK(r,e,i);console.log(`Curl ${s.toFixed(1)}: target=(${r.x.toFixed(2)}, ${r.y.toFixed(2)}, ${r.z.toFixed(2)}), thigh=${(o.thighAngle*180/Math.PI).toFixed(1)}°, tibia=${(o.tibiaAngle*180/Math.PI).toFixed(1)}°, reachable=${o.reachable}`)}console.groupEnd()}});let In=To;const bt=class bt{constructor(t,e,i){ct(this,"gameObject");ct(this,"bodyMesh");ct(this,"legGroups",[]);ct(this,"_gummyMaterial");ct(this,"physicsBody",null);ct(this,"footBodies",[]);ct(this,"footTargets",[]);ct(this,"fingerCurls",[]);ct(this,"thighBodies",[]);ct(this,"tibiaBodies",[]);ct(this,"wasGroundContact",[]);ct(this,"legImpulseCooldowns",[]);ct(this,"debugFootTargets",[]);ct(this,"debugFootPositions",[]);ct(this,"debug",{addAxesToLegs:(t,e=.1)=>{t!==void 0?this.legGroups[t]&&In.debugUtils.addAxesToLeg(this.legGroups[t],e):this.legGroups.forEach(i=>{In.debugUtils.addAxesToLeg(i,e)})},testIKRange:(t=0)=>{In.debugUtils.testFingerCurlRange(t,bt.THIGH_LENGTH,bt.TIBIA_LENGTH)},setFingerCurl:(t,e)=>{t>=0&&t<bt.LEG_COUNT&&(this.fingerCurls[t]=Math.max(0,Math.min(1,e)),this.footTargets[t]=In.fingerCurlToFootTarget(this.fingerCurls[t],t,bt.THIGH_LENGTH,bt.TIBIA_LENGTH),console.log(`Set leg ${t} finger curl to ${e.toFixed(2)}`))}});this.gameObject=new zs,this.gameObject.name="SpiderGameObject";const s=i?i.clone():new O(0,bt.INITIAL_BODY_Y,0);if(this.gameObject.position.copy(s),this._gummyMaterial=new Cv({color:t,metalness:0,roughness:.2,ior:1.45,transmission:.95,thickness:bt.BODY_RADIUS*1.2,transparent:!0,opacity:.9,side:Ji}),this.fingerCurls=new Array(bt.LEG_COUNT).fill(0),this.footTargets=[],this.debugFootTargets=[],this.debugFootPositions=[],this._createBody(),this._createLegs(),this._createDebugVisualization(),e){const r=new Hh(bt.BODY_RADIUS);this.physicsBody=new ft({mass:1,position:new M().copy(s),shape:r,material:e.createDefaultMaterial(),angularDamping:.8,linearDamping:.3,collisionFilterGroup:16,collisionFilterMask:25}),this.physicsBody.quaternion.copy(this.gameObject.quaternion),e.world.addBody(this.physicsBody)}this.gameObject.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!1)})}_createBody(){const t=new su(bt.BODY_RADIUS,24,16);this.bodyMesh=new un(t,this._gummyMaterial),this.bodyMesh.name="SpiderBodyMesh",this.gameObject.add(this.bodyMesh)}_createLegs(){const t=new qa(bt.THIGH_RADIUS,bt.THIGH_LENGTH,6,10),e=new qa(bt.TIBIA_RADIUS,bt.TIBIA_LENGTH,6,10),i=[0,2*Math.PI/5,4*Math.PI/5,6*Math.PI/5,8*Math.PI/5],r=this.gameObject.position.x<0?i:i.map((a,l)=>l===0?a:-a+2*Math.PI),o=Math.PI/20;for(let a=0;a<bt.LEG_COUNT;a++){const l=new zs;l.name=`leg_group_${a}`,l.userData.legIndex=a;const c=r[a],h=bt.BODY_RADIUS*Math.sin(c),d=bt.BODY_RADIUS*Math.cos(c);l.position.set(h,0,d),l.lookAt(this.bodyMesh.position),l.rotateY(Math.PI),l.rotateX(Math.PI/2+o),this.gameObject.add(l);const u=new un(t,this._gummyMaterial);u.name=`thigh_${a}`,u.position.y=bt.THIGH_LENGTH/2+bt.THIGH_RADIUS,l.add(u);const p=new zs;p.name=`knee_group_${a}`,p.position.y=bt.THIGH_LENGTH+bt.THIGH_RADIUS,l.add(p);const g=new un(e,this._gummyMaterial);g.name=`tibia_${a}`,g.position.y=bt.TIBIA_LENGTH/2+bt.TIBIA_RADIUS,p.add(g),this.legGroups.push(l),this.footTargets.push(In.fingerCurlToFootTarget(0,a,bt.THIGH_LENGTH,bt.TIBIA_LENGTH))}}_createDebugVisualization(){}initializeLegPhysics(t){if(!t||!this.physicsBody){console.warn("Spider: Cannot initialize leg physics without physicsController or main physicsBody.");return}this.thighBodies=[],this.tibiaBodies=[],this.footBodies=[];for(let e=0;e<bt.LEG_COUNT;e++){const i=new Vh(bt.THIGH_RADIUS,bt.THIGH_RADIUS,bt.THIGH_LENGTH,8),s=new ft({mass:.1,shape:i,material:t.getLegMaterial(),collisionFilterGroup:8,collisionFilterMask:25});this.thighBodies.push(s),t.world.addBody(s);const r=new Vh(bt.TIBIA_RADIUS,bt.TIBIA_RADIUS,bt.TIBIA_LENGTH,8),o=new ft({mass:.05,shape:r,material:t.getLegMaterial(),collisionFilterGroup:8,collisionFilterMask:25});this.tibiaBodies.push(o),t.world.addBody(o);const a=new Hh(bt.TIBIA_RADIUS*2),l=new ft({mass:0,shape:a,material:t.getLegMaterial(),type:ft.KINEMATIC,collisionFilterGroup:4,collisionFilterMask:1});this.footBodies.push(l),t.world.addBody(l);const c=new $p(this.physicsBody,new M(0,0,0),s,new M(0,0,0));t.world.addConstraint(c);const h=new $p(this.physicsBody,new M(0,0,0),o,new M(0,0,0));t.world.addConstraint(h),s.constraint=c,o.constraint=h}console.log("Spider: Initialized leg segment colliders with physics constraints.")}update(t){if(this.physicsBody&&(this.gameObject.position.copy(this.physicsBody.position),this.gameObject.quaternion.copy(this.physicsBody.quaternion)),t&&t.fingerCurls&&t.fingerCurls.length>=bt.LEG_COUNT){for(let e=0;e<bt.LEG_COUNT;e++)this.fingerCurls[e]=t.fingerCurls[e],this.footTargets[e]=In.fingerCurlToFootTarget(this.fingerCurls[e],e,bt.THIGH_LENGTH,bt.TIBIA_LENGTH);this.gameObject.position.x<0?(console.log("🕷️ LEFT SPIDER - Direct mapping (clockwise legs):"),console.log("  Raw hand data:",t.fingerCurls.map(e=>e.toFixed(2)).join(", ")),console.log("  Applied to legs:",this.fingerCurls.map(e=>e.toFixed(2)).join(", ")),console.log("  Finger→Leg: Thumb→0(front), Index→1(front-right), Middle→2(back-right), Ring→3(back-left), Pinky→4(front-left)")):(console.log("🕷️ RIGHT SPIDER - Direct mapping (counter-clockwise legs):"),console.log("  Raw hand data:",t.fingerCurls.map(e=>e.toFixed(2)).join(", ")),console.log("  Applied to legs:",this.fingerCurls.map(e=>e.toFixed(2)).join(", ")),console.log("  Finger→Leg: Thumb→0(front), Index→1(front-left), Middle→2(back-left), Ring→3(back-right), Pinky→4(front-right)")),this._updateLegIK()}this._updateFootColliders(),this._applyGroundForces(),!t&&this.thighBodies&&this.tibiaBodies&&this.thighBodies.length>0&&this._syncVisualsToPhysics()}_updateLegIK(){for(let t=0;t<bt.LEG_COUNT;t++){const e=this.legGroups[t],i=this.footTargets[t],s=In.solve2BoneIK(i,bt.THIGH_LENGTH,bt.TIBIA_LENGTH,!1);if(t===0&&this.gameObject.position.x<0&&Math.random()<.1){const r=In.getFootWorldPosition(e,bt.THIGH_LENGTH,bt.TIBIA_LENGTH);In.debugUtils.logIKSolution(t,i,s,r)}In.applyIKToLeg(e,s.thighAngle,s.tibiaAngle)}}_updateFootColliders(){if(!(!this.thighBodies||!this.tibiaBodies||!this.footBodies)&&this.thighBodies.length!==0)for(let t=0;t<bt.LEG_COUNT;t++){const e=this.legGroups[t],i=this.thighBodies[t],s=this.tibiaBodies[t],r=this.footBodies[t];if(!e||!i||!s||!r)continue;this.gameObject.updateMatrixWorld(!0);const o=e.getObjectByName(`thigh_${t}`);if(o){const c=new O,h=new jn;if(o.getWorldPosition(c),o.getWorldQuaternion(h),i.position.copy(c),i.quaternion.copy(h),i.constraint){const d=e.position.clone();d.applyMatrix4(this.gameObject.matrixWorld);const u=new M(d.x-this.physicsBody.position.x,d.y-this.physicsBody.position.y,d.z-this.physicsBody.position.z);i.constraint.pivotA.copy(u),i.constraint.pivotB.set(0,-.35/2,0)}}const a=e.getObjectByName(`knee_group_${t}`);if(a){const c=a.getObjectByName(`tibia_${t}`);if(c){const h=new O,d=new jn;if(c.getWorldPosition(h),c.getWorldQuaternion(d),s.position.copy(h),s.quaternion.copy(d),s.constraint){const u=new O;a.getWorldPosition(u);const p=new M(u.x-this.physicsBody.position.x,u.y-this.physicsBody.position.y,u.z-this.physicsBody.position.z);s.constraint.pivotA.copy(p),s.constraint.pivotB.set(0,-.55/2,0)}}}const l=In.getFootWorldPosition(e,bt.THIGH_LENGTH,bt.TIBIA_LENGTH);r.position.copy(l)}}_applyGroundForces(){if(!this.physicsBody||!this.footBodies)return;this.wasGroundContact.length===0&&(this.wasGroundContact=new Array(bt.LEG_COUNT).fill(!1),this.legImpulseCooldowns=new Array(bt.LEG_COUNT).fill(0));const t=0,e=bt.TIBIA_RADIUS*2,i=t+e+.02,s=.3;let r=[],o=0,a=0;const l=1/60;for(let p=0;p<bt.LEG_COUNT;p++)this.legImpulseCooldowns[p]>0&&(this.legImpulseCooldowns[p]-=l);for(let p=0;p<this.footBodies.length;p++){const g=this.footBodies[p],_=1-this.fingerCurls[p],m=g.position.y,f=m<=i,v=_>.2,E=f&&v;E&&o++;const y=this.wasGroundContact[p],A=E&&!y&&this.legImpulseCooldowns[p]<=0;A&&a++,r.push({leg:p,footY:m.toFixed(3),extension:_.toFixed(2),contact:E,newContact:A,cooldown:this.legImpulseCooldowns[p].toFixed(2)})}const c=o>=2,h=this.physicsBody.velocity.length(),d=h<.5,u=c&&d;u&&(this.physicsBody.velocity.scale(.1),this.physicsBody.angularVelocity.scale(.1),h<.1&&this.physicsBody.velocity.set(0,this.physicsBody.velocity.y*.5,0));for(let p=0;p<this.footBodies.length;p++){const g=this.footBodies[p],_=1-this.fingerCurls[p],f=g.position.y<=i,v=_>.2,E=f&&v,y=this.wasGroundContact[p];if(E&&!y&&this.legImpulseCooldowns[p]<=0&&!(u&&h<.3)){let T=_*2;c&&(T*=.1);const C=this.legGroups[p].position.clone();C.applyMatrix4(this.gameObject.matrixWorld);const L=new M(C.x-this.physicsBody.position.x,0,C.z-this.physicsBody.position.z),w=Math.sqrt(L.x*L.x+L.z*L.z);if(w>0){L.x/=w,L.z/=w;const x=new M(-L.x*T,T*.2,-L.z*T);this.physicsBody.applyImpulse(x),this.legImpulseCooldowns[p]=s}r[p].impulse=T.toFixed(1)}this.wasGroundContact[p]=E}Math.random()<.02&&this.gameObject.position.x<0&&(a>0||u)&&(console.log(`🕷️ Ground state: ${o} legs, ${a} new contacts, stable: ${u}, velocity: ${h.toFixed(2)}`),a>0&&console.log("New contacts:",r.filter(p=>p.newContact)))}_syncVisualsToPhysics(){if(!(!this.thighBodies||!this.tibiaBodies||this.thighBodies.length===0)){Math.random()<.05&&console.log("🔄 Syncing visuals to physics bodies (no hand data)");for(let t=0;t<bt.LEG_COUNT;t++){const e=this.legGroups[t],i=this.thighBodies[t],s=this.tibiaBodies[t];if(!e||!i||!s)continue;const r=e.getObjectByName(`thigh_${t}`),o=e.getObjectByName(`knee_group_${t}`);if(!r||!o)continue;const a=o.getObjectByName(`tibia_${t}`);if(!a)continue;const l=new O().copy(i.position),c=new jn().copy(i.quaternion);l.sub(this.gameObject.position),r.position.copy(l),r.quaternion.copy(c);const h=new O().copy(s.position),d=new jn().copy(s.quaternion);h.sub(this.gameObject.position),a.position.copy(h),a.quaternion.copy(d),t===0&&Math.random()<.02&&(console.log(`Thigh body pos: ${i.position.x.toFixed(2)}, ${i.position.y.toFixed(2)}, ${i.position.z.toFixed(2)}`),console.log(`Tibia body pos: ${s.position.x.toFixed(2)}, ${s.position.y.toFixed(2)}, ${s.position.z.toFixed(2)}`))}}}getObject3D(){return this.gameObject}setVisible(t){this.gameObject.visible=t}};ct(bt,"LEG_COUNT",5),ct(bt,"BODY_RADIUS",.2),ct(bt,"THIGH_RADIUS",.055),ct(bt,"THIGH_LENGTH",.35),ct(bt,"TIBIA_RADIUS",.045),ct(bt,"TIBIA_LENGTH",.55),ct(bt,"INITIAL_BODY_Y",.33);let bo=bt;class Mw{constructor(){ct(this,"world");ct(this,"physicsObjects",[]);ct(this,"_fixedTimeStep",1/60);ct(this,"_maxSubSteps",10);this.world=new pw,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new gr(this.world),this.world.solver.iterations=15,this._createMaterials(),console.log("PhysicsController: Cannon-ES world initialized.")}_createMaterials(){const t=new Vs("groundMaterial"),e=new Vs("legMaterial");this.addContactMaterial(t,e,{friction:.8,restitution:.1,contactEquationStiffness:1e8,contactEquationRelaxation:3,frictionEquationStiffness:1e8,frictionEquationRelaxation:3}),this.addContactMaterial(e,this.createDefaultMaterial(),{friction:.3,restitution:.2}),this.groundMaterial=t,this.legMaterial=e,console.log("PhysicsController: Materials created. Platform will be created by GameLoop.")}addBody(t,e){if(!t||!e){console.error("PhysicsController: Both mesh and body are required to add an object.");return}this.world.addBody(e),this.physicsObjects.push({mesh:t,body:e})}removeBody(t){t&&(this.world.removeBody(t),this.physicsObjects=this.physicsObjects.filter(e=>e.body!==t))}update(t){this.world.step(this._fixedTimeStep,t,this._maxSubSteps);for(const e of this.physicsObjects)if(e.mesh&&e.body){if(e.mesh.parent){const i=new O,s=new jn;i.copy(e.body.position),s.copy(e.body.quaternion);const r=new xe;r.compose(i,s,e.mesh.scale);const o=new xe;e.mesh.parent.updateMatrixWorld(!0),o.copy(e.mesh.parent.matrixWorld).invert();const a=new xe;a.multiplyMatrices(o,r),e.mesh.position.setFromMatrixPosition(a),e.mesh.quaternion.setFromRotationMatrix(a)}else e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion);e.body.mass>0&&e.mesh.name==="SpiderGameObject"||e.body.mass>0&&e.mesh.name==="Sphere"||e.body.mass>0&&e.mesh.name&&e.mesh.name.startsWith("thigh_")}}createSphereBody(t,e,i,s){const r=new Hh(t);return new ft({mass:i,position:e,shape:r,material:s})}createBoxBody(t,e,i,s){const r=new Fl(t);return new ft({mass:i,position:e,shape:r,material:s})}createDefaultMaterial(){return new Vs("defaultMaterial")}getLegMaterial(){return this.legMaterial||this.createDefaultMaterial()}addContactMaterial(t,e,i){const s=new Vo(t,e,i);this.world.addContactMaterial(s)}}const Pn={WAITING_FOR_HANDS:"waiting_for_hands",SPAWNING:"spawning",PLAYING:"playing",COUNTDOWN:"countdown",GAME_OVER:"game_over"},_e=class _e{constructor(t,e){ct(this,"currentState",Pn.WAITING_FOR_HANDS);ct(this,"scene");ct(this,"physicsController");ct(this,"platformMesh");ct(this,"platformBody");ct(this,"spiders",{player1:null,player2:null});ct(this,"ui",{countdownElement:null,winnerElement:null,waitingElement:null,logoElement:null});ct(this,"countdown",{timeLeft:0,fallenPlayer:null,isActive:!1});ct(this,"gameOver",{winner:null,displayStartTime:0});this.scene=t,this.physicsController=e,this.createPlatform(),this.createUI(),this.setupEventListeners()}createPlatform(){const t=new iu(_e.PLATFORM_CONFIG.radius,_e.PLATFORM_CONFIG.radius,_e.PLATFORM_CONFIG.height,32),e=new Um({color:9127187,roughness:.8,metalness:.1});this.platformMesh=new un(t,e),this.platformMesh.position.set(_e.PLATFORM_CONFIG.position.x,_e.PLATFORM_CONFIG.position.y,_e.PLATFORM_CONFIG.position.z),this.platformMesh.receiveShadow=!0,this.platformMesh.castShadow=!0,this.scene.add(this.platformMesh);const i=new Vh(_e.PLATFORM_CONFIG.radius,_e.PLATFORM_CONFIG.radius,_e.PLATFORM_CONFIG.height,8);this.platformBody=new ft({mass:0,shape:i,position:new M(_e.PLATFORM_CONFIG.position.x,_e.PLATFORM_CONFIG.position.y,_e.PLATFORM_CONFIG.position.z),material:this.physicsController.groundMaterial,collisionFilterGroup:1,collisionFilterMask:-1}),this.physicsController.world.addBody(this.platformBody)}createUI(){this.ui.logoElement=document.createElement("img"),this.ui.logoElement.id="game-logo",this.ui.logoElement.src="/logo.png",this.ui.logoElement.alt="Jank Wars Logo",this.ui.logoElement.style.cssText=`
            position: fixed;
            top: 20px;
            left: 20px;
            height: 120px;
            width: auto;
            z-index: 1002;
            opacity: 0.9;
            pointer-events: none;
            user-select: none;
        `,document.body.appendChild(this.ui.logoElement),this.ui.countdownElement=document.createElement("div"),this.ui.countdownElement.id="countdown-display",this.ui.countdownElement.style.cssText=`
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 72px;
            font-weight: bold;
            color: #FF4444;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            z-index: 1000;
            display: none;
            font-family: Arial, sans-serif;
        `,document.body.appendChild(this.ui.countdownElement),this.ui.winnerElement=document.createElement("div"),this.ui.winnerElement.id="winner-display",this.ui.winnerElement.style.cssText=`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 96px;
            font-weight: bold;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.8);
            z-index: 1001;
            display: none;
            font-family: Arial, sans-serif;
            text-align: center;
            background: rgba(0,0,0,0.7);
            padding: 40px 60px;
            border-radius: 20px;
            border: 4px solid #FFF;
        `,document.body.appendChild(this.ui.winnerElement),this.ui.waitingElement=document.createElement("div"),this.ui.waitingElement.id="waiting-display",this.ui.waitingElement.style.cssText=`
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            font-weight: bold;
            color: #FFFFFF;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            z-index: 999;
            display: block;
            font-family: Arial, sans-serif;
            text-align: center;
            background: rgba(0,0,0,0.6);
            padding: 20px 40px;
            border-radius: 15px;
        `,this.ui.waitingElement.textContent="Show both hands to start the game!",document.body.appendChild(this.ui.waitingElement)}setupEventListeners(){document.addEventListener("keydown",t=>{t.code==="KeyR"&&this.currentState===Pn.GAME_OVER&&this.restartGame()})}setSpiders(t,e){this.spiders.player1=t,this.spiders.player2=e}update(t,e){switch(this.currentState){case Pn.WAITING_FOR_HANDS:this.updateWaitingForHands(e);break;case Pn.SPAWNING:this.updateSpawning(t);break;case Pn.PLAYING:this.updatePlaying(t);break;case Pn.COUNTDOWN:this.updateCountdown(t);break;case Pn.GAME_OVER:this.updateGameOver(t);break}}updateWaitingForHands(t){t&&t.leftHand&&t.rightHand&&this.transitionToSpawning()}updateSpawning(t){this.transitionToPlaying()}updatePlaying(t){const e=this.isSpiderFallen(this.spiders.player1),i=this.isSpiderFallen(this.spiders.player2);e&&!i?this.startCountdown("player1"):i&&!e?this.startCountdown("player2"):e&&i&&this.restartGame()}updateCountdown(t){this.countdown.timeLeft-=t;const e=Math.ceil(this.countdown.timeLeft);this.ui.countdownElement.textContent=e.toString();const i=this.spiders[this.countdown.fallenPlayer];if(!this.isSpiderFallen(i)){this.cancelCountdown();return}if(this.countdown.timeLeft<=0){const s=this.countdown.fallenPlayer==="player1"?"player2":"player1";this.transitionToGameOver(s)}}updateGameOver(t){(performance.now()-this.gameOver.displayStartTime)/1e3>=_e.WINNER_DISPLAY_DURATION&&this.restartGame()}isSpiderFallen(t){if(!t||!t.physicsBody)return!1;const e=t.physicsBody.position;return e.y<_e.FALL_THRESHOLD?!0:Math.sqrt(e.x*e.x+e.z*e.z)>_e.PLATFORM_CONFIG.radius+1}transitionToSpawning(){this.currentState=Pn.SPAWNING,this.ui.waitingElement.style.display="none",this.ui.winnerElement.style.display="none",this.ui.countdownElement.style.display="none",this.respawnSpiders()}transitionToPlaying(){this.currentState=Pn.PLAYING}startCountdown(t){this.currentState=Pn.COUNTDOWN,this.countdown.fallenPlayer=t,this.countdown.timeLeft=_e.COUNTDOWN_DURATION,this.countdown.isActive=!0,this.ui.countdownElement.style.display="block",this.ui.countdownElement.textContent=_e.COUNTDOWN_DURATION.toString()}cancelCountdown(){this.currentState=Pn.PLAYING,this.countdown.isActive=!1,this.countdown.fallenPlayer=null,this.ui.countdownElement.style.display="none"}transitionToGameOver(t){this.currentState=Pn.GAME_OVER,this.gameOver.winner=t,this.gameOver.displayStartTime=performance.now(),this.ui.countdownElement.style.display="none";const e=t==="player1"?this.spiders.player2:this.spiders.player1;this.makeSpiderGray(e);const i=t==="player1"?"Red":"Blue",s=t==="player1"?"#FF4444":"#4444FF";this.ui.winnerElement.style.color=s,this.ui.winnerElement.textContent=`${i} Wins!`,this.ui.winnerElement.style.display="block"}makeSpiderGray(t){t&&t.gameObject.traverse(e=>{e.isMesh&&e.material&&(e.material=e.material.clone(),e.material.color.setHex(6710886),e.material.opacity=.7,e.material.transparent=!0)})}respawnSpiders(){this.spiders.player1&&(this.resetSpiderPosition(this.spiders.player1,_e.SPAWN_CONFIG.player1Position),this.resetSpiderAppearance(this.spiders.player1,16711680),this.reinitializeSpiderPhysics(this.spiders.player1)),this.spiders.player2&&(this.resetSpiderPosition(this.spiders.player2,_e.SPAWN_CONFIG.player2Position),this.resetSpiderAppearance(this.spiders.player2,255),this.reinitializeSpiderPhysics(this.spiders.player2))}reinitializeSpiderPhysics(t){!t||!this.physicsController||(this.cleanupSpiderLegPhysics(t),t.initializeLegPhysics(this.physicsController),this.scene.updateMatrixWorld(!0))}cleanupSpiderLegPhysics(t){if(!t||!this.physicsController)return;const e=this.physicsController.world;if(t.thighBodies){for(const i of t.thighBodies)i&&(i.constraint&&e.removeConstraint(i.constraint),e.removeBody(i));t.thighBodies=[]}if(t.tibiaBodies){for(const i of t.tibiaBodies)i&&(i.constraint&&e.removeConstraint(i.constraint),e.removeBody(i));t.tibiaBodies=[]}if(t.footBodies){for(const i of t.footBodies)i&&e.removeBody(i);t.footBodies=[]}}resetSpiderPosition(t,e){if(!(!t||!t.physicsBody)){this.resetPhysicsBody(t.physicsBody,e.x,e.y,e.z);for(let i=0;i<t.thighBodies.length;i++){if(t.thighBodies[i]){const s=this.calculateLegOffset(i,"thigh");this.resetPhysicsBody(t.thighBodies[i],e.x+s.x,e.y+s.y,e.z+s.z)}if(t.tibiaBodies[i]){const s=this.calculateLegOffset(i,"tibia");this.resetPhysicsBody(t.tibiaBodies[i],e.x+s.x,e.y+s.y,e.z+s.z)}if(t.footBodies[i]){const s=this.calculateLegOffset(i,"foot");this.resetPhysicsBody(t.footBodies[i],e.x+s.x,e.y+s.y,e.z+s.z)}}t.wasGroundContact=new Array(t.legGroups.length).fill(!1),t.legImpulseCooldowns=new Array(t.legGroups.length).fill(0),t.gameObject.position.set(e.x,e.y,e.z),t.gameObject.quaternion.set(0,0,0,1),t.fingerCurls=new Array(t.fingerCurls.length).fill(0)}}resetPhysicsBody(t,e,i,s){t&&(t.position.set(e,i,s),t.quaternion.set(0,0,0,1),t.velocity.set(0,0,0),t.angularVelocity.set(0,0,0),t.force.set(0,0,0),t.torque.set(0,0,0),t.sleepState=ft.AWAKE,t.timeLastSleepy=0,t.vlambda&&t.vlambda.set(0,0,0),t.wlambda&&t.wlambda.set(0,0,0))}calculateLegOffset(t,e){const i=t/5*2*Math.PI,s=.25,r=Math.sin(i)*s,o=Math.cos(i)*s;switch(e){case"thigh":return{x:r,y:.2,z:o};case"tibia":return{x:r*1.5,y:-.1,z:o*1.5};case"foot":return{x:r*2,y:-.3,z:o*2};default:return{x:0,y:0,z:0}}}resetSpiderAppearance(t,e){t&&t.gameObject.traverse(i=>{i.isMesh&&i.material&&i.material.color&&(i.material.color.setHex(e),i.material.opacity=.9,i.material.transparent=!0)})}restartGame(){this.currentState=Pn.WAITING_FOR_HANDS,this.clearPhysicsWorldState(),this.ui.countdownElement.style.display="none",this.ui.winnerElement.style.display="none",this.ui.waitingElement.style.display="block",this.ui.waitingElement.textContent="Show both hands to start the game!",this.countdown.isActive=!1,this.countdown.fallenPlayer=null,this.countdown.timeLeft=0,this.gameOver.winner=null,this.gameOver.displayStartTime=0}clearPhysicsWorldState(){if(this.physicsController&&this.physicsController.world){const t=this.physicsController.world;t.contacts&&(t.contacts.length=0),t.constraints&&(t.constraints.length=0);for(const e of t.bodies)e&&(e.force&&e.force.set(0,0,0),e.torque&&e.torque.set(0,0,0),e.velocity&&e.velocity.set(0,0,0),e.angularVelocity&&e.angularVelocity.set(0,0,0),e.vlambda&&e.vlambda.set(0,0,0),e.wlambda&&e.wlambda.set(0,0,0),e.sleepState!==void 0&&e.sleepState!==ft.AWAKE&&e.wakeUp());t.broadphase&&t.broadphase.collisionPairs&&(t.broadphase.collisionPairs.length=0)}}dispose(){this.ui.logoElement&&document.body.removeChild(this.ui.logoElement),this.ui.countdownElement&&document.body.removeChild(this.ui.countdownElement),this.ui.winnerElement&&document.body.removeChild(this.ui.winnerElement),this.ui.waitingElement&&document.body.removeChild(this.ui.waitingElement),this.platformMesh&&this.scene.remove(this.platformMesh),this.platformBody&&this.physicsController.world.removeBody(this.platformBody)}};ct(_e,"PLATFORM_CONFIG",{radius:3,height:.2,position:{x:0,y:-.1,z:0}}),ct(_e,"SPAWN_CONFIG",{distance:1.5,height:.6,player1Position:{x:-1.5,y:.5,z:0},player2Position:{x:1.5,y:.5,z:0}}),ct(_e,"COUNTDOWN_DURATION",4),ct(_e,"WINNER_DISPLAY_DURATION",5),ct(_e,"FALL_THRESHOLD",-2);let Wh=_e;class xo{static processHandResults(t){if(!t||!t.landmarks||t.landmarks.length===0)return{leftHand:null,rightHand:null};const e={leftHand:null,rightHand:null};for(let i=0;i<t.landmarks.length;i++){const s=t.landmarks[i],r=t.handedness[i],a=r&&r[0]&&r[0].categoryName==="Left"?"leftHand":"rightHand",l=this.extractFingerCurls(s),c=this.applySmoothingFilter(l,a);e[a]={fingerCurls:c,landmarks:s,isTracked:!0}}return e}static extractFingerCurls(t){const e=[];for(const i of this.FINGER_CONFIGS){const s=this.calculateFingerCurl(t,i.joints);e.push(s)}return e}static calculateFingerCurl(t,e){if(e.length<4)return 0;if(e[0]===1)return this.calculateThumbCurl(t);const i=t[e[0]],s=t[e[3]],r=t[this.LANDMARK_INDICES.WRIST],o=Math.sqrt(Math.pow(s.x-r.x,2)+Math.pow(s.y-r.y,2)+Math.pow(s.z-r.z,2)),a=Math.sqrt(Math.pow(i.x-r.x,2)+Math.pow(i.y-r.y,2)+Math.pow(i.z-r.z,2));if(a===0)return 0;const l=o/a,c=2.2;let d=(c-l)/(c-1.1);return d=Math.max(0,Math.min(1,d)),d}static calculateThumbCurl(t){const e=t[this.LANDMARK_INDICES.THUMB_TIP],i=t[this.LANDMARK_INDICES.THUMB_MCP],s=t[this.LANDMARK_INDICES.INDEX_MCP],r=t[this.LANDMARK_INDICES.MIDDLE_MCP],o=(s.x+r.x)/2,a=(s.y+r.y)/2,l=(s.z+r.z)/2,c=Math.sqrt(Math.pow(e.x-o,2)+Math.pow(e.y-a,2)+Math.pow(e.z-l,2)),h=Math.sqrt(Math.pow(i.x-o,2)+Math.pow(i.y-a,2)+Math.pow(i.z-l,2));if(h===0)return 0;const d=c/h,u=2;let g=(u-d)/(u-.5);return g=Math.max(0,Math.min(1,g)),g}static applySmoothingFilter(t,e){const i=this.previousCurls.get(e)||t,s=[];for(let r=0;r<t.length;r++){const o=i[r]*this.smoothingFactor+t[r]*(1-this.smoothingFactor);s.push(o)}return this.previousCurls.set(e,s),s}static getPalmData(t){if(!t||t.length<21)return null;const e=t[this.LANDMARK_INDICES.WRIST],i=t[this.LANDMARK_INDICES.INDEX_MCP],s=t[this.LANDMARK_INDICES.MIDDLE_MCP],r=t[this.LANDMARK_INDICES.RING_MCP],o=new O((e.x+i.x+s.x+r.x)/4,(e.y+i.y+s.y+r.y)/4,(e.z+i.z+s.z+r.z)/4),a=new O(s.x-e.x,s.y-e.y,s.z-e.z).normalize();return{position:o,direction:a,landmarks:t}}static isTrackingQualityGood(t){return!t||!t.fingerCurls?!1:t.fingerCurls.every(e=>e>=0&&e<=1&&!isNaN(e))}static resetSmoothingFilters(){this.previousCurls.clear()}}ct(xo,"LANDMARK_INDICES",{WRIST:0,THUMB_CMC:1,THUMB_MCP:2,THUMB_IP:3,THUMB_TIP:4,INDEX_MCP:5,INDEX_PIP:6,INDEX_DIP:7,INDEX_TIP:8,MIDDLE_MCP:9,MIDDLE_PIP:10,MIDDLE_DIP:11,MIDDLE_TIP:12,RING_MCP:13,RING_PIP:14,RING_DIP:15,RING_TIP:16,PINKY_MCP:17,PINKY_PIP:18,PINKY_DIP:19,PINKY_TIP:20}),ct(xo,"FINGER_CONFIGS",[{name:"thumb",joints:[1,2,3,4]},{name:"index",joints:[5,6,7,8]},{name:"middle",joints:[9,10,11,12]},{name:"ring",joints:[13,14,15,16]},{name:"pinky",joints:[17,18,19,20]}]),ct(xo,"smoothingFactor",.35),ct(xo,"previousCurls",new Map);const za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class no{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sw=new ru(-1,1,1,-1,0,1);class Ew extends Dn{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}}const ww=new Ew;class gd{constructor(t){this._mesh=new un(ww,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class X0 extends no{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof on?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ir.clone(t.uniforms),this.material=new on({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gd(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nm extends no{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class bw extends no{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Tw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Wt);this._width=i.width,this._height=i.height,e=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ji}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new X0(za),this.copyPass.material.blending=qi,this.clock=new Uv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nm!==void 0&&(o instanceof nm?i=!0:o instanceof bw&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Aw extends no{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Yt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Cw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hr extends no{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Wt(t.x,t.y):new Wt(256,256),this.clearColor=new Yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(r,o,{type:ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new hi(r,o,{type:ji});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new hi(r,o,{type:ji});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=Cw;this.highPassUniforms=Ir.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Wt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ir.clone(za.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,blending:Oc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Yt,this._oldClearAlpha=1,this._basic=new eu,this._fsQuad=new gd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Wt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new on({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Wt(.5,.5)},direction:{value:new Wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Hr.BlurDirectionX=new Wt(1,0);Hr.BlurDirectionY=new Wt(0,1);const ba={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rw extends no{constructor(){super(),this.uniforms=Ir.clone(ba.uniforms),this.material=new Av({name:ba.name,uniforms:this.uniforms,vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader}),this._fsQuad=new gd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===om?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===am?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===um?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dm?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hm&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ol extends un{constructor(){const t=Ol.SkyShader,e=new on({name:t.name,uniforms:Ir.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:dn,depthWrite:!1});super(new qr(1,1,1),e),this.isSky=!0}}Ol.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},up:{value:new O(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Pw={uniforms:{tDiffuse:{value:null},saturation:{value:1.3}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float saturation;
        varying vec2 vUv;
        
        void main() {
            vec4 color = texture2D( tDiffuse, vUv );
            
            // Convert to grayscale
            float gray = dot( color.rgb, vec3( 0.299, 0.587, 0.114 ) );
            
            // Mix grayscale with original color based on saturation
            vec3 saturated = mix( vec3( gray ), color.rgb, saturation );
            
            gl_FragColor = vec4( saturated, color.a );
        }
    `};class Iw{constructor(){ct(this,"renderer");ct(this,"scene");ct(this,"camera");ct(this,"debugDisplay");ct(this,"webcamController");ct(this,"handTrackingController",null);ct(this,"handDebugRenderer",null);ct(this,"physicsController",null);ct(this,"physicsDebugger",null);ct(this,"player1Spider",null);ct(this,"player2Spider",null);ct(this,"gameLoop",null);ct(this,"composer",null);ct(this,"sky",null);ct(this,"lastFrameTime",0);this.debugDisplay=new MM("debug-info"),this.debugDisplay.update("Jank Wars - Initializing..."),this.lastFrameTime=performance.now(),this.initThreeJS(),this.physicsController=new Mw,this.debugDisplay.append("Physics controller initialized."),this.setupScene(),this.gameLoop=new Wh(this.scene,this.physicsController),this.gameLoop.setSpiders(this.player1Spider,this.player2Spider),this.debugDisplay.append("Game loop initialized."),this.debugDisplay.append("Scene initialized."),this.webcamController=new SM("webcam-feed"),this.initWebcamAndHandTracking(),this.animate=this.animate.bind(this),this.animate(),window.addEventListener("resize",this.onWindowResize.bind(this),!1)}initThreeJS(){this.renderer=new yM({canvas:document.getElementById("game-canvas"),antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sm,this.scene=new Sv,this.camera=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,1.5,4),this.camera.lookAt(0,0,0)}setupScene(){this.createSky();const t=new Nv(16777215,.7);this.scene.add(t);const e=new Dv(16777215,.6);e.position.set(10,15,10),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.left=-10,e.shadow.camera.right=10,e.shadow.camera.top=10,e.shadow.camera.bottom=-10,this.scene.add(e);const i=.6,s=bo.INITIAL_BODY_Y;this.player1Spider=new bo(16711680,this.physicsController,new O(-1,s+i,0)),this.scene.add(this.player1Spider.getObject3D()),this.debugDisplay.append("Player 1 Spider (Red) created."),this.player2Spider=new bo(255,this.physicsController,new O(1,s+i,0)),this.scene.add(this.player2Spider.getObject3D()),this.debugDisplay.append("Player 2 Spider (Blue) created."),this.scene.updateMatrixWorld(!0),this.player1Spider&&this.player1Spider.initializeLegPhysics(this.physicsController),this.player2Spider&&this.player2Spider.initializeLegPhysics(this.physicsController),this.debugDisplay.append("Spider leg physics initialization attempted."),this.initPostProcessing()}createSky(){this.sky=new Ol,this.sky.scale.setScalar(45e4),this.scene.add(this.sky);const t=this.sky.material.uniforms;t.turbidity.value=2,t.rayleigh.value=4,t.mieCoefficient.value=.002,t.mieDirectionalG.value=.7;const e=new O,i=Ha.degToRad(82),s=Ha.degToRad(45);e.setFromSphericalCoords(1,i,s),t.sunPosition.value.copy(e),this.debugDisplay.append("Sky background created.")}initPostProcessing(){this.composer=new Tw(this.renderer);const t=new Aw(this.scene,this.camera);this.composer.addPass(t);const e=new X0(Pw);this.composer.addPass(e);const i=new Hr(new Wt(window.innerWidth,window.innerHeight),.08,.8,.15);this.composer.addPass(i);const s=new Rw;this.composer.addPass(s),this.debugDisplay.append("Post-processing effects initialized.")}async initWebcamAndHandTracking(){this.debugDisplay.append("Attempting to start webcam...");try{if(await this.webcamController.start(),this.debugDisplay.append("Webcam started successfully."),this.webcamController.videoElement){this.debugDisplay.append("Initializing Hand Tracking..."),this.handTrackingController=new jS(this.webcamController.videoElement),await this.handTrackingController.initialize(),this.debugDisplay.append("Hand Tracking initialized successfully."),this.debugDisplay.append("Initializing Hand Debug Renderer...");try{this.handDebugRenderer=new ZS("webcam-overlay-canvas"),this.debugDisplay.append("Hand Debug Renderer initialized.")}catch(t){console.error("Failed to initialize HandDebugRenderer:",t),this.debugDisplay.append(`Error initializing Hand Debug Renderer: ${t.message}`)}}else throw new Error("Webcam video element not available for Hand Tracking.")}catch(t){console.error("Failed to start webcam or hand tracking:",t),this.debugDisplay.append(`Error during setup: ${t.message}`),this.debugDisplay.append("Proceeding without webcam/hand tracking."),this.webcamController.videoElement&&(this.webcamController.videoElement.style.display="none")}}animate(){const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t,requestAnimationFrame(this.animate),this.physicsController&&this.physicsController.update(e);let i=null;if(this.handTrackingController&&this.handTrackingController.isInitialized&&this.webcamController&&this.webcamController.isStarted){this.handTrackingController.detectHands();const s=this.handTrackingController.getLatestResults();this.handDebugRenderer&&this.handDebugRenderer.drawHands(s),s&&(i=xo.processHandResults(s),this.player1Spider&&i.leftHand&&this.player1Spider.update(i.leftHand),this.player2Spider&&i.rightHand&&this.player2Spider.update(i.rightHand))}else this.handDebugRenderer&&this.handDebugRenderer.clear();this.gameLoop&&this.gameLoop.update(e,i),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}cleanup(){console.log("Cleaning up game resources..."),this.debugDisplay.append("Cleaning up resources..."),this.webcamController&&this.webcamController.stop(),this.handTrackingController&&this.handTrackingController.dispose().catch(t=>console.error("Error disposing hand tracker:",t)),this.gameLoop&&this.gameLoop.dispose()}}let Xh=null;document.addEventListener("DOMContentLoaded",()=>{Xh=new Iw});window.addEventListener("beforeunload",()=>{Xh&&Xh.cleanup()});
