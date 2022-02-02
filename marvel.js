#!/usr/bin/node
const request = require('request');
const URL = 'http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=7c3556b1e36253b82210c10ed823a3a0&hash=0f97fa3355058f7be37749119e9dc4f8';
let listEvent =[];
request(URL, function (error, response, body) {
    if (error){
	console.log(error);
    }
    else{
	const events = JSON.parse(body).data.results;
//	showEvent(events, 0);
	for (let x = 0; x < 3; x++){
	    let dicEvent = {};
	    let nameCreator = [];
	    dicEvent['id'] = events[x].id;
	    dicEvent['title'] = events[x].title;
	    dicEvent['description'] = events[x].description;
	    dicEvent['start'] = events[x].dates[0]['date'];
	    dicEvent['end'] = events[x].dates[1]['date'];
	    
	    for (let y = 0; y < events[x].creators.items.length; y++) {
		nameCreator.push(events[x].creators.items[y].name);
	    }
	    dicEvent['creators'] = nameCreator;
	    listEvent.push(dicEvent);
	}
	console.log(listEvent);
    }
});

/*async function showEvent(events, index){
    if (index >= 3 ){
	return;
    }
    console.log(events[index].id);
    index += 1;
    showEvent(events, index);
}
*/
