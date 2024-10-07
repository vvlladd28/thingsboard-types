import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DashboardInfo } from '@app/shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import * as i0 from "@angular/core";
export declare class DashboardStateAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    private dashboardService;
    private dashboardUtils;
    private fb;
    private dirty;
    private modelValue;
    private latestDashboardStates;
    private dashboardStatesFetchObservable$;
    private propagateChange;
    label: string;
    placeholder: string;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private dashboardIdValue;
    get dashboardId(): string;
    set dashboardId(value: string);
    dashboardStateInput: ElementRef;
    filteredStatesDashboard$: Observable<Array<string>>;
    searchText: string;
    selectDashboardStateFormGroup: import("@angular/forms").FormGroup<{
        dashboardStateId: import("@angular/forms").FormControl<any>;
    }>;
    constructor(store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string | null): void;
    private updateView;
    displayDashboardFn(dashboard?: DashboardInfo): string | undefined;
    onFocus(): void;
    clear(value?: string): void;
    private fetchDashboardStates;
    private getDashboardStatesById;
    private createFilterForDashboardState;
    private clearDashboardStateCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardStateAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardStateAutocompleteComponent, "tb-dashboard-state-autocomplete", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "dashboardId": { "alias": "dashboardId"; "required": false; }; }, {}, never, never, false, never>;
}
