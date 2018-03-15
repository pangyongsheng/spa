$(function(){

	new Vue({
		el:'#transfer',
		data:{
			step:1,
			info:{
				name:'',
				pws1:'',
				pws2:'',
				datetime:'',
				address:''
			},
			show2:'',
		},
		methods:{
			//提交1
			sub1:function(){
				if(!this.info.name){
					this.$dialog.toast({
	                    mes: '请输入用户名！',
	                    timeout: 1000
	                });
				}else if((!this.info.pws1) || (!this.info.pws2)){
					this.$dialog.toast({
	                    mes: '请输入密码！',
	                    timeout: 1000
	                });
				}else if(this.info.pws1　!= this.info.pws2){
					this.$dialog.toast({
	                    mes: '两次输入密码不一致',
	                    timeout: 1000
	                });
				}else{
	                this.step=2;
				}
			},
			sub2:function(){
				
			},
			//prev
			prev:function(){
				if(this.step>1){
					this.step--;
				}else{
					this.back();
				}
				
			},
			//next
			next:function(){

			}
		},
		created:function(){
			
		}
	})
})