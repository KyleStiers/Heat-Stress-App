//function onDeviceReady() {	
$(document).ready(function(){	
	/*
	// all dialog buttons should close their parent dialog
	$(".ui-dialog button").live("click", function() {
		
		$("[data-role='dialog']").dialog("close");
		
	});
	
	//check network connection
	function checkConnection() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

       return(states[networkState]);
    }
	*/
	$('#man-temp-btn').click(function(){
		var $manTemp = '<select>';
		var $i = null;
		for($i=50;$i<120;$i++){
			$manTemp += '<option value="'+$i+'">'+$i+'</option>'; 
		}
		$manTemp += '</select>';
		
		
		//alert($manTemp);
		$('#temp-content').replaceWith($manTemp);
	});
	
	
	/*
	//if no data connection || button click manually input tempurature
	if((checkConnection() == 'No network connection') || $('#man-temp-btn').click()){
		
		var man-temp = '<select>';
		var i;
		for(i=50;i<120;i++){
			man-temp += '<option value="'+i+'">'+i+'F˚</option>'; 
		}
		man-temp += '</select>';
	
		$('#tempurature-content').replaceWith(man-temp);
		
		
	}
	
	

	*/
	
	
});