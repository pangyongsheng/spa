$(function(){

	new Vue({
		el:'#list',
		data:{
			list:[
				{label: '推荐'},
                {label: '热点'},
                {label: '体育'},
                {label: '社会'},
                {label: '娱乐'},
                {label: '科技'},
                {label: '军事'},
                {label: '经济'},
                {label: '科学'},
                {label: '时事'}
			]
		},
		methods:{
			
		},
		created:function(){
			// setInterval(()=>{
			// 	console.log(this.selected);
			// },2000)
		}
	})
})