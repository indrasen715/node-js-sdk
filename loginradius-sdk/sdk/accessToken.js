module.exports = function (config) {

    var module = {};
    var tokenEndpoint = "/api/v2";
    var accountTokenEndpoint = "/identity/v2/manage/account";
    var helper = require('./../helper.js');

    module.activeSession = {};

    /**The Access Token API is used to get the LoginRadius access token after authentication. It will be valid for the specific duration of time specified in the response.
     * @function
     * @public
     * @param token {String} A valid session token, which is added to redirect uri of your website after successfully logged in to provider
     */
    module.exchange = function (token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token?token=" + token + "&secret=" + config.apisecret+config.serverRegion
            }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }
	
	
    // Token Validity( GET )
    module.validity = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/Validate?key=" + config.apikey + "&secret=" + config.apisecret + "&access_token=" + access_token+config.serverRegion
            }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Token Invalidate( GET )
    module.invalidate = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/invalidate?key=" + config.apikey + "&secret=" + config.apisecret + "&access_token=" + access_token+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Active Session By TOKEN( GET )
    module.activeSession.getByToken = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/activeSession?key=" + config.apikey + "&secret=" + config.apisecret +"&token=" + access_token +config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    // Get Active Session By UID( GET )
    module.activeSession.getByUid = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/activeSession?key=" + config.apikey + "&secret=" + config.apisecret +"&accountId=" + uid +config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    
     //Refresh User profile
    module.getRefreshUserProfile = function(access_token, fields){
        helper.checkFields(fields, config);
        return new Promise(function(resolve,reject){
            config.request({uri: config.apidomain + tokenEndpoint + "/userprofile/refresh?access_token=" + access_token+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                }else{
                    resolve(data);
                }
            });
        });
    };    
    
    // Refresh Token( GET )
    module.refresh = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/refresh?access_token=" + access_token + "&secret=" + config.apisecret+config.serverRegion }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    
    // Refresh Access Token by Refresh Token( GET )
    module.refreshTokenByRefreshToken = function (refresh_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountTokenEndpoint +"/access_token/refresh?refresh_token=" + refresh_token+config.serverRegion }, 
            function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };
    
    // Revoke Refresh Token( GET )
    module.revokeRefreshToken = function (refresh_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountTokenEndpoint +"/access_token/refresh/revoke?refresh_token=" + refresh_token+config.serverRegion }, 
            function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };
    
   
    // Access Token via Facebook Token( GET )
    module.getFacebookToken = function (fb_access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/facebook?key=" + config.apikey + "&fb_access_token=" + fb_access_token +config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Access Token via Twitter Token( GET )
    module.getTwitterToken = function (tw_access_token, tw_token_secret, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/twitter?key=" + config.apikey + "&tw_access_token=" + tw_access_token +"&tw_token_secret=" + tw_token_secret+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    
    // Access Token via Vkontakte Token( GET )
    module.getVkontakteToken = function (vk_access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/vkontakte?key=" + config.apikey + "&vk_access_token=" + vk_access_token +config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    
    // Access Token via Google JWT( GET )
    module.getGoogleJwtToken = function (id_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/access_token/googlejwt?key=" + config.apikey + "&id_token=" + id_token +config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    
        
    //Get Trackable Status Stats
    module.getTrackableStatusStats = function (access_token, status, title, url, imageurl, caption, description, fields){
        helper.checkFields(fields, config);
        return new Promise(function(resolve, reject){
            config.request({uri: config.apidomain + tokenEndpoint +"/status/trackable/js?access_token=" + access_token + "&status=" + status + "&title=" + title + "&url=" + url + "&imageurl=" + imageurl + "&caption=" + caption + "&description=" + description+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                }else{
                    resolve(data);
                }
            });
        });
    };
        
    
    //Shorten URL
    module.shortURL = function(url, fields){
        helper.checkFields(fields, config);
        return new Promise(function(resolve, reject){
            config.request({uri: config.apidomain + "/sharing/v1/shorturl?key=" + config.apikey + "&url=" + url+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                }else{
                   resolve(data);
                }
            });
        });
    };
    
    
    //Trackable status fetching
    module.trackableStatusFetching = function(postid, fields){
        helper.checkFields(fields, config);
        return new Promise(function(resolve, reject){
          config.request({uri: config.apidomain + tokenEndpoint + "/status/trackable?secret=" + config.apisecret + "&postid=" +postid+config.serverRegion}, function (data, status) {
              if (helper.checkError(data, status)) {
                  reject(data);
              }
              else{
                  resolve(data);
              }
          });
        });
    };
    
    
    //Trackable Status Posting (POST)
    module.trackableStatusPosting = function(access_token, status, title, url, imageurl, caption, description, fields) {
        var formData = {
            "status": status,
            "title": title,
            "url": url,
            "imageurl": imageurl,
            "caption": caption,
            "description": description
        }
        helper.checkFields(fields, config);
        return new Promise(function(resolve, reject){
            config.request({
                method: "POST",
                uri: config.apidomain + tokenEndpoint + "/status/trackable?access_token=" + access_token+config.serverRegion,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    return module;
};