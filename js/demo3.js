var app=new Vue({
	el:'#div1',
	data:{
		message:'酒鬼花生',
		imgurl:'img/photo1.jpg',
		
		isActive2:false,

		theTotal:0,

		totalmoney:0,

		

		list:[
            {
            message:'酒鬼花生',
            imgurl:'img/photo1.jpg',
            number:1,
            price:19,
            

            },

           {
           	message:'小清新',
            imgurl:'img/photo2.jpg',
            number:1,
            price:29,
            
             },
                {
           	message:'三只',
            imgurl:'img/photo3.jpg',
            number:1,
            price:9,
            
             },
          
		]
		/*list:[]*/
	},
/*		mounted:function(){
			this.$nextTick(function () {
 this.getresoure();
})
},*/
	   
	methods:{
		addNumber:function(a){
			a.number++;
			this.jstotalmoney();
		},
		jianNumber:function(a){
			a.number--;
			if (a.number<1) {
				a.number=1;
				
			}
			this.jstotalmoney();
		},
		check:function(item){
           
			if(typeof item.isActive1 == 'undefined'){
				Vue.set(item,"isActive1",true);
				this.jstotalmoney();
				
			}else{
				item.isActive1=!item.isActive1;
				this.jstotalmoney();
			}
		},
		checkAll:function(flag){
			
			this.isActive2=flag;
			this.list.forEach(function(item,index){
				if(typeof item.isActive1 == 'undefined'){
				Vue.set(item,"isActive1",flag);
				item.isActive1=flag;
				
			      }else{
			      	item.isActive1=flag;
				
			      }
				
			});
			this.jstotalmoney();

		},
		jstotalmoney:function(){
			var _this=this;
			this.totalmoney=0;
			this.list.forEach(function(item){
				if (item.isActive1) {
					_this.totalmoney+=item.price*item.number
				}
              
			})
		},
		del:function(index){
           this.list.splice(index, 1);
           this.jstotalmoney();
		},
      /* getresoure:function(){
       	var _this=this;
       	
         axios.get('./info.json')
				  .then(function (res) {

				    console.log(res.data.result);
				    res.data.result.forEach(function(a){
				    	_this.list.push(a);
				    
				    })
				    
				    
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
       }*/

	},

	watch: {
    list: function (val, oldVal) {
      console.log('new: %s, old: %s', val[0].number, oldVal[0].number)
    },
  
  },
	
})