webpackJsonp([1],{"4SZe":function(e,t){},F0t6:function(e,t){},LPxn:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},o,!1,function(e){a("ghkR")},null,null).exports,r=a("/ocq"),s=a("//Fk"),l=a.n(s),u=a("mtWM"),c=a.n(u);c.a.defaults.baseURL="http://www.lovegf.cn:8888/api/private/v1/",c.a.interceptors.request.use(function(e){var t=localStorage.getItem("mytoken");return t&&(e.headers.Authorization=t),e},function(e){return l.a.reject(e)});var m=function(e){return c.a.get("users",e).then(function(e){return e.data})},d=function(e){return c.a.get("roles",e).then(function(e){return e.data})},p={methods:{logimSubmit:function(e){var t=this;this.$refs[e].validate(function(e){var a;e?(a=t.form,c.a.post("login",a).then(function(e){return e.data})).then(function(e){200===e.meta.status?(localStorage.setItem("mytoken",e.data.token),t.$store.commit("setUsername",e.data.username),t.$router.push({name:"Home"})):t.message({type:"error",message:e.meta.msg})}):console.log("校验不通过")})}},data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("el-form",{ref:"form",staticClass:"container",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:a("lS+k"),alt:""}})])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{placeholder:"账户","prefix-icon":"myicon myicon-user"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{placeholder:"密码","prefix-icon":"myicon myicon-key",type:"password"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.logimSubmit("form")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),n("el-button",{staticClass:"login-btn",attrs:{type:"primary",plain:""},on:{click:function(t){e.logimSubmit("form")}}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var g=a("VU/8")(p,f,!1,function(e){a("F0t6")},"data-v-56d6fefc",null).exports,v={data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},toggle:function(){this.isCollapse=!this.isCollapse},logout:function(){localStorage.removeItem("mytoken"),this.$router.push({name:"Login"})}},mounted:function(){m({params:{query:"",pagenum:1,pagesize:1}}).then(function(e){console.log(e)})}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("el-container",[a("el-aside",{attrs:{width:"auto"}},[a("div",{staticClass:"logo"},[e._v("\n        仿写后台\n      ")]),e._v(" "),a("el-menu",{staticClass:"el-menu-admin",attrs:{"unique-opened":!0,router:!0,collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),e._v(" "),a("span",[e._v("用户管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/user"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("用户列表")])])],2),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),e._v(" "),a("span",[e._v("权限管理")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/rights"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("权限列表")])]),e._v(" "),a("el-menu-item",{attrs:{index:"/roles"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("角色列表")])])],2)],1)],1),e._v(" "),a("el-container",[a("el-header",[a("i",{staticClass:"myicon myicon-menu toggle-btn",on:{click:e.toggle}}),e._v(" "),a("div",{staticClass:"system-title"},[e._v("电商后台管理")]),e._v(" "),a("div",[a("span",{staticClass:"welcome"},[e._v("\n            您好, "+e._s(e.$store.getters.username)+"\n          ")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.logout}},[e._v("退出")])],1)]),e._v(" "),a("el-main",[a("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(v,h,!1,function(e){a("vi9I")},"data-v-1cd489fa",null).exports,_={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  御剑乘风来,除魔天地间! 水电费第三方\n")])},staticRenderFns:[]};var y=a("VU/8")({},_,!1,function(e){a("hzw2")},"data-v-de126fe8",null).exports,w={data:function(){return{loading:!0,userList:[],query:"",total:0,pagesize:7,pagenum:1,dialogFormVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},editlogFormVisible:!1,editForm:{username:"",email:"",mobile:"",id:0},grantlogFormVisible:!1,grantForm:{},roleList:[],itemId:"",rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}],mobile:[{required:!0,message:"电话不能为空"}]}}},created:function(){this.initList()},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pagesize=e,this.initList()},handleCurrentChange:function(e){console.log("当前页: "+e),this.pagenum=e,this.initList()},initList:function(){var e=this;this.loading=!0,m({params:{query:this.query,pagenum:this.pagenum,pagesize:this.pagesize}}).then(function(t){console.log(t),e.userList=t.data.users,e.total=t.data.total,e.loading=!1})},change:function(e){var t,a=this;console.log(e),(t={uId:e.id,type:e.mg_state},c.a.put("users/"+t.uId+"/state/"+t.type).then(function(e){return e.data})).then(function(e){200===e.meta.status?a.$message({type:"success",message:"修改用户状态成功"}):a.$message({type:"warning",message:e.meta.msg})})},addUserSubmit:function(e){var t=this;this.$refs[e].validate(function(e){var a;e&&(a=t.addForm,c.a.post("users",a).then(function(e){return e.data})).then(function(e){201===e.meta.status&&t.$message({type:"success",message:"创建用户成功"}),t.dialogFormVisible=!1,t.initList()})})},showEditDialog:function(e){var t,a=this;this.editlogFormVisible=!0,(t=e.id,c.a.get("users/"+t).then(function(e){return e.data})).then(function(e){200===e.meta.status&&(a.editForm.username=e.data.username,a.editForm.email=e.data.email,a.editForm.mobile=e.data.mobile,a.editForm.id=e.data.id)})},editUserSubmit:function(e){var t=this;this.$refs[e].validate(function(e){var a;e&&(a=t.editForm,c.a.put("users/"+a.id,a).then(function(e){return e.data})).then(function(e){200===e.meta.status&&(t.$message({type:"success",message:"编辑成功!"}),t.editlogFormVisible=!1,t.initList())})})},showDeleteDialog:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a=e.id,c.a.delete("users/"+a).then(function(e){return e.data})).then(function(e){200===e.meta.status&&(t.$message({type:"success",message:"删除成功!"}),t.initList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},showGrantDialog:function(e){var t=this;console.log(e),this.grantForm=e,this.grantlogFormVisible=!0,d().then(function(e){200===e.meta.status&&(t.roleList=e.data)})},grantUserSubmit:function(){var e,t=this;this.itemId?(e={id:this.grantForm.id,rid:this.itemId},c.a.put("users/"+e.id+"/role",{id:e.id,rid:e.rid}).then(function(e){return e.data})).then(function(e){200===e.meta.status?(t.$message({type:"success",message:"设置角色成功"}),t.grantlogFormVisible=!1):t.$message({type:"error",message:e.meta.msg})}):this.$message({type:"error",message:"角色不能为空,请选择! "})}}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("用户管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("用户列表")])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入内容"},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.initList(t):null}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.initList},slot:"append"})],1),e._v(" "),a("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加用户")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"margin-20",staticStyle:{width:"100%"},attrs:{data:e.userList,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{on:{change:function(a){e.change(t.row)}},model:{value:t.row.mg_state,callback:function(a){e.$set(t.row,"mg_state",a)},expression:"scope.row.mg_state"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",plain:"",icon:"el-icon-edit"},on:{click:function(a){e.showEditDialog(t.row)}}}),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",plain:"",icon:"el-icon-delete"},on:{click:function(a){e.showDeleteDialog(t.row)}}}),e._v(" "),a("el-button",{attrs:{size:"mini",type:"warning",plain:"",icon:"el-icon-check"},on:{click:function(a){e.showGrantDialog(t.row)}}})]}}])})],1),e._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30,40],"page-size":1,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"addUserForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{attrs:{"auto-complete":"off"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.addUserSubmit("addUserForm")}},model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addUserSubmit("addUserForm")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑用户",visible:e.editlogFormVisible},on:{"update:visible":function(t){e.editlogFormVisible=t}}},[a("el-form",{ref:"editUserForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!0},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{attrs:{"auto-complete":"off"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.editUserSubmit("editUserForm")}},model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editlogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editUserSubmit("editUserForm")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"分配角色",visible:e.grantlogFormVisible},on:{"update:visible":function(t){e.grantlogFormVisible=t}}},[a("el-form",{attrs:{model:e.grantForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"当前的用户",prop:"username"}},[a("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.grantForm.username))])],1),e._v(" "),a("el-form-item",{attrs:{label:"请选择角色"}},[a("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.itemId,callback:function(t){e.itemId=t},expression:"itemId"}},e._l(e.roleList,function(e,t){return a("el-option",{key:t,attrs:{label:e.roleName,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.grantlogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.grantUserSubmit()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var k=a("VU/8")(w,F,!1,function(e){a("4SZe")},"data-v-a8b2806a",null).exports,x={data:function(){return{loading:!0,rightList:[]}},filters:{fmtLevel:function(e){return"0"===e?"一级":"1"===e?"二级":"三级"}},created:function(){var e,t=this;this.loading=!0,(e={type:"list"},c.a.get("rights/"+e.type).then(function(e){return e.data})).then(function(e){200===e.meta.status&&(t.rightList=e.data,t.loading=!1)})}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("权限管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("权限列表")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.rightList,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authName",label:"权限名称",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"path",label:"路径"}}),e._v(" "),a("el-table-column",{attrs:{label:"层级"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("fmtLevel")(t.row.level)))])]}}])})],1)],1)},staticRenderFns:[]};var $=a("VU/8")(x,C,!1,function(e){a("LPxn")},"data-v-2a98f0cd",null).exports,S={data:function(){return{roleList:[]}},created:function(){var e=this;d().then(function(t){200===t.meta.status&&(console.log(t),e.roleList=t.data)})},methods:{deleteRight:function(e,t){var a,n=this;(a={roleId:e.id,rightId:t},c.a.delete("roles/"+a.roleId+"/rights/"+a.rightId).then(function(e){return e.data})).then(function(t){200===t.meta.status?e.children=t.data:n.$message({typr:"error",message:t.meta.msg})})}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),a("el-breadcrumb-item",[e._v("权限管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("角色列表")])],1)],1)],1),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""}},[e._v("添加角色")]),e._v(" "),a("el-table",{staticClass:"mt-20",staticStyle:{width:"100%"},attrs:{border:"",data:e.roleList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.children,function(n){return a("el-row",{key:n.id},[a("el-col",{attrs:{span:4}},[a("el-tag",{attrs:{closable:""},on:{close:function(a){e.deleteRight(t.row,n.id)}}},[e._v(e._s(n.authName))]),e._v(" "),n.children.length?a("i",{staticClass:"el-icon-arrow-right"}):e._e()],1),e._v(" "),a("el-col",{attrs:{span:20}},e._l(n.children,function(n){return a("el-row",{key:n.id},[a("el-col",{attrs:{span:4}},[a("el-tag",{attrs:{closable:"",type:"success"},on:{close:function(a){e.deleteRight(t.row,n.id)}}},[e._v(e._s(n.authName))]),e._v(" "),n.children.length?a("i",{staticClass:"el-icon-arrow-right"}):e._e()],1),e._v(" "),a("el-col",{attrs:{span:20}},e._l(n.children,function(n){return a("el-tag",{key:n.id,attrs:{closable:"",type:"warning"},on:{close:function(a){e.deleteRight(t.row,n.id)}}},[e._v("\n                           "+e._s(n.authName)+"\n                      ")])}))],1)}))],1)}),e._v(" "),0===t.row.children.length?a("el-row",[a("el-col",{attrs:{span:24}},[e._v("该角色没有分配权限, 请前往分配!  ")])],1):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"角色名称",prop:"roleName",width:"165px"}}),e._v(" "),a("el-table-column",{attrs:{label:"描述",prop:"roleDesc",width:"130px"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",plain:"",icon:"el-icon-edit"}}),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",plain:"",icon:"el-icon-delete"}}),e._v(" "),a("el-button",{attrs:{size:"mini",type:"warning",plain:"",icon:"el-icon-check"}})]}}])})],1)],1)},staticRenderFns:[]};var U=a("VU/8")(S,L,!1,function(e){a("jKNS")},"data-v-f18ee62c",null).exports;n.default.use(r.a);var V=new r.a({routes:[{path:"/login",name:"Login",component:g},{path:"/",name:"Home",component:b,redirect:{path:"welcome"},children:[{path:"welcome",name:"Welcome",component:y},{path:"user",name:"User",component:k},{path:"rights",name:"Rights",component:$},{path:"roles",name:"Roles",component:U}]}]}),z=a("zL8q"),I=a.n(z),R=(a("tvR6"),a("yh13"),a("NYxO"));n.default.use(R.a);var q={setUsername:function(e,t){e.username=t,localStorage.setItem("username",t)}},E={username:function(e){return localStorage.getItem("username")}},N=new R.a.Store({state:{username:""},getters:E,actions:{},mutations:q});n.default.use(I.a),n.default.config.productionTip=!1,V.beforeEach(function(e,t,a){localStorage.getItem("mytoken")?a():"/login"!==e.path?a({path:"/login"}):a()}),new n.default({el:"#app",router:V,store:N,components:{App:i},template:"<App/>"})},ghkR:function(e,t){},hzw2:function(e,t){},jKNS:function(e,t){},"lS+k":function(e,t,a){e.exports=a.p+"static/img/avatar.520d72a.jpg"},tvR6:function(e,t){},vi9I:function(e,t){},yh13:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f0174464272ba64c8448.js.map