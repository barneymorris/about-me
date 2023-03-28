"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4121],{6784:(ee,L,i)=>{i.r(L),i.d(L,{default:()=>V});var e=i(67294),a=i(95489),C=i(87751),O=i(49656),P=i(97132),t=i(28702),E=i(41363),x=i(18172),H=i(36968),K=i.n(H);const I={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},G=(r,s)=>(0,x.default)(r,l=>{switch(s.type){case"GET_DATA_SUCCEEDED":{l.webhooks=s.data,l.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{l.loadingWebhooks=!r.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{K()(l,["webhooks",...s.keys],s.value);break}case"SET_WEBHOOK_TO_DELETE":{l.webhookToDelete=s.id;break}case"SET_WEBHOOKS_TO_DELETE":{s.value?l.webhooksToDelete.push(s.id):l.webhooksToDelete=r.webhooksToDelete.filter(d=>d!==s.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{r.webhooksToDelete.length===0?l.webhooksToDelete=r.webhooks.map(d=>d.id):l.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{l.webhooks=r.webhooks.filter(d=>!r.webhooksToDelete.includes(d.id)),l.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{l.webhooks=r.webhooks.filter((d,g)=>g!==s.index),l.webhookToDelete=null;break}default:return l}}),N=()=>{const{isLoading:r,allowedActions:{canCreate:s,canRead:l,canUpdate:d,canDelete:g}}=(0,a.useRBAC)(C.Z.settings.webhooks),b=(0,a.useNotification)(),h=(0,e.useRef)(!0),{formatMessage:n}=(0,P.useIntl)(),[$,T]=(0,e.useState)(!1),[{webhooks:k,webhooksToDelete:y,webhookToDelete:D,loadingWebhooks:p},u]=(0,e.useReducer)(G,I),{notifyStatus:R}=(0,t.useNotifyAT)();(0,a.useFocusWhenNavigate)();const{push:U}=(0,O.useHistory)(),{pathname:S}=(0,O.useLocation)(),f=k.length,m=y.length,B=o=>k.findIndex(c=>c.id===o);(0,e.useEffect)(()=>(h.current=!0,()=>{h.current=!1}),[]),(0,e.useEffect)(()=>{l&&F()},[l]);const F=async()=>{try{const{data:o}=await(0,a.request)("/admin/webhooks",{method:"GET"});h.current&&(u({type:"GET_DATA_SUCCEEDED",data:o}),R("webhooks have been loaded"))}catch(o){console.log(o),h.current&&(o.code!==20&&b({type:"warning",message:{id:"notification.error"}}),u({type:"TOGGLE_LOADING"}))}},z=()=>{T(o=>!o)},Z=()=>{D?j():J()},j=async()=>{try{await(0,a.request)(`/admin/webhooks/${D}`,{method:"DELETE"}),u({type:"WEBHOOK_DELETED",index:B(D)})}catch(o){o.code!==20&&b({type:"warning",message:{id:"notification.error"}})}T(!1)},J=async()=>{const o={ids:y};try{await(0,a.request)("/admin/webhooks/batch-delete",{method:"POST",body:o}),h.current&&u({type:"WEBHOOKS_DELETED"})}catch(c){h.current&&c.code!==20&&b({type:"warning",message:{id:"notification.error"}})}T(!1)},W=o=>{T(!0),o!=="all"&&u({type:"SET_WEBHOOK_TO_DELETE",id:o})},Q=async(o,c)=>{const M=B(c),q=k[M],v=[M,"isEnabled"],A={...q,isEnabled:o};delete A.id;try{u({type:"SET_WEBHOOK_ENABLED",keys:v,value:o}),await(0,a.request)(`/admin/webhooks/${c}`,{method:"PUT",body:A})}catch(_){h.current&&(u({type:"SET_WEBHOOK_ENABLED",keys:v,value:!o}),_.code!==20&&b({type:"warning",message:{id:"notification.error"}}))}},X=()=>{u({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Y=(o,c)=>{u({type:"SET_WEBHOOKS_TO_DELETE",value:o,id:c})},w=o=>{U(`${S}/${o}`)};return e.createElement(t.Layout,null,e.createElement(a.SettingsPageTitle,{name:"Webhooks"}),e.createElement(t.Main,{"aria-busy":r||p},e.createElement(t.HeaderLayout,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:s&&!p&&e.createElement(a.LinkButton,{startIcon:e.createElement(E.Plus,null),variant:"default",to:`${S}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),m>0&&g&&e.createElement(t.ActionLayout,{startActions:e.createElement(e.Fragment,null,e.createElement(t.Typography,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:m})),e.createElement(t.Button,{onClick:()=>W("all"),startIcon:e.createElement(E.Trash,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(t.ContentLayout,null,r||p?e.createElement(t.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(a.LoadingIndicatorPage,null)):e.createElement(e.Fragment,null,f>0?e.createElement(t.Table,{colCount:5,rowCount:f+1,footer:e.createElement(t.TFooter,{onClick:()=>s?w("create"):{},icon:e.createElement(E.Plus,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(t.Thead,null,e.createElement(t.Tr,null,e.createElement(t.Th,null,e.createElement(t.BaseCheckbox,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:m>0&&m<f,value:m===f,onValueChange:X})),e.createElement(t.Th,{width:"20%"},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(t.Th,{width:"60%"},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(t.Th,{width:"20%"},e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(t.Th,null,e.createElement(t.VisuallyHidden,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(t.Tbody,null,k.map(o=>e.createElement(t.Tr,{key:o.id,...(0,a.onRowClick)({fn:()=>w(o.id),condition:d})},e.createElement(t.Td,{...a.stopPropagation},e.createElement(t.BaseCheckbox,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${o.name}`,value:y?.includes(o.id),onValueChange:c=>Y(c,o.id),id:"select",name:"select"})),e.createElement(t.Td,null,e.createElement(t.Typography,{fontWeight:"semiBold",textColor:"neutral800"},o.name)),e.createElement(t.Td,null,e.createElement(t.Typography,{textColor:"neutral800"},o.url)),e.createElement(t.Td,null,e.createElement(t.Flex,{...a.stopPropagation},e.createElement(t.Switch,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${o.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:o.isEnabled,onChange:()=>Q(!o.isEnabled,o.id),visibleLabels:!0}))),e.createElement(t.Td,null,e.createElement(t.Stack,{horizontal:!0,spacing:1,...a.stopPropagation},d&&e.createElement(t.IconButton,{onClick:()=>{w(o.id)},label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(E.Pencil,null),noBorder:!0}),g&&e.createElement(t.IconButton,{onClick:()=>W(o.id),label:n({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(E.Trash,null),noBorder:!0,id:`delete-${o.id}`}))))))):e.createElement(t.EmptyStateLayout,{icon:e.createElement(E.EmptyDocuments,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(t.Button,{variant:"secondary",startIcon:e.createElement(E.Plus,null),onClick:()=>s?w("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),e.createElement(a.ConfirmDialog,{isOpen:$,onToggleDialog:z,onConfirm:Z}))},V=()=>e.createElement(a.CheckPagePermissions,{permissions:C.Z.settings.webhooks.main},e.createElement(N,null))}}]);
