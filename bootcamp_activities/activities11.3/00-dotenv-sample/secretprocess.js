function SecretProcess(keys){

	this.firstName = keys.firstName;
	this.valid = false;
	// Maybe an API call?
	if (keys.userName == 'userchris' && keys.password == 'password1'){
		this.valid = true;
	}

	return this.valid;
	
}

SecretProcess.prototype.secretMessage = function() {
	if (!this.valid){
		return false;
	}
	return "This is a Secret Message for " + this.firstName + "!";
};


module.exports = SecretProcess;