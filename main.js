
	
var  selectModel = document.getElementById('select-model');

var selectBrand = document.getElementById('select-brand');
document.addEventListener('change', function(){
	console.log(selectBrand.value);
	removeOptions(selectModel);
	objectList[selectBrand.value].forEach(createOption);
	
})

var objectList = {
	"goa":[
		"beach", "sunset", "cruise"
	],
	"uttarpradesh":[
		"agra", "varanasi", "stupa"
	],
	"uttrakhand":[
		"manali", "nainital", "rishikesh"
	]
	
}


function createOption(item, index){
	console.log(item, index);
	
	if (index==0){
		selectModel.options.add( new Option(item, item, true, true) );
	}else{
		selectModel.options.add( new Option(item,item) );
	}
	
}




function removeOptions(obj) {
    while (obj.options.length) {
        obj.remove(0);
    }
}



