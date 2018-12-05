module.exports = function (config, helper) {

    var module = {};
    var accountEndpoint = "/identity/v2/manage/account/";

    var helper = require('./../helper.js');

    // Account Create Custom Object( POST )
    module.createByUid = function (uid, objectName, formData, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + accountEndpoint + uid + "/customobject?objectname=" + objectName+config.serverRegion,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Update Custom Object( PUT )
    module.update = function (uid, objectRecordId, objectName, customObjectData, updateType, fields) {
        updateType = helper.allowedReplaceType(updateType);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/customobject/" + objectRecordId + "?objectname=" + objectName + "&updateType=" + updateType+config.serverRegion,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(customObjectData)
            }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Custom Object By UID( GET )
    module.getByUID = function (uid, objectName, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "/customobject?objectname=" + objectName+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Custom Object by ObjectRecordId( GET )
    module.getByObjectRecordId = function (uid, objectRecordId, objectName, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "/customobject/" + objectRecordId + "?objectname=" + objectName+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Delete Custom Object by ObjectRecordId( DELETE )
    module.remove = function (uid, objectRecordId, objectName, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + accountEndpoint + uid + "/customobject/" + objectRecordId + "?objectname=" + objectName+config.serverRegion
            }, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    return module;
}