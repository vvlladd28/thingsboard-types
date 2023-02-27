import { InjectionToken, OnInit, ViewContainerRef } from '@angular/core';
import { AggregationType, HistoryWindowType, RealtimeWindowType, Timewindow, TimewindowType } from '@shared/models/time/time.models';
import { OverlayRef } from '@angular/cdk/overlay';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeService } from '@core/services/time.service';
import * as i0 from "@angular/core";
export declare const TIMEWINDOW_PANEL_DATA: InjectionToken<any>;
export interface TimewindowPanelData {
    historyOnly: boolean;
    quickIntervalOnly: boolean;
    timewindow: Timewindow;
    aggregation: boolean;
    timezone: boolean;
    isEdit: boolean;
}
export declare class TimewindowPanelComponent extends PageComponent implements OnInit {
    data: TimewindowPanelData;
    overlayRef: OverlayRef;
    protected store: Store<AppState>;
    fb: UntypedFormBuilder;
    private timeService;
    viewContainerRef: ViewContainerRef;
    historyOnly: boolean;
    quickIntervalOnly: boolean;
    aggregation: boolean;
    timezone: boolean;
    isEdit: boolean;
    timewindow: Timewindow;
    result: Timewindow;
    timewindowForm: UntypedFormGroup;
    historyTypes: typeof HistoryWindowType;
    realtimeTypes: typeof RealtimeWindowType;
    timewindowTypes: typeof TimewindowType;
    aggregationTypes: typeof AggregationType;
    aggregations: string[];
    aggregationTypesTranslations: Map<AggregationType, string>;
    constructor(data: TimewindowPanelData, overlayRef: OverlayRef, store: Store<AppState>, fb: UntypedFormBuilder, timeService: TimeService, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    private checkLimit;
    private updateValidators;
    update(): void;
    cancel(): void;
    minDatapointsLimit(): number;
    maxDatapointsLimit(): number;
    minRealtimeAggInterval(): number;
    maxRealtimeAggInterval(): number;
    currentRealtimeTimewindow(): number;
    minHistoryAggInterval(): number;
    maxHistoryAggInterval(): number;
    currentHistoryTimewindow(): any;
    onHideIntervalChanged(): void;
    onHideLastIntervalChanged(): void;
    onHideQuickIntervalChanged(): void;
    onHideAggregationChanged(): void;
    onHideAggIntervalChanged(): void;
    onHideTimezoneChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowPanelComponent, "tb-timewindow-panel", never, {}, {}, never, never, false, never>;
}
