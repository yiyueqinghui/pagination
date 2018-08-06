var Random = Mock.Random;

//mock.js post方法可以传参，  get无法获取参数
Mock.mock('http://test.com/news','post',function(params){        
	console.log(params.body);
    var currentPage = (params.body).split('=')[1];
	var news = {};
	//页数信息
	news['currentPage'] = currentPage;
	news['total'] = 3;
	news['next'] = currentPage>=10?10:currentPage+1;
	news['prev'] = currentPage<=1?1:currentPage-1;
	
	//数据
	news['list'] = [];
	for(var i=0;i<=10;i++){
		var item = {};
		item['txt'] = Random.csentence()+""+currentPage;
		item['time'] = Random.date('yyyy-MM-dd');
		news['list'].push(item);
	}
	return news;
})



