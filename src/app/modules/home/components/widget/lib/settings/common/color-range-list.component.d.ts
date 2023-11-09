import { OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class ColorRangeListComponent implements OnInit, ControlValueAccessor, OnDestroy {
    private fb;
    disabled: boolean;
    popover: TbPopoverComponent;
    panelTitle: string;
    modelValue: any;
    colorRangeListFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    private colorRangeControl;
    get rangeListFormArray(): UntypedFormArray;
    get rangeListFormGroups(): FormGroup[];
    trackByRange(index: number, rangeControl: AbstractControl): any;
    removeRange(index: number): void;
    addRange(): void;
    updateModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorRangeListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorRangeListComponent, "tb-color-range-list", never, { "disabled": "disabled"; "popover": "popover"; "panelTitle": "panelTitle"; }, {}, never, never, false, never>;
}
