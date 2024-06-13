"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[166],{7653:function(D,o,e){e.r(o),e.d(o,{demos:function(){return P}});var i=e(97983),p=e.n(i),f=e(64129),v=e.n(f),E=e(12741),g=e.n(E),y=e(40794),x=e.n(y),h=e(67294),P={"virtual-list-demo-0":{component:h.memo(h.lazy(x()(p()().mark(function I(){var d,u,s,_,c,a;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=n.sent,u=d.default,s=d.useState,n.next=7,Promise.resolve().then(e.bind(e,31842));case 7:return _=n.sent,c=_.VirtualList,a=function(){for(var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=[],r=m;r<m+20;r++)l.push({uid:"uid_".concat(r)});return l},n.abrupt("return",{default:function(){var m=s(a(0)),l=g()(m,2),r=l[0],O=l[1],j=function(){O(function(L){return[].concat(v()(L),v()(a(r.length)))})};return u.createElement(c,{data:r,height:200,itemHeight:32,itemKey:"uid",appendData:j},function(t){return u.createElement("div",{key:t==null?void 0:t.uid,style:{height:32}},t==null?void 0:t.uid)})}});case 11:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"virtual-list-demo-0",refAtomIds:["virtual-list"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { VirtualList } from '@svl-ad/pro-components';
const getData = (idx = 0) => {
  let arr = [];
  for (let i = idx; i < idx + 20; i++) {
    arr.push({ uid: \`uid_\${i}\` });
  }
  return arr;
};
export default () => {
  const [data, setData] = useState(getData(0));

  const appendData = () => {
    setData((preData) => {
      return [...preData, ...getData(data.length)];
    });
  };

  return (
    <VirtualList data={data} height={200} itemHeight={32} itemKey="uid" appendData={appendData}>
      {(item: any) => {
        return (
          <div key={item?.uid} style={{ height: 32 }}>
            {item?.uid}
          </div>
        );
      }}
    </VirtualList>
  );
};`},react:{type:"NPM",value:"17.0.2"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.4"}},entry:"index.tsx"},context:{react:e(67294),"@svl-ad/pro-components":e(31842)},renderOpts:{compile:function(){var I=x()(p()().mark(function u(){var s,_=arguments;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(s=a.sent).default.apply(s,_));case 3:case"end":return a.stop()}},u)}));function d(){return I.apply(this,arguments)}return d}()}}}},7408:function(D,o,e){e.r(o),e.d(o,{texts:function(){return i}});const i=[{value:"\u793A\u4F8B:",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"\u7248\u672C",paraId:1,tocIndex:1},{value:"data",paraId:1,tocIndex:1},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:1},{value:"array",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"height",paraId:1,tocIndex:1},{value:"\u5BB9\u5668\u9AD8\u5EA6",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"itemHeight",paraId:1,tocIndex:1},{value:"Item \u9AD8\u5EA6",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"appendData",paraId:1,tocIndex:1},{value:"\u6EDA\u52A8\u52A0\u8F7D\u56DE\u8C03",paraId:1,tocIndex:1},{value:"() => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"itemKey",paraId:1,tocIndex:1},{value:"\u6570\u636E\u6E90\u552F\u4E00 key",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"loading",paraId:1,tocIndex:1},{value:"loading",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1}]}}]);
