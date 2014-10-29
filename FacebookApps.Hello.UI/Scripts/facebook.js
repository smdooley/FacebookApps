(function () {

    $.fn.Me = function () {
        FB.api('/me', function (response) {
            if (response && !response.error_code) {
                console.log(JSON.stringify(response));
            } else {
                //alert('Error while posting.');
                console.log('/me - error');
            }
        });
    }

    $.fn.ShareDialog = function (href) {
        FB.ui({
            method: 'share',
            href: href,
        }, function (response) {
            if (response && !response.error_code) {
                console.log('ShareDialog - success');
            } else {
                console.log('ShareDialog - error');
            }
        });
    }

    $.fn.LoginDialog = function (scope) {
        FB.login(function (response) {
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                console.log(response.authResponse.accessToken);
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
            }
        }, { scope: scope });
    }

    $.fn.RequestDialog = function (msg) {
        FB.ui({
            method: 'apprequests',
            message: msg
        }, function (response) {
            if (response && !response.error_code) {
                console.log('RequestDialog - success');
            } else {
                console.log('RequestDialog - error');
            }
        });
    }

    $.fn.SendDialog = function (link) {
        FB.ui({
            method: 'send',
            link: link
        });
    }

    $.fn.PayDialog = function () {
        console.log('Not implemented');
    }

    $.fn.Logout = function () {
        FB.logout(function (response) {
            console.log('Logged out');
        });
    }

    $.fn.PostToFeed = function (msg) {
        FB.api('/me/feed', 'post', { message: msg }, function (response) {
            if (response && !response.error_code) {
                console.log('PostToFeed - success');
            } else {
                console.log('PostToFeed - error');
            }
        });
    }

})();