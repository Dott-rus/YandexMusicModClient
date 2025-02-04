"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
var Events;
(function (Events) {
    Events["WINDOW_MINIMIZE"] = "WINDOW_MINIMIZE";
    Events["WINDOW_MAXIMIZE"] = "WINDOW_MAXIMIZE";
    Events["WINDOW_CLOSE"] = "WINDOW_CLOSE";
    Events["INSTALL_UPDATE"] = "INSTALL_UPDATE";
    Events["UPDATE_AVAILABLE"] = "UPDATE_AVAILABLE";
    Events["MOD_UPDATE_AVAILABLE"] = "MOD_UPDATE_AVAILABLE";
    Events["INSTALL_MOD_UPDATE"] = "INSTALL_MOD_UPDATE";
    Events["PROGRESS_BAR_CHANGE"] = "PROGRESS_BAR_CHANGE";
    Events["APPLICATION_READY"] = "APPLICATION_READY";
    Events["GET_PASSPORT_LOGIN"] = "GET_PASSPORT_LOGIN";
    Events["REFRESH_APPLICATION_DATA"] = "REFRESH_APPLICATION_DATA";
    Events["PLAYER_STATE"] = "PLAYER_STATE";
    Events["YNISON_STATE"] = "YNISON_STATE";
    Events["PLAYER_ACTION"] = "PLAYER_ACTION";
    Events["OPEN_DEEPLINK"] = "OPEN_DEEPLINK";
    Events["FIRST_LAUNCH"] = "FIRST_LAUNCH";
    Events["APPLICATION_THEME"] = "APPLICATION_THEME";
    Events["APPLICATION_RESTART"] = "APPLICATION_RESTART";
    Events["PROBABILITY_BUCKET"] = "PROBABILITY_BUCKET";
    Events["LOAD_RELEASE_NOTES"] = "LOAD_RELEASE_NOTES";
    Events["REFRESH_TRACKS_AVAILABILITY"] = "REFRESH_TRACKS_AVAILABILITY";
    Events["REFRESH_REPOSITORY_META"] = "REFRESH_REPOSITORY_META";
    Events["TRACKS_AVAILABILITY_UPDATED"] = "TRACKS_AVAILABILITY_UPDATED";
    Events["REPOSITORY_META_UPDATED"] = "REPOSITORY_META_UPDATED";
    Events["DOWNLOAD_TRACK"] = "DOWNLOAD_TRACK";
})(Events || (exports.Events = Events = {}));
