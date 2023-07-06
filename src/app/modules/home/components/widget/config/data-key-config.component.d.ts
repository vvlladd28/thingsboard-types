import { ElementRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ComparisonResultType, DataKey, DataKeyConfigMode, Widget, widgetType } from '@shared/models/widget.models';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { EntityService } from '@core/http/entity.service';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Observable } from 'rxjs';
import { JsFuncComponent } from '@shared/components/js-func.component';
import { WidgetService } from '@core/http/widget.service';
import { Dashboard } from '@shared/models/dashboard.models';
import { IAliasController } from '@core/api/widget-api.models';
import { AggregationType } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class DataKeyConfigComponent extends PageComponent implements OnInit, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private utils;
    private entityService;
    private dialog;
    private translate;
    private widgetService;
    private fb;
    dataKeyConfigModes: typeof DataKeyConfigMode;
    dataKeyTypes: typeof DataKeyType;
    widgetTypes: typeof widgetType;
    aggregations: string[];
    aggregationTypes: typeof AggregationType;
    aggregationTypesTranslations: Map<AggregationType, string>;
    dataKeyAggregationTypeHintTranslations: Map<AggregationType, string>;
    comparisonResultTypes: typeof ComparisonResultType;
    comparisonResults: string[];
    comparisonResultTypeTranslations: Map<ComparisonResultType, string>;
    dataKeyConfigMode: DataKeyConfigMode;
    deviceId: string;
    entityAliasId: string;
    callbacks: DataKeysCallbacks;
    dashboard: Dashboard;
    aliasController: IAliasController;
    widget: Widget;
    widgetType: widgetType;
    dataKeySettingsSchema: any;
    dataKeySettingsDirective: string;
    showPostProcessing: boolean;
    hideDataKeyLabel: boolean;
    hideDataKeyColor: boolean;
    hideDataKeyUnits: boolean;
    hideDataKeyDecimals: boolean;
    keyInput: ElementRef;
    funcBodyEdit: JsFuncComponent;
    postFuncBodyEdit: JsFuncComponent;
    hasAdvanced: boolean;
    modelValue: DataKey;
    private propagateChange;
    dataKeyFormGroup: UntypedFormGroup;
    dataKeySettingsFormGroup: UntypedFormGroup;
    private dataKeySettingsData;
    private alarmKeys;
    private functionTypeKeys;
    filteredKeys: Observable<Array<string>>;
    private latestKeySearchResult;
    private fetchObservable$;
    keySearchText: string;
    functionScopeVariables: string[];
    constructor(store: Store<AppState>, utils: UtilsService, entityService: EntityService, dialog: MatDialog, translate: TranslateService, widgetService: WidgetService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKey): void;
    private updateValidators;
    private updateComparisonValues;
    private updateComparisonValidators;
    private updateModel;
    clearKey(): void;
    private fetchKeys;
    private getKeys;
    private createKeyFilter;
    validateOnSubmit(): void;
    validate(c: UntypedFormControl): {
        dataKey: {
            valid: boolean;
        };
        dataKeySettings?: undefined;
    } | {
        dataKeySettings: {
            valid: boolean;
        };
        dataKey?: undefined;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeyConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeyConfigComponent, "tb-data-key-config", never, { "dataKeyConfigMode": "dataKeyConfigMode"; "deviceId": "deviceId"; "entityAliasId": "entityAliasId"; "callbacks": "callbacks"; "dashboard": "dashboard"; "aliasController": "aliasController"; "widget": "widget"; "widgetType": "widgetType"; "dataKeySettingsSchema": "dataKeySettingsSchema"; "dataKeySettingsDirective": "dataKeySettingsDirective"; "showPostProcessing": "showPostProcessing"; "hideDataKeyLabel": "hideDataKeyLabel"; "hideDataKeyColor": "hideDataKeyColor"; "hideDataKeyUnits": "hideDataKeyUnits"; "hideDataKeyDecimals": "hideDataKeyDecimals"; }, {}, never, never, false, never>;
}
