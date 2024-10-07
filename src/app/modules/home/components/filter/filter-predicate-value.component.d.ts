import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { DynamicValueSourceType, EntityKeyValueType, FilterPredicateValue, StringOperation } from '@shared/models/query/query.models';
import * as i0 from "@angular/core";
export declare class FilterPredicateValueComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    private readonly inheritModeForSources;
    disabled: boolean;
    set allowUserDynamicSource(allow: boolean);
    private onlyUserDynamicSourceValue;
    set onlyUserDynamicSource(dynamicMode: boolean);
    get onlyUserDynamicSource(): boolean;
    set operation(operation: StringOperation);
    valueType: EntityKeyValueType;
    valueTypeEnum: typeof EntityKeyValueType;
    allow: boolean;
    dynamicValueSourceTypes: DynamicValueSourceType[];
    dynamicValueSourceTypeTranslations: Map<DynamicValueSourceType, string>;
    filterPredicateValueFormGroup: UntypedFormGroup;
    dynamicMode: boolean;
    inheritMode: boolean;
    hintText: string;
    private propagateChange;
    private propagateChangePending;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(predicateValue: FilterPredicateValue<string | number | boolean>): void;
    private updateModel;
    private updateShowInheritMode;
    private updateValidationDynamicMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterPredicateValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterPredicateValueComponent, "tb-filter-predicate-value", never, { "disabled": { "alias": "disabled"; "required": false; }; "allowUserDynamicSource": { "alias": "allowUserDynamicSource"; "required": false; }; "onlyUserDynamicSource": { "alias": "onlyUserDynamicSource"; "required": false; }; "operation": { "alias": "operation"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; }, {}, never, never, false, never>;
}
