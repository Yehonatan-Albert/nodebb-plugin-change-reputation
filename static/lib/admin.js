define('admin/plugins/change-reputation', ['autocomplete'], autocomplete => {
	return {
		init: () => {
			let uid = 0
			autocomplete.user($('#username'), (ev, ui) => {
				uid = ui.item.user.uid
			})
			$('#username').on('input change', () => {
				socket.emit('user.getUserByUsername', $('#username').val(), (err, data) => {
					uid = data ? data.uid : 0
				})
			})
			$('#notification').change(function () {
				$('#notificationFrom').parent().toggle(this.checked)
			})
			$('[value="currentuser"]').text(`המשתמש הנוכחי (${app.user.username})`)
			$('#save').click(() => {
				const reputation = parseInt($('#reputation').val())
				if (!uid) return app.alertError('לא נבחר משתמש')
				if (!reputation) return app.alertError('לא נבחר מספר מוניטין')
				socket.emit('admin.plugins.changeReputation', { uid: uid, reputation: reputation })
				app.alert({
					type: 'success',
					title: 'המוניטין נוסף בהצלחה',
					message: `נוספו ${reputation} מוניטין ל${$('#username').val()}`,
					timeout: 5000,
					closefn: () => {
						location.reload()
					},
					timeoutfn: () => {
						location.reload()
					},
					clickfn: () => {
						location.reload()
					}
				})
				if ($('#notification').is(':checked'))
					socket.emit('admin.plugins.sendNotification', { uid: uid, reputation: reputation, anonymous: $('#notificationFrom').val() == 'anonymous' })
			})
		}
	}
})