<form role="form" class="change-reputation-settings">
	<div class="row">
		<div class="col-sm-2 col-xs-12 settings-header">כללי</div>
		<div class="col-sm-10 col-xs-12">
			<div class="form-group">
				<label for="username">שם המשתמש</label>
				<input id="username" class="form-control" placeholder="הכנס שם משתמש">
			</div>
			<div class="form-group">
				<label for="reputation">מוניטין להוספה (ניתן להשתמש במינוס)</label>
				<input id="reputation" type="number" class="form-control" placeholder="הכנס מספר מוניטין">
			</div>
		</div>
		<div class="col-sm-2 col-xs-12 settings-header">התראה</div>
		<div class="col-sm-10 col-xs-12">
			<div class="checkbox">
				<label for="notification" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
					<input id="notification" type="checkbox" class="mdl-switch__input">
					<span class="mdl-switch__label"><strong>שלח התראה למשתמש</strong></span>
				</label>
			</div>
			<div class="form-group" style="display: none;">
				<label for="notificationFrom">שולח ההתראה</label>
				<select id="notificationFrom" class="form-control">
					<option value="currentuser">המשתמש הנוכחי</option>
					<option value="anonymous">אנונימי</option>
				</select>
			</div>
		</div>
	</div>
</form>
<br>
<br>
<div class="alert alert-info">
	<p>התוסף נבנה עבור <a href="https://mitmachim.top" target="_blank">מתמחים טופ</a> פורום הטכנולוגיה של הציבור החרדי</p>
</div>
<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
	<i class="fa fa-thumbs-up"></i>
</button>