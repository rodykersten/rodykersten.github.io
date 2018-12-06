function makeEmail(user, domain, tld) {
	return (user + '@' + domain + '.' + tld);
}

function printEmail(user, domain, tld) {
	document.write(user);
	document.write("@");
	document.write(domain);
	document.write(".");
	document.write(tld);
}

function printEmailLink(user, domain, tld) {
	document.write("<a href=\"mailto: ");
	printEmail(user, domain, tld);
	document.write("\">");
	printEmail(user, domain, tld);
	document.write("</a>");
}
