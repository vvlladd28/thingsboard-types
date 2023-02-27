import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class RoundSwitchComponent extends PageComponent implements OnInit, OnDestroy {
    private utils;
    protected store: Store<AppState>;
    switchElementRef: ElementRef<HTMLElement>;
    switchContainerRef: ElementRef<HTMLElement>;
    onoffRef: ElementRef<HTMLElement>;
    textMeasureRef: ElementRef<HTMLElement>;
    switchTitleContainerRef: ElementRef<HTMLElement>;
    switchTitleRef: ElementRef<HTMLElement>;
    switchErrorContainerRef: ElementRef<HTMLElement>;
    switchErrorRef: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    showTitle: boolean;
    value: boolean;
    error: string;
    title: string;
    checkboxId: string;
    private isSimulated;
    private requestTimeout;
    private requestPersistent;
    private persistentPollingInterval;
    private retrieveValueMethod;
    private valueKey;
    private parseValueFunction;
    private convertValueFunction;
    private getValueMethod;
    private setValueMethod;
    private valueSubscription;
    private executingUpdateValue;
    private scheduledValue;
    private rpcValue;
    private switchElement;
    private switchContainer;
    private onoff;
    private textMeasure;
    private switchTitleContainer;
    private switchTitle;
    private switchErrorContainer;
    private switchError;
    private switchResize$;
    constructor(utils: UtilsService, store: Store<AppState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private init;
    private resize;
    private setFontSize;
    private measureTextWidth;
    private onError;
    private setValue;
    private onValue;
    private rpcRequestValue;
    private rpcUpdateValue;
    private subscribeForValue;
    private onDataUpdated;
    private onDataUpdateError;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoundSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RoundSwitchComponent, "tb-round-switch", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
