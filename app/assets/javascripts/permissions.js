// ## Permissions Extension
// @fileOverview Extend the aura-core permissions
define(['aura_perms'], function (permissions) {

	permissions.extend({
		todos: {
			bootstrap: true,
			'new-event': true
		},
		calendar: {
			bootstrap: true
		},
		controls: {
			bootstrap: true
		}
	});

	return permissions;

});