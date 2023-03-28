"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2282],{8971:(Y,B,n)=>{n.r(B),n.d(B,{ProvidersPage:()=>V,default:()=>oe});var e=n(67294),O=n(97132),s=n(95489),S=n(18721),W=n.n(S),Z=n(11700),U=n.n(Z),t=n(28702),R=n(41363),P=n(23724),r=n(53209),o=n(89031);const M={id:(0,o.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},T={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},w={id:(0,o.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},x={id:(0,o.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},G={id:(0,o.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},X={id:(0,o.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},C={id:(0,o.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},$={id:(0,o.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},I={email:{form:[[{intlLabel:x,name:"enabled",type:"bool",description:w,size:6}]],schema:r.Ry().shape({enabled:r.Xg().required(s.translatedErrors.required)})},providers:{form:[[{intlLabel:x,name:"enabled",type:"bool",description:w,size:6,validations:{required:!0}}],[{intlLabel:G,name:"key",type:"text",placeholder:C,size:12,validations:{required:!0}}],[{intlLabel:$,name:"secret",type:"text",placeholder:C,size:12,validations:{required:!0}}],[{intlLabel:M,placeholder:T,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:X,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:r.Ry().shape({enabled:r.Xg().required(s.translatedErrors.required),key:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()}),secret:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()}),callback:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:x,name:"enabled",type:"bool",description:w,size:6,validations:{required:!0}}],[{intlLabel:G,name:"key",type:"text",placeholder:C,size:12,validations:{required:!0}}],[{intlLabel:$,name:"secret",type:"text",placeholder:C,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,o.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:C,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,o.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,o.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:M,placeholder:T,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:X,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:r.Ry().shape({enabled:r.Xg().required(s.translatedErrors.required),key:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()}),secret:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()}),subdomain:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()}),callback:r.Z_().when("enabled",{is:!0,then:r.Z_().required(s.translatedErrors.required),otherwise:r.Z_()})})}},_=async i=>{try{const{get:d}=(0,s.getFetchClient)(),{data:m}=await d((0,o.Gc)("providers"));return m}catch{throw i({type:"warning",message:{id:"notification.error"}}),new Error("error")}},ee=i=>{const{put:d}=(0,s.getFetchClient)();return d((0,o.Gc)("providers"),i)};var te=n(96486);const ae=i=>(0,te.sortBy)(Object.keys(i).reduce((d,m)=>{const{icon:g,enabled:c,subdomain:v}=i[m],p=g==="envelope"?["fas","envelope"]:["fab",g];return v!==void 0?d.push({name:m,icon:p,enabled:c,subdomain:v}):d.push({name:m,icon:p,enabled:c}),d},[]),"name");var Q=n(81912),re=n(45697),a=n.n(re),se=n(80831);const z=({description:i,disabled:d,intlLabel:m,error:g,name:c,onChange:v,placeholder:p,providerToEditName:y,type:h,value:l})=>{const{formatMessage:b}=(0,O.useIntl)(),E=c==="noName"?`${strapi.backendURL}/api/connect/${y}/callback`:l,L=b({id:m.id,defaultMessage:m.defaultMessage},{provider:y,...m.values}),f=i?b({id:i.id,defaultMessage:i.defaultMessage},{provider:y,...i.values}):"";if(h==="bool")return e.createElement(t.ToggleInput,{"aria-label":c,checked:l,disabled:d,hint:f,label:L,name:c,offLabel:b({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:b({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:q=>{v({target:{name:c,value:q.target.checked}})}});const A=p?b({id:p.id,defaultMessage:p.defaultMessage},{...p.values}):"",j=g?b({id:g,defaultMessage:g}):"";return e.createElement(t.TextInput,{"aria-label":c,disabled:d,error:j,label:L,name:c,onChange:v,placeholder:A,type:h,value:E})};z.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},z.propTypes={description:a().shape({id:a().string.isRequired,defaultMessage:a().string.isRequired,values:a().object}),disabled:a().bool,error:a().string,intlLabel:a().shape({id:a().string.isRequired,defaultMessage:a().string.isRequired,values:a().object}).isRequired,name:a().string.isRequired,onChange:a().func.isRequired,placeholder:a().shape({id:a().string.isRequired,defaultMessage:a().string.isRequired,values:a().object}),providerToEditName:a().string.isRequired,type:a().string.isRequired,value:a().oneOfType([a().bool,a().string])};const ne=z,N=({headerBreadcrumbs:i,initialData:d,isSubmiting:m,layout:g,isOpen:c,onSubmit:v,onToggle:p,providerToEditName:y})=>{const{formatMessage:h}=(0,O.useIntl)();return c?e.createElement(t.ModalLayout,{onClose:p,labelledBy:"title"},e.createElement(t.ModalHeader,null,e.createElement(t.Breadcrumbs,{label:i.join(", ")},i.map(l=>e.createElement(t.Crumb,{key:l},l)))),e.createElement(se.Formik,{onSubmit:l=>v(l),initialValues:d,validationSchema:g.schema,validateOnChange:!1},({errors:l,handleChange:b,values:E})=>e.createElement(s.Form,null,e.createElement(t.ModalBody,null,e.createElement(t.Stack,{spacing:1},e.createElement(t.Grid,{gap:5},g.form.map(L=>L.map(f=>e.createElement(t.GridItem,{key:f.name,col:f.size,xs:12},e.createElement(ne,{...f,error:l[f.name],onChange:b,value:E[f.name],providerToEditName:y}))))))),e.createElement(t.ModalFooter,{startActions:e.createElement(t.Button,{variant:"tertiary",onClick:p,type:"button"},h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(t.Button,{type:"submit",loading:m},h({id:"global.save",defaultMessage:"Save"}))})))):null};N.defaultProps={initialData:null,providerToEditName:null},N.propTypes={headerBreadcrumbs:a().arrayOf(a().string).isRequired,initialData:a().object,layout:a().shape({form:a().arrayOf(a().array),schema:a().object}).isRequired,isOpen:a().bool.isRequired,isSubmiting:a().bool.isRequired,onSubmit:a().func.isRequired,onToggle:a().func.isRequired,providerToEditName:a().string};const ie=N,V=()=>{const{formatMessage:i}=(0,O.useIntl)();(0,s.useFocusWhenNavigate)();const{notifyStatus:d}=(0,t.useNotifyAT)(),m=(0,P.useQueryClient)(),{trackUsage:g}=(0,s.useTracking)(),c=(0,e.useRef)(g),[v,p]=(0,e.useState)(!1),[y,h]=(0,e.useState)(!1),[l,b]=(0,e.useState)(null),E=(0,s.useNotification)(),{lockApp:L,unlockApp:f}=(0,s.useOverlayBlocker)(),A=(0,e.useMemo)(()=>({update:Q.Z.updateProviders}),[]),{isLoading:j,allowedActions:{canUpdate:q}}=(0,s.useRBAC)(A),{isLoading:le,data:k,isFetching:de}=(0,P.useQuery)("get-providers",()=>_(E),{onSuccess(){d(i({id:(0,o.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),ue=le||de,ce=(0,P.useMutation)(ee,{async onSuccess(){await m.invalidateQueries("get-providers"),E({type:"info",message:{id:(0,o.OB)("notification.success.submit")}}),c.current("didEditAuthenticationProvider"),h(!1),D(),f()},onError(){E({type:"warning",message:{id:"notification.error"}}),f(),h(!1)},refetchActive:!1}),F=(0,e.useMemo)(()=>ae(k),[k]),me=F.length,J=(0,e.useMemo)(()=>{if(!l)return!1;const u=F.find(H=>H.name===l);return W()(u,"subdomain")},[F,l]),pe=i({id:(0,o.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),ge=(0,e.useMemo)(()=>l==="email"?I.email:J?I.providersWithSubdomain:I.providers,[l,J]),D=()=>{p(u=>!u)},K=u=>{q&&(b(u.name),D())},be=async u=>{h(!0),L(),c.current("willEditAuthenticationProvider");const H={...k,[l]:u};ce.mutate({providers:H})};return e.createElement(t.Layout,null,e.createElement(s.SettingsPageTitle,{name:pe}),e.createElement(t.Main,null,e.createElement(t.HeaderLayout,{title:i({id:(0,o.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),ue||j?e.createElement(s.LoadingIndicatorPage,null):e.createElement(t.ContentLayout,null,e.createElement(t.Table,{colCount:3,rowCount:me+1},e.createElement(t.Thead,null,e.createElement(t.Tr,null,e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},i({id:(0,o.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma"},e.createElement(t.VisuallyHidden,null,i({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(t.Tbody,null,F.map(u=>e.createElement(t.Tr,{key:u.name,...(0,s.onRowClick)({fn:()=>K(u),condition:q})},e.createElement(t.Td,{width:"45%"},e.createElement(t.Typography,{fontWeight:"semiBold",textColor:"neutral800"},u.name)),e.createElement(t.Td,{width:"65%"},e.createElement(t.Typography,{textColor:u.enabled?"success600":"danger600","data-testid":`enable-${u.name}`},u.enabled?i({id:"global.enabled",defaultMessage:"Enabled"}):i({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(t.Td,{...s.stopPropagation},q&&e.createElement(t.IconButton,{onClick:()=>K(u),noBorder:!0,icon:e.createElement(R.Pencil,null),label:"Edit"})))))))),e.createElement(ie,{initialData:k[l],isOpen:v,isSubmiting:y,layout:ge,headerBreadcrumbs:[i({id:(0,o.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),U()(l)],onToggle:D,onSubmit:be,providerToEditName:l}))},oe=()=>e.createElement(s.CheckPagePermissions,{permissions:Q.Z.readProviders},e.createElement(V,null))},89031:(Y,B,n)=>{n.d(B,{YX:()=>s,Gc:()=>Z,OB:()=>U.Z});var e=n(96486);const s=t=>Object.keys(t).reduce((R,P)=>{const r=t[P].controllers,o=Object.keys(r).reduce((M,T)=>((0,e.isEmpty)(r[T])||(M[T]=r[T]),M),{});return(0,e.isEmpty)(o)||(R[P]={controllers:o}),R},{});var S=n(31498);const Z=t=>`/${S.Z}/${t}`;var U=n(84757)}}]);
