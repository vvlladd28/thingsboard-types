import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { EventTableConfig } from './event-table-config';
import { EventService } from '@core/http/event.service';
import { DialogService } from '@core/services/dialog.service';
import { DebugEventType, EventBody, EventType } from '@shared/models/event.models';
import { Overlay } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class EventTableComponent implements OnInit, AfterViewInit, OnDestroy {
    private eventService;
    private dialogService;
    private translate;
    private datePipe;
    private dialog;
    private overlay;
    private viewContainerRef;
    private cd;
    tenantId: string;
    defaultEventType: EventType | DebugEventType;
    disabledEventTypes: Array<EventType | DebugEventType>;
    debugEventTypes: Array<DebugEventType>;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    get active(): boolean;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    private functionTestButtonLabelValue;
    get functionTestButtonLabel(): string;
    set functionTestButtonLabel(value: string);
    debugEventSelected: EventEmitter<EventBody>;
    entitiesTable: EntitiesTableComponent;
    eventTableConfig: EventTableConfig;
    private isEmptyData$;
    constructor(eventService: EventService, dialogService: DialogService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, overlay: Overlay, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventTableComponent, "tb-event-table", never, { "tenantId": { "alias": "tenantId"; "required": false; }; "defaultEventType": { "alias": "defaultEventType"; "required": false; }; "disabledEventTypes": { "alias": "disabledEventTypes"; "required": false; }; "debugEventTypes": { "alias": "debugEventTypes"; "required": false; }; "active": { "alias": "active"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; "functionTestButtonLabel": { "alias": "functionTestButtonLabel"; "required": false; }; }, { "debugEventSelected": "debugEventSelected"; }, never, never, false, never>;
}
