import { DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartThreshold, TimeSeriesChartYAxisId } from '@home/components/widget/lib/chart/time-series-chart.models';
import { WidgetConfig } from '@shared/models/widget.models';
import { ChartShape } from '@home/components/widget/lib/chart/chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartThresholdSettingsPanelComponent implements OnInit {
    private fb;
    private destroyRef;
    chartLineTypes: import("@home/components/widget/lib/chart/chart.models").ChartLineType[];
    chartLineTypeTranslations: Map<import("@home/components/widget/lib/chart/chart.models").ChartLineType, string>;
    chartShapes: ChartShape[];
    chartShapeTranslations: Map<ChartShape, string>;
    timeSeriesThresholdLabelPositions: import("@home/components/widget/lib/chart/time-series-chart.models").ThresholdLabelPosition[];
    timeSeriesThresholdLabelPositionTranslations: Map<import("@home/components/widget/lib/chart/time-series-chart.models").ThresholdLabelPosition, string>;
    labelPreviewFn: any;
    thresholdSettings: Partial<TimeSeriesChartThreshold>;
    widgetConfig: WidgetConfig;
    yAxisIds: TimeSeriesChartYAxisId[];
    popover: TbPopoverComponent<TimeSeriesChartThresholdSettingsPanelComponent>;
    hideYAxis: boolean;
    panelTitle: string;
    thresholdSettingsApplied: EventEmitter<Partial<TimeSeriesChartThreshold>>;
    thresholdSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    cancel(): void;
    applyThresholdSettings(): void;
    private updateValidators;
    private _labelPreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartThresholdSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartThresholdSettingsPanelComponent, "tb-time-series-chart-threshold-settings-panel", never, { "thresholdSettings": { "alias": "thresholdSettings"; "required": false; }; "widgetConfig": { "alias": "widgetConfig"; "required": false; }; "yAxisIds": { "alias": "yAxisIds"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; "hideYAxis": { "alias": "hideYAxis"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; }, { "thresholdSettingsApplied": "thresholdSettingsApplied"; }, never, never, false, never>;
}
