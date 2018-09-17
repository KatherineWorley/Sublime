var katherine = {};
katherine.firstName = "Katherine";
katherine.lastName = "Worley";
katherine.status = "Pretty cool-io";

if(!!katherine.status.match(/cool/gi)) {
	katherine.score = 100;
}
else {
	katherine.score = 10;
}