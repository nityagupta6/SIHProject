
	
var  selectLocation = document.getElementById('select-location');

var selectState= document.getElementById('select-state');
document.addEventListener('change', function(){
	console.log(selectState.value);
	removeOptions(selectLocation);
	objectList[selectState.value].forEach(createOption);
	
})

var objectList = {
	"goa":[
		"beach", "sunset", "cruise"
	],
	"uttarpradesh":[
		"agra", "mathura", "varanasi"
	],
	"uttrakhand":[
		"nanital", "haridwar", "hills"
	]
	
}


function createOption(item, index){
	console.log(item, index);
	
	if (index==0){
		selectLocation.options.add( new Option(item, item, true, true) );
	}else{
		selectLocation.options.add( new Option(item,item) );
	}
	
}




function removeOptions(obj) {
    while (obj.options.length) {
        obj.remove(0);
    }
}

