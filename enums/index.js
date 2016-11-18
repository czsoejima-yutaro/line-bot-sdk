'use strict';

module.exports = class {
    static get EventType() {
        if (!this._EventType) this._EventType = require('./event-type');
        return this._EventType;
    }

    static get MessageType() {
        if (!this._MessageType) this._MessageType = require('./message-type');
        return this._MessageType;
    }

    static get TemplateType() {
        if (!this._TemplateType) this._TemplateType = require('./template-type');
        return this._TemplateType;
    }

    static get TemplateActionType() {
        if (!this._TemplateActionType) this._TemplateActionType = require('./template-action-type');
        return this._TemplateActionType;
    }

    static get ImagemapActionType() {
        if (!this._ImagemapActionType) this._ImagemapActionType = require('./imagemap-action-type');
        return this._ImagemapActionType;
    }

    static get SourceType() {
        if (!this._SourceType) this._SourceType = require('./source-type');
        return this._SourceType;
    }
}
