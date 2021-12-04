const RouteHelpers = require.main.require('./src/routes/helpers')
const User = require.main.require('./src/user')
const Notifications = require.main.require('./src/notifications')
const SocketPlugins = require.main.require('./src/socket.io/admin/plugins')

SocketPlugins.changeReputation = (socket, data) => {
	User.incrementUserReputationBy(data.uid, data.reputation)
}

SocketPlugins.sendNotification = (socket, data) => {
	Notifications.create({
		nid: `change-reputation:uid:${data.uid}:reputation:${data.reputation}:date:${Date.now()}`,
		bodyShort: `נוספו לך ${data.reputation} מוניטין`,
		path: '/me',
		from: data.anonymous ? 0 : socket.uid
	}, (err, notification) => {
		Notifications.push(notification, [data.uid])
	})
}

module.exports = {
	init: async params => {
		RouteHelpers.setupAdminPageRoute(params.router, '/admin/plugins/change-reputation', params.middleware, [], (req, res) => {
			res.render('admin/plugins/change-reputation', {})
		})
	},
	addAdminNavigation: header => {
		header.plugins.push({
			route: '/plugins/change-reputation',
			icon: 'fa-tint',
			name: 'שינוי מוניטין'
		})
		return header
	}
}