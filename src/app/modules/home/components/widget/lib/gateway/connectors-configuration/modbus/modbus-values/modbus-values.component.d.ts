import { ChangeDetectorRef, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ModbusRegisterType, ModbusValueKey, ModbusValuesState } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class ModbusValuesComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cdr;
    singleMode: boolean;
    hideNewFields: boolean;
    disabled: boolean;
    modbusRegisterTypes: ModbusRegisterType[];
    modbusValueKeys: ModbusValueKey[];
    ModbusValuesTranslationsMap: Map<ModbusRegisterType, string>;
    ModbusValueKey: typeof ModbusValueKey;
    valuesFormGroup: FormGroup;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: (value: ModbusValuesState) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(values: ModbusValuesState): void;
    validate(): ValidationErrors | null;
    setDisabledState(isDisabled: boolean): void;
    getValueGroup(valueKey: ModbusValueKey, register?: ModbusRegisterType): FormGroup;
    manageKeys($event: Event, matButton: MatButton, keysType: ModbusValueKey, register?: ModbusRegisterType): void;
    private initializeValuesFormGroup;
    private observeValuesChanges;
    private getSingleRegisterState;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusValuesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusValuesComponent, "tb-modbus-values", never, { "singleMode": { "alias": "singleMode"; "required": false; }; "hideNewFields": { "alias": "hideNewFields"; "required": false; }; }, {}, never, never, true, never>;
}
