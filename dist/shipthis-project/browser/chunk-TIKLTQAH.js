import{a as N,b as f,d as M,e as q,f as T,h as C,i as P,j,k as G,l as B,n as D}from"./chunk-7B53O55D.js";import{g as E,i as b,wa as A,xa as I}from"./chunk-F5JJTGBE.js";import"./chunk-F5FW6J2J.js";import{Cb as S,Eb as w,Mb as a,Qb as F,Va as l,Wa as c,ga as x,ib as s,kb as d,pb as h,qc as k,sc as y,tb as o,ub as t,vb as g,wb as v,xb as _}from"./chunk-344WNGFA.js";import"./chunk-KT3CPUTC.js";function R(e,u){e&1&&(o(0,"small",15),a(1,"Email is required"),t())}function V(e,u){e&1&&(o(0,"small",15),a(1,"Invalid email address"),t())}function O(e,u){if(e&1&&(v(0),s(1,R,2,0,"small",15)(2,V,2,0,"small",15),_()),e&2){let n,r=w();l(),h(!((n=r.loginForm.get("email"))==null||n.errors==null)&&n.errors.required?1:2)}}function U(e,u){e&1&&(v(0),o(1,"small",15),a(2,"Password is required"),t(),_())}function W(e,u){e&1&&g(0,"span",12)}var Y=(()=>{class e{authService;snackBar;router;loginForm=new T({email:new C("",[f.required,f.email]),password:new C("",[f.required])});loading=!1;constructor(n,r,i){this.authService=n,this.snackBar=r,this.router=i}onSubmit(){if(this.loginForm.markAllAsTouched(),this.loginForm.invalid)return;this.loading=!0;let n=this.loginForm.getRawValue();this.authService.loginUser(n?.email,n?.password).then(()=>{this.snackBar.open("Welcome to FletNix!",void 0,{panelClass:"success-snackbar"}),this.router.navigate([`/${b.dashboard.base()}`]),this.authService.saveUserInfo(!0)},r=>{this.loading=!1,this.router.navigate([`/${b.auth.register()}`]),this.snackBar.open("Account not found. Please register first",void 0,{panelClass:"error-snackbar"}),this.authService.saveUserInfo(!1)})}static \u0275fac=function(r){return new(r||e)(c(I),c(A),c(E))};static \u0275cmp=x({type:e,selectors:[["app-auth"]],standalone:!0,features:[F],decls:24,vars:5,consts:[[1,"relative","image-background","min-h-screen","flex","items-center","justify-center","lg:justify-start"],[1,"absolute","top-0","left-0","p-4","text-3xl","text-white","font-extrabold"],[1,"card","glass","md:ml-20","w-full","max-w-sm","shrink-0","shadow-2xl"],[1,"card-body",3,"ngSubmit","formGroup"],[1,"form-control"],[1,"label"],[1,"label-text"],["formControlName","email","type","email","placeholder","Email","required","",1,"input","input-bordered"],[4,"ngIf"],["formControlName","password","type","password","placeholder","Password","required","",1,"input","input-bordered"],[1,"form-control","mt-6"],[1,"btn","btn-primary",3,"disabled"],[1,"loading","loading-spinner","loading-md"],[1,"hidden","lg:block","ml-20","text-white","max-w-2xl","text-right"],[1,"text-5xl"],[1,"text-error"]],template:function(r,i){if(r&1&&(o(0,"div",0)(1,"p",1),a(2,"FletNix"),t(),o(3,"div",2)(4,"form",3),S("ngSubmit",function(){return i.onSubmit()}),o(5,"div",4)(6,"label",5)(7,"span",6),a(8,"Email"),t()(),g(9,"input",7),s(10,O,3,1,"ng-container",8),t(),o(11,"div",4)(12,"label",5)(13,"span",6),a(14,"Password"),t()(),g(15,"input",9),s(16,U,3,0,"ng-container",8),t(),o(17,"div",10)(18,"button",11),a(19,"Login "),s(20,W,1,0,"span",12),t()()()(),o(21,"div",13)(22,"p",14),a(23,"Confused what to watch? Jump right now by logging in and let me help you to choose your entertainment"),t()()()),r&2){let m,p;l(4),d("formGroup",i.loginForm),l(6),d("ngIf",((m=i.loginForm.get("email"))==null?null:m.touched)&&((m=i.loginForm.get("email"))==null?null:m.invalid)),l(6),d("ngIf",((p=i.loginForm.get("password"))==null?null:p.touched)&&((p=i.loginForm.get("password"))==null?null:p.invalid)),l(2),d("disabled",i.loading),l(2),h(i.loading?20:-1)}},dependencies:[D,P,N,M,q,B,j,G,y,k],styles:['.label-text[_ngcontent-%COMP%]{color:#fff}.image-background[_ngcontent-%COMP%]{background-image:url("./media/poster-MSZCSQWG.jpg");background-size:cover;background-position:center}.image-background[_ngcontent-%COMP%]:before{content:"";height:100svh;position:absolute;top:0;left:0;width:100svw;background:linear-gradient(90deg,#000 10%,#09097900 57%,#00d4ff00)}']})}return e})();export{Y as AuthComponent};
