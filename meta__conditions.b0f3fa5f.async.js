"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[780],{46123:function(s,d,e){e.r(d),e.d(d,{demos:function(){return _}});var u=e(97983),t=e.n(u),x=e(12741),m=e.n(x),i=e(40794),p=e.n(i),c=e(67294),_={"conditions-demo-0":{component:c.memo(c.lazy(p()(t()().mark(function l(){var r,n,o,I;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=a.sent,n=r.default,a.next=6,Promise.resolve().then(e.bind(e,31842));case 6:return o=a.sent,I=o.Conditions,a.abrupt("return",{default:function(){var f=n.useState({}),v=m()(f,2),E=v[0],C=v[1];return n.createElement("div",null,n.createElement(I,{root:!0,hasGroup:!0,onChange:C,value:E,itemCon:function(){return n.createElement("div",null,"test")}}))}});case 9:case"end":return a.stop()}},l)})))),asset:{type:"BLOCK",id:"conditions-demo-0",refAtomIds:["conditions"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button } from 'antd';
import { Conditions, IConditions } from '@svl-ad/pro-components';

export default () => {
  const [value, setValue] = React.useState<IConditions>({});

  return (
    <div>
      <Conditions root hasGroup onChange={setValue} value={value} itemCon={() => <div>test</div>} />
    </div>
  );
};`},react:{type:"NPM",value:"17.0.2"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.4"}},entry:"index.tsx"},context:{react:e(67294),"@svl-ad/pro-components":e(31842)},renderOpts:{compile:function(){var l=p()(t()().mark(function n(){var o,I=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,I));case 3:case"end":return a.stop()}},n)}));function r(){return l.apply(this,arguments)}return r}()}}}},81298:function(s,d,e){e.r(d),e.d(d,{texts:function(){return u}});const u=[{value:"\u7EC4\u5408\u7B80\u5355\u3001\u590D\u6742\u7684\u6761\u4EF6\u5173\u7CFB",paraId:0,tocIndex:1},{value:"\u793A\u4F8B:",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"\u7248\u672C",paraId:2,tocIndex:2},{value:"root",paraId:2,tocIndex:2},{value:"\u662F\u5426\u4E3A\u6839\u7EC4\u4EF6\uFF0C\u6839\u7EC4\u4EF6\u4E0D\u53EF\u5220\u9664",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"hasGroup",paraId:2,tocIndex:2},{value:"\u662F\u5426\u542B\u6709\u6761\u4EF6\u7EC4",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"deepth",paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u6DF1\u5EA6\uFF0C\u5373\u6761\u4EF6\u7EC4\u5305\u542B\u51E0\u5C42\u6761\u4EF6\u7EC4",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"2",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"maxGroup",paraId:2,tocIndex:2},{value:"\u540C\u7EA7\u6761\u4EF6\u7EC4\u4E2A\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"3",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"maxChild",paraId:2,tocIndex:2},{value:"\u540C\u7EA7\u6761\u4EF6+\u6761\u4EF6\u7EC4\u4E2A\u6570",paraId:2,tocIndex:2},{value:"number",paraId:2,tocIndex:2},{value:"10",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"andText",paraId:2,tocIndex:2},{value:'\u8868\u793A"\u4E14"\u5173\u7CFB\u7684\u6587\u6848',paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"\u4E14",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"orText",paraId:2,tocIndex:2},{value:'\u8868\u793A"\u6216\u201C\u5173\u7CFB\u7684\u6587\u6848',paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"\u6216",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"andOp",paraId:2,tocIndex:2},{value:'\u8868\u793A"\u4E14"\u5173\u7CFB\u7684 op',paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"and",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"orOp",paraId:2,tocIndex:2},{value:'\u8868\u793A"\u6216\u201C\u5173\u7CFB\u7684 op',paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"or",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"nodeOp",paraId:2,tocIndex:2},{value:"\u8868\u793A\u8282\u70B9\u5173\u7CFB\u7684 op",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"node",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"addText",paraId:2,tocIndex:2},{value:"\u6DFB\u52A0\u6761\u4EF6\u6587\u5B57",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"\u6DFB\u52A0\u6761\u4EF6",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"groupText",paraId:2,tocIndex:2},{value:"\u6DFB\u52A0\u6761\u4EF6\u7EC4\u6587\u5B57",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"\u6DFB\u52A0\u6761\u4EF6\u7EC4",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"deleteIcon",paraId:2,tocIndex:2},{value:"\u5220\u9664\u56FE\u6807",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"DeleteOutlined",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"groupIcon",paraId:2,tocIndex:2},{value:"\u6761\u4EF6\u7EC4\u56FE\u6807",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"GroupOutlined",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"addIcon",paraId:2,tocIndex:2},{value:"\u6DFB\u52A0\u56FE\u6807",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"PlusOutlined",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"itemCon",paraId:2,tocIndex:2},{value:"\u5355\u4E2A\u6761\u4EF6\u7EC4\u4EF6",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"value",paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u7684 value \u503C",paraId:2,tocIndex:2},{value:"GroupValue",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u7684 value \u503C\u53D1\u751F\u53D8\u5316\u65F6\u56DE\u8C03",paraId:2,tocIndex:2},{value:"(params: any) => void",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"onDelete",paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u5220\u9664\u65F6\u56DE\u8C03",paraId:2,tocIndex:2},{value:"(params: any) => void",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"op",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u5173\u7CFB\u6216\u7C7B\u578B",paraId:3,tocIndex:3},{value:"children",paraId:3,tocIndex:3},{value:"\u5B50\u8282\u70B9",paraId:3,tocIndex:3},{value:"GroupValue[]",paraId:3,tocIndex:3},{value:"data",paraId:3,tocIndex:3},{value:"\u5355\u4E2A\u8282\u70B9 value",paraId:3,tocIndex:3},{value:"Record<string, any>",paraId:3,tocIndex:3}]}}]);
