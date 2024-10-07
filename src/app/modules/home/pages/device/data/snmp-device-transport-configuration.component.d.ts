import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SnmpAuthenticationProtocol, SnmpDeviceProtocolVersion, SnmpDeviceTransportConfiguration, SnmpPrivacyProtocol } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class SnmpDeviceTransportConfigurationComponent implements ControlValueAccessor, OnInit, Validator {
    private store;
    private fb;
    snmpDeviceTransportConfigurationFormGroup: UntypedFormGroup;
    snmpDeviceProtocolVersions: SnmpDeviceProtocolVersion[];
    snmpAuthenticationProtocols: SnmpAuthenticationProtocol[];
    snmpAuthenticationProtocolTranslation: Map<SnmpAuthenticationProtocol, string>;
    snmpPrivacyProtocols: SnmpPrivacyProtocol[];
    snmpPrivacyProtocolTranslation: Map<SnmpPrivacyProtocol, string>;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    validate(): ValidationErrors | null;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SnmpDeviceTransportConfiguration | null): void;
    isV3protocolVersion(): boolean;
    private updateDisabledFormValue;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnmpDeviceTransportConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnmpDeviceTransportConfigurationComponent, "tb-snmp-device-transport-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
