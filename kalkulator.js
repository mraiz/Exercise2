function insert(num){
	document.form.textview.value = document.form.textview.value+num; 
}

function hasil(){
	var hasil = document.form.textview.value;
	if(hasil){
		document.form.textview.value = eval(hasil);
	}
}

function bersih(){
	document.form.textview.value = "";
}

function info(){
	alert("Terima kasih atas masukan anda!");
}