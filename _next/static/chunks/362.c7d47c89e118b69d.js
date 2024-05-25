(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{4362:function(e,n,l){"use strict";l.r(n);var r=l(5893),a=l(1664),i=l.n(a),s=l(1163),t=l(2578),d=l(4991),c=l(9708),u=l(3389);n.default=(0,u.Z)(function(){var e;let n=(0,s.useRouter)(),a=(0,t.useLazyLoadQuery)(l(8103),{id:n.query.setId});return a.set?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h3",{children:[(0,r.jsx)(i(),{href:"/series",children:"Pokemon TCG"}),(0,r.jsx)("i",{className:"bi-chevron-right"})," ",(0,r.jsx)("small",{children:"SERIES:"})," ",(0,r.jsx)(i(),{href:"/series/".concat(n.query.serieId),children:(0,r.jsx)("em",{children:a.set.serie.name})}),(0,r.jsx)("i",{className:"bi-chevron-right"})," ",(0,r.jsx)("small",{children:"SET:"})," ",(0,r.jsx)("em",{children:a.set.name})]}),(0,r.jsxs)(d.Z,{responsive:!0,size:"sm",striped:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Category"}),(0,r.jsx)("th",{children:"HP"}),(0,r.jsx)("th",{children:"Level"}),(0,r.jsx)("th",{children:"Rarity"}),(0,r.jsx)("th",{children:"Legal"})]})}),(0,r.jsx)("tbody",{children:null===(e=a.set.cards)||void 0===e?void 0:e.filter(c.K).map(e=>{var n,l;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i(),{href:"/series/".concat(null===(n=a.set)||void 0===n?void 0:n.serie.id,"/sets/").concat(null===(l=a.set)||void 0===l?void 0:l.id,"/cards/").concat(e.id),children:(0,r.jsxs)("div",{className:"d-flex align-items-center gap-3",children:[e.image?(0,r.jsx)("img",{src:"".concat(e.image,"/low.webp"),width:40,height:55}):(0,r.jsx)("div",{style:{width:80}}),e.name]})})}),(0,r.jsx)("td",{children:e.category}),(0,r.jsx)("td",{children:e.hp}),(0,r.jsx)("td",{children:e.level}),(0,r.jsx)("td",{children:e.rarity}),(0,r.jsx)("td",{children:e.legal.standard?"Standard":e.legal.expanded?"Expanded":""})]},e.id)})})]})]}):(0,r.jsx)("h3",{children:"Set not found"})})},8103:function(e,n,l){"use strict";var r,a,i,s;l.r(n);let t={fragment:{argumentDefinitions:r=[{defaultValue:null,kind:"LocalArgument",name:"id"}],kind:"Fragment",metadata:null,name:"SetPageQuery",selections:s=[{alias:null,args:[{fields:[{kind:"Variable",name:"id",variableName:"id"}],kind:"ObjectValue",name:"filters"}],concreteType:"Set",kind:"LinkedField",name:"set",plural:!1,selections:[{alias:null,args:null,concreteType:"Card",kind:"LinkedField",name:"cards",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hp",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null},{alias:null,args:null,concreteType:"Legal",kind:"LinkedField",name:"legal",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"expanded",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"standard",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"level",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"rarity",storageKey:null}],storageKey:null},a,i,{alias:null,args:null,concreteType:"Serie",kind:"LinkedField",name:"serie",plural:!1,selections:[a,i],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:r,kind:"Operation",name:"SetPageQuery",selections:s},params:{cacheID:"be3ba74d41981d32238be25fc0f83a67",id:null,metadata:{},name:"SetPageQuery",operationKind:"query",text:"query SetPageQuery(\n  $id: String\n) {\n  set(filters: {id: $id}) {\n    cards {\n      category\n      hp\n      id\n      image\n      legal {\n        expanded\n        standard\n      }\n      level\n      name\n      rarity\n    }\n    id\n    name\n    serie {\n      id\n      name\n    }\n  }\n}\n"}};t.hash="d43af8e02b4bd188cc1c01e8906623a8",n.default=t},9708:function(e,n,l){"use strict";function r(e){return null!=e}l.d(n,{K:function(){return r}})},3389:function(e,n,l){"use strict";l.d(n,{Z:function(){return h}});var r=l(5893),a=l(7294),i=l(2578),s=l(3637);class t extends a.Component{static getDerivedStateFromError(e){return{error:e,hasError:!0}}componentDidCatch(e){console.error(e)}render(){return this.state.hasError?(0,r.jsxs)("div",{children:["ERROR: ",String(this.state.error)]}):(0,r.jsx)(r.Fragment,{children:this.props.children})}constructor(...e){super(...e),this.state={error:null,hasError:!1}}}var d=l(4311);let c=d.Network.create(function(e,n){return fetch("https://api.tcgdex.net/v2/graphql",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:e.text,variables:n})}).then(e=>e.json())}),u=new d.Store(new d.RecordSource),o=new d.Environment({network:c,store:u});function h(e){return function(n){return(0,r.jsx)(i.RelayEnvironmentProvider,{environment:o,children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(t,{children:(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(e,{...n})})})})})}}},1163:function(e,n,l){e.exports=l(9090)}}]);