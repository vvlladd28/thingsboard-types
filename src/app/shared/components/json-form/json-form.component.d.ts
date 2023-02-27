import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { JsonFormProps } from './react/json-form.models';
import { DialogService } from '@app/core/services/dialog.service';
import { JsonFormComponentData } from './json-form-component.models';
import { GroupInfo } from '@shared/models/widget.models';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class JsonFormComponent implements OnInit, ControlValueAccessor, Validator, OnChanges, OnDestroy {
    elementRef: ElementRef;
    private translate;
    private dialogs;
    private popoverService;
    private renderer;
    private viewContainerRef;
    protected store: Store<AppState>;
    private cd;
    reactRootElmRef: ElementRef<HTMLElement>;
    reactFullscreenElmRef: ElementRef<HTMLElement>;
    private readonlyValue;
    get readonly(): boolean;
    set required(value: boolean);
    formProps: JsonFormProps;
    data: JsonFormComponentData;
    model: any;
    schema: any;
    form: any;
    groupInfoes: GroupInfo[];
    isModelValid: boolean;
    isFullscreen: boolean;
    fullscreenFinishFn: (el: Element) => void;
    private propagateChange;
    private propagateChangePending;
    private writingValue;
    private updateViewPending;
    constructor(elementRef: ElementRef, translate: TranslateService, dialogs: DialogService, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        modelValid: boolean;
    };
    writeValue(data: JsonFormComponentData): void;
    updateView(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onModelChange;
    private onColorClick;
    private onIconClick;
    private onToggleFullscreen;
    onFullscreenChanged(fullscreen: boolean): void;
    private onHelpClick;
    private updateAndRender;
    private renderReactSchemaForm;
    private destroyReactSchemaForm;
    private validateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonFormComponent, "tb-json-form", never, { "required": "required"; }, {}, never, never, false, never>;
}
